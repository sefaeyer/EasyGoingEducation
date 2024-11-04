"use client";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { getDayLabel, getLessonNames } from "@/helpers/misc";
import { formatTimeLT } from "@/helpers/date-time";
import { SelectInput, SubmitButton } from "@/components/common/form-fields";
import { assignProgramToTeacherAction } from "@/actions/teacher-actions";
import { initialResponse } from "@/helpers/form-validation";
import { useFormState } from "react-dom";
import { swAlert } from "@/helpers/sweetalert";

export const UnAssignedProgramList = ({ programs, teachers }) => {
	const [selectedItems, setSelectedItems] = useState([]);
	const [state, dispatch] = useFormState(
		assignProgramToTeacherAction,
		initialResponse
	);

	const header = (
		<div className="d-flex justify-content-between align-items-center">
			<h2>Unassigned Programs</h2>
		</div>
	);

	const formatDay = (row) => getDayLabel(row.day);
	const formatStart = (row) => formatTimeLT(row.startTime);
	const formatEnd = (row) => formatTimeLT(row.stopTime);
	const formatLessons = (row) => getLessonNames(row.lessonName);

	if (state?.message) {
		swAlert(state?.message, state?.ok ? "success" : "error");
	}

	return (
		<Container>
			<DataTable
				value={programs}
				lazy
				dataKey="lessonProgramId"
				stripedRows
				showGridlines
				header={header}
				selection={selectedItems}
				onSelectionChange={(e) => setSelectedItems(e.value)}
				className={
					state?.errors?.lessonProgramId ? "border border-danger" : ""
				}
			>
				<Column
					selectionMode="multiple"
					headerStyle={{ width: "3rem" }}
				></Column>
				<Column
					header="#"
					body={(row, options) => options.rowIndex + 1}
					headerStyle={{ width: "20px" }}
				/>
				<Column body={formatLessons} header="Lessons" />
				<Column body={formatDay} header="Day" />
				<Column body={formatStart} header="Start" />
				<Column body={formatEnd} header="End" />
			</DataTable>

			{state?.errors?.lessonProgramId ? (
				<div className="text-danger mt-2">
					{state?.errors?.lessonProgramId}
				</div>
			) : null}

			<hr className="my-5" />

			<form action={dispatch}>
				<input
					type="hidden"
					name="lessonProgramId"
					value={JSON.stringify(selectedItems)}
				/>

				<div className="d-flex align-items-start gap-2">
					<SelectInput
						name="teacherId"
						label="Teacher"
						options={teachers}
						optionLabel="label"
						optionValue="value"
						errorMessage={state?.errors?.teacherId}
					/>
					<SubmitButton title="Assign" />
				</div>
			</form>
		</Container>
	);
};