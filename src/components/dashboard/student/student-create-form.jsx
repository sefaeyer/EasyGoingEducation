"use client";
import { createStudentAction } from "@/actions/student-actions";
import {
	DateInput,
	FormContainer,
	MaskedInput,
	PasswordInput,
	SelectInput,
	SubmitButton,
	TextInput,
	BackButton,
} from "@/components/common/form-fields";
import { config } from "@/helpers/config";
import { initialResponse } from "@/helpers/form-validation";
import { swAlert } from "@/helpers/sweetalert";
import { useRouter } from "next/navigation";
import React from "react";
import { useFormState } from "react-dom";

export const StudentCreateForm = ({ advisorTeachers }) => {
	const [state, dispatch] = useFormState(
		createStudentAction,
		initialResponse
	);
	const router = useRouter();

	if (state.message) {
		swAlert(state.message, state.ok ? "success" : "error");
		if (state.ok) router.push("/dashboard/student");
	}

	return (
		<FormContainer>
			<form action={dispatch}>
				<TextInput
					name="name"
					className="mb-3"
					label="First name"
					errorMessage={state?.errors?.name}
				/>

				<TextInput
					name="surname"
					className="mb-3"
					label="Last name"
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
				/>

				<DateInput
					name="birthDay"
					className="mb-3"
					label="Date of birth"
					errorMessage={state?.errors?.birthDay}
					dateFormat="yy-mm-dd"
				/>

				<TextInput
					name="birthPlace"
					className="mb-3"
					label="Place of birth"
					errorMessage={state?.errors?.birthPlace}
				/>

				<MaskedInput
					name="phoneNumber"
					className="mb-3"
					label="Phone number"
					mask="999-999-9999"
					errorMessage={state?.errors?.phoneNumber}
				/>

				<TextInput
					name="email"
					className="mb-3"
					label="Email"
					errorMessage={state?.errors?.email}
				/>

				<MaskedInput
					name="ssn"
					className="mb-3"
					label="SSN"
					mask="999-99-9999"
					errorMessage={state?.errors?.ssn}
				/>

				<TextInput
					name="fatherName"
					className="mb-3"
					label="Father"
					errorMessage={state?.errors?.fatherName}
				/>

				<TextInput
					name="motherName"
					className="mb-3"
					label="Mother"
					errorMessage={state?.errors?.motherName}
				/>

				<SelectInput
					name="advisorTeacherId"
					className="mb-3"
					label="Advisor teacher"
					errorMessage={state?.errors?.advisorTeacherId}
					options={advisorTeachers}
					optionLabel="label"
					optionValue="value"
				/>

				<TextInput
					name="username"
					className="mb-3"
					label="Username"
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
				<SubmitButton title="Create" />
			</form>
		</FormContainer>
	);
};