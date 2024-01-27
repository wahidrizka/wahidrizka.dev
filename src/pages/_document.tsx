import clsx from "clsx";
import { Html, Head, Main, NextScript } from "next/document";

const AppDocument = () => {
	return (
		<Html lang="en">
			<Head>
				<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
			</Head>
			<body
				className={clsx(
					"antialiased bg-primaryBg dark:bg-primaryBgDark bg-home"
				)}
			>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

export default AppDocument;
