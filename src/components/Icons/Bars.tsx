import clsx from "clsx";
import React from "react";

interface IIconProps {
	className?: string;
	color?: string;
	width?: string | number;
	height?: string | number;
}

const Bars: React.FC<IIconProps> = ({ className, color, width, height }) => (
	<svg
		className={clsx(className)}
		width={width || "24"}
		height={height || "24"}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M23 11H1V13H23V11Z" fill={color || "currentColor"} />
		<path d="M23 19H1V21H23V19Z" fill={color || "currentColor"} />
		<path d="M23 3H1V5H23V3Z" fill={color || "currentColor"} />
	</svg>
);

export default Bars;
