import collections from './collections.js'

export default {
	config: {
		load_config_file: false,
		display_url: 'https://joblist.today',

		publish_mode: 'editorial_workflow',
		backend: {
			name: 'github',
			repo: 'joblisttoday/companies',
			branch: 'main',
			auth_scope: 'repo',
			open_authoring: true
		},

		media_folder: 'media/uploads',
		public_folder: 'media/uploads',
		logo_url: './media/joblist-logo.png',

		collections
	}
}
