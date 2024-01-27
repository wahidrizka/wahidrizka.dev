import React from "react";
import clsx from "clsx";
import styles from "./ButtonIcon.module.css";
import Icon from "@/components/Icons";

type IButtonIconProps = {
	href: string;
};

function _ButtonIcon({ href }: IButtonIconProps) {
	return (
		<a href={href} className={clsx(styles.ButtonIcon)}>
			<span className={clsx(styles["ButtonIcon-icon"])}>
				<Icon.Github width={16} height={16} />
			</span>
			<span className={clsx("dot-bottom-right-2")}></span>
			<span className={clsx("dot-bottom-left-2")}></span>
		</a>
	);
}
export const ButtonIcon = Object.assign(_ButtonIcon, {});
