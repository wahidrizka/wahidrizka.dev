import { Intro, SEO } from "@/components";
import { AppLayout } from "@/layouts";

export default function Home() {
	return (
		<AppLayout>
			<SEO
				title="Wahid Rizka"
				description="I am a Fullstack Developer with a strong interest in Software Engineering."
			/>

			<div data-color-mode="dark">
				<Intro />
			</div>
		</AppLayout>
	);
}
