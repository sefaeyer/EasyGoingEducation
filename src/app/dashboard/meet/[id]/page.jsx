import { PageHeader } from "@/components/common/page-header/page-header";
import { Spacer } from "@/components/common/spacer/spacer";
import { MeetEditForm } from "@/components/dashboard/meet/meet-edit-form";
import { getMeetById } from "@/services/meet-service";
import { getAllStudentsByAdvisor } from "@/services/student-service";
import React from "react";

const Page = async ({ params }) => {
	const dataMeet = (await getMeetById(params.id)).json();
	const dataStudents = (await getAllStudentsByAdvisor()).json();

	const [meet, students] = await Promise.all([dataMeet, dataStudents]);

	const studentsOfAdvisor = students.map((item) => ({
		value: item.userId,
		label: `${item.name} ${item.surname}`,
	}));

	const studentsOfMeet = meet.object.students.map((item) => item.id);

	return (
		<>
			<PageHeader title="Edit Manager" />
			<Spacer />
			<MeetEditForm
				meet={meet.object}
				studentsOfAdvisor={studentsOfAdvisor}
				studentsOfMeet={studentsOfMeet}
			/>
			<Spacer />
		</>
	);
};

export default Page;