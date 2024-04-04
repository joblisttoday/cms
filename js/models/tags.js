import title from '../fields/tags/title.js'
import isFeatured from '../fields/tags/isFeatured.js'
import wikipediaUrl from '../fields/tags/wikipediaUrl.js'

const tags = {
	name: 'tags',
	label: 'Tags',
	label_singular: 'Tag',
	folder: 'tags',
	media_folder: '',
	path: '{{slug}}/index',
	extension: "json",
	create: true,
	slug: '{{title}}',
	editor: {
		preview: false
	},

	description: "Tags, are words to group projects according to categories",

	/* filtering */
	sortable_fields: ['title', 'wikipedia_url', 'is_featured'],

	/* fields */
	fields: [
		title,
		isFeatured,
		wikipediaUrl,
	],
}

export default tags
