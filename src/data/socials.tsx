import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { GmailIcon } from "@/components/icons/GmailIcon";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { SocialTypes } from "@/types";

export const socials: SocialTypes[] = [
	{
		id: 1,
		name: "GitHub",
		url: "https://www.github.com/wahidrizka",
		icon: <GitHubIcon width={64} height={64} />,
	},
	{
		id: 2,
		name: "LinkedIn",
		url: "https://www.linkedin.com/in/wahidrizka",
		icon: <LinkedInIcon width={64} height={64} />,
	},
	{
		id: 3,
		name: "Instagram",
		url: "",
		icon: <InstagramIcon width={64} height={64} />,
	},
	{
		id: 4,
		name: "Email",
		url: "",
		icon: <GmailIcon width={64} height={64} />,
	},
];
