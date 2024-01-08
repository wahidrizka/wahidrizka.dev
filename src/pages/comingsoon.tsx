import React from "react";
import clsx from "clsx";

import SEO from "@/components/SEO";
import AppLayout from "@/layouts/AppLayout";
import Image from "next/image";

const ComingSoon = () => {
	return (
		<>
			<SEO
				title="Coming Soon - Software Developer"
				url="#"
				description="An individual identifying as a Software Engineer expresses a keen interest in front-end development and possesses a comprehensive understanding of UI Design."
			/>
			<AppLayout>
				<section
					className={clsx(
						"flex flex-col items-center justify-center min-h-screen space-y-4 px-4"
					)}
				>
					<span className={clsx("text-4xl font-bold")}>Stay tuned</span>
					<Image
						src={"/loading.gif"}
						alt="Coming soon image"
						width={128}
						height={128}
					/>
					<h1 className={clsx("text-xl font-medium")}>
						For something awesome!
					</h1>
				</section>
			</AppLayout>
		</>
	);
};

export default ComingSoon;
