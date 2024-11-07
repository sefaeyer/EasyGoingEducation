"use client";
import { updateStudentInfoAction } from "@/actions/student-info-actions";
import {
	FormContainer,
	SelectInput,
	SubmitButton,
	TextInput,
	BackButton,
} from "@/components/common/form-fields";
import { initialResponse } from "@/helpers/form-validation";
import { swAlert } from "@/helpers/sweetalert";
import { useRouter } from "next/navigation";
import React from "react";
import { useFormState } from "react-dom";

export const StudentInfoEditForm = ({
	studentInfo,
	lessons,
	students,
	terms,
}) => {
	const [state, dispatch] = useFormState(
		updateStudentInfoAction,
		initialResponse
	);
	const router = useRouter();

	if (state.message) {
		swAlert(state.message, state.ok ? "success" : "error");
		if (state.ok) router.push("/dashboard/student-info");
	}

	return (
		<FormContainer>
			<form action={dispatch}>
				<input type="hidden" name="id" value={studentInfo?.id} />
				<SelectInput
					name="studentId"
					className="mb-3"
					label="Student"
					errorMessage={state?.errors?.studentId}
					options={students}
					optionLabel="label"
					optionValue="value"
					defaultValue={studentInfo?.studentResponse?.userId}
				/>

				<SelectInput
					name="lessonId"
					className="mb-3"
					label="Lesson"
					errorMessage={state?.errors?.lessonId}
					options={lessons}
					optionLabel="lessonName"
					optionValue="lessonId"
					defaultValue={studentInfo?.lessonId}
				/>

				<SelectInput
					name="educationTermId"
					className="mb-3"
					label="Term"
					errorMessage={state?.errors?.educationTermId}
					options={terms}
					optionLabel="label"
					optionValue="value"
					defaultValue={studentInfo?.educationTermId}
				/>

				<TextInput
					name="absentee"
					type="number"
					className="mb-3"
					label="Absentee"
					errorMessage={state?.errors?.absentee}
					defaultValue={studentInfo?.absentee}
				/>

				<TextInput
					name="midtermExam"
					type="number"
					className="mb-3"
					label="Midterm"
					errorMessage={state?.errors?.midtermExam}
					defaultValue={studentInfo?.midtermExam}
				/>

				<TextInput
					name="finalExam"
					type="number"
					className="mb-3"
					label="Final"
					errorMessage={state?.errors?.finalExam}
					defaultValue={studentInfo?.finalExam}
				/>

				<TextInput
					name="infoNote"
					className="mb-3"
					label="Info"
					errorMessage={state?.errors?.infoNote}
					defaultValue={studentInfo?.infoNote}
				/>

				<BackButton className="me-2" />
				<SubmitButton title="Update" icon="save" />
			</form>
		</FormContainer>
	);
};