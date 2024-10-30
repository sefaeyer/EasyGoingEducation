"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Button, Nav, Offcanvas } from "react-bootstrap";
import { ButtonLogout } from "./button-logout";

export const UserMenu = ({ session, userMenu }) => {
	const [show, setShow] = useState(false);
	const router = useRouter();

	const { name } = session.user;

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const getUserName = () => (
		<>
			<i className="pi pi-user"></i> {name}
		</>
	);

	const handleNavigate = (link) => {
		setShow(false);
		router.push(link);
	};

	return (
		<>
			<Button variant="primary" onClick={handleShow}>
				{getUserName()}
			</Button>

			<Offcanvas show={show} onHide={handleClose}>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>{getUserName()}</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<Nav className="flex-column">
						{userMenu.map((item) => (
							<Button
								key={item.title}
								className="nav-link btn-light text-start"
								onClick={() => handleNavigate(item.link)}
							>
								{item.title}
							</Button>
						))}

						<ButtonLogout setShow={setShow} />
					</Nav>
				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
};