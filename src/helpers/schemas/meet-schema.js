import * as Yup from "yup";
import { isLater, isTimeFormatValid } from "../date-time";
import { isStringArray } from "../form-validation";

export const MeetSchema = Yup.object({
	date: Yup.date()
		.typeError("Invalid date")
		.min(new Date(), "Invalid date")
		.required("Date is required"),
	description: Yup.string()
		.min(2, "Must be at least 2 characters")
		.max(16, "Must not exceed 16 characters")
		.required("Description is required"),
	startTime: Yup.string()
		.test("isTime", "Invalid time", (val) => {
			return isTimeFormatValid(val);
		})
		.required("Start time is required"),
	stopTime: Yup.string()
		.test("isTimeValid", "Invalid time", (val) => {
			return isTimeFormatValid(val);
		})
		.test(
			"isTimeLater",
			"End time must be later than start time",
			(val, context) => {
				return isLater(context.parent.startTime, val);
			}
		)
		.required("End time is required"),
	studentIds: Yup.string()
		.test("isArray", "Invalid student type", (val) => {
			return isStringArray(val);
		})
		.required("Term is required"),
});