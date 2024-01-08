import React from "react";
import clsx from "clsx";
import Link from "next/link";

import I from "@/components/Icons";

interface IHeaderProps {
	isHeader?: boolean;
}

const Header: React.FC<IHeaderProps> = ({ isHeader }) => {
	if (isHeader) {
		return (
			<header className={clsx("fixed top-0 left-0 w-full z-10 bg-white")}>
				<nav
					className={clsx(
						"max-w-screen-md mx-auto",
						"grid grid-cols-4",
						"gap-2 py-3 px-3",
						"xl:px-0",
						"border-b-2 border-black"
					)}
				>
					<div className={clsx("col-span-3 sm:col-span-2 flex items-center")}>
						<Link href={"#"} className={clsx("flex items-center space-x-2")}>
							<I.CharacterHooded className={clsx("w-6 h-6")} />
							<p>Wahid Rizka Fathurrohman</p>
							<span className={clsx("badge hidden", "xs:block")}>1.0.1</span>
						</Link>
					</div>
				</nav>
			</header>
		);
	}

	return <></>;
};

export default Header;
