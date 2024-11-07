import { PageHeader } from "@/components/common/page-header/page-header";
import { Spacer } from "@/components/common/spacer/spacer";
import { GradeList } from "@/components/dashboard/grade-meet/grade-list";
import { StudentMeetList } from "@/components/dashboard/grade-meet/meet-list";
import { getAllMeetsForStudent } from "@/services/meet-service";
import { getAllInfoByPageForStudent } from "@/services/student-info-service";
import React from "react";

const Page = async ({ searchParams }) => {
	const { page } = searchParams;

	const dataGrades = (await getAllInfoByPageForStudent(page)).json();
	const dataMeets = (await getAllMeetsForStudent()).json();

	const [grades, meets] = await Promise.all([dataGrades, dataMeets]);

	return (
		<>
			<PageHeader title="Lessons" />
			<Spacer />
			<GradeList data={grades} />
			<Spacer />
			<StudentMeetList data={meets} />
			<Spacer />
		</>
	);
};

export default Page;