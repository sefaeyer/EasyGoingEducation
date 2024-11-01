"use client";
import { Calendar } from "primereact/calendar";
import React, { useEffect, useState } from "react";
import { FloatingLabel, FormControl, InputGroup } from "react-bootstrap";

export const TimeInput = ({
	name,
	label,
	errorMessage,
	className,
	iconBefore,
	iconAfter,
	value,
	...rest
}) => {
	const [time, setTime] = useState("");

	useEffect(() => {
		if (value) {
			setTime(new Date(value));
		}
	}, [value]);

	return (
		<InputGroup className={`${className} ${errorMessage ? "mb-5" : ""}`}>
			{!!iconBefore && (
				<InputGroup.Text>
					<i className={`pi pi-${iconBefore}`}></i>
				</InputGroup.Text>
			)}

			<FloatingLabel controlId={name} label={label}>
				<Calendar
					timeOnly
					{...rest}
					name={name}
					className={`form-control w-100 ${
						errorMessage ? "is-invalid" : ""
					}`}
					value={time}
					onChange={(e) => setTime(e.value)}
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