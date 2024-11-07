"use server";

import {
	response,
	transformFormDataToJSON,
	transformYupErrors,
	YupValidationError,
} from "@/helpers/form-validation";
import {
	ChooseLessonSchema,
	StudentSchema,
} from "@/helpers/schemas/student-schema";
import {
	assignProgramToStudent,
	createStudent,
	deleteStudent,
	updateStudent,
} from "@/services/student-service";

import { revalidatePath } from "next/cache";

export const createStudentAction = async (prevState, formData) => {
	try {
		const fields = transformFormDataToJSON(formData);

		StudentSchema.validateSync(fields, { abortEarly: false });

		const res = await createStudent(fields);
		const data = await res.json();

		if (!res.ok) {
			return response(false, data?.message, data?.validations);
		}

		revalidatePath("/dashboard/student");

		return response(true, data?.message, null);
	} catch (err) {
		if (err instanceof YupValidationError) {
			return transformYupErrors(err.inner);
		}

		throw err;
	}
};

export const updateStudentAction = async (prevState, formData) => {
	if (!formData.get("id"))
		throw new Error("Id is missing in update teacher action!");

	try {
		const fields = transformFormDataToJSON(formData);
		StudentSchema.validateSync(fields, { abortEarly: false });

		const res = await updateStudent(fields);
		const data = await res.json();

		if (!res.ok) {
			return response(false, data?.message, data?.validations);
		}

		revalidatePath("/dashboard/student");

		return response(true, data?.message, null);
	} catch (err) {
		if (err instanceof YupValidationError) {
			return transformYupErrors(err.inner);
		}

		throw err;
	}
};

export const assignProgramToStudentAction = async (prevState, formData) => {
	try {
		const fields = transformFormDataToJSON(formData);

		ChooseLessonSchema.validateSync(fields, { abortEarly: false });

		const payload = {
			...fields,
			lessonProgramId: JSON.parse(fields.lessonProgramId),
		};

		const res = await assignProgramToStudent(payload);
		const data = await res.json();

		if (!res.ok) {
			return response(false, data?.message, data?.validations);
		}

		revalidatePath("/dashboard/choose-lesson");

		return response(true, data?.message, null);
	} catch (err) {
		if (err instanceof YupValidationError) {
			return transformYupErrors(err.inner);
		}

		throw err;
	}
};

export const deleteStudentAction = async (id) => {
	if (!id) throw new Error("Id is missing!");

	try {
		const res = await deleteStudent(id);
		const data = await res.json();

		if (!res.ok) {
			return response(false, data?.message, null);
		}

		revalidatePath("/dashboard/student");

		return response(true, data?.message, null);
	} catch (err) {
		return response(false, err.message, null);
	}
};