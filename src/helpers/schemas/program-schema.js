import * as Yup from "yup";
import { getDayValues } from "../misc";
import { isLater } from "../date-time";

const days = getDayValues();

export const ProgramSchema = Yup.object({
	lessonIdList: Yup.string()
		.test("isArr", "Invalid lesson type", (val) => {
			// "[12,56,4,76]" buraya bu sekilde string gelecek
			const arr = JSON.parse(val);
			return Array.isArray(arr) && arr.length > 0;
		})
		.required("Lessons is required"),
	day: Yup.string().oneOf(days, "Invalid day").required("Day is required"),
	educationTermId: Yup.number()
		.typeError("Invalid term")
		.required("Term is required"),
	startTime: Yup.string().required("Start time is required"),
	stopTime: Yup.string()
		.test(
			"isAfter",
			"End time must be after start time",
			(val, context) => {
				return isLater(context.parent.startTime, val);
			}
		)
		.required("Stop time is required"),
});