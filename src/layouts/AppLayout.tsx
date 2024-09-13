import { Header } from "../components/navigation";

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main>
			<Header />
			{children}
		</main>
	);
};
