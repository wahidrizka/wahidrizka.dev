import React from "react";

export type NavigationItem = {
	id: string;
	url: string;
	title: string;
	icon?: React.ReactNode;
	hidden: boolean;
};
