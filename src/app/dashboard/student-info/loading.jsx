import { LoadingList } from "@/components/common/loaders/loading-list";
import { PageHeader } from "@/components/common/page-header/page-header";
import { Spacer } from "@/components/common/spacer/spacer";
import React from "react";

const Loading = () => {
	return (
		<>
            <PageHeader title="Student Info" />
			<Spacer />
			<LoadingList colCount={8} />
			<Spacer />
		</>
	);
};

export default Loading;