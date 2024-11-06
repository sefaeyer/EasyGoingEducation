import { PageHeader } from "@/components/common/page-header/page-header";
import { Spacer } from "@/components/common/spacer/spacer";
import { MeetList } from "@/components/dashboard/meet/meet-list";
import { getAllMeetsByPageForAdvisor } from "@/services/meet-service";
import React from "react";

const Page = async ({ searchParams }) => {
	const { page } = searchParams;

	const res = await getAllMeetsByPageForAdvisor(page);
	const data = await res.json();

	if (!res.ok) throw new Error(data.message);

	return (
		<>
			<PageHeader title="Meet" />
			<Spacer />
			<MeetList data={data} />
			<Spacer />
		</>
	);
};

export default Page;