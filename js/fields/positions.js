import country from './country.js'
import city from './city.js'
import postalCode from './postalCode.js'
import address from './address.js'
import map from './map.js'

export default {
    label: 'Positions',
    name: 'positions',
    widget: 'list',
    required: false,
    hint: 'A list of positions where this company has offices, potentially hirring locations.',
    collapsed: false,
    fields: [
	country,
	city,
	postalCode,
	address,
	map
    ]
}
