export default {
	label: 'Tags',
	label_singular: 'Tag',
	name: 'tags',
	widget: 'list',
	hint: `tags to describe the projects and impact of this company. Ex: education, ecology, culture`,
	required: true,
	default: ['example-tag', 'another-tag'],
	collapsed: false,
	minimize_collapsed: true,
	field: {
		label: 'Tag',
		name: 'tag',
		hint: 'Use a dash (-) instead of spaces when you need to separate words; also, every letter should be in lowercase',
		widget: 'string',
	}
}
