import AppLayout from "@/layouts/AppLayout";

import SEO from "@/components/SEO";
import ComingSoon from "./comingsoon";

const Home = () => {
	return (
		<>
			<SEO
				title="Front-end Developer - Wahid Rizka Fathurrohman"
				description="An individual identifying as a Software Engineer expresses a keen interest in front-end development and possesses a comprehensive understanding of UI Design."
			/>
			<AppLayout isHeader>
				{/* <div className="mx-auto container relative h-screen flex items-center justify-center">
					<h1>Hello world</h1>
				</div> */}
				<ComingSoon />
			</AppLayout>
		</>
	);
};

export default Home;
