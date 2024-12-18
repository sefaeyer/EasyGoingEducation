import {
	ASSISTANT_CREATE_API,
	ASSISTANT_DELETE_API,
	ASSISTANT_GET_ALL_BY_PAGE_API,
	ASSISTANT_GET_BY_ID_API,
	ASSISTANT_UPDATE_API,
} from "@/helpers/api-routes";
import { getAuthHeader } from "@/helpers/auth-helper";

export const getAllAssistantsByPage = async (
	page = 0,
	size = 10,
	sort = "name",
	type = "asc"
) => {
	const qs = `page=${page}&size=${size}&sort=${sort}&type=${type}`;

	return fetch(`${ASSISTANT_GET_ALL_BY_PAGE_API}?${qs}`, {
		headers: await getAuthHeader(),
	});
};

export const getAssistantById = async (id) => {
	return fetch(`${ASSISTANT_GET_BY_ID_API}/${id}`, {
		headers: await getAuthHeader(),
	});
};

export const createAssistant = async (payload) => {
	return fetch(`${ASSISTANT_CREATE_API}`, {
		method: "POST",
		headers: await getAuthHeader(),
		body: JSON.stringify(payload),
	});
};

export const updateAssistant = async (payload) => {
	return fetch(`${ASSISTANT_UPDATE_API}/${payload.id}`, {
		method: "PUT",
		headers: await getAuthHeader(),
		body: JSON.stringify(payload),
	});
};

export const deleteAssistant = async (id) => {
	return fetch(`${ASSISTANT_DELETE_API}/${id}`, {
		method: "DELETE",
		headers: await getAuthHeader(),
	});
};