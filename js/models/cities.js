import title from '../fields/cities/title.js'
import slug from '../fields/cities/slug.js'
import country from '../fields/cities/country.js'
import isFeatured from '../fields/cities/isFeatured.js'

const cities = {
	name: 'cities',
	label: 'Cities',
	label_singular: 'City',
	folder: 'cities',
	media_folder: '',
	path: '{{slug}}/index',
	create: true,
	slug: '{{title}}',
	editor: {
		preview: false
	},

	/* filtering */
	sortable_fields: ['title', 'slug', 'country', 'is_featured'],

	/* fields */
	fields: [
		title,
		slug,
		country,
		isFeatured,
	],
}

export default cities
