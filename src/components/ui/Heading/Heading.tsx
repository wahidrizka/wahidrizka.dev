import React, {
	PropsWithChildren,
	Ref,
	forwardRef,
	useCallback,
	useMemo,
} from "react";
import { styles } from "./Heading.style";
import clsx from "clsx";
import { BaseProps } from "@/components/component-helpers";

export const HeadingSizes = ["1", "2", "3"] as const;
export const HeadingTags = ["h1", "h2", "h3"] as const;

export const HeadingWeights = [
	"bold",
	"semibold",
	"medium",
	"regular",
] as const;

export const HeadingLetterSpacing = [
	"condensed",
	"normal",
	"expanded",
] as const;

export const HeadingShadows = ["extralarge", "large", "base"] as const;

export const defaultHeadingTag = HeadingTags[2];
export const defaultHeadingShadow = HeadingShadows[0];

type HeadingWeightVariants = (typeof HeadingWeights)[number];
type HeadingLetterSpacingVariants = (typeof HeadingLetterSpacing)[number];

type ResponsiveLetterSpacingMap = {
	narrow?: HeadingLetterSpacingVariants;
	regular?: HeadingLetterSpacingVariants;
	wide?: HeadingLetterSpacingVariants;
};

type ResponsiveWeightMap = {
	narrow?: HeadingWeightVariants;
	regular?: HeadingWeightVariants;
	wide?: HeadingWeightVariants;
};

export const classMap = {
	h1: HeadingSizes[0],
	h2: HeadingSizes[1],
	h3: HeadingSizes[2],
};

export type HeadingProps = {
	as?: (typeof HeadingTags)[number];
	size?: (typeof HeadingSizes)[number];
	shadow?: (typeof HeadingShadows)[number];
	weight?: HeadingWeightVariants | ResponsiveWeightMap;
	letterSpacing?: HeadingLetterSpacingVariants | ResponsiveLetterSpacingMap;
} & React.HTMLAttributes<HTMLHeadingElement> &
	BaseProps<HTMLHeadingElement>;

export const Heading = forwardRef(
	(
		{
			className,
			children,
			as = defaultHeadingTag,
			shadow = defaultHeadingShadow,
			size,
			letterSpacing,
			weight,
			style,
			...rest
		}: PropsWithChildren<HeadingProps>,
		ref: Ref<HTMLHeadingElement>
	) => {
		const buildClass = (type: string, value: any) => {
			if (!value) return null;
			return typeof value === "string"
				? styles[`Heading--${type}-${value}` as keyof typeof styles]
				: Object.keys(value)
						.map((viewport) => {
							return styles[
								`Heading-${viewport}--${type}-${value[viewport]}` as keyof typeof styles
							];
						})
						.join(" ");
		};

		const weightClass = useMemo(() => buildClass("weight", weight), [weight]);
		const letterSpacingClass = useMemo(
			() => buildClass("letter-spacing", letterSpacing),
			[letterSpacing]
		);

		const headingClassList = clsx(
			styles.Heading,
			!size && styles[`Heading--${classMap[as]}` as keyof typeof styles],
			size && styles[`Heading--${size}`],
			weight && weightClass,
			letterSpacing && letterSpacingClass,
			!shadow &&
				styles[
					`Heading--shadow-${defaultHeadingShadow}` as keyof typeof styles
				],
			shadow && styles[`Heading--shadow-${shadow}`],
			className
		);

		const HeadingComponent = useCallback(
			({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
				if (!HeadingTags.includes(as)) {
					console.error(
						`Heading: 'as' prop must be one of ${HeadingTags.join(", ")}`
					);
					return null;
				}

				return React.createElement(as, props, children);
			},
			[as, children]
		);

		return (
			<HeadingComponent
				className={headingClassList}
				style={{ ...style }}
				ref={ref}
				{...rest}
			>
				{children}
			</HeadingComponent>
		);
	}
);
