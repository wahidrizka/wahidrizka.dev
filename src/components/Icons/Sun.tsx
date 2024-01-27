import React from "react";
import clsx from "clsx";

interface IIconProps {
	className?: string;
	color?: string;
	width?: string | number;
	height?: string | number;
}

const Sun: React.FC<IIconProps> = ({ className, color, width, height }) => (
	<svg
		className={clsx(className)}
		width={width || "24"}
		height={height || "24"}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M4 5H3V4H4V3H5V4H6V5H7V6H8V7H7V8H6V7H5V6H4V5Z"
			fill={color || "currentColor"}
		/>
		<path d="M6 11H1V13H6V11Z" fill={color || "currentColor"} />
		<path
			d="M7 17H8V18H7V19H6V20H5V21H4V20H3V19H4V18H5V17H6V16H7V17Z"
			fill={color || "currentColor"}
		/>
		<path d="M13 18H11V23H13V18Z" fill={color || "currentColor"} />
		<path d="M13 1H11V6H13V1Z" fill={color || "currentColor"} />
		<path d="M23 11H18V13H23V11Z" fill={color || "currentColor"} />
		<path
			d="M17 7H16V6H17V5H18V4H19V3H20V4H21V5H20V6H19V7H18V8H17V7Z"
			fill={color || "currentColor"}
		/>
		<path
			d="M21 19V20H20V21H19V20H18V19H17V18H16V17H17V16H18V17H19V18H20V19H21Z"
			fill={color || "currentColor"}
		/>
		<path
			d="M16 14H17V10H16V8H14V7H10V8H8V10H7V14H8V16H10V17H14V16H16V14ZM15 14H14V15H10V14H9V10H10V9H14V10H15V14Z"
			fill={color || "currentColor"}
		/>
	</svg>
);

export default Sun;
