import { About, SEO } from "@/components";
import { AppLayout } from "@/layouts";

export default function AboutPage() {
	return (
		<AppLayout>
			<SEO
				title="Wahid Rizka | About"
				description="I am a Fullstack Developer with a strong interest in Software Engineering."
			/>
			<div style={{ height: "300vh" }}>
				<About />
			</div>
		</AppLayout>
	);
}
