import React from "react";
import Head from "next/head";

interface SEOProps {
	title: string;
	description?: string;
}

export const SEO: React.FC<SEOProps> = ({ title, description }) => {
	return (
		<Head>
			<title>{title}</title>
			{description && <meta name="description" content={description} />}
			<link rel="icon" href="favicon.ico" />
		</Head>
	);
};
