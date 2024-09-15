import { Image, Text } from "@primer/react-brand";
import React from "react";
import clsx from "clsx";

import styles from "./TechStackCard.module.css";

interface TechStackCardProps {
	techName: string;
	techIcon: string;
}

export const TechStackCard: React.FC<TechStackCardProps> = ({
	techName,
	techIcon,
}) => {
	return (
		<div
			className={clsx(
				styles["Tech-Stack--module__cards-column"],
				"col-3 flex-shrink-0 my-3 mx-2",
				styles["Tech-Stack--module__card"]
			)}
		>
			<div className="d-block no-underline color-fg-default color-bg-subtle border rounded px-4 py-3 mb-4">
				<div className="d-flex flex-justify-between flex-items-center">
					<Text align="start" as="span" size="100" className="d-block">
						{techName}
					</Text>

					<Image
						style={{ filter: "none", width: "32px", height: "32px" }}
						src={`https://skillicons.dev/icons?i=${techIcon}`}
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};
