import React from "react";
import clsx from "clsx";

import I from "@/components/Icons";
import Link from "next/link";
import Image from "next/image";

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
					"max-w-screen-lg mx-auto flex",
					"gap-4 py-4 px-4 border-b-2 border-slate-900/10 dark:border-slate-50/[0.06]",
					"xl:px-0",
					"text-slate-700 dark:text-slate-200"
				)}
			>
				<div className={clsx("flex items-center")}>
					<Link href="/" className={clsx("flex flex-row items-center gap-2")}>
						<I.Cat className="w-5 h-5 mb-1 stroke-white dark:stroke-slate-900" />
						<p className="text-sm">Wahid Rizka Fathurrohman</p>
					</Link>
				</div>
				<div className={clsx("Badge--version")}>
					<p className={clsx("Badge--version-label")}>
						v{process.env.NEXT_PUBLIC_DESIGN_VERSION || "1.0.3"}
					</p>
				</div>
			</nav>
		</header>
	);
};

export default Header;
