"use client";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { formatDatell, formatTimeLT } from "@/helpers/date-time";
import { MeetToolbar } from "./meet-toolbar";

export const MeetList = ({ data }) => {
	const [expandedRows, setExpandedRows] = useState(null);
	const router = useRouter();
	const { content, size, totalElements, number } = data;

	const header = (
		<div className="d-flex justify-content-between align-items-center">
			<h2>Meets</h2>
			<Link href="/dashboard/meet/new" className="btn btn-primary">
				<i className="pi pi-plus"></i> New
			</Link>
		</div>
	);

	const onPage = (e) => {
		router.push(`/dashboard/meet?page=${e.page}`);
	};

	const formatDate = (row) => formatDatell(row.date);
	const formatStart = (row) => formatTimeLT(row.startTime);
	const formatEnd = (row) => formatTimeLT(row.stopTime);

	const rowExpansionTemplate = (row) => {
		return (
			<div className="card mx-5">
				<div className="card-body">
					<div className="card-title fw-bold">Participants:</div>
					<div className="card-text">
						{row.students
							.map((item) => `${item.name} ${item.surname}`)
							.join(", ")}
					</div>
				</div>
			</div>
		);
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
				expandedRows={expandedRows}
				onRowToggle={(e) => setExpandedRows(e.data)}
				rowExpansionTemplate={rowExpansionTemplate}
			>
				<Column expander={true} style={{ width: "5rem" }} />
				<Column
					header="#"
					body={(row, options) => options.rowIndex + 1}
					headerStyle={{ width: "20px" }}
				/>
				<Column body={formatDate} header="Date" />
				<Column body={formatStart} header="Start" />
				<Column body={formatEnd} header="End" />
				<Column field="description" header="Description" />

				<Column
					header=""
					body={MeetToolbar}
				/>
			</DataTable>
		</Container>
	);
};