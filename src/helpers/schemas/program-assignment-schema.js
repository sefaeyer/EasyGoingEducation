import * as Yup from "yup";
import { isStringArray } from "../form-validation";

export const ProgramAssignmentSchema = Yup.object({
	lessonProgramId: Yup.string()
		.test("isArr", "Invalid lesson type", (val) => isStringArray(val))
		.required("Lessons is required"),
	teacherId: Yup.string().required("Teacher is required"),
});