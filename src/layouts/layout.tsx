import { Header } from "@/components";
import { ThemeProvider } from "@primer/react-brand";

export function AppLayout({
	children,
	colorMode,
}: {
	children: React.ReactNode;
	colorMode: "light" | "dark" | "auto" | undefined;
}) {
	return (
		<>
			<ThemeProvider colorMode={colorMode || "light"} dir="ltr">
				<Header />
				<main className="font-mktg">{children}</main>
				<footer></footer>
			</ThemeProvider>
		</>
	);
}
