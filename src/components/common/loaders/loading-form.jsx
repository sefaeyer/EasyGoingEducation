"use client";
import React from "react";
import { FormContainer } from "../form-fields";
import { Skeleton } from "primereact/skeleton";

export const LoadingForm = ({ inputCount = 5 }) => {
	const inputs = Array.from({ length: inputCount }, (v, i) => i);

	return (
		<FormContainer>
			{inputs.map((item) => (
				<Skeleton
					key={item}
					width="100%"
					height="3.5rem"
					className="mb-3"
				/>
			))}

			<div className="d-flex gap-2">
				<Skeleton width="10rem" height="2.5rem" />
				<Skeleton width="10rem" height="2.5rem" />
			</div>
		</FormContainer>
	);
};