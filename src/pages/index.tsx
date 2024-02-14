import AppLayout from "@/layouts/AppLayout";

import SEO from "@/components/SEO";
import { Intro } from "@/components/Presentational";
import ComingSoon from "./comingsoon";

const Home = () => {
	return (
		<>
			<SEO
				title="Front-end Developer - Wahid Rizka Fathurrohman"
				description="An individual identifying as a Software Engineer expresses a keen interest in front-end development and possesses a comprehensive understanding of UI Design."
			/>
			<AppLayout isHeader>
				<ComingSoon />
				{/* <Intro /> */}
			</AppLayout>
		</>
	);
};

export default Home;
