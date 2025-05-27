var CompaniesPreview = createClass({
	componentDidMount: function () {
		this.injectDependencies();
	},

	componentDidUpdate: function () {
		this.injectDependencies(); // ensure updates still inject
	},

	injectDependencies: function () {
		const iframe = document.querySelector("iframe#preview-pane");
		if (!iframe) return;

		const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

		// Avoid injecting multiple times
		if (iframeDoc.getElementById("joblist-script")) return;

		// Inject styles
		const style = iframeDoc.createElement("link");
		style.id = "joblist-style";
		style.rel = "stylesheet";
		style.href =
			"https://cdn.jsdelivr.net/npm/@joblist/components@0.1.16/dist-lib/style.css";
		iframeDoc.head.appendChild(style);

		// Inject script
		const script = iframeDoc.createElement("script");
		script.id = "joblist-script";
		script.type = "module";
		script.textContent = `
			import 'https://cdn.jsdelivr.net/npm/@joblist/components@0.1.16';
		`;
		iframeDoc.body.appendChild(script);
		console.log("iframeDoc", iframeDoc);
		iframeDoc.firstElementChild.setAttribute("joblist-layout", true);
	},

	render: function () {
		const entry = this.props.entry;
		const data = entry.toJS().data;

		return h(
			"joblist-layout",
			null,
			h(
				"joblist-page",
				null,
				h("p", {}, "No live preview. To see a preview, save the changes made."),
				h("joblist-company", {
					company: JSON.stringify(data),
					full: true,
				}),
			),
		);
	},
});

const registerPreviewTemplate = (CMS) => {
	CMS.registerPreviewTemplate("companies", CompaniesPreview);
};

export default registerPreviewTemplate;
