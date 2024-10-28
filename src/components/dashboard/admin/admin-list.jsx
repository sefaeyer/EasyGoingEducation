"use client";
import React from "react";
import { Container } from "react-bootstrap";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AdminToolbar } from "./admin-toolbar";

export const AdminList = ({ data }) => {
	const router = useRouter();
	const { content, size, totalElements, number } = data;

	console.log(data);

	const header = (
		<div className="d-flex justify-content-between align-items-center">
			<h2>Admins</h2>
			<Link href="/dashboard/admin/new" className="btn btn-primary">
				<i className="pi pi-plus"></i> New
			</Link>
		</div>
	);

	const onPage = (e) => {
		router.push(`/dashboard/admin?page=${e.page}`);
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
				<Column field="name" header="First name" />
				<Column field="surname" header="Last name" />
				<Column field="username" header="Username" />
				<Column header="" body={AdminToolbar} bodyStyle={{ textAlign: "right" }}/>
			</DataTable>
		</Container>
	);
};