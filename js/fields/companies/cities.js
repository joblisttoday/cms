export default {
	label: 'Cities',
	name: 'cities',
	widget: 'list',
	hint: 'List of known cities (a relation to the "city" data model) in which this company is present (has offices, job positions, etc.). Ex: Berlin, Germany',
	required: true,
	collapsed: false,
	minimize_collapsed: true,
	field: {
		widget: 'relation',
		label: 'City',
		name: 'city',
		hint: 'Select a city from the list of cities know to the system',
		collection: 'cities',
		search_fields: ['title', 'country', 'slug'],
		value_field: 'slug',
		display_fields: ['title', 'country', 'slug', 'is_featured']
	}
}
