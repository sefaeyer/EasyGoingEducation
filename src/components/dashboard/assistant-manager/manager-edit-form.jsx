"use client";
import { updateAssistantAction } from "@/actions/assistant-action";
import {
	DateInput,
	FormContainer,
	MaskedInput,
	PasswordInput,
	SelectInput,
	SubmitButton,
	TextInput,
	BackButton
} from "@/components/common/form-fields";
import { config } from "@/helpers/config";
import { initialResponse } from "@/helpers/form-validation";
import { swAlert } from "@/helpers/sweetalert";
import { useRouter } from "next/navigation";
import React from "react";
import { useFormState } from "react-dom";

export const AssistantEditForm = ({ user }) => {
	const [state, dispatch] = useFormState(
		updateAssistantAction,
		initialResponse
	);
	const router = useRouter();

	if (state.message) {
		swAlert(state.message, state.ok ? "success" : "error");
		if (state.ok) router.push("/dashboard/assistant-manager");
	}

	return (
		<FormContainer>
			<form action={dispatch}>
				<input type="hidden" name="id" value={user?.userId} />
				<TextInput
					name="name"
					className="mb-3"
					label="First name"
					defaultValue={user?.name}
					errorMessage={state?.errors?.name}
				/>

				<TextInput
					name="surname"
					className="mb-3"
					label="Last name"
					defaultValue={user?.surname}
					errorMessage={state?.errors?.surname}
				/>

				<SelectInput
					name="gender"
					className="mb-3"
					label="Gender"
					errorMessage={state?.errors?.gender}
					options={config.genders}
					optionLabel="label"
					optionValue="value"
					defaultValue={user?.gender}
				/>

				<DateInput
					name="birthDay"
					className="mb-3"
					label="Date of birth"
					value={user?.birthDay}
					dateFormat="yy-mm-dd"
					maxDate={new Date()}
					errorMessage={state?.errors?.birthDay}
				/>

				<TextInput
					name="birthPlace"
					className="mb-3"
					label="Place of birth"
					defaultValue={user?.birthPlace}
					errorMessage={state?.errors?.birthPlace}
				/>

				<MaskedInput
					name="phoneNumber"
					className="mb-3"
					label="Phone number"
					mask="999-999-9999"
					value={user?.phoneNumber}
					errorMessage={state?.errors?.phoneNumber}
				/>

				<MaskedInput
					name="ssn"
					className="mb-3"
					label="SSN"
					mask="999-99-9999"
					value={user?.ssn}
					errorMessage={state?.errors?.ssn}
				/>

				<TextInput
					name="username"
					className="mb-3"
					label="Username"
					defaultValue={user?.username}
					errorMessage={state?.errors?.username}
				/>

				<PasswordInput
					name="password"
					className="mb-3"
					label="Password"
					errorMessage={state?.errors?.password}
				/>

				<PasswordInput
					name="confirmPassword"
					className="mb-3"
					label="Confirm Password"
					errorMessage={state?.errors?.confirmPassword}
				/>

				<BackButton className="me-2" />
				<SubmitButton title="Update" icon="save" />
			</form>
		</FormContainer>
	);
};