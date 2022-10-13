import patternPath from '../../utils/pattern-path.js'

export default {
	label: 'Slug',
	name: 'slug',
	widget: 'string',
	required: true,
	hint: 'The Slug is the text used to create the URL of this company: https://profiles.joblist.today/companies/my-slug ; where `my-slug` is the slug',
	pattern: patternPath
}
