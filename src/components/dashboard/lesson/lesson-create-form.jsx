"use client";
import { createLessonAction } from "@/actions/lesson-actions";
import {
	CheckInput,
	FormContainer,
	SubmitButton,
	TextInput,
} from "@/components/common/form-fields";
import { BackButton } from "@/components/common/form-fields/back-button";
import { initialResponse } from "@/helpers/form-validation";
import { swAlert } from "@/helpers/sweetalert";
import { useRouter } from "next/navigation";
import React from "react";
import { useFormState } from "react-dom";

export const LessonCreateForm = () => {
	const [state, dispatch] = useFormState(createLessonAction, initialResponse);
	const router = useRouter();

	if (state.message) {
		swAlert(state.message, state.ok ? "success" : "error");
		if (state.ok) router.push("/dashboard/lesson");
	}

	return (
		<FormContainer>
			<form action={dispatch}>
				<TextInput
					name="lessonName"
					className="mb-3"
					label="Lesson name"
					errorMessage={state?.errors?.lessonName}
				/>

				<TextInput
					name="creditScore"
					type="number"
					className="mb-3"
					label="Credit"
					errorMessage={state?.errors?.creditScore}
				/>

				<CheckInput
					name="compulsory"
					className="mb-3"
					label="Compulsory"
					errorMessage={state?.errors?.compulsory}
				/>

				<BackButton className="me-2" />
				<SubmitButton title="Create" />
			</form>
		</FormContainer>
	);
};