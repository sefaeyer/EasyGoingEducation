import { auth } from "@/auth";
import React from "react";
import { UserMenu } from "./user-menu";
import { GuestMenu } from "./guest-menu";
import userMenuData from "@/helpers/data/user-menu.json";

export const AuthMenu = async () => {
	const session = await auth();

	const role = session?.user?.role;
	const userMenu = role ? userMenuData[role.toLowerCase()] : null;

	return (
		<>
			{role ? (
				<UserMenu session={session} userMenu={userMenu} />
			) : (
				<GuestMenu />
			)}
		</>
	);
};