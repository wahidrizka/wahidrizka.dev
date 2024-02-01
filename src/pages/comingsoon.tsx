import React from "react";
import clsx from "clsx";

import SEO from "@/components/SEO";
import AppLayout from "@/layouts/AppLayout";
import Image from "next/image";
import { Heading, Text } from "@/components/ui";

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
					<Heading>Hi there</Heading>
					<Image
						priority
						src={"/loading.gif"}
						alt="Coming soon image"
						width={256}
						height={256}
					/>
					<Text>The Moment You&apos;ve Been Waiting For is Almost Here.</Text>
				</section>
			</AppLayout>
		</div>
	);
};

export default ComingSoon;
