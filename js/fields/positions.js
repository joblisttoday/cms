import country from './country.js'
import city from './city.js'
import postalCode from './postalCode.js'
import address from './address.js'
import position from './position.js'

export default {
    label: 'Positions',
    name: 'positions',
    widget: 'list',
    required: false,
    hint: 'A list of positions where this company has offices, potentially hirring locations.',
    fields: [
	city,
	country,
	postalCode,
	address,
	position
    ]
}
