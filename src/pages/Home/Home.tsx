import { Box, Grid, Hero, Image } from "@primer/react-brand";
import { AppLayout } from "../../layouts";

export const Home = () => {
	return (
		<AppLayout>
			<div className="overflow-hidden">
				<Grid>
					<Grid.Column>
						<div className="position-relative">
							<div className="ContentfulBackgroundImage-module__imageContainer">
								<Image
									as="picture"
									alt=""
									role="presentational"
									src="/Hero_BG.webp?w=2560&fm=jpg&fl=progressive"
									sources={[
										{
											srcset:
												"/Hero_BG.webp?w=480&fm=webp 1x, /Hero_BG.webp?w=960&fm=webp 2x",
											media: "(max-width: 480px)",
										},
										{
											srcset:
												"/Hero_BG.webp?w=768&fm=webp 1x, /Hero_BG.webp?w=1536&fm=webp 2x",
											media: "(max-width: 768px)",
										},
										{
											srcset:
												"/Hero_BG.webp?w=1280&fm=webp 1x, /Hero_BG.webp?w=2560&fm=webp 2x",
											media: "(max-width: 1280px)",
										},
										{
											srcset: "/Hero_BG.webp?fm=webp",
											media: "(min-width: 1280px)",
										},
									]}
								/>
							</div>
							<div
								className="position-relative"
								style={{ backgroundColor: "transparent" }}
							>
								<Box paddingBlockStart={64} paddingBlockEnd={64}>
									<div className="ContentfulHero-module__contentfulHeroContainer">
										<Hero className="pb-0">
											<Hero.Label>Full Stack Web Developer</Hero.Label>
											<Hero.Heading size="3">
												Wahid Rizka Fathurrohman
											</Hero.Heading>
											<Hero.Description>
												I am a Fullstack Developer with a strong interest in
												Software Engineering.
											</Hero.Description>
											<Hero.Description>
												I combine creativity in building frontend applications
												with a solid approach to using the Model-View-Controller
												(MVC) pattern for backend development.
											</Hero.Description>
											<Hero.Description>
												My focus is on creating functional, efficient, and
												high-quality solutions, but I will try to explore
												everything
											</Hero.Description>
											<Hero.PrimaryAction href="#">
												Contact Me
											</Hero.PrimaryAction>
											<Hero.SecondaryAction href="#">
												More About Me
											</Hero.SecondaryAction>
										</Hero>
									</div>
								</Box>
							</div>
						</div>
					</Grid.Column>
				</Grid>
			</div>
		</AppLayout>
	);
};
