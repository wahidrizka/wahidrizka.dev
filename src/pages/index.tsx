import { SEO } from "@/components";
import { AppLayout } from "@/layouts";

export default function Home() {
	return (
		<AppLayout>
			<SEO
				title="Wahid Rizka Fathurrohman"
				description="I am a Fullstack Developer with a strong interest in Software Engineering."
			/>

			<div style={{ height: "200vh" }}></div>
		</AppLayout>
	);
}
