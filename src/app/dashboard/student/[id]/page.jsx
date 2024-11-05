import { PageHeader } from "@/components/common/page-header/page-header";
import { Spacer } from "@/components/common/spacer/spacer";
import { StudentEditForm } from "@/components/dashboard/student/student-edit-form";
import { getStudentById } from "@/services/student-service";
import { getAllAdvisorTeachers } from "@/services/teacher-service";
import React from "react";

const Page = async ({ params }) => {
	const dataStudent = (await getStudentById(params.id)).json();
	const dataTeachers = (await getAllAdvisorTeachers()).json();

	const [student, teachers] = await Promise.all([dataStudent, dataTeachers]);

	const advisorTeachers = teachers.map((item) => ({
		value: item.advisorTeacherId,
		label: `${item.teacherName} ${item.teacherSurname}`,
	}));

	console.log(student)


	return (
		<>
			<PageHeader title="Edit Teacher" />
			<Spacer />
			<StudentEditForm
				advisorTeachers={advisorTeachers}
				user={student}
			/>
			<Spacer />
		</>
	);
};

export default Page;