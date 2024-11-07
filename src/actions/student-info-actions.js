"use server";

import {
	response,
	transformFormDataToJSON,
	transformYupErrors,
	YupValidationError,
} from "@/helpers/form-validation";
import { StudentInfoSchema } from "@/helpers/schemas/student-info-schema";
import {
	createStudentInfo,
	deleteStudentInfo,
	updateStudentInfo,
} from "@/services/student-info-service";
import { revalidatePath } from "next/cache";

export const createStudentInfoAction = async (prevState, formData) => {
	try {
		const fields = transformFormDataToJSON(formData);

		StudentInfoSchema.validateSync(fields, { abortEarly: false });

		const res = await createStudentInfo(fields);
		const data = await res.json();

		if (!res.ok) {
			return response(false, data?.message, data?.validations);
		}

		revalidatePath("/dashboard/student-info");

		return response(true, data?.message, null);
	} catch (err) {
		if (err instanceof YupValidationError) {
			return transformYupErrors(err.inner);
		}

		throw err;
	}
};

export const updateStudentInfoAction = async (prevState, formData) => {
	if (!formData.get("id"))
		throw new Error("Id is missing in update teacher action!");

	try {
		const fields = transformFormDataToJSON(formData);
		StudentInfoSchema.validateSync(fields, { abortEarly: false });

		const res = await updateStudentInfo(fields);
		const data = await res.json();

		if (!res.ok) {
			return response(false, data?.message, data?.validations);
		}

		revalidatePath("/dashboard/student-info");

		return response(true, data?.message, null);
	} catch (err) {
		if (err instanceof YupValidationError) {
			return transformYupErrors(err.inner);
		}

		throw err;
	}
};
export const deleteStudentInfoAction = async (id) => {
	if (!id) throw new Error("Id is missing!");

	try {
		const res = await deleteStudentInfo(id);
		const data = await res.json();

		if (!res.ok) {
			return response(false, data?.message, null);
		}

		revalidatePath("/dashboard/student-info");

		return response(true, data?.message, null);
	} catch (err) {
		return response(false, err.message, null);
	}
};