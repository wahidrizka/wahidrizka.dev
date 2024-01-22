import React from "react";

interface IIconProps {
	className?: string;
	color?: string;
}

const CharacterHooded: React.FC<IIconProps> = ({ className, color }) => (
	<svg
		className={className}
		width="16"
		height="16"
		viewBox="0 0 16 16"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g
			id="character-hooded"
			stroke="none"
			strokeWidth="1"
			fill="none"
			fillRule="evenodd"
		>
			<path
				d="M11,0 L11,1 L12,1 L12,2 L13,2 L13,4 L14,4 L14,8 L13,8 L13,9 L12,9 L12,10 L10,10 L10,11 L12,11 L12,10 L13,10 L13,12 L14,12 L14,15 L13,15 L13,16 L11,16 L11,15 L10,15 L10,14 L9,14 L9,13 L8,13 L8,15 L6,15 L6,16 L3,16 L3,15 L2,15 L2,12 L3,12 L3,10 L4,10 L4,9 L3,9 L3,8 L2,8 L2,4 L3,4 L3,2 L4,2 L4,1 L5,1 L5,0 L11,0 Z M8,10 L7,10 L7,13 L8,13 L8,10 Z M6,10 L4,10 L4,11 L6,11 L6,10 Z M10,3 L6,3 L6,4 L5,4 L5,5 L4,5 L4,8 L5,8 L5,9 L11,9 L11,8 L12,8 L12,5 L11,5 L11,4 L10,4 L10,3 Z M7,5 L7,7 L6,7 L6,5 L7,5 Z M10,5 L10,7 L9,7 L9,5 L10,5 Z"
				fill={color || "currentColor"}
			></path>
		</g>
	</svg>
);

export default CharacterHooded;
