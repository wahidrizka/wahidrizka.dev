import Head from "next/head";

interface ISEOProps {
	title: string;
	description?: string;
	url?: string;
}

export default function SEO({ title, description, url }: ISEOProps) {
	return (
		<Head>
			<title>{title}</title>
			<link rel="canonical" href={url} />
			<meta name="title" content={title} />
			<meta name="description" content={description} />
			<meta name="author" content="Wahid Rizka Fathurrohman" />
			<meta
				name="keywords"
				content="Front-end, Web Developer, Web Design, Portfolio Website, Portfolio Next JS"
			/>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1, maximum-scale=1"
			/>
		</Head>
	);
}
