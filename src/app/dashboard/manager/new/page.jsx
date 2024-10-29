import { PageHeader } from "@/components/common/page-header/page-header";
import { Spacer } from "@/components/common/spacer/spacer";
import { ManagerCreateForm } from "@/components/dashboard/manager/manager-create-form";
import React from "react";

const Page = () => {
	return (
		<>
			<PageHeader title="New Manager" />
			<Spacer />
			<ManagerCreateForm />
			<Spacer />
		</>
	);
};

export default Page;