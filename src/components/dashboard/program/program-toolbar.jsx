"use client";
import { deleteProgramAction } from "@/actions/program-actions";
import { getDayLabel } from "@/helpers/misc";
import { swAlert, swConfirm } from "@/helpers/sweetalert";
import React from "react";
import { Button } from "react-bootstrap";

export const ProgramToolbar = (row) => {
	const { day, lessonProgramId } = row;

	const handleDelete = async () => {
		const answer = await swConfirm(
			`Are you sure to delete ${getDayLabel(day)}?`
		);
		if (!answer.isConfirmed) return;

		const res = await deleteProgramAction(lessonProgramId);
		swAlert(res.message, res.ok ? "success" : "error");
	};

	return (
		<Button variant="secondary" onClick={handleDelete}>
			<i className="pi pi-trash"></i>
		</Button>
	);
};