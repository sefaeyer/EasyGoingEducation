"use client";
import { deleteAdminAction } from "@/actions/admin-actions";
import { swAlert, swConfirm } from "@/helpers/sweetalert";
import React from "react";
import { Button } from "react-bootstrap";

export const AdminToolbar = (row) => {
	const { name, surname, id } = row;

	const handleDelete = async () => {
		const answer = await swConfirm(
			`Are you sure to delete ${name} ${surname}?`
		);
		if (!answer.isConfirmed) return;

		const res = await deleteAdminAction(id);
		swAlert(res.message, res.ok ? "success" : "error");
	};

	return (
		<Button variant="secondary">
			<i className="pi pi-trash" onClick={handleDelete}></i>
		</Button>
	);
};