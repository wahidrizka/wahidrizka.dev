import React from "react";
import { Header } from "@/components/Navigation";

interface ILayoutProps {
	children: React.ReactNode;
	isHeader?: boolean;
	isFooter?: boolean;
}

const AppLayout: React.FC<ILayoutProps> = ({ children, isHeader }) => (
	<>
		<Header isHeader={isHeader} />
		<div className="font-pixels">{children}</div>
	</>
);

export default AppLayout;
