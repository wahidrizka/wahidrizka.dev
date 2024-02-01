import React from "react";
import clsx from "clsx";

import I from "@/components/Icons";
import Link from "next/link";
import Image from "next/image";

// components
import {
	AnchorNav,
	ToggleTheme,
	ButtonIcon,
	Heading,
	Text,
} from "@/components/ui";
import { Sidebar } from "../Sidebar";

interface IHeaderProps {
	isHeader?: boolean;
}

export const Header: React.FC<IHeaderProps> = ({ isHeader }) => {
	const [openSidebar, setOpenSidebar] = React.useState<boolean>(false);

	if (!isHeader) {
		return null;
	}

	return (
		<>
			<header
				className={clsx(
					"fixed top-0 left-0 w-full z-10 ",
					"bg-primaryBg/30 dark:bg-primaryBgDark/30"
				)}
			>
				<nav
					className={clsx(
						"max-w-screen-lg mx-auto flex justify-between items-center",
						"gap-4 py-4 px-4 border-b-2 border-primaryBorder/30 dark:border-primaryBorderDark/30",
						"xl:px-0"
					)}
				>
					<div className={clsx("flex items-center gap-4")}>
						<Link href="/" className={clsx("flex items-center gap-2")}>
							<Image
								src="/sung-jinwoo.png"
								width={64}
								height={64}
								alt="Wahid Rizka"
							/>
							<Text size="300">WahidRizka</Text>
						</Link>
						{/* <div className={clsx("Badge--version")}>
						<p className={clsx("Badge--version-label")}>
							v{process.env.NEXT_PUBLIC_DESIGN_VERSION || "1.0.3"}
						</p>
						<span className="dot-bottom-right-1"></span>
						<span className="dot-bottom-left-1"></span>
					</div> */}
					</div>

					<div
						className={clsx(
							"items-center justify-center gap-6",
							// "hidden",
							"flex",
							"sm:flex"
						)}
					>
						<div className={clsx("hidden sm:flex gap-4 items-center")}>
							<AnchorNav href="#">
								<Text size="200">Home</Text>
							</AnchorNav>
							<AnchorNav href="#">
								<Text size="200">Quest History</Text>
							</AnchorNav>
						</div>

						<div className={clsx("flex gap-4 items-center")}>
							<ToggleTheme />
							<ButtonIcon
								href="https://github.com/wahidrizka"
								icon={<I.Github width={16} height={16} />}
							/>
							<div className={clsx("block", "sm:hidden")}>
								<ButtonIcon
									icon={<I.Bars width={16} height={16} />}
									onPress={() => setOpenSidebar(!openSidebar)}
								/>
							</div>
						</div>
					</div>
				</nav>
			</header>
			<Sidebar
				open={openSidebar}
				setOpen={() => setOpenSidebar((prev) => !prev)}
			/>
		</>
	);
};

export default Header;
