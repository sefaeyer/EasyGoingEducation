"use server";

import {
	response,
	transformFormDataToJSON,
	transformYupErrors,
	YupValidationError,
} from "@/helpers/form-validation";
import { AdminSchema } from "@/helpers/schemas/admin-schema";
import { createAdmin, deleteAdmin } from "@/services/admin-service";
import { revalidatePath } from "next/cache";

export const createAdminAction = async (prevState, formData) => {
	try {
		const fields = transformFormDataToJSON(formData);
		AdminSchema.validateSync(fields, { abortEarly: false });

		const res = await createAdmin(fields);
		const data = await res.json();

		if (!res.ok) {
			return response(false, "", data?.validations);
		}

		revalidatePath("/dashboard/admin");

		return response(true, data?.message, null);
	} catch (err) {
		if (err instanceof YupValidationError) {
			return transformYupErrors(err.inner);
		}

		throw err;
	}
};

export const deleteAdminAction = async (id) => {
	if (!id) throw new Error("Id is missing!");

	try {
		const res = await deleteAdmin(id);
		const data = await res.text();

		if (!res.ok) {
			return response(false, data, null);
		}

		revalidatePath("/dashboard/admin");

		return response(true, data, null);
	} catch (err) {
		return response(false, err.message, null);
	}
};