import { ButtonIcon, Heading, Text } from "@/components/ui";
import clsx from "clsx";

const Intro = () => {
	return (
		<section
			id="intro"
			className={clsx(
				"bg-primaryBg dark:bg-primaryBgDark mx-auto max-w-2xl py-32 sm:py-48 lg:py-56"
			)}
		>
			<div className={clsx("hidden sm:mb-6 sm:flex sm:justify-center")}>
				<div className={clsx("Border-pixel")}>
					<span className={clsx("Border-pixel-label text-xl")}>
						I&apos;m Wahid Rizka Fathurrohman
					</span>
					<span className={clsx("dot-bottom-right-4")}></span>
					<span className={clsx("dot-bottom-left-4")}></span>
				</div>
			</div>

			<div className={clsx("text-center")}>
				<Text size="300" shadow="large">
					An individual identifying as a Software Engineer expresses a keen
					interest in Full Stack Development and possesses a comprehensive
					understanding of Front-end Development.
				</Text>
			</div>
		</section>
	);
};

export default Intro;
