import title from '../fields/companies/title.js'
import slug from '../fields/companies/slug.js'
import description from '../fields/companies/description.js'
import tags from '../fields/companies/tags.js'
import positions from '../fields/companies/positions.js'
import createdAt from '../fields/companies/createdAt.js'
import updatedAt from '../fields/companies/updatedAt.js'

import companyUrl from '../fields/companies/companyUrl.js'
import jobBoardUrl from '../fields/companies/jobBoardUrl.js'

import jobBoardProvider from '../fields/companies/jobBoardProvider.js'
import jobBoardHostname from '../fields/companies/jobBoardHostname.js'

import twitterUrl from '../fields/companies/twitterUrl.js'
import linkedinUrl from '../fields/companies/linkedinUrl.js'
import instagramUrl from '../fields/companies/instagramUrl.js'
import facebookUrl from '../fields/companies/facebookUrl.js'
import githubUrl from '../fields/companies/githubUrl.js'
import wikipediaUrl from '../fields/companies/wikipediaUrl.js'
import youtubeUrl from '../fields/companies/youtubeUrl.js'

const companies = {
	name: 'companies',
	label: 'Companies',
	label_singular: 'Company',
	folder: 'companies',
	media_folder: '',
	path: '{{slug}}/index',
	create: true,
	slug: '{{title}}',
	editor: {
		preview: false
	},

	description: "Companies, are projects currently recruiting for jobs. Projects of any size, with a /careers or /jobs type of page, listing jobs, can pretend to a spot in this list.",

	/* filtering */
	sortable_fields: ['title', 'slug', 'created_at', 'updated_at'],

	/* fields */
	fields: [
		createdAt,
		updatedAt,
		title,
		slug,
		companyUrl,
		jobBoardUrl,
		jobBoardProvider,
		jobBoardHostname,
		description,
		tags,

		twitterUrl,
		linkedinUrl,
		youtubeUrl,
		instagramUrl,
		facebookUrl,
		githubUrl,
		wikipediaUrl,
		positions,
	]
}

export default companies
