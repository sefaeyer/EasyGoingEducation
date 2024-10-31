"use client";
import React from "react";
import { Container } from "react-bootstrap";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LessonToolbar } from "./lesson-toolbar";

export const LessonList = ({ data }) => {
	const router = useRouter();
	const { content, size, totalElements, number } = data;

	const header = (
		<div className="d-flex justify-content-between align-items-center">
			<h2>Lessons</h2>
			<Link href="/dashboard/lesson/new" className="btn btn-primary">
				<i className="pi pi-plus"></i> New
			</Link>
		</div>
	);

	const onPage = (e) => {
		router.push(`/dashboard/lesson?page=${e.page}`);
	};

	const formatCompulsory = (row) =>
		row.compulsory ? (
			<i className="pi pi-check text-success"></i>
		) : (
			<i className="pi pi-minus text-warning"></i>
		);

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
				<Column field="lessonName" header="Lesson" />
				<Column field="creditScore" header="Credit" />
				<Column body={formatCompulsory} header="Compulsory" />
				<Column
					header=""
					body={LessonToolbar}
					bodyStyle={{ textAlign: "right" }}
				/>
			</DataTable>
		</Container>
	);
};