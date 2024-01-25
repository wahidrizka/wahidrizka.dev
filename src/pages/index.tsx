import AppLayout from "@/layouts/AppLayout";

import SEO from "@/components/SEO";
import { HomeContainer } from "@/components/Container";

const Home = () => {
	return (
		<>
			<SEO
				title="Front-end Developer - Wahid Rizka Fathurrohman"
				description="An individual identifying as a Software Engineer expresses a keen interest in front-end development and possesses a comprehensive understanding of UI Design."
			/>
			<AppLayout isHeader>
				<HomeContainer />
			</AppLayout>
		</>
	);
};

export default Home;
