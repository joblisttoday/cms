export default {
	label: "Job board Provider",
	name: "job_board_provider",
	widget: "select",
	options: [
		"personio",
		"recruitee",
		"smartrecruiters",
		"greenhouse",
		"ashby",
		"lever",
		"workable",
		"matrix",
	],
	hint: "Select the job board provider. Check out https://providers.joblist.today to learn more about which providers are available, how to find the 'provider-hostname' value for a project, and how to implement a new job board provider, so jobs get listed automatically.",
	required: false,
};
