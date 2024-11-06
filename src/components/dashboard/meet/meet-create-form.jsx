"use client";
import { createMeetAction } from "@/actions/meet-actions";
import {
	FormContainer,
	SubmitButton,
	BackButton,
	MultipleSelect,
	TimeInput,
	DateInput,
	TextInput,
} from "@/components/common/form-fields";
import { initialResponse } from "@/helpers/form-validation";
import { swAlert } from "@/helpers/sweetalert";
import { useRouter } from "next/navigation";
import React from "react";
import { useFormState } from "react-dom";

export const MeetCreateForm = ({ students }) => {
	const [state, dispatch] = useFormState(createMeetAction, initialResponse);
	const router = useRouter();

	if (state?.message) {
		swAlert(state.message, state.ok ? "success" : "error");
		if (state.ok) router.push("/dashboard/meet");
	}

	return (
		<FormContainer>
			<form action={dispatch}>
				<MultipleSelect
					name="studentIds"
					className="mb-3"
					label="Students"
					errorMessage={state?.errors?.lessonIdList}
					options={students}
					optionLabel="label"
					optionValue="value"
				/>

				<DateInput
					name="date"
					className="mb-3"
					label="Date"
					minDate={new Date()}
					dateFormat="yy-mm-dd"
					errorMessage={state?.errors?.date}
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

				<TextInput
					name="description"
					className="mb-3"
					label="Description"
					errorMessage={state?.errors?.description}
				/>

				<BackButton className="me-2" />
				<SubmitButton title="Create" />
			</form>
		</FormContainer>
	);
};