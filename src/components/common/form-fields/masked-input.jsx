"use client";
import React from "react";
import { FloatingLabel, FormControl, InputGroup } from "react-bootstrap";

import { InputMask } from 'primereact/inputmask';
        


export const MaskedInput = ({
	name,
	label,
	errorMessage,
	className,
	iconBefore,
	iconAfter,
	...rest
}) => {
	return (
		<InputGroup className={`${className} ${errorMessage ? "mb-5" : ""}`}>
			{!!iconBefore && (
				<InputGroup.Text>
					<i className={`pi pi-${iconBefore}`}></i>
				</InputGroup.Text>
			)}

			<FloatingLabel controlId={name} label={label}>
				<FormControl
					name={name}
					placeholder={label}
					isInvalid={!!errorMessage}
					as={InputMask}
					{...rest}
				/>
				<FormControl.Feedback
					type="invalid"
					style={{ position: "absolute" }}
				>
					{errorMessage}
				</FormControl.Feedback>
			</FloatingLabel>
			{!!iconAfter && (
				<InputGroup.Text>
					<i className={`pi pi-${iconAfter}`}></i>
				</InputGroup.Text>
			)}
		</InputGroup>
	);
};