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
import { careers } from "@/data/careers";

export const About: React.FC = () => {
	const [selectedTab, setSelectedTab] = useState<number>(1);

	const handleToggle = (tabIndex: number) => {
		setSelectedTab(tabIndex);
	};

	return (
		<section className={clsx(styles["Backround"])}>
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

				{selectedTab === 1 && (
					<Box
						padding={{ narrow: 28, regular: 32, wide: 40 }}
						backgroundColor="subtle"
						borderRadius="xlarge"
						className={clsx(styles["Education"])}
					>
						<Heading
							as="h3"
							size="5"
							className={clsx(styles["EducationHeading"])}
						>
							<span
								className={clsx(
									styles["EducationChip"],
									styles["EducationChip--green"]
								)}
							/>
							Feb 2021 - Jul 2021
						</Heading>
						<ol className={clsx(styles["EducationList"])}>
							<li className={clsx(styles["EducationItem"])}>
								<span className={clsx(styles["EducationItem-level"])}>
									Non-formal Education
								</span>
								<div className={clsx(styles["EducationItem-titleWrapper"])}>
									<Heading as="h4" size="6" className={clsx(styles[""])}>
										Bangkit Academy 2021
									</Heading>
									<Text
										as="div"
										size="100"
										weight="medium"
										className={clsx(styles["EducationItem-label"])}
									>
										6 months - Remote
									</Text>
								</div>
								<Text
									as="p"
									className={clsx(styles["EducationItem-description"])}
								>
									Cloud Computing
								</Text>
							</li>
							<li></li>
						</ol>
					</Box>
				)}
				{selectedTab === 2 && (
					<div>
						{careers.map((career) => (
							<Box
								key={career.id}
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
											styles["CareerChip--blue"]
										)}
									/>
									{career.period}
								</Heading>
								<ol className={clsx(styles["CareerList"])}>
									<li className={clsx(styles["CareerItem"])}>
										<span className={clsx(styles["CareerItem-level"])}>
											{career.jobLevel}
										</span>
										<div className={clsx(styles["CareerItem-titleWrapper"])}>
											<Heading as="h4" size="6" className={clsx(styles[""])}>
												{career.company}
											</Heading>
											<Text
												as="div"
												size="100"
												weight="medium"
												className={clsx(styles["CareerItem-label"])}
											>
												{career.periodMonths} - {career.workSystem}
											</Text>
										</div>
										<Text
											as="p"
											className={clsx(styles["CareerItem-description"])}
										>
											{career.role}
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
														Responsibilities:
													</Text>
												</FAQ.Question>
												<FAQ.Answer>
													<UnorderedList variant="checked">
														{career.responsibilities.map((responsibility) => (
															<UnorderedList.Item
																key={responsibility.id}
																leadingVisualFill="var(--brand-color-success-fg)"
															>
																{responsibility.description}
															</UnorderedList.Item>
														))}
													</UnorderedList>
												</FAQ.Answer>
											</FAQ.Item>
										</FAQ>
									</li>
								</ol>
							</Box>
						))}
					</div>
				)}
				{selectedTab === 3 && <div>Content 3</div>}
			</div>
		</section>
	);
};
