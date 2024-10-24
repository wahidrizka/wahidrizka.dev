import React, { useState } from "react";
import clsx from "clsx";
import styles from "./About.module.css";
import {
	AnimationProvider,
	Box,
	FAQ,
	Heading,
	SectionIntro,
	Text,
	UnorderedList,
} from "@primer/react-brand";

export const About: React.FC = () => {
	const [selectedTab, setSelectedTab] = useState<number>(1);

	const handleToggle = (tabIndex: number) => {
		setSelectedTab(tabIndex);
	};

	return (
		<section className={clsx("relative")}>
			<div className={clsx(styles["Section-container"])}>
				<div></div>
				<SectionIntro align="center" className={clsx(styles["Intro"])}>
					<SectionIntro.Heading as="h2" size="2">
						About
					</SectionIntro.Heading>
				</SectionIntro>
				<div
					className={clsx(styles["Spacer--medium"])}
					aria-hidden="false"
				></div>
				<div
					className={clsx(styles["ToggleContainer"])}
					role="tablist"
					aria-label="About options"
				>
					<div className={clsx(styles["Toggle"])}>
						<div
							className={clsx(styles["ToggleSelection"])}
							data-selected={selectedTab}
						></div>
						<button
							role="tab"
							className={clsx(
								styles["ToggleButton"],
								selectedTab === 1 && styles["isSelected"]
							)}
							onClick={() => handleToggle(1)}
						>
							Education
						</button>

						<button
							role="tab"
							className={clsx(
								styles["ToggleButton"],
								selectedTab === 2 && styles["isSelected"]
							)}
							onClick={() => handleToggle(2)}
						>
							Career
						</button>

						<button
							role="tab"
							className={clsx(
								styles["ToggleButton"],
								selectedTab === 3 && styles["isSelected"]
							)}
							onClick={() => handleToggle(3)}
						>
							Resume
						</button>
					</div>
				</div>
				<div
					className={clsx(styles["Spacer--large"])}
					aria-hidden="false"
				></div>

				{selectedTab === 1 && <div>Content 1</div>}
				{selectedTab === 2 && (
					<AnimationProvider>
						<Box
							animate="scale-in-up"
							padding={{ narrow: 28, regular: 32, wide: 40 }}
							backgroundColor="subtle"
							borderRadius="xlarge"
							className={clsx(styles["Career"])}
						>
							<Heading
								as="h3"
								size="5"
								className={clsx(styles["CareerHeading"])}
							>
								<span
									className={clsx(
										styles["CareerChip"],
										styles["CareerChip--red"]
									)}
								/>
								Oct 2023 - Oct 2024
							</Heading>
							<ol className={clsx(styles["CareerList"])}>
								<li className={clsx(styles["CareerItem"])}>
									<span className={clsx(styles["CareerItem-level"])}>
										Internship
									</span>
									<div className={clsx(styles["CareerItem-titleWrapper"])}>
										<Heading as="h4" size="6" className={clsx(styles[""])}>
											Halal Pro Web Design (HPWD)
										</Heading>
										<Text
											as="div"
											size="100"
											weight="medium"
											className={clsx(styles["CareerItem-label"])}
										>
											3 months - Remote
										</Text>
									</div>
									<Text
										as="p"
										className={clsx(styles["CareerItem-description"])}
									>
										Front-End Developer
									</Text>
								</li>
								<li>
									<FAQ
										className={clsx(
											styles["CareerItem-responsibilitiesWrapper"]
										)}
									>
										<FAQ.Item
											className={clsx(
												styles["CareerItem-responsibilitiesDetails"]
											)}
										>
											<FAQ.Question>
												<Text as="div" size="200" weight="semibold">
													Responsibilities
												</Text>
											</FAQ.Question>
											<FAQ.Answer>
												<UnorderedList>
													<UnorderedList.Item>
														Making standard web-based application interface
														designs more eye-catching and intuitive.
													</UnorderedList.Item>
													<UnorderedList.Item>
														Create various front page displays for web pages,
														especially for Ecommerce purposes.
													</UnorderedList.Item>
													<UnorderedList.Item>
														Product article design, where you have to add
														aesthetic elements to each existing product article.
													</UnorderedList.Item>
													<UnorderedList.Item>
														Refine HPWD web interface. There are several
														websites that need to be continuously revamped, both
														the main website (opencart.id), then the websites
														for overseas clients: hpwebdesign.io, opencart.id,
														etc.
													</UnorderedList.Item>
													<UnorderedList.Item>
														Involved in creating graphic elements such as Logos,
														Banners, and graphic elements required for a
														complete front page display.
													</UnorderedList.Item>
													<UnorderedList.Item>
														Creating an Ecommerce Theme (OpenCart).
													</UnorderedList.Item>
												</UnorderedList>
											</FAQ.Answer>
										</FAQ.Item>
									</FAQ>
								</li>
							</ol>
						</Box>
					</AnimationProvider>
				)}
				{selectedTab === 3 && <div>Content 3</div>}
			</div>
		</section>
	);
};
