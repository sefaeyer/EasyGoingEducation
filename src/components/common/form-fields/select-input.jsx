"use client";
import React from "react";
import {
	FloatingLabel,
	FormControl,
	FormSelect,
	InputGroup,
} from "react-bootstrap";

export const SelectInput = ({
	name,
	label,
	errorMessage,
	className,
	iconBefore,
	iconAfter,
	options,
	optionLabel,
	optionValue,
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
				<FormSelect
					name={name}
					placeholder={label}
					isInvalid={!!errorMessage}
					defaultValue=""
					{...rest}
				>
					<option value="" disabled>
						Select
					</option>
					{options.map((item) => (
						<option
							key={item[optionValue]}
							value={item[optionValue]}
						>
							{item[optionLabel]}
						</option>
					))}
				</FormSelect>
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