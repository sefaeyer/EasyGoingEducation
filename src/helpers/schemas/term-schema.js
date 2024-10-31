import * as Yup from "yup";
import { getTermValues } from "../misc";

const terms = getTermValues();

export const TermSchema = Yup.object({
	startDate: Yup.date()
		.typeError("Invalid date")
		.min(new Date(), "Invalid start date")
		.required("Start date is required"),
	endDate: Yup.date()
		.typeError("Invalid date")
		.min(Yup.ref("startDate"), "Invalid end date")
		.required("End date is required"),
	lastRegistrationDate: Yup.date()
		.typeError("Invalid date")
		.max(Yup.ref("startDate"), "Invalid last registration date")
		.required("Last registration date is required"),
	term: Yup.string()
		.oneOf(terms, "Invalid term")
		.required("Term is required"),
});