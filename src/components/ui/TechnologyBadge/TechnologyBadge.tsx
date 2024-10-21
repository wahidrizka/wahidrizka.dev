import clsx from "clsx";
import StackIcon from "tech-stack-icons";
import styles from "./TechnologyBadge.module.css";
import React from "react";
import { BaseProps } from "@/components/component-helpers";
import { useAnimation } from "@primer/react-brand";

type TechnologyBadgeProps = {
	name: string;
} & React.HTMLAttributes<HTMLDivElement> &
	BaseProps<HTMLDivElement>;

export const TechnologyBadge: React.FC<TechnologyBadgeProps> = ({
	animate,
	name,
	className,
	style,
	...props
}) => {
	const { classes: animationClasses, styles: animationInlineStyles } =
		useAnimation(animate);
	return (
		<div
			className={clsx(
				animationClasses,
				styles["wr-Features-techStackButton"],
				className
			)}
			style={{ ...animationInlineStyles, ...style }}
			{...props}
		>
			<StackIcon name={name} className={clsx("size-10")} />
		</div>
	);
};
