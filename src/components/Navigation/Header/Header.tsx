import React from "react";
import clsx from "clsx";

import I from "@/components/Icons";

interface IHeaderProps {
	isHeader?: boolean;
}

export const Header: React.FC<IHeaderProps> = ({ isHeader }) => {
	if (!isHeader) {
		return null;
	}

	return <header className={clsx("")}></header>;
};

export default Header;
