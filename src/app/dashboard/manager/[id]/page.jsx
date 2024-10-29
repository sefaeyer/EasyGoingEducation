import { PageHeader } from "@/components/common/page-header/page-header";
import { Spacer } from "@/components/common/spacer/spacer";
import { ManagerEditForm } from "@/components/dashboard/manager/manager-edit-form";
import { getManagerById } from "@/services/manager-service";
import React from "react";

const Page = async ({ params }) => {
	const res = await getManagerById(params.id);
	const data = await res.json();

	if (!res.ok) throw new Error(data?.message);

	return (
		<>
			<PageHeader title="Edit Manager" />
			<Spacer />
			<ManagerEditForm user={data?.object} />
			<Spacer />
		</>
	);
};

export default Page;