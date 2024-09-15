import { SEO } from "@/components";
import { TechStackCard } from "@/components/ui/TechStackCard/TechStackCard";
import { AppLayout } from "@/layouts";
import { techStackData } from "@/libs/data";
import { TechStack } from "@/libs/types";
import {
	AnimationProvider,
	Box,
	CTABanner,
	Grid,
	Heading,
	Label,
	LogoSuite,
	Text,
} from "@primer/react-brand";
import Marquee from "react-fast-marquee";

export default function Home() {
	const technologies: TechStack[] = techStackData;
	return (
		<AppLayout colorMode="dark">
			<SEO
				title="Wahid Rizka Fathurrohman"
				description="I am a Fullstack Developer with a strong interest in Software Engineering."
			/>

			<div
				data-color-mode="dark"
				style={{ backgroundColor: "var(--brand-color-canvas-default)" }}
			>
				<Box id="intro" paddingBlockStart={128} paddingBlockEnd={128}>
					<Grid className="F2Template__TrailingSection">
						<Grid.Column>
							<AnimationProvider>
								<CTABanner
									align="center"
									hasBorder
									hasShadow={false}
									style={{ backgroundImage: "url(undefined)" }}
								>
									<CTABanner.Heading size="4" animate={"slide-in-up"}>
										Hi, I&apos;m Wahid Rizka
									</CTABanner.Heading>
									<Text animate={"fade-in"}>
										Based in Cilacap, Indonesia 🇮🇩
										<br />
										Full Stack Developer
									</Text>
									<CTABanner.Description animate={"slide-in-up"}>
										I&apos;m Wahid Rizka Fathurrohman, a Fullstack Developer
										with a strong interest in Software Engineering. I work with
										Javascript, Typescript and all things related to the
										Application or Web Development. I combine creativity in
										building Front-end applications and a solid approach to
										using the Model-View-Controller (MVC) pattern for backend
										development. My focus is on creating functional, efficient,
										and high-quality solutions.
									</CTABanner.Description>
									<CTABanner.Description animate={"slide-in-up"}>
										I am currently working at Trusta Technologies as an Odoo Web
										Developer. My team and I focus on creating outstanding
										digital experiences and contributing to open-source
										projects. Additionally, I am expanding my skills by learning
										full-stack development.
									</CTABanner.Description>
								</CTABanner>
							</AnimationProvider>
						</Grid.Column>
					</Grid>
				</Box>

				<div
					data-color-mode="dark"
					data-dark-theme="dark"
					className="pt-6 overflow-hidden px-3"
				>
					<div className="container-xl">
						<div className="d-flex gutter gutter-spacious my-5 my-sm-7 my-md-8 position-relative flex-md-items-center text-center flex-column pb-4 pb-md-7">
							<div className="col-12 py-3 mb-2">
								<div className="">
									<Heading size="4" className="mb-3 col-lg-8 mx-md-auto px-3">
										Technology Stack That I Have Used
									</Heading>
								</div>
							</div>

							<div className="col-12 py-3 mt-5">
								<div className="position-relative">
									<Marquee pauseOnHover speed={50} direction="right">
										{technologies.map((tech, index) => (
											<TechStackCard
												key={index}
												techName={tech.techName}
												techIcon={tech.techIcon}
											/>
										))}
									</Marquee>

									<Marquee pauseOnHover speed={100} direction="left">
										{technologies.map((tech, index) => (
											<TechStackCard
												key={index}
												techName={tech.techName}
												techIcon={tech.techIcon}
											/>
										))}
									</Marquee>

									<Marquee pauseOnHover speed={150} direction="right">
										{technologies.map((tech, index) => (
											<TechStackCard
												key={index}
												techName={tech.techName}
												techIcon={tech.techIcon}
											/>
										))}
									</Marquee>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</AppLayout>
	);
}
