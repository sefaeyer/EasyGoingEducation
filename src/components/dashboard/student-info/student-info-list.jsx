"use client";
import React from "react";
import { Container } from "react-bootstrap";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { StudentInfoToolbar } from "./student-info-toolbar";

export const StudentInfoList = ({ data }) => {
	const router = useRouter();
	const { content, size, totalElements, number } = data;

	const header = (
		<div className="d-flex justify-content-between align-items-center">
			<h2>Student Info</h2>
			<Link
				href="/dashboard/student-info/new"
				className="btn btn-primary"
			>
				<i className="pi pi-plus"></i> New
			</Link>
		</div>
	);

	const onPage = (e) => {
		router.push(`/dashboard/student-info?page=${e.page}`);
	};

	const formatStudent = (row) => {
		const { name, surname } = row.studentResponse;
		return `${name} ${surname}`;
	};

	return (
		<Container>
			<DataTable
				value={content}
				lazy
				dataKey="id"
				paginator
				rows={size}
				totalRecords={totalElements}
				stripedRows
				showGridlines
				first={number * size}
				header={header}
				onPage={onPage}
			>
				<Column
					header="#"
					body={(row, options) => options.rowIndex + 1}
					headerStyle={{ width: "20px" }}
				/>
				<Column body={formatStudent} header="Student" />
				<Column field="lessonName" header="Lesson" />
				<Column field="absentee" header="Absentee" />
				<Column field="midtermExam" header="Midterm" />
				<Column field="finalExam" header="Final" />
				<Column field="average" header="Average" />
				<Column field="note" header="Score" />
				<Column field="infoNote" header="Note" />
				<Column
					header=""
					body={StudentInfoToolbar}
					bodyStyle={{ textAlign: "right" }}
				/>
			</DataTable>
		</Container>
	);
};