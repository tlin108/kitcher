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
		cup: ( 1 / 48 )
	},
	tableSpoon: {
		teaSpoon: 3,
		tableSpoon: 1,
		cup: (1 / 16)
	},
	cup: {
		teaSpoon: 48,
		tableSpoon: 16,
		cup: 1
	}
}

const measurement = [
	{
		label: 'Tea Spoon',
		value: 'teaSpoon'
	},
	{
		label: 'Table Spoon',
		value: 'tableSpoon'
	},
	{
		label: 'Cup',
		value: 'cup'
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
		label: '0',
		value: 0
	},
	{
		label: '1/8',
		value: 0.125
	},
	{
		label: '1/4',
		value: 0.25
	},
	{
		label: '1/3',
		value: 0.33
	},
	{
		label: '1/2',
		value: 0.5
	},
	{
		label: '2/3',
		value: 0.67
	},
	{
		label: '3/4',
		value: 0.75
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
					<Picker
						selectedValue={ from }
						onValueChange={ value => this.setState({ from: value })}
						options={ measurement }
						skin={ skin.measurementPickerSkin }/>
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
				</View>
				<View>
					<Text style={{ textAlign: 'center', fontSize: 24 }}>{ convert(quantity + fraction , measurementDic[from][to]) }</Text>
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
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	measurementPickerSkin: {
		style: {
			height: 110,
			width: 250
		},
		itemStyle: {
			height: 110
		}
	},
	quantityPickerSkin: {
		style: {
			height: 88,
			width: 120
		},
		itemStyle: {
			height: 88
		}
	}
}