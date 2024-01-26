import React from "react";
import { useTheme } from "next-themes";
import clsx from "clsx";
import styles from "./ToggleTheme.module.css";
import Icon from "@/components/Icons";

function _ToggleTheme() {
	const { systemTheme, theme, setTheme } = useTheme();
	const currentTheme = theme === "system" ? systemTheme : theme;

	return (
		<button
			className={clsx(styles.ToggleTheme)}
			onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
		>
			<span className={clsx(styles["ToggleTheme-icon"])}>
				{theme == "dark" ? (
					<Icon.Sun width={16} height={16} />
				) : (
					<Icon.Moon width={16} height={16} />
				)}
			</span>
			<span className={clsx("dot-bottom-right-2")}></span>
			<span className={clsx("dot-bottom-left-2")}></span>
		</button>
	);
}
export const ToggleTheme = Object.assign(_ToggleTheme, {});
