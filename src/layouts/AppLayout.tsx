import React from "react";
import { Pixelify_Sans } from "next/font/google";
import { Header } from "@/components/Navigation";

const pixelifySans = Pixelify_Sans({ subsets: ["latin"] });

interface ILayoutProps {
	children: React.ReactNode;
	isHeader?: boolean;
	isFooter?: boolean;
}

const AppLayout: React.FC<ILayoutProps> = ({ children, isHeader }) => (
	<>
		<Header isHeader={isHeader} />
		<main className={pixelifySans.className}>{children}</main>
	</>
);

export default AppLayout;
