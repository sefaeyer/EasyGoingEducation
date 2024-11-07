export { ValidationError as YupValidationError } from "yup";

export const transformFormDataToJSON = (formData) =>
	Object.fromEntries(formData.entries());

export const response = (ok, message, errors) => {
	return {
		ok,
		message,
		errors,
		responseId: Math.random()
	};
};

export const initialResponse = response(false, "", null, 0);

export const transformYupErrors = (errors) => {
	const errObject = {};
	errors.forEach((error) => (errObject[error.path] = error.message));

	return response(false, "", errObject);
};

export const isStringArray = (str) => {
	try {
		const arr = JSON.parse(str);
		return Array.isArray(arr) && arr.length > 0;
	} catch {
		return false;
	}
};