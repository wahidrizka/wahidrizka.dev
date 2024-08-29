import AppLayout from "@/layouts/AppLayout";

import SEO from "@/components/SEO";
import { Intro } from "@/components/Presentational";

const Home = () => {
	return (
		<>
			<SEO
				title="Web Developer - Wahid Rizka Fathurrohman"
				description="An individual identifying as a Software Engineer expresses a keen interest in Full Stack Development and possesses a comprehensive understanding of Front-end Development."
			/>
			<AppLayout isHeader>
				<Intro />
			</AppLayout>
		</>
	);
};

export default Home;
