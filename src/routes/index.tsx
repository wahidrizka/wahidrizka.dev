import { Route, Routes } from "react-router-dom";
import { Contributions, Home } from "../pages";
import { Creations } from "../pages/Creations/Creations";

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/creations" element={<Creations />} />
			<Route path="/contributions" element={<Contributions />} />
		</Routes>
	);
};
