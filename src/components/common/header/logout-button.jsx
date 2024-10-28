"use client"
import { logoutAction } from "@/actions/auth-actions";
import { swConfirm } from "@/helpers/sweetalert";
import React from "react";
import { Button } from "react-bootstrap";

export const LogoutButton = ({ setShow }) => {
	const handleLogout = async () => {
		setShow(false);
		const res = await swConfirm("Are you sure to logout?");
		if (!res.isConfirmed) return;

        console.log("Button confirm")

		await logoutAction();
	};

	return (
		<Button
			className="nav-link btn-light text-start"
			onClick={() => handleLogout()}
		>
			LOGOUT
		</Button>
	);
};