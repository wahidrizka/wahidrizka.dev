import { SubNav } from "@primer/react-brand";
import React from "react";

export const Header: React.FC = () => {
	return (
		<SubNav hasShadow>
			<SubNav.Heading
				as="span"
				href="#"
				style={{ display: "flex", alignItems: "center", gap: "8px" }}
			>
				Wahid Rizka
			</SubNav.Heading>
			<SubNav.Link href="#" aria-current="page">
				Home
			</SubNav.Link>
			<SubNav.Link href="#">Portfolio</SubNav.Link>
			<SubNav.Link href="#">About</SubNav.Link>
			<SubNav.Link href="#">Contact</SubNav.Link>
		</SubNav>
	);
};
