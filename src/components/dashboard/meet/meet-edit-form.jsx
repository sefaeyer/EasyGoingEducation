"use client";
import { createMeetAction, updateMeetAction } from "@/actions/meet-actions";
import {
	FormContainer,
	SubmitButton,
	BackButton,
	MultipleSelect,
	TimeInput,
	DateInput,
	TextInput,
} from "@/components/common/form-fields";
import {
	convertTimeToDateTime,
	formatTimeHHmm,
	formatTimeLT,
} from "@/helpers/date-time";
import { initialResponse } from "@/helpers/form-validation";
import { swAlert } from "@/helpers/sweetalert";
import { useRouter } from "next/navigation";
import React from "react";
import { useFormState } from "react-dom";

export const MeetEditForm = ({ meet, studentsOfAdvisor, studentsOfMeet }) => {
	const [state, dispatch] = useFormState(updateMeetAction, initialResponse);
	const router = useRouter();

	if (state?.message) {
		swAlert(state.message, state.ok ? "success" : "error");
		if (state.ok) router.push("/dashboard/meet");
	}

	const stopTime = convertTimeToDateTime(meet?.stopTime);
	const startTime = convertTimeToDateTime(meet?.startTime);

	return (
		<FormContainer>
			<form action={dispatch}>
				<input type="hidden" name="id" value={meet?.id} />
				<MultipleSelect
					name="studentIds"
					className="mb-3"
					label="Students"
					errorMessage={state?.errors?.lessonIdList}
					options={studentsOfAdvisor}
					optionLabel="label"
					optionValue="value"
					values={studentsOfMeet}
				/>

				<DateInput
					name="date"
					className="mb-3"
					label="Date"
					minDate={new Date()}
					dateFormat="yy-mm-dd"
					errorMessage={state?.errors?.date}
					value={meet?.date}
				/>

				<TimeInput
					name="startTime"
					className="mb-3"
					label="Start time"
					errorMessage={state?.errors?.startTime}
					value={startTime}
				/>

				<TimeInput
					name="stopTime"
					className="mb-3"
					label="End time"
					errorMessage={state?.errors?.stopTime}
					value={stopTime}
				/>

				<TextInput
					name="description"
					className="mb-3"
					label="Description"
					errorMessage={state?.errors?.description}
					defaultValue={meet?.description}
				/>

				<BackButton className="me-2" />
				<SubmitButton title="Update" />
			</form>
		</FormContainer>
	);
};