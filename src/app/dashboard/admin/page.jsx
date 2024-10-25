import { PageHeader } from "@/components/common/page-header/page-header";
import { Spacer } from "@/components/common/spacer/spacer";
import { AdminList } from "@/components/dashboard/admin/admin-list";
import { getAllAdminsByPage } from "@/services/admin-service";
import React from "react";

const Page = async () => {
	const res = await getAllAdminsByPage();
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