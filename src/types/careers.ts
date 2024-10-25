export type CareerTypes = {
	id: number;
	period: string;
	jobLevel: string;
	company: string;
	periodMonths?: string;
	workSystem: string;
	role: string;
	responsibilities: ResponsibilityTypes[];
};

type ResponsibilityTypes = {
	id: number;
	description: string;
};
