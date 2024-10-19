import { NavigationItem } from "@/types";

export const NavigationItems: NavigationItem[] = [
	{
		id: "all",
		url: "/all",
		title: "All",
		icon: false,
		hidden: false,
	},
	{
		id: "about",
		url: "/about",
		title: "About",
		icon: false,
		hidden: false,
	},
	{
		id: "work",
		url: "/work",
		title: "Work",
		icon: false,
		hidden: true,
	},
	{
		id: "projects",
		url: "/projects",
		title: "Projects",
		icon: false,
		hidden: true,
	},
];
