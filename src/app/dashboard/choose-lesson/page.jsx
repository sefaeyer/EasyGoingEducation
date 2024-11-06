import { PageHeader } from "@/components/common/page-header/page-header";
import { Spacer } from "@/components/common/spacer/spacer";
import { AllProgramList } from "@/components/dashboard/chose-lesson/all-programs-list";
import {
	getAllPrograms,
	getAllProgramsByPage,
	getProgramsByStudent,
} from "@/services/program-service";
import React from "react";

const Page = async () => {
	const dataAllPrograms = (await getAllPrograms()).json();
	const dataStudentPrograms = (await getProgramsByStudent()).json();

	const [allPrograms, studentPrograms] = await Promise.all([
		dataAllPrograms,
		dataStudentPrograms,
	]);

	console.log(allPrograms[0])

	return (
		<>
			<PageHeader title="Choose Lesson" />
			<Spacer />
			<AllProgramList allPrograms={allPrograms} studentPrograms={studentPrograms}/>
			<Spacer />
		</>
	);
};

export default Page;