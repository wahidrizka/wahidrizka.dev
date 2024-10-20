import React from "react";
import clsx from "clsx";
import styles from "./Intro.module.css";
import {
	Bento,
	Box,
	Grid,
	Stack,
	Text,
	Image,
	Button,
	Avatar,
	Label,
} from "@primer/react-brand";

export const Intro = () => {
	const technologies = [
		{ id: 1 },
		{ id: 2 },
		{ id: 3 },
		{ id: 4 },
		{ id: 5 },
		{ id: 6 },
		{ id: 7 },
		{ id: 8 },
		{ id: 9 },
	];

	const socials = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
	return (
		<div
			data-color-mode="light"
			style={{ backgroundColor: "var(--base-color-scale-gray-1)" }}
			className={clsx(styles["Section-rounded"])}
		>
			<Grid>
				<Grid.Column>
					<Box
						paddingBlockStart={{ narrow: 64, regular: 128 }}
						paddingBlockEnd={{ narrow: 64, regular: 128 }}
						marginBlockEnd={{ narrow: 32, regular: 64 }}
					>
						<div className={clsx(styles["Center-until-medium"])}>
							<Stack gap="spacious" padding="none">
								<Bento>
									<Bento.Item
										columnSpan={{
											xsmall: 12,
											large: 6,
										}}
										rowSpan={{
											xsmall: 4,
										}}
									>
										<Bento.Content
											horizontalAlign="center"
											verticalAlign="center"
											className={clsx(styles["wr-BentoItem-content"])}
											leadingVisual={
												<Image
													src="/favicon.ico"
													alt="wahidrizka-mark"
													width={64}
													height={64}
													style={{ marginBottom: "0.5rem" }}
												/>
											}
										>
											<Label
												color="blue-purple"
												style={{ marginBottom: "0.5rem" }}
											>
												Front-End Developer
											</Label>
											<Bento.Heading
												size="5"
												weight="bold"
												style={{ marginTop: "0.5rem" }}
											>
												Wahid Rizka Fathurrohman
											</Bento.Heading>
											<Text>
												Fullstack Developer with a passion for Software
												Engineering, combining beautiful and functional in
												front-end user interfaces and solid Model View
												Controller (MVC) approach in back-end development.
											</Text>
										</Bento.Content>
									</Bento.Item>
									<Bento.Item
										columnSpan={{
											xsmall: 12,
											large: 6,
										}}
										rowSpan={{
											xsmall: 1,
										}}
									></Bento.Item>
									<Bento.Item
										columnSpan={{
											xsmall: 12,
											large: 6,
										}}
										rowSpan={{
											xsmall: 2,
											large: 3,
										}}
									></Bento.Item>
								</Bento>
							</Stack>
						</div>
					</Box>
				</Grid.Column>
			</Grid>
		</div>
	);
};
