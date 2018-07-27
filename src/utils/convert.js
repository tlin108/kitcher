import fractions from 'fraction.js'

export default function convert (quantity, measurement) {
	return fractions(quantity * measurement).toFraction(true)
}