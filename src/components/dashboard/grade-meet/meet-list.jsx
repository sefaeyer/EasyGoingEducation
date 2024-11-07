"use client";
import React from "react";
import { Container } from "react-bootstrap";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { formatDatell, formatTimeLT } from "@/helpers/date-time";

export const StudentMeetList = ({ data }) => {
	const header = (
		<div className="d-flex justify-content-between align-items-center">
			<h2>Meets</h2>
		</div>
	);

	const formatDate = (row) => formatDatell(row.date);
	const formatStart = (row) => formatTimeLT(row.startTime);
	const formatEnd = (row) => formatTimeLT(row.stopTime);

	return (
		<Container>
			<DataTable
				value={data}
				lazy
				dataKey="id"
				stripedRows
				showGridlines
				header={header}
			>
				<Column
					header="#"
					body={(row, options) => options.rowIndex + 1}
					headerStyle={{ width: "20px" }}
				/>
				<Column body={formatDate} header="Date" />
				<Column body={formatStart} header="Start" />
				<Column body={formatEnd} header="End" />
				<Column field="description" header="Description" />
			</DataTable>
		</Container>
	);
};