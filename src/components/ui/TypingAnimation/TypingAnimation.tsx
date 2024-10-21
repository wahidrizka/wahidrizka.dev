import React, { useEffect, useState } from "react";

type TypingAnimationProps = {
	text: string;
	speed?: number;
};

export const TypingAnimation: React.FC<TypingAnimationProps> = ({
	text,
	speed = 100,
}) => {
	const [displayedText, setDisplayedText] = useState<string>("");
	const [index, setIndex] = useState<number>(0);

	useEffect(() => {
		if (index < text.length) {
			const timeout = setTimeout(() => {
				setDisplayedText((prev) => prev + text.charAt(index));
				setIndex(index + 1);
			}, speed);

			return () => clearTimeout(timeout); // Clear timeout ketika komponen di unmount
		}
	}, [index, text, speed]);
	return <span>{displayedText}</span>;
};
