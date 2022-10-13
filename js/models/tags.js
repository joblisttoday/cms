import title from '../fields/tags/title.js'
import slug from '../fields/tags/slug.js'
import isFeatured from '../fields/tags/isFeatured.js'
import wikipediaUrl from '../fields/tags/wikipediaUrl.js'

const tags = {
	name: 'tags',
	label: 'Tags',
	label_singular: 'Tag',
	folder: 'tags',
	media_folder: '',
	path: '{{slug}}/index',
	create: true,
	slug: '{{title}}',
	editor: {
		preview: false
	},

	/* filtering */
	sortable_fields: ['title', 'slug', 'wikipedia_url', 'is_featured'],

	/* fields */
	fields: [
		title,
		slug,
		isFeatured,
		wikipediaUrl,
	],
}

export default tags
