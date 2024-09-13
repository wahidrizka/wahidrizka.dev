import "./styles/global.css";
import "@primer/react-brand/lib/css/main.css";
import "@primer/react-brand/fonts/fonts.css";
import "@primer/css/index.scss";
import { ThemeProvider } from "@primer/react-brand";
import { AppRoutes } from "./routes";

function App() {
	return (
		<ThemeProvider>
			<AppRoutes />
		</ThemeProvider>
	);
}

export default App;
