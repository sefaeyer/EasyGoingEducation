import { PageHeader } from "@/components/common/page-header/page-header";
import { Spacer } from "@/components/common/spacer/spacer";
import { ManagerList } from "@/components/dashboard/manager/manager-list";
import { getAllManagersByPage } from "@/services/manager-service";
import React from "react";

const Page = async ({ searchParams }) => {
	const { page } = searchParams;

	const res = await getAllManagersByPage(page);
	const data = await res.json();

	if (!res.ok) throw new Error(data.message);

	return (
		<>
			<PageHeader title="Managers" />
			<Spacer />
			<ManagerList data={data} />
			<Spacer />
		</>
	);
};

export default Page;