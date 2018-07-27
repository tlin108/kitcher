import React from 'react'
import { View } from 'react-native'

import Picker from './Picker'
import Hr from './Hr'
import ResultField from './ResultField'

import conversionMetadata from './metadata/conversion'
import {
	measurement,
	wholeQuantity,
	fractionQuantity
} from './metadata/measurement'
import convert from './utils/convert'

export default class App extends React.Component {
	state = {
		quantity: 1,
		fraction: 0,
		convertFrom: 'tableSpoon',
		convertTo: 'teaSpoon'
	}

	render() {
		const { quantity, fraction, convertFrom, convertTo } = this.state

		return (
			<View style={ skin.style }>
				<View>
					<View style={ skin.volumePickersStyle }>
						<Picker
							selectedValue={ quantity }
							onValueChange={ quantity => this.setState({ quantity })}
							options={ wholeQuantity }
							skin={ skin.quantityPickerSkin }/>
						<Picker
							selectedValue={ fraction }
							onValueChange={ fraction => this.setState({ fraction })}
							options={ fractionQuantity }
							skin={ skin.quantityPickerSkin }/>
					</View>
					<Picker
						selectedValue={ convertFrom }
						onValueChange={ convertFrom => this.setState({ convertFrom })}
						options={ measurement }
						skin={ skin.measurementPickerSkin }/>
				</View>
				<Hr />
				<View>
					<ResultField
						value={ convert(quantity + fraction , conversionMetadata[convertFrom][convertTo]) }
						unit={ measurement.find(({ value }) => value === convertTo).unit }/>
					<Picker
						selectedValue={ convertTo }
						onValueChange={ convertTo => this.setState({ convertTo })}
						options={ measurement }
						skin={ skin.measurementPickerSkin }/>
				</View>
			</View>
		)
	}
}

const skin = {
	style: {
		flex: 1,
		backgroundColor: '#f2f2f2',
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	volumePickersStyle: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	measurementPickerSkin: {
		style: {
			height: 200,
			width: 330,
			backgroundColor: '#fff'
		},
		itemStyle: {
			height: 200,
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
	}
}