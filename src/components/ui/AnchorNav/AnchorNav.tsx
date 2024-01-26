import React from "react";
import clsx from "clsx";

import styles from "./AnchorNav.module.css";

type AnchorNavProps = {
	href: string;
	isActive?: boolean;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

function _AnchorNav({ children, href, isActive, ...rest }: AnchorNavProps) {
	return (
		<a
			className={clsx(styles.AnchorNav, styles["AnchorNav-link"])}
			href={href}
			{...rest}
		>
			<span className={clsx("body-pixels", styles["AnchorNav-label"])}>
				{children}
			</span>
		</a>
	);
}
export const AnchorNav = Object.assign(_AnchorNav, {});
