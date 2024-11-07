"use client";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useRouter } from "next/navigation";

export const GradeList = ({ data }) => {
	const [expandedRows, setExpandedRows] = useState(null);
	const router = useRouter();
	const { content, size, totalElements, number } = data;

	const header = (
		<div className="d-flex justify-content-between align-items-center">
			<h2>Grades</h2>
		</div>
	);

	const onPage = (e) => {
		router.push(`/dashboard/garades-meets?page=${e.page}`);
	};

	const rowExpansionTemplate = (row) => {
		return (
			<div className="card mx-5">
				<div className="card-body">{row.infoNote}</div>
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
				<Column field="lessonName" header="Lesson" />
				<Column field="absentee" header="Absentee" />
				<Column field="midtermExam" header="Midterm" />
				<Column field="finalExam" header="Final" />
				<Column field="average" header="Average" />
				<Column field="note" header="Score" />
			</DataTable>
		</Container>
	);
};