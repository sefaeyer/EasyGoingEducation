"use server";

import {
	response,
	transformFormDataToJSON,
	transformYupErrors,
	YupValidationError,
} from "@/helpers/form-validation";
import { ProgramSchema } from "@/helpers/schemas/program-schema";
import { createProgram, deleteProgram } from "@/services/program-service";
import { revalidatePath } from "next/cache";

export const createProgramAction = async (prevState, formData) => {

	try {
		const fields = transformFormDataToJSON(formData);
		
		ProgramSchema.validateSync(fields, { abortEarly: false });

		const payload = {
			...fields,
			lessonIdList: JSON.parse(fields.lessonIdList),
		}


		const res = await createProgram(payload);
		const data = await res.json();

		if (!res.ok) {
			return response(false, data?.message, data?.validations);
		}

		revalidatePath("/dashboard/program");

		return response(true, data?.message, null);
	} catch (err) {
		if (err instanceof YupValidationError) {
			return transformYupErrors(err.inner);
		}

		throw err;
	}
};

export const deleteProgramAction = async (id) => {
	if (!id) throw new Error("Id is missing!");

	try {
		const res = await deleteProgram(id);
		const data = await res.json();

		if (!res.ok) {
			return response(false, data?.message, null);
		}

		revalidatePath("/dashboard/program");

		return response(true, data?.message, null);
	} catch (err) {
		return response(false, err.message, null);
	}
};