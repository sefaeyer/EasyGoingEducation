"use client";
import { swConfirm } from "@/helpers/sweetalert";
import React from "react";
import { Button } from "react-bootstrap";
import { signOut } from "next-auth/react";

export const ButtonLogout = ({ setShow }) => {
	const handleLogout = async () => {
		setShow(false);
		const res = await swConfirm("Are you sure to logout?");
		if (!res.isConfirmed) return;

		await signOut({ redirectTo: "/" });
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