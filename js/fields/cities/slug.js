import patternPath from '../../utils/pattern-path.js'

export default {
	label: 'Slug',
	name: 'slug',
	widget: 'string',
	required: true,
	hint: 'The Slug is the text used to create the URL of this company: https://profiles.joblist.today/city/city-slug ; where `city-slug` is the slug version of the city name, if unique, or `city-country` if not; ``city-specification-country` if not unique in the country',
	pattern: patternPath,
}
