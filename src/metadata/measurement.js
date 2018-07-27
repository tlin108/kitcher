import times from 'lodash/times'

const measurement = [
	{
		label: 'Tea Spoons',
		value: 'teaSpoon',
		unit: 'tsp'
	},
	{
		label: 'Table Spoons',
		value: 'tableSpoon',
		unit: 'tbsp'
	},
	{
		label: 'Cups',
		value: 'cup',
		unit: 'C'
	},
	{
		label: 'Fluid Ounces',
		value: 'fluidOunce',
		unit: 'oz'
	},
	{
		label: 'Pints',
		value: 'pint',
		unit: 'pt'
	},
	{
		label: 'Quarts',
		value: 'quart',
		unit: 'qt'
	}
]

const wholeQuantity = times(31, (index) => ({
	value: index,
	label: index.toString()
}))

const fractionQuantity = [
	{
		label: '-/-',
		value: 0
	},
	{
		label: '1/8',
		value: (1 / 8)
	},
	{
		label: '1/4',
		value: (1 / 4)
	},
	{
		label: '1/3',
		value: (1 / 3)
	},
	{
		label: '1/2',
		value: (1 / 2)
	},
	{
		label: '2/3',
		value: (2 / 3)
	},
	{
		label: '3/4',
		value: (3 / 4)
	}
]

export {
	measurement,
	wholeQuantity,
	fractionQuantity
}