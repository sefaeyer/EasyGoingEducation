"use client";
import { deleteStudentAction } from "@/actions/student-actions";
import { swAlert, swConfirm } from "@/helpers/sweetalert";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "react-bootstrap";

export const StudentToolbar = (row) => {
	const { name, surname, id } = row;
	const router = useRouter();

	const handleDelete = async () => {
		const answer = await swConfirm(
			`Are you sure to delete ${name} ${surname}?`
		);
		if (!answer.isConfirmed) return;

		const res = await deleteStudentAction(id);
		swAlert(res.message, res.ok ? "success" : "error");
	};

	const handleEdit = () => {
		router.push(`/dashboard/student/${id}`);
	};

	return (
		<>
			<Button variant="secondary" onClick={handleEdit}>
				<i className="pi pi-file-edit"></i>
			</Button>

			<Button variant="secondary" className="ms-2" onClick={handleDelete}>
				<i className="pi pi-trash"></i>
			</Button>
		</>
	);
};