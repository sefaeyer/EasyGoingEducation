"use client";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Skeleton } from "primereact/skeleton";
import React from "react";
import { Container } from "react-bootstrap";

export const LoadingList = ({ colCount = 4, rowCount = 5 }) => {
	const rows = Array.from({ length: rowCount }, (v, i) => i);
	const columns = Array.from({ length: colCount }, (v, i) => i);

	const header = (
		<div className="d-flex justify-content-between align-items-center">
			<h2>
				<Skeleton width="10rem" height="2.5rem" />
			</h2>
			<Skeleton width="5rem" height="2.5rem" />
		</div>
	);

	return (
		<Container>
			<DataTable
				value={rows}
				stripedRows
				showGridlines
				header={header}
				className="w-100"
			>
				{columns.map((col) => (
					<Column
						key={col}
						field="code"
						header={<Skeleton width="3rem"/>}
						style={{ width: `${Math.floor(100 / colCount)}%` }}
						body={<Skeleton />}
					></Column>
				))}
			</DataTable>
		</Container>
	);
};