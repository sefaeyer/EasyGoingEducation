"use client"; // Error boundaries must be Client Components

import { Spacer } from "@/components/common/spacer/spacer";
import Image from "next/image";
import { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

export default function Error({ error, reset }) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<div>
			<Spacer />
			<Container>
				<Row className="align-items-center">
					<Col md={6}>
						<Image
							src="/img/errors/error.png"
							width={500}
							height={500}
							alt="error"
							className="img-fluid"
						/>
					</Col>
					<Col md={6} className="text-center text-md-start">
						<h2>Something went wrong</h2>
						<p>
							An unexpected error has occurred. We apologize for
							the inconvenience. Our technical team has been
							notified and is working to resolve the issue. Please
							try again later. If the problem persists, feel free
							to contact our support team for assistance. Thank
							you for your understanding.
						</p>

						<Button
							variant="outline-primary"
							onClick={
								// Attempt to recover by trying to re-render the segment
								() => reset()
							}
						>
							Try again
						</Button>
					</Col>
				</Row>
			</Container>
			<Spacer />
		</div>
	);
}