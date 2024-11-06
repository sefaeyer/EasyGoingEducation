"use client";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Link from "next/link";
import { getDayLabel } from "@/helpers/misc";
import { formatTimeLT } from "@/helpers/date-time";
import { SubmitButton } from "@/components/common/form-fields";
import { assignProgramToStudentAction } from "@/actions/student-actions";
import { initialResponse } from "@/helpers/form-validation";
import { useFormState} from "react-dom";

export const AllProgramList = ({ allPrograms }) => {
	const [selectedItems, setSelectedItems] = useState([]);
	const [expandedRows, setExpandedRows] = useState(null);
	const [state, dispatch] = useFormState(
		assignProgramToStudentAction,
		initialResponse
	);

	const header = (
		<div className="d-flex justify-content-between align-items-center">
			<h2>All Programs</h2>
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
							<div className="badge bg-secondary me-2">{`${item.name} ${item.surname}`}</div>
						))}
					</div>
				</div>
			</div>
		);
	};

	console.log(selectedItems)

	return (
		<Container>
			<DataTable
				value={allPrograms}
				lazy
				dataKey="lessonProgramId"
				stripedRows
				showGridlines
				header={header}
				selection={selectedItems}
				onSelectionChange={(e) => setSelectedItems(e.value)}
				expandedRows={expandedRows}
				onRowToggle={(e) => setExpandedRows(e.data)}
				rowExpansionTemplate={rowExpansionTemplate}
			>
				<Column expander={true} style={{ width: "5rem" }} />
				<Column
					selectionMode="multiple"
					headerStyle={{ width: "3em" }}
				/>
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

			<hr className="my-4" />

			<form>
				<input
					type="hidden"
					name="lessonProgramId"
					value={JSON.stringify(selectedItems)}
				/>
				<div className="text-center">
					<SubmitButton title="Select" size="lg" icon="check" />
				</div>
			</form>
		</Container>
	);
};