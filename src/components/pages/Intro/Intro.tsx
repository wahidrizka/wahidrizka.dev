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
	AnimationProvider,
} from "@primer/react-brand";
import Marquee from "react-fast-marquee";
import { technologies, titles } from "@/data";
import { TechnologyBadge } from "@/components";

export const Intro = () => {
	return (
		<div className={clsx(styles["Section-rounded"])}>
			<AnimationProvider>
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
														className={clsx("mb-2")}
													/>
												}
											>
												<Label
													size="large"
													color="blue-purple"
													className={clsx("mb-2")}
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
												<Text size="100" animate="fill-in-right">
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
															{titles.map((title, titleIndex) => (
																<Label
																	key={titleIndex}
																	size="large"
																	color="blue-purple"
																	className={clsx("mx-1")}
																>
																	{title.name}
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
												className={clsx(
													styles["wr-Features-techStackContainer"]
												)}
											>
												{technologies.map((technology, index) => (
													<TechnologyBadge
														key={index}
														name={technology.name}
														animate="scale-in-up"
													/>
												))}
											</Bento.Visual>
										</Bento.Item>
									</Bento>
								</Stack>
							</div>
						</Box>
					</Grid.Column>
				</Grid>
			</AnimationProvider>
		</div>
	);
};
