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
import { technologies } from "@/data";
import {
	GitHubIcon,
	GmailIcon,
	InstagramIcon,
	SparklesText,
	TechnologyBadge,
	TypingAnimation,
	LinkedInIcon,
} from "@/components";
import Link from "next/link";

export const Intro = () => {
	const jobTitles = [
		{ id: 1, name: "Full Stack Developer", color: "blue-purple" },
		{ id: 2, name: "Front-End Developer", color: "green-blue" },
		{ id: 3, name: "Software Engineer", color: "pink-blue" },
	];

	const socials = [
		{
			id: 1,
			name: "GitHub",
			url: "https://www.github.com/wahidrizka",
			icon: <GitHubIcon width={64} height={64} />,
		},
		{
			id: 2,
			name: "LinkedIn",
			url: "https://www.linkedin.com/in/wahidrizka",
			icon: <LinkedInIcon width={64} height={64} />,
		},
		{
			id: 3,
			name: "Instagram",
			url: "",
			icon: <InstagramIcon width={64} height={64} />,
		},
		{
			id: 4,
			name: "Email",
			url: "",
			icon: <GmailIcon width={64} height={64} />,
		},
	];

	return (
		<div
			data-color-mode="light"
			style={{ backgroundColor: "var(--base-color-scale-gray-1)" }}
			className={clsx(styles["Section-rounded"])}
		>
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

										<Bento.Item
											columnSpan={{ xsmall: 12, medium: 6 }}
											rowSpan={{ xsmall: 4 }}
										></Bento.Item>
										{/* Socials */}
										{socials.map((social, index) => (
											<Bento.Item
												key={index}
												columnSpan={{ xsmall: 6, medium: 3 }}
											>
												<Bento.Content
													padding={{ xsmall: "normal", xlarge: "spacious" }}
													horizontalAlign="center"
													verticalAlign="center"
													leadingVisual={
														<Link href={social.url}>
															<SparklesText sparklesCount={5}>
																{social.icon}
															</SparklesText>
														</Link>
													}
													style={{ paddingTop: "1rem" }}
												></Bento.Content>
											</Bento.Item>
										))}
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
