import { Intro, SEO } from "@/components";
import { AppLayout } from "@/layouts";
import { Bento } from "@primer/react-brand";
import clsx from "clsx";

export default function Home() {
	return (
		<AppLayout>
			<SEO
				title="Wahid Rizka Fathurrohman"
				description="I am a Fullstack Developer with a strong interest in Software Engineering."
			/>

			<>
				<Intro />
			</>
		</AppLayout>
	);
}
