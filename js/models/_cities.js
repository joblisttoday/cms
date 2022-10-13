/*
	 [currently unused]
	 It is hard to maintain a list of cities.
	 For companies, we need "geo points", to show on a map,
	 as we cannot get get-points from an address for each request, or don't want
	 to enrich the markdown data that way (but could?).
 */

import title from '../fields/cities/title.js'
import slug from '../fields/cities/slug.js'
import country from '../fields/cities/country.js'
import map from '../fields/cities/map.js'
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
		isFeatured,
		country,
		map,
	],
}

export default cities
