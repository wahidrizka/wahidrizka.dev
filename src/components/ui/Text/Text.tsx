import React, { PropsWithChildren, useMemo } from "react";
import clsx from "clsx";
import { BaseProps } from "@/components/component-helpers";
import { styles } from "./Text.styles";

export const TextTags = ["p", "span"] as const;
export const TextSizes = ["300", "200", "100"] as const;
export const TextWeights = ["bold", "semibold", "medium", "regular"] as const;
export const TextShadows = [
	"extralarge",
	"large",
	"medium",
	"small",
	"extrasmall",
	"2extrasmall",
] as const;

export const defaultTextTag = TextTags[1];
export const defaultTextSize = TextSizes[0];
export const defaultTextShadow = TextShadows[2];

export type TextWeightVariants = (typeof TextWeights)[number];

export type ResponsiveWeightMap = {
	narrow?: TextWeightVariants;
	regular?: TextWeightVariants;
	wide?: TextWeightVariants;
};

type RestrictedPolymorphism =
	| (React.HTMLAttributes<HTMLParagraphElement> &
			BaseProps<HTMLParagraphElement> & { as?: "p" })
	| (React.HTMLAttributes<HTMLSpanElement> &
			BaseProps<HTMLSpanElement> & { as?: "span" });

type TextTags = {
	/**
	 * Applieas the underlying HTML element
	 */
	as?: (typeof TextTags)[number];
} & RestrictedPolymorphism;

export type TextProps = {
	/**
	 * specify the text size
	 */
	size?: (typeof TextSizes)[number];
	/**
	 * specify the text shadow
	 */
	shadow?: (typeof TextShadows)[number];
	/**
	 * specify the text weight
	 */
	weight?: TextWeightVariants | ResponsiveWeightMap;
	/**
	 * Specify the text alignment.
	 * Corresponds to the CSS `text-align` property.
	 * Note: Only applies to block elements.
	 */
	align?: "start" | "center" | "end";
} & TextTags;

export function Text({
	align,
	as = defaultTextTag,
	className,
	children,
	size = defaultTextSize,
	shadow = defaultTextShadow,
	weight,
	style,
	...rest
}: PropsWithChildren<TextProps>) {
	const weightClass = useMemo(() => {
		if (!weight) return null;

		return typeof weight === "string"
			? styles[`Text--weight-${weight}` as keyof typeof styles]
			: Object.keys(weight)
					.map((viewport) => {
						return styles[
							`Text-${viewport}--weight-${
								weight[viewport as keyof ResponsiveWeightMap]
							}` as keyof typeof styles
						];
					})
					.join(" ");
	}, [weight]);

	const textClassList = clsx(
		styles.Text,
		styles[`Text--${size}` as keyof typeof styles],
		weight && weightClass,
		align && styles[`Text-align--${align}` as keyof typeof styles],
		!shadow &&
			styles[`Text--shadow-${defaultTextShadow}` as keyof typeof styles],
		shadow && styles[`Text--shadow-${shadow}`],
		className
	);

	if (as === "p") {
		return (
			<p
				className={textClassList}
				style={style}
				{...(rest as BaseProps<HTMLParagraphElement>)}
			>
				{children}
			</p>
		);
	}

	return (
		<span className={textClassList} style={{ ...style }} {...rest}>
			{children}
		</span>
	);
}
