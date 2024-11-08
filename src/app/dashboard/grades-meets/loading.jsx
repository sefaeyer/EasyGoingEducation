import { LoadingList } from "@/components/common/loaders/loading-list";
import { PageHeader } from "@/components/common/page-header/page-header";
import { Spacer } from "@/components/common/spacer/spacer";
import React from "react";

const Loading = () => {
	return (
		<>
            <PageHeader title="Grades &amp; Meets" />
			<Spacer />
			<LoadingList colCount={7} />
			<Spacer />
		</>
	);
};

export default Loading;