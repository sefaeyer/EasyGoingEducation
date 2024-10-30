import { PageHeader } from "@/components/common/page-header/page-header";
import { Spacer } from "@/components/common/spacer/spacer";
import { AssistantCreateForm } from "@/components/dashboard/assistant-manager/assistant-create-form";
import React from "react";

const Page = () => {
	return (
		<>
			<PageHeader title="New Assistant" />
			<Spacer />
			<AssistantCreateForm/>
			<Spacer />
		</>
	);
};

export default Page;