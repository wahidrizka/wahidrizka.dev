import { SocialTypes } from "@/types";
import { SmileyIcon } from "@primer/styled-octicons";

export const socials: SocialTypes[] = [
	{
		id: 1,
		name: "GitHub",
		url: "https://www.github.com/wahidrizka",
		// icon: <GitHubIcon width={64} height={64} />,
		icon: <SmileyIcon size={64} />,
	},
	{
		id: 2,
		name: "LinkedIn",
		url: "https://www.linkedin.com/in/wahidrizka",
		// icon: <LinkedInIcon width={64} height={64} />,
		icon: <SmileyIcon size={64} />,
	},
	{
		id: 3,
		name: "Instagram",
		url: "",
		// icon: <InstagramIcon width={64} height={64} />,
		icon: <SmileyIcon size={64} />,
	},
	{
		id: 4,
		name: "Email",
		url: "",
		// icon: <GmailIcon width={64} height={64} />,
		icon: <SmileyIcon size={64} />,
	},
];
