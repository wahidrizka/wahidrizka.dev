import React from "react";
import clsx from "clsx";

import SEO from "@/components/SEO";
import AppLayout from "@/layouts/AppLayout";
import Image from "next/image";

const ComingSoon = () => {
	return (
		<div>
			<SEO
				title="Coming Soon - Software Developer"
				url="#"
				description="An individual identifying as a Software Engineer expresses a keen interest in front-end development and possesses a comprehensive understanding of UI Design."
			/>
			<AppLayout>
				<section
					className={clsx(
						"flex flex-col items-center justify-center min-h-screen space-y-4 px-4 text-center"
					)}
				>
					<span className={clsx("heading-pixels font-bold text-4xl")}>
						Meowww
					</span>
					<Image
						priority
						src={"/loading.gif"}
						alt="Coming soon image"
						width={128}
						height={128}
					/>
					<h1 className={clsx("body-pixels text-xl")}>
						The Moment You&apos;ve Been Waiting For is Almost Here.
					</h1>
				</section>
			</AppLayout>
		</div>
	);
};

export default ComingSoon;
