import clsx from "clsx";
import { motion } from "framer-motion";
import { FadeContainer, Fade } from "@/components/animations";

const Intro = () => {
	return (
		<section
			className={clsx(
				"max-w-screen-md min-h-screen mx-auto place-items-center",
				"grid grid-cols-1 sm:grid-cols-3",
				"px-4 xl:px-0 pt-24 sm:pt-0"
			)}
		>
			<motion.div
				variants={FadeContainer}
				initial="hidden"
				animate="visible"
				className={clsx("col-span-1", "sm:col-span-2")}
			>
				<motion.p
					variants={Fade}
					initial="hidden"
					animate="visible"
					transition={{ delay: 0.1 }}
					className={clsx("text-2xl body-pixels font-normal")}
				>
					Hi, I&apos;m a junior
				</motion.p>
				<motion.h1
					variants={Fade}
					initial="hidden"
					animate="visible"
					transition={{ delay: 0.3 }}
					className={clsx("intro-heading -mx-2")}
				>
					Front-End Developer
				</motion.h1>
				<motion.h5
					variants={Fade}
					initial="hidden"
					animate="visible"
					transition={{ delay: 0.5 }}
					className={clsx(
						"py-3 text-xl select-none body-pixels font-normal",
						"md:text-2xl md:max-w-lg"
					)}
				>
					<span>from Cilacap, Indonesia.</span> A self-taught developer with an
					interest in Software Development💫
				</motion.h5>
			</motion.div>
		</section>
	);
};

export default Intro;
