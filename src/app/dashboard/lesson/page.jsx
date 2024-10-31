import { PageHeader } from "@/components/common/page-header/page-header";
import { Spacer } from "@/components/common/spacer/spacer";
import { LessonList } from "@/components/dashboard/lesson/lesson-list";
import { getAllTLessonsByPage } from "@/services/lesson-service";
import React from "react";

const Page = async ({ searchParams }) => {
	const { page } = searchParams;

	const res = await getAllTLessonsByPage(page);
	const data = await res.json();

	if (!res.ok) throw new Error(data.message);

	return (
		<>
			<PageHeader title="Lessons" />
			<Spacer />
			<LessonList data={data} />
			<Spacer />
		</>
	);
};

export default Page;