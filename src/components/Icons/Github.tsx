import clsx from "clsx";
import React from "react";

interface IIconProps {
	className?: string;
	color?: string;
	width?: string | number;
	height?: string | number;
}

const Github: React.FC<IIconProps> = ({ className, color, width, height }) => (
	<svg
		className={clsx(className)}
		width={width || "24"}
		height={height || "24"}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M23 9V15H22V17H21V19H20V20H19V21H18V22H16V23H15V18H14V17H15V16H17V15H18V14H19V9H18V6H16V7H15V8H14V7H10V8H9V7H8V6H6V9H5V14H6V15H7V16H9V18H7V17H6V16H4V17H5V19H6V20H9V23H8V22H6V21H5V20H4V19H3V17H2V15H1V9H2V7H3V5H4V4H5V3H7V2H9V1H15V2H17V3H19V4H20V5H21V7H22V9H23Z"
			fill={color || "currentColor"}
		/>
	</svg>
);

export default Github;
