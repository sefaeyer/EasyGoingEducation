import { config } from "@/helpers/config";
import React from "react";
import { Container } from "react-bootstrap";
import "./topbar.scss";
import { AuthMenu } from "./auth-menu";

export const Topbar = () => {
	return (
		<div className="topbar">
			<Container>
				<div className="slogan">
					<i className="pi pi-megaphone"></i> {config.project.slogan}
				</div>
				<AuthMenu/>
			</Container>
		</div>
	);
};