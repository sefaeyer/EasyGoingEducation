"use server";

import {
	response,
	transformFormDataToJSON,
	transformYupErrors,
	YupValidationError,
} from "@/helpers/form-validation";
import { AssistantSchema } from "@/helpers/schemas/assistant-schema";
import {
	createAssistant,
	deleteAssistant,
	updateAssistant,
} from "@/services/assistant-service";
import { revalidatePath } from "next/cache";

export const createAssistantAction = async (prevState, formData) => {
	try {
		const fields = transformFormDataToJSON(formData);
		AssistantSchema.validateSync(fields, { abortEarly: false });

		const res = await createAssistant(fields);
		const data = await res.json();

		if (!res.ok) {
			return response(false, data?.message, data?.validations);
		}

		revalidatePath("/dashboard/assistant-manager");

		return response(true, data?.message, null);
	} catch (err) {
		if (err instanceof YupValidationError) {
			return transformYupErrors(err.inner);
		}

		throw err;
	}
};

export const updateAssistantAction = async (prevState, formData) => {
	if (!formData.get("id"))
		throw new Error("Id is missing in update assistant action!");

	try {
		const fields = transformFormDataToJSON(formData);
		AssistantSchema.validateSync(fields, { abortEarly: false });

		const res = await updateAssistant(fields);
		const data = await res.json();

		if (!res.ok) {
			return response(false, data?.message, data?.validations);
		}

		revalidatePath("/dashboard/assistant-manager");

		return response(true, data?.message, null);
	} catch (err) {
		if (err instanceof YupValidationError) {
			return transformYupErrors(err.inner);
		}

		throw err;
	}
};

export const deleteAssistantAction = async (id) => {
	if (!id) throw new Error("Id is missing!");

	try {
		const res = await deleteAssistant(id);
		const data = await res.json();

		if (!res.ok) {
			return response(false, data?.message, null);
		}

		revalidatePath("/dashboard/assistant-manager");

		return response(true, data?.message, null);
	} catch (err) {
		return response(false, err.message, null);
	}
};