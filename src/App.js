import React from 'react'
import {
	Text,
	View
} from 'react-native'

import Picker from './Picker'

const measurementDic = {
	teaSpoon: {
		teaSpoon: 1,
		tableSpoon: (1 / 3),
		cup: (1 / 48),
		fluidOunce: (1 / 6),
		pint: (1 / 96),
		quart: (1 / 192)
	},
	tableSpoon: {
		teaSpoon: 3,
		tableSpoon: 1,
		cup: (1 / 16),
		fluidOunce: (1 / 2),
		pint: (1 / 32),
		quart: (1 / 64)
	},
	cup: {
		teaSpoon: 48,
		tableSpoon: 16,
		cup: 1,
		fluidOunce: 8,
		pint: (1 / 2),
		quart: (1 / 4)
	},
	fluidOunce: {
		teaSpoon: 6,
		tableSpoon: 2,
		cup: (1 / 8),
		fluidOunce: 1,
		pint: (1 / 16),
		quart: (1 / 32)
	},
	pint: {
		teaSpoon: 96,
		tableSpoon: 32,
		cup: 2,
		fluidOunce: 16,
		pint: 1,
		quart: (1 / 2)
	},
	quart: {
		teaSpoon: 192,
		tableSpoon: 64,
		cup: 4,
		fluidOunce: 32,
		pint: 2,
		quart: 1
	}
}

const measurement = [
	{
		label: 'Tea Spoons',
		value: 'teaSpoon'
	},
	{
		label: 'Table Spoons',
		value: 'tableSpoon'
	},
	{
		label: 'Cups',
		value: 'cup'
	},
	{
		label: 'Fluid Ounces',
		value: 'fluidOunce'
	},
	{
		label: 'Pints',
		value: 'pint'
	},
	{
		label: 'Quarts',
		value: 'quart'
	}
]

const wholeQuantity = [
	{
		label: '0',
		value: 0
	},
	{
		label: '1',
		value: 1
	},
	{
		label: '2',
		value: 2
	},
	{
		label: '3',
		value: 3
	},
	{
		label: '4',
		value: 4
	},
	{
		label: '5',
		value: 5
	},
	{
		label: '6',
		value: 6
	},
	{
		label: '7',
		value: 7
	},
	{
		label: '8',
		value: 8
	},
	{
		label: '9',
		value: 9
	},
	{
		label: '10',
		value: 10
	}
]

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

export default class App extends React.Component {
	state = {
		quantity: 1,
		fraction: 0,
		from: 'tableSpoon',
		to: 'teaSpoon'
	}

	render() {
		const { quantity, fraction, from, to } = this.state

		return (
			<View style={ skin.style }>
				<View>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
						<Picker
							selectedValue={ quantity }
							onValueChange={ value => this.setState({ quantity: value })}
							options={ wholeQuantity }
							skin={ skin.quantityPickerSkin }/>
						<Picker
							selectedValue={ fraction }
							onValueChange={ value => this.setState({ fraction: value })}
							options={ fractionQuantity }
							skin={ skin.quantityPickerSkin }/>
					</View>
					<Picker
						selectedValue={ from }
						onValueChange={ value => this.setState({ from: value })}
						options={ measurement }
						skin={ skin.measurementPickerSkin }/>
				</View>
				<Hr />
				<View>
					<View style={{ alignItems: 'center' }}>
						<View style={ skin.resultContainerStyle} >
							<Text style={ skin.resultTextStyle }>
								{ convert(quantity + fraction , measurementDic[from][to]) }
							</Text>
						</View>
					</View>
					<Picker
						selectedValue={ to }
						onValueChange={ value => this.setState({ to: value })}
						options={ measurement }
						skin={ skin.measurementPickerSkin }/>
				</View>
			</View>
		)
	}
}

const Hr = () => {
	return (
		<View style={{
			borderBottomColor: '#cccccc',
			borderBottomWidth: 1,
			width: 330
		}}/>
	)
}

function convert (quantity, measurement) {
	const result = (quantity * measurement)
	return (result % 1 === 0) ? (
		result
	) : (
		result.toFixed(2)
	)
}

const skin = {
	style: {
		flex: 1,
		backgroundColor: '#f2f2f2',
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	measurementPickerSkin: {
		style: {
			height: 150,
			width: 330,
			backgroundColor: '#fff'
		},
		itemStyle: {
			height: 150,
			fontSize: 40
		}
	},
	quantityPickerSkin: {
		style: {
			height: 100,
			width: 160,
			backgroundColor: '#fff'
		},
		itemStyle: {
			height: 100,
			fontSize: 40
		}
	},
	resultContainerStyle: {
		width: 330,
		alignItems: 'center',
		borderStyle: 'solid',
		borderRadius: 10,
		backgroundColor: '#ffdd99'
	},
	resultTextStyle: {
		textAlign: 'center',
		width: 330, 
		fontSize: 100
	}
}