import "./styles/global.css";
import "@primer/react-brand/lib/css/main.css";
import "@primer/react-brand/fonts/fonts.css";
import { ThemeProvider } from "@primer/react-brand";
import { AppRoutes } from "./routes";
import { Link } from "react-router-dom";

function App() {
	return (
		<ThemeProvider>
			<div>
				<Link to={"/"}>Homepage</Link>
				<Link to={"/creations"}>Creations</Link>
				<Link to={"/contributions"}>Contributions</Link>
			</div>

			<div>
				<AppRoutes />
			</div>
		</ThemeProvider>
	);
}

export default App;
