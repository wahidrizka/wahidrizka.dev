import React from "react";
import clsx from "clsx";

import I from "@/components/Icons";
import Link from "next/link";
import Image from "next/image";

// components
import { AnchorNav, ToggleTheme } from "@/components/ui";

interface IHeaderProps {
	isHeader?: boolean;
}

export const Header: React.FC<IHeaderProps> = ({ isHeader }) => {
	if (!isHeader) {
		return null;
	}

	return (
		<header
			className={clsx(
				"fixed top-0 left-0 w-full z-10 bg-white",
				"backdrop-blur supports-backdrop-blur:bg-white/95 dark:bg-slate-900/75"
			)}
		>
			<nav
				className={clsx(
					"max-w-screen-lg mx-auto flex justify-between items-center",
					"gap-4 py-4 px-4 border-b-2 border-slate-900/10 dark:border-slate-50/[0.06]",
					"xl:px-0",
					"text-slate-700 dark:text-slate-200"
				)}
			>
				<div className={clsx("flex items-center gap-4")}>
					<Link href="/" className={clsx("flex flex-row items-center gap-2")}>
						{/* <I.Cat className="w-5 h-5 mb-1 stroke-white dark:stroke-slate-900" /> */}
						<p className="text-sm body-pixels">Wahid Rizka Fathurrohman</p>
					</Link>
					<div className={clsx("Badge--version")}>
						<p className={clsx("Badge--version-label")}>
							v{process.env.NEXT_PUBLIC_DESIGN_VERSION || "1.0.3"}
						</p>
						<span className="dot-bottom-right-1"></span>
						<span className="dot-bottom-left-1"></span>
					</div>
				</div>

				<div
					className={clsx(
						"col-span-1 hidden items-center justify-center gap-6",
						"sm:flex"
					)}
				>
					<div className={clsx("flex gap-4 items-center")}>
						<AnchorNav href="#">Home</AnchorNav>
						<AnchorNav href="#">Quest History</AnchorNav>
					</div>
					<ToggleTheme />
				</div>
			</nav>
		</header>
	);
};

export default Header;
