"use client";
import { deleteManagerAction } from "@/actions/manager-actions";
import { swAlert, swConfirm } from "@/helpers/sweetalert";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "react-bootstrap";

export const ManagerToolbar = (row) => {
	const { name, surname, userId } = row;
	const router = useRouter();

	const handleDelete = async () => {
		const answer = await swConfirm(
			`Are you sure to delete ${name} ${surname}?`
		);
		if (!answer.isConfirmed) return;

		const res = await deleteManagerAction(userId);
		swAlert(res.message, res.ok ? "success" : "error");
	};

	const handleEdit = () => {
		router.push(`/dashboard/manager/${userId}`);
	};

	return (
		<>
			<Button variant="secondary" onClick={handleEdit}>
				<i className="pi pi-file-edit"></i>
			</Button>

			<Button variant="secondary" className="ms-2">
				<i className="pi pi-trash" onClick={handleDelete}></i>
			</Button>
		</>
	);
};