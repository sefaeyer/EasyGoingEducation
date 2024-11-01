"use client";
import React from "react";
import { Container } from "react-bootstrap";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getDayLabel, getLessonNames } from "@/helpers/misc";
import { ProgramToolbar } from "./program-toolbar";
import { formatTimeLT } from "@/helpers/date-time";

export const ProgramList = ({ data }) => {
	const router = useRouter();
	const { content, size, totalElements, number } = data;

	const header = (
		<div className="d-flex justify-content-between align-items-center">
			<h2>Programs</h2>
			<Link href="/dashboard/program/new" className="btn btn-primary">
				<i className="pi pi-plus"></i> New
			</Link>
		</div>
	);

	const onPage = (e) => {
		router.push(`/dashboard/program?page=${e.page}`);
	};

	const formatDay = (row) => getDayLabel(row.day);
	const formatStart = (row) => formatTimeLT(row.startTime);
	const formatEnd = (row) => formatTimeLT(row.stopTime);
	const formatLessons = (row) => getLessonNames(row.lessonName);

	return (
		<Container>
			<DataTable
				value={content}
				lazy
				dataKey="lessonProgramId"
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
				<Column body={formatLessons} header="Lessons" />
				<Column body={formatDay} header="Day" />
				<Column body={formatStart} header="Start" />
				<Column body={formatEnd} header="End" />

				<Column
					header=""
					body={ProgramToolbar}
					bodyStyle={{ textAlign: "right" }}
				/>
			</DataTable>
		</Container>
	);
};