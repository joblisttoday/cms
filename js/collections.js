import companies from './models/companies.js'
import tags from './models/tags.js'
/*
	 We do not use cities, as the model is too complex to use,
	 in the netlify-cms & static data folder/files context (and relation between models)
	 import cities from './models/cities.js'
 */

export default [
	companies,
	tags,
]
