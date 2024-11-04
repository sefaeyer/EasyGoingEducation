"use client";
import React from "react";
import {
	FloatingLabel,
	FormCheck,
	FormControl,
	FormGroup,
	InputGroup,
} from "react-bootstrap";

export const CheckInput = ({
	name,
	label,
	type = "checkbox",
	errorMessage,
	className,
	...rest
}) => {
	return (
		<FormGroup className={`${className} ${errorMessage ? "mb-5" : ""}`}>
			<FormCheck
				type={type}
				label={label}
				id={name}
				name={name}
				isInvalid={!!errorMessage}
				value="true"
				{...rest}
			/>

			<FormControl.Feedback type="invalid">
				{errorMessage}
			</FormControl.Feedback>
		</FormGroup>
	);
};