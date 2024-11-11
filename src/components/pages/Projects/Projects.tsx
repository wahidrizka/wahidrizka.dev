import clsx from "clsx";
import styles from "./Projects.module.css";
import { Bento } from "@primer/react-brand";

export const Projects = () => {
	return (
		<div
			className={clsx(
				styles["Section-container"],
				styles["hasDarkGradientBorder"]
			)}
		>
			<div className={clsx(styles["Spacer"])} aria-hidden />
			<div>
				<Bento className={clsx(styles["Bento"])}>
					<Bento.Item
						flow={{ large: "column" }}
						className={clsx(
							styles["BentoItem"],
							styles["BentoItem1"],
							styles["gradientBorder"]
						)}
					></Bento.Item>

					<Bento.Item
						columnSpan={{ xsmall: 12, large: 6 }}
						rowSpan={2}
						flow="row"
						className={clsx(
							styles["BentoItem"],
							styles["BentoItem2"],
							styles["gradientBorder"]
						)}
					></Bento.Item>

					<Bento.Item
						columnSpan={{ xsmall: 12, large: 6 }}
						rowSpan={2}
						flow="row"
						className={clsx(
							styles["BentoItem"],
							styles["BentoItem2"],
							styles["gradientBorder"]
						)}
					></Bento.Item>
				</Bento>
			</div>
			<div className={clsx(styles["Spacer"])} aria-hidden />
		</div>
	);
};
