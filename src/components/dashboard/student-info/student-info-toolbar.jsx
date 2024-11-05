"use client";
import { deleteStudentInfoAction } from "@/actions/student-info-actions";
import { swAlert, swConfirm } from "@/helpers/sweetalert";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "react-bootstrap";

export const StudentInfoToolbar = (row) => {
	const { studentResponse, lessonName, id } = row;
	const { name, surname } = studentResponse;
	const router = useRouter();

	const handleDelete = async () => {
		const answer = await swConfirm(
			`Are you sure to delete ${lessonName} record of ${name} ${surname}?`
		);
		if (!answer.isConfirmed) return;

		const res = await deleteStudentInfoAction(id);
		swAlert(res.message, res.ok ? "success" : "error");
	};

	const handleEdit = () => {
		router.push(`/dashboard/student-info/${id}`);
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