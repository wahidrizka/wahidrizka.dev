import React from "react";
import clsx from "clsx";

import styles from "./AnchorNav.module.css";
import Link from "next/link";

type AnchorNavProps = {
	href: string;
	isActive?: boolean;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

function _AnchorNav({ children, href, isActive, ...rest }: AnchorNavProps) {
	return (
		<Link
			className={clsx(styles.AnchorNav, styles["AnchorNav-link"])}
			href={href}
			data-active={isActive}
			{...rest}
		>
			<span className={clsx("body-pixels", styles["AnchorNav-label"])}>
				{children}
			</span>
		</Link>
	);
}
export const AnchorNav = Object.assign(_AnchorNav, {});
