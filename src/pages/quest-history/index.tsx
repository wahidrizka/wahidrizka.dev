import AppLayout from "@/layouts/AppLayout";

import SEO from "@/components/SEO";
import { Intro } from "@/components/Presentational";
import ComingSoon from "../comingsoon";

const QuestHistory = () => {
	return (
		<>
			<SEO
				title="Web Developer - Wahid Rizka Fathurrohman"
				description="An individual identifying as a Software Engineer expresses a keen interest in Full Stack Development and possesses a comprehensive understanding of Front-end Development."
			/>
			<AppLayout isHeader>
				<ComingSoon />
			</AppLayout>
		</>
	);
};

export default QuestHistory;
