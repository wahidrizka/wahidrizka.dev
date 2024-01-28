import { AnchorNav } from "@/components/ui";
import clsx from "clsx";
import React from "react";

interface SidebarProps {
	open: boolean;
	setOpen: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, setOpen }) => {
	// Add your component logic here

	return (
		<>
			<aside
				className={clsx(
					"fixed top-0 w-64 min-h-screen p-3",
					"bg-primaryBg dark:bg-primaryBgDark",
					"border-l border-primaryBorder/30 dark:border-primaryBorderDark/30",
					"transition-all duration-700",
					"z-30",
					open ? "right-0" : "-right-full"
				)}
			>
				<nav
					className={clsx(
						"fixed top-0 w-56 min-h-screen",
						"flex flex-col items-end justify-between",
						"px-4 py-3",
						"bg-primaryBg dark:bg-primaryBgDark",
						"border-l border-primaryBorder/30 dark:border-primaryBorderDark/30",
						"shadow-xl shadow-primaryShadow",
						"transition-all duration-500",
						open ? "right-0" : "-right-full"
					)}
				>
					<div className={clsx("flex flex-col gap-y-3 items-end")}>
						<AnchorNav href="#">Home</AnchorNav>
						<AnchorNav href="#">Quest History</AnchorNav>
					</div>
				</nav>
			</aside>
			<div
				onClick={setOpen}
				className={clsx(
					"w-screen min-h-screen fixed top-0 left-0",
					"bg-primaryBg/30 dark:bg-primaryBgDark/30 backdrop-blur",
					"z-20 transition-all duration-300",
					open ? "block" : "hidden"
				)}
			/>
		</>
	);
};

export default Sidebar;
