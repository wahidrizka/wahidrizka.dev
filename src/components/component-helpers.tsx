import { Ref } from "react";

export type BaseProps<T> = {
	className?: string;
	id?: string;
	ref?: Ref<T>;
};
