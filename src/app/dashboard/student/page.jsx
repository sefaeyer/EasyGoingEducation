import { PageHeader } from "@/components/common/page-header/page-header";
import { Spacer } from "@/components/common/spacer/spacer";
import { StudentList } from "@/components/dashboard/student/student-list";
import { getAllStudentsByPage } from "@/services/student-service";
import React from "react";

const Page = async ({ searchParams }) => {
	const { page } = searchParams;

	const res = await getAllStudentsByPage(page);
	const data = await res.json();

	if (!res.ok) throw new Error(data.message);

	return (
		<>
			<PageHeader title="Students" />
			<Spacer />
			<StudentList data={data} />
			<Spacer />
		</>
	);
};

export default Page;