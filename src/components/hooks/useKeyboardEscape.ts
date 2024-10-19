import { useCallback, useEffect } from "react";

export function useKeyboardEscape(handler: () => void) {
	const handleKeyboardEscape = useCallback(
		(event: { key: string }) => {
			if (event.key === "Escape") {
				handler();
			}
		},
		[handler]
	);

	useEffect(() => {
		document.addEventListener("keydown", handleKeyboardEscape, false);

		return () => {
			document.removeEventListener("keydown", handleKeyboardEscape, false);
		};
	}, [handleKeyboardEscape]);
}
