import { PageHeader } from "@/components/common/page-header/page-header";
import { Spacer } from "@/components/common/spacer/spacer";
import { ContactMessageList } from "@/components/dashboard/contact-message/contact-message-list";
import { getAllContactMessagesByPage } from "@/services/contact-service";
import React from "react";

const Page = async ({ searchParams }) => {
	const { page } = searchParams;

	const res = await getAllContactMessagesByPage(page);
	const data = await res.json();

	if (!res.ok) throw new Error(data.message);

	data.content = data.content.map((message, index) => ({
		...message,
		id: index,
	}));

	return (
		<>
			<PageHeader title="Messages" />
			<Spacer />
			<ContactMessageList data={data} />
			<Spacer />
		</>
	);
};

export default Page;