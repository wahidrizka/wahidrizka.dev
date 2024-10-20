import { NavBar, NavMobile } from "@/components";
import { NavigationItems } from "@/data";
import { ThemeProvider } from "@primer/react-brand";
import { DownloadIcon } from "@primer/styled-octicons";

export function AppLayout({
	children,
	colorMode,
}: {
	children: React.ReactNode;
	colorMode?: "light" | "dark" | "auto" | undefined;
}) {
	return (
		<>
			<ThemeProvider colorMode={colorMode || "light"} dir="ltr">
				<div>
					{/* NavDesktop */}
					<NavBar title="WAHIDRIZKA'24">
						{NavigationItems.map((item, itemIndex) => (
							<NavBar.Link key={itemIndex} href={item.url}>
								{item.title}
							</NavBar.Link>
						))}
						<NavBar.PrimaryAction href="#">Contact Me</NavBar.PrimaryAction>
						<NavBar.SecondaryAction href="#">
							<span style={{ marginRight: "0.75rem" }}>
								<DownloadIcon />
							</span>
							<span>Resume</span>
						</NavBar.SecondaryAction>
					</NavBar>

					{/* NavMobile */}
					<NavMobile></NavMobile>
				</div>
				<main className="font-mktg">{children}</main>
				<footer></footer>
			</ThemeProvider>
		</>
	);
}
