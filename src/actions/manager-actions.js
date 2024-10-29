"use server";

import {
	response,
	transformFormDataToJSON,
	transformYupErrors,
	YupValidationError,
} from "@/helpers/form-validation";
import { ManagerSchema } from "@/helpers/schemas/manager-schema";
import { createManager, deleteManager, updateManager } from "@/services/manager-service";
import { revalidatePath } from "next/cache";

export const createManagerAction = async (prevState, formData) => {
	try {
		const fields = transformFormDataToJSON(formData);
		ManagerSchema.validateSync(fields, { abortEarly: false });

		const res = await createManager(fields);
		const data = await res.json();

		if (!res.ok) {
			return response(false, data?.message, data?.validations);
		}

		revalidatePath("/dashboard/manager");

		return response(true, data?.message, null);
	} catch (err) {
		if (err instanceof YupValidationError) {
			return transformYupErrors(err.inner);
		}

		throw err;
	}
};

export const updateManagerAction = async (prevState, formData) => {
	try {
		const fields = transformFormDataToJSON(formData);
		ManagerSchema.validateSync(fields, { abortEarly: false });

		const res = await updateManager(fields);
		const data = await res.json();

		if (!res.ok) {
			return response(false, data?.message, data?.validations);
		}

		revalidatePath("/dashboard/manager");

		return response(true, data?.message, null);
	} catch (err) {
		if (err instanceof YupValidationError) {
			return transformYupErrors(err.inner);
		}

		throw err;
	}
};

export const deleteManagerAction = async (id) => {
	if (!id) throw new Error("Id is missing!");

	try {
		const res = await deleteManager(id);
		const data = await res.json();

		if (!res.ok) {
			return response(false, data?.message, null);
		}

		revalidatePath("/dashboard/manager");

		return response(true, data?.message, null);
	} catch (err) {
		return response(false, err.message, null);
	}
};