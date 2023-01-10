import collections from './collections.js'

export default {
	config: {
		load_config_file: false,
		display_url: 'https://joblist.today',

		publish_mode: 'editorial_workflow',
		backend: {
			name: 'github',
			repo: 'joblisttoday/data',
			branch: 'main',
			open_authoring: true,
			use_graphql: true
		},

		media_folder: 'media/uploads',
		public_folder: 'media/uploads',
		logo_url: './media/joblist-logo.png',

		collections
	}
}
