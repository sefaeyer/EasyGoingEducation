"use client";
import { deleteMeetAction } from "@/actions/meet-actions";
import { formatDateMY, formatTimeLT } from "@/helpers/date-time";
import { swAlert, swConfirm } from "@/helpers/sweetalert";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "react-bootstrap";

export const MeetToolbar = (row) => {
	const router = useRouter();
	const { date, startTime, id } = row;

	const handleDelete = async () => {
		const answer = await swConfirm(
			`Are you sure to delete the meeting on ${formatDateMY(
				date
			)} at ${formatTimeLT(startTime)}?`
		);
		if (!answer.isConfirmed) return;

		const res = await deleteMeetAction(id);
		swAlert(res.message, res.ok ? "success" : "error");
	};

	const handleEdit = () => {
		router.push(`/dashboard/meet/${id}`);
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