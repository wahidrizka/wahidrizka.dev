import { Projects, SEO } from "@/components";
import { AppLayout } from "@/layouts";

export default function ProjectsPage() {
	return (
		<AppLayout>
			<SEO
				title="Wahid Rizka"
				description="I am a Fullstack Developer with a strong interest in Software Engineering."
			/>

			<div
				data-color-mode="dark"
				style={{ backgroundColor: "var(--brand-color-canvas-default)" }}
			>
				<Projects />
			</div>
		</AppLayout>
	);
}
