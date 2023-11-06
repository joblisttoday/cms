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
	],
	hint: "Select the job board provider. Check out https://providers.joblist.today to learn more about which providers are available, and how to implement a new job board provider.",
	required: false,
};
