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
	Label,
} from "@primer/react-brand";
import Marquee from "react-fast-marquee";
import StackIcon from "tech-stack-icons";
import { technologies } from "@/data";

export const Intro = () => {
	const jobTitles = [
		{ id: 1, name: "Full Stack Developer", color: "blue-purple" },
		{ id: 2, name: "Front-End Developer", color: "green-blue" },
		{ id: 3, name: "Software Engineer", color: "pink-blue" },
	];
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
									{/* Intro */}
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
											padding={{ xsmall: "normal", xlarge: "spacious" }}
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
												size="6"
												weight="bold"
												variant="muted"
												style={{ marginTop: "0.5rem" }}
											>
												Wahid Rizka Fathurrohman
											</Bento.Heading>
											<Text size="100">
												Fullstack Developer with a passion for Software
												Engineering, combining beautiful and functional in
												front-end user interfaces and solid Model View
												Controller (MVC) approach in back-end development.
											</Text>
										</Bento.Content>
									</Bento.Item>

									{/* Title */}
									<Bento.Item
										columnSpan={{
											xsmall: 12,
											large: 6,
										}}
										rowSpan={{
											xsmall: 1,
										}}
									>
										<Bento.Content
											verticalAlign="center"
											horizontalAlign="center"
											className={clsx("px-1")}
											leadingVisual={
												<>
													<Marquee autoFill>
														{jobTitles.map((jobTitle, index) => (
															<Label
																key={index}
																color="blue-purple"
																className={clsx("mx-1")}
															>
																{jobTitle.name}
															</Label>
														))}
													</Marquee>
												</>
											}
										></Bento.Content>
									</Bento.Item>

									{/* Technologies */}
									<Bento.Item
										columnSpan={{
											xsmall: 12,
											large: 6,
										}}
										rowSpan={{
											xsmall: 2,
											large: 3,
										}}
									>
										<Bento.Content
											padding={{ xsmall: "normal", xlarge: "spacious" }}
											horizontalAlign="center"
											verticalAlign="center"
										>
											<Text size="300" weight="bold">
												Technology that I currently ❤️ and use
											</Text>
										</Bento.Content>

										<Bento.Visual
											padding={{ xsmall: "normal", xlarge: "spacious" }}
											fillMedia={false}
											className={clsx(styles["wr-Features-techStackContainer"])}
										>
											{technologies.map((technology, index) => (
												<div
													key={index}
													className={clsx(
														styles["wr-Features-techStackButton"]
													)}
												>
													<StackIcon
														name={technology.name}
														className={clsx("size-10")}
													/>
												</div>
											))}
										</Bento.Visual>
									</Bento.Item>
								</Bento>
							</Stack>
						</div>
					</Box>
				</Grid.Column>
			</Grid>
		</div>
	);
};
