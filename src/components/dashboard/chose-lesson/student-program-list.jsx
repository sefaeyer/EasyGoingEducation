"use client";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { getDayLabel } from "@/helpers/misc";
import { formatTimeLT } from "@/helpers/date-time";

export const StudentProgramList = ({ studentPrograms }) => {
	const [expandedRows, setExpandedRows] = useState(null);
	const header = (
		<div className="d-flex justify-content-between align-items-center">
			<h2>Selected Programs</h2>
		</div>
	);

	const formatLessons = (row) =>
		row.lessonName.map((item) => item.lessonName).join("-");
	const formatDay = (row) => getDayLabel(row.day);
	const formatStartTime = (row) => formatTimeLT(row.startTime);
	const formatStopTime = (row) => formatTimeLT(row.stopTime);

	const rowExpansionTemplate = (row) => {
		return (
			<div className="card mx-5">
				<div className="card-body">
					<div className="card-title fw-bold">Teachers:</div>
					<div className="card-text">
						{row.teachers.map((item) => (
							<div className="badge bg-secondary me-2" key={item.userId}>{`${item.name} ${item.surname}`}</div>
						))}
					</div>
				</div>
			</div>
		);
	};

	return (
		<Container>
			<DataTable
				value={studentPrograms}
				lazy
				dataKey="lessonProgramId"
				stripedRows
				showGridlines
				header={header}
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
				<Column body={formatLessons} header="Lessons" />
				<Column body={formatDay} header="Day" />
				<Column body={formatStartTime} header="Start" />
				<Column body={formatStopTime} header="End" />
			</DataTable>
		</Container>
	);
};