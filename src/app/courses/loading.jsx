import { PageHeader } from "@/components/common/page-header/page-header";
import { Spacer } from "@/components/common/spacer/spacer";
import { Skeleton } from "primereact/skeleton";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Loading = () => {
	const courses = Array.from({ length: 20 }, (v, i) => i);
	return (
		<>
			<PageHeader title="Courses" />
			<Spacer />
			<Container>
				<Row xs={1} md={2} lg={3} xxl={4} className="g-5">
					{courses.map((item) => (
						<Col key={item}>
							<Skeleton height="20rem" animation="wave" />
						</Col>
					))}
				</Row>
			</Container>
			<Spacer />
		</>
	);
};
export default Loading;