import { PageHeader } from "@/components/common/page-header/page-header";
import { Spacer } from "@/components/common/spacer/spacer";
import { TermList } from "@/components/dashboard/term/term-list";
import { getAllTermsByPage } from "@/services/term-service";
import React from "react";

const Page = async ({ searchParams }) => {
	const { page } = searchParams;

	const res = await getAllTermsByPage(page);
	const data = await res.json();

	if (!res.ok) throw new Error(data.message);

	return (
		<>
			<PageHeader title="Terms" />
			<Spacer />
			<TermList data={data} />
			<Spacer />
		</>
	);
};

export default Page;