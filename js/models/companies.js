import title from '../fields/title.js'
import slug from '../fields/slug.js'
import description from '../fields/description.js'
import tags from '../fields/tags.js'
import companyUrl from '../fields/companyUrl.js'
import jobBoardUrl from '../fields/jobBoardUrl.js'
import jobBoardProvider from '../fields/jobBoardProvider.js'
import jobBoardHostname from '../fields/jobBoardHostname.js'
import twitterUrl from '../fields/twitterUrl.js'
import linkedinUrl from '../fields/linkedinUrl.js'
import instagramUrl from '../fields/instagramUrl.js'
import facebookUrl from '../fields/facebookUrl.js'
import cities from '../fields/cities.js'
import positions from '../fields/positions.js'
import createdAt from '../fields/createdAt.js'
import updatedAt from '../fields/updatedAt.js'

const companies	 = {
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
	fields: [
		createdAt,
		updatedAt,
		title,
		slug,
		description,
		tags,
		companyUrl,
		jobBoardUrl,
		jobBoardProvider,
		jobBoardHostname,
		twitterUrl,
		linkedinUrl,
		instagramUrl,
		facebookUrl,
		cities,
		positions,
	]
}

export default companies
