import { SubNav } from "@primer/react-brand";
import clsx from "clsx";
import styles from "./Header.module.css";

export const Header = () => {
	return (
		<SubNav hasShadow className={clsx(styles["Template__SubNav"])}>
			<SubNav.Heading
				className={clsx(styles["SubNav__heading-container"])}
				href="#"
			>
				Wahid Rizka
			</SubNav.Heading>
			<SubNav.Link href="#">Creations</SubNav.Link>
			<SubNav.Link href="#">Contributions</SubNav.Link>
			<SubNav.Link href="#">Logs</SubNav.Link>
		</SubNav>
	);
};
