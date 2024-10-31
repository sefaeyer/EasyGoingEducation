"use server";

import {
	response,
	transformFormDataToJSON,
	transformYupErrors,
	YupValidationError,
} from "@/helpers/form-validation";
import { LessonSchema } from "@/helpers/schemas/lesson-schema";
import { createLesson, deleteLesson } from "@/services/lesson-service";
import { revalidatePath } from "next/cache";

export const createLessonAction = async (prevState, formData) => {
	try {
		const fields = transformFormDataToJSON(formData);
		LessonSchema.validateSync(fields, { abortEarly: false });

		const res = await createLesson(fields);
		const data = await res.json();

		if (!res.ok) {
			return response(false, data?.message, data?.validations);
		}

		revalidatePath("/dashboard/lesson");

		return response(true, data?.message, null);
	} catch (err) {
		if (err instanceof YupValidationError) {
			return transformYupErrors(err.inner);
		}

		throw err;
	}
};

export const deleteLessonAction = async (id) => {
	if (!id) throw new Error("Id is missing!");

	try {
		const res = await deleteLesson(id);
		const data = await res.json();

		if (!res.ok) {
			return response(false, data?.message, null);
		}

		revalidatePath("/dashboard/lesson");

		return response(true, data?.message, null);
	} catch (err) {
		return response(false, err.message, null);
	}
};