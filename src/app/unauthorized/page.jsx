import { PageHeader } from "@/components/common/page-header/page-header";
import { Spacer } from "@/components/common/spacer/spacer";
import React from "react";

export const metadata = {
	title: "Unauthorized",
};

const Page = () => {
	return (
		<>
			<PageHeader title="Unauthorized" />
			<Spacer />
			UNAUTHORIZED
			<Spacer />
		</>
	);
};

export default Page;