"use client";
import { createProgramAction } from "@/actions/program-actions";
import {
	DateInput,
	FormContainer,
	SelectInput,
	SubmitButton,
} from "@/components/common/form-fields";
import { BackButton } from "@/components/common/form-fields/back-button";
import { MultipleSelect } from "@/components/common/form-fields/multiple-select";
import { TimeInput } from "@/components/common/form-fields/time-input";
import { config } from "@/helpers/config";
import { initialResponse } from "@/helpers/form-validation";
import { swAlert } from "@/helpers/sweetalert";
import { useRouter } from "next/navigation";
import React from "react";
import { useFormState } from "react-dom";

export const ProgramCreateForm = ({ lessons, terms }) => {
	const [state, dispatch] = useFormState(
		createProgramAction,
		initialResponse
	);
	const router = useRouter();

	if (state?.message) {
		swAlert(state.message, state.ok ? "success" : "error");
		if (state.ok) router.push("/dashboard/program");
	}

	return (
		<FormContainer>
			<form action={dispatch}>
				<MultipleSelect
					name="lessonIdList"
					className="mb-3"
					label="Lessons"
					errorMessage={state?.errors?.lessonIdList}
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

				<SelectInput
					name="day"
					className="mb-3"
					label="Day"
					errorMessage={state?.errors?.day}
					options={config.days}
					optionLabel="label"
					optionValue="value"
				/>

				<TimeInput
					name="startTime"
					className="mb-3"
					label="Start time"
					errorMessage={state?.errors?.startTime}
				/>

				<TimeInput
					name="stopTime"
					className="mb-3"
					label="End time"
					errorMessage={state?.errors?.stopTime}
				/>

				<BackButton className="me-2" />
				<SubmitButton title="Create" />
			</form>
		</FormContainer>
	);
};