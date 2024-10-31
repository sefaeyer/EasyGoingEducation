import { PageHeader } from "@/components/common/page-header/page-header";
import { Spacer } from "@/components/common/spacer/spacer";
import { AssistantEditForm } from "@/components/dashboard/assistant-manager/manager-edit-form";
import { getAssistantById } from "@/services/assistant-service";
import React from "react";

const Page = async ({ params }) => {
	const res = await getAssistantById(params.id);
	const data = await res.json();

	if (!res.ok) throw new Error(data?.message);

	return (
		<>
			<PageHeader title="Edit Assistant" />
			<Spacer />
			<AssistantEditForm user={data?.object} />
			<Spacer />
		</>
	);
};

export default Page;