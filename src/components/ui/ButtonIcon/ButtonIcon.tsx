import React from "react";
import clsx from "clsx";
import styles from "./ButtonIcon.module.css";
import Icon from "@/components/Icons";

type IButtonIconProps = {
	href?: string;
	icon: React.ReactNode;
	onPress?: () => void;
};

function _ButtonIcon({ href, icon, onPress }: IButtonIconProps) {
	return (
		<a href={href || "#"} className={clsx(styles.ButtonIcon)} onClick={onPress}>
			<span className={clsx(styles["ButtonIcon-icon"])}>{icon}</span>
			<span className={clsx("dot-bottom-right-2")}></span>
			<span className={clsx("dot-bottom-left-2")}></span>
		</a>
	);
}
export const ButtonIcon = Object.assign(_ButtonIcon, {});
