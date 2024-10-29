"use client";
import { Calendar } from "primereact/calendar";
import React from "react";
import { FloatingLabel, FormControl, InputGroup } from "react-bootstrap";

export const DateInput = ({
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
				<Calendar name={name} {...rest} className="form-control w-100" />

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