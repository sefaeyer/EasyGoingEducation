import * as Yup from "yup";

export const StudentInfoSchema = Yup.object({
	absentee: Yup.number()
		.typeError("Invalid absentee")
		.min(0, "Invalid absentee")
		.required("Absentee is required"),
	educationTermId: Yup.number()
		.typeError("Invalid term")
		.min(0, "Invalid term")
		.required("Term is required"),
	studentId: Yup.number()
		.typeError("Invalid student")
		.min(0, "Invalid student")
		.required("Student is required"),
	lessonId: Yup.number()
		.typeError("Invalid lesson")
		.min(0, "Invalid lesson")
		.required("Lesson is required"),
	finalExam: Yup.number()
		.typeError("Invalid final exam")
		.min(0, "Invalid final exam")
		.max(100, "Invalid final exam")
		.required("Final exam is required"),
	midtermExam: Yup.number()
		.typeError("Invalid midterm exam")
		.min(0, "Invalid midterm exam")
		.max(100, "Invalid midterm exam")
		.required("Midterm exam is required"),
	infoNote: Yup.string().min(10, "Must be at least 10 characters").required("Note is required"),
});