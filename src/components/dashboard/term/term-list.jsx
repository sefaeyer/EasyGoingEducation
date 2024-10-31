"use client";
import React from "react";
import { Container } from "react-bootstrap";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { TermToolbar } from "./term-toolbar";
import { getTermLabel } from "@/helpers/misc";
import { formatDatell } from "@/helpers/date-time";

export const TermList = ({ data }) => {
	const router = useRouter();
	const { content, size, totalElements, number } = data;

	const header = (
		<div className="d-flex justify-content-between align-items-center">
			<h2>Terms</h2>
			<Link
				href="/dashboard/education-term/new"
				className="btn btn-primary"
			>
				<i className="pi pi-plus"></i> New
			</Link>
		</div>
	);

	const onPage = (e) => {
		router.push(`/dashboard/education-term?page=${e.page}`);
	};

	const formatTerm = (row) => getTermLabel(row.term);
	const formatStartDate = (row) => formatDatell(row.startDate);
	const formatEndDate = (row) => formatDatell(row.endDate);
	const formatLastRegistrationDate = (row) =>
		formatDatell(row.lastRegistrationDate);

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
				<Column body={formatTerm} header="Term" />
				<Column body={formatStartDate} header="Begin" />
				<Column body={formatEndDate} header="End" />
				<Column
					body={formatLastRegistrationDate}
					header="Last registration"
				/>
				<Column
					header=""
					body={TermToolbar}
					bodyStyle={{ textAlign: "right" }}
				/>
			</DataTable>
		</Container>
	);
};