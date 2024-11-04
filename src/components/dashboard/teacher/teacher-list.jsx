"use client";
import React from "react";
import { Container } from "react-bootstrap";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { TeacherToolbar } from "./teacher-toolbar";

export const TeacherList = ({ data }) => {
	const router = useRouter();
	const { content, size, totalElements, number } = data;

	const header = (
		<div className="d-flex justify-content-between align-items-center">
			<h2>Teachers</h2>
			<Link href="/dashboard/teacher/new" className="btn btn-primary">
				<i className="pi pi-plus"></i> New
			</Link>
		</div>
	);

	const onPage = (e) => {
		router.push(`/dashboard/teacher?page=${e.page}`);
	};

	return (
		<Container>
			<DataTable
				value={content}
				lazy
				dataKey="userId"
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
				<Column field="name" header="First name" />
				<Column field="surname" header="Last name" />
				<Column field="username" header="Username" />
				<Column
					header=""
					body={TeacherToolbar}
					bodyStyle={{ textAlign: "right" }}
				/>
			</DataTable>
		</Container>
	);
};