import { ButtonIcon, Heading, Text } from "@/components/ui";
import clsx from "clsx";

const Intro = () => {
	return (
		<section id="intro" className={clsx("bg-primaryBg dark:bg-primaryBgDark")}>
			<div className={clsx("mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 px-4")}>
				<div className={clsx("flex justify-center mb-2")}>
					<div className={clsx("Border-pixel")}>
						<span className={clsx("Border-pixel-label text-xl")}>
							Hi there!
						</span>
						<span className={clsx("dot-bottom-right-4")}></span>
						<span className={clsx("dot-bottom-left-4")}></span>
					</div>
				</div>

				<div className={clsx("text-center space-y-2 flex flex-col")}>
					<Heading>Wahid Rizka Fathurrohman</Heading>
					<Text weight="semibold" shadow="large">
						An individual identifying as a Software Engineer expresses a keen
						interest in Full Stack Development and possesses a comprehensive
						understanding of Front-end Development.
					</Text>
				</div>
			</div>
		</section>
	);
};

export default Intro;
