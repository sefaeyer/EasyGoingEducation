"use client";
import { createStudentInfoAction } from "@/actions/student-info-actions";
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

export const StudentInfoCreateForm = ({ lessons, students, terms }) => {
	const [state, dispatch] = useFormState(
		createStudentInfoAction,
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
				<SelectInput
					name="studentId"
					className="mb-3"
					label="Student"
					errorMessage={state?.errors?.studentId}
					options={students}
					optionLabel="label"
					optionValue="value"
				/>

				<SelectInput
					name="lessonId"
					className="mb-3"
					label="Lesson"
					errorMessage={state?.errors?.lessonId}
					options={lessons}
					optionLabel="lessonName"
					optionValue="lessonId"
				/>

				<SelectInput
					name="educationTermId"
					className="mb-3"
					label="Term"
					errorMessage={state?.errors?.educationTermId}
					options={terms}
					optionLabel="label"
					optionValue="value"
				/>

				<TextInput
					name="absentee"
					type="number"
					className="mb-3"
					label="Absentee"
					errorMessage={state?.errors?.absentee}
				/>

				<TextInput
					name="midtermExam"
					type="number"
					className="mb-3"
					label="Midterm"
					errorMessage={state?.errors?.midtermExam}
				/>

				<TextInput
					name="finalExam"
					type="number"
					className="mb-3"
					label="Final"
					errorMessage={state?.errors?.finalExam}
				/>

				<TextInput
					name="infoNote"
					className="mb-3"
					label="Info"
					errorMessage={state?.errors?.infoNote}
				/>

				<BackButton className="me-2" />
				<SubmitButton title="Create" />
			</form>
		</FormContainer>
	);
};