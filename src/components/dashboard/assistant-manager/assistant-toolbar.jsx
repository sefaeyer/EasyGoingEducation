"use client";
import { deleteAssistantAction } from "@/actions/assistant-action";
import { swAlert, swConfirm } from "@/helpers/sweetalert";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "react-bootstrap";

export const AssistantToolbar = (row) => {
	const { name, surname, userId } = row;
	const router = useRouter();

	const handleDelete = async () => {
		const answer = await swConfirm(
			`Are you sure to delete ${name} ${surname}?`
		);
		if (!answer.isConfirmed) return;

		const res = await deleteAssistantAction(userId);
		swAlert(res.message, res.ok ? "success" : "error");
	};

	const handleEdit = () => {
		router.push(`/dashboard/assistant-manager/${userId}`);
	};

	return (
		<div className="d-flex gap-2 justify-content-end">
			<Button variant="secondary" onClick={handleEdit}>
				<i className="pi pi-file-edit"></i>
			</Button>

			<Button variant="secondary" onClick={handleDelete}>
				<i className="pi pi-trash"></i>
			</Button>
		</div>
	);
};