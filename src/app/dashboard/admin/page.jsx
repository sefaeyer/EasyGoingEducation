import { PageHeader } from "@/components/common/page-header/page-header";
import { Spacer } from "@/components/common/spacer/spacer";
import { AdminList } from "@/components/dashboard/admin/admin-list";
import { wait } from "@/helpers/misc";
import { getAllAdminsByPage } from "@/services/admin-service";
import React from "react";

const Page = async ({ searchParams }) => {
	const { page } = searchParams;

	const res = await getAllAdminsByPage(page);
	const data = await res.json();

	if (!res.ok) throw new Error(data.message);

	return (
		<>
			<PageHeader title="Admins" />
			<Spacer />
			<AdminList data={data} />
			<Spacer />
		</>
	);
};

export default Page;