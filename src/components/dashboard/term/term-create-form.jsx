"use client";
import { createTermAction } from "@/actions/term-actions";
import {
	DateInput,
	FormContainer,
	SelectInput,
	SubmitButton,
} from "@/components/common/form-fields";
import { BackButton } from "@/components/common/form-fields/back-button";
import { config } from "@/helpers/config";
import { initialResponse } from "@/helpers/form-validation";
import { swAlert } from "@/helpers/sweetalert";
import { useRouter } from "next/navigation";
import React from "react";
import { useFormState } from "react-dom";

export const TermCreateForm = () => {
	const [state, dispatch] = useFormState(createTermAction, initialResponse);
	const router = useRouter();

	if (state.message) {
		swAlert(state.message, state.ok ? "success" : "error");
		if (state.ok) router.push("/dashboard/education-term");
	}

	return (
		<FormContainer>
			<form action={dispatch}>
				<SelectInput
					name="term"
					className="mb-3"
					label="Term"
					errorMessage={state?.errors?.term}
					options={config.educationTerms}
					optionLabel="label"
					optionValue="value"
				/>

				<DateInput
					name="startDate"
					className="mb-3"
					label="Start Date"
					minDate={new Date()}
					dateFormat="yy-mm-dd"
					errorMessage={state?.errors?.startDate}
				/>

				<DateInput
					name="endDate"
					className="mb-3"
					label="End Date"
					dateFormat="yy-mm-dd"
					errorMessage={state?.errors?.endDate}
				/>

				<DateInput
					name="lastRegistrationDate"
					className="mb-3"
					label="Last Registrationt Date"
					dateFormat="yy-mm-dd"
					errorMessage={state?.errors?.lastRegistrationDate}
				/>

				<BackButton className="me-2" />
				<SubmitButton title="Create" />
			</form>
		</FormContainer>
	);
};