import React from "react";

interface IIconProps {
	className?: string;
	color?: string;
	width?: string | number;
	height?: string | number;
}

const Moon: React.FC<IIconProps> = ({ className, color, width, height }) => (
	<svg
		className={className}
		width={width || "24"}
		height={height || "24"}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M22 17V19H21V20H20V21H18V22H16V23H10V22H8V21H6V20H5V19H4V17H3V15H2V9H3V7H4V5H5V4H6V3H8V2H10V1H15V2H13V3H11V4H10V6H9V8H8V12H9V14H10V16H11V17H13V18H15V19H19V18H21V17H22Z"
			fill={color || "currentColor"}
		/>
	</svg>
);

export default Moon;
