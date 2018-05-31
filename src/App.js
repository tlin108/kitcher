import React from 'react'
import {
	StyleSheet,
	Text,
	View,
	Picker
} from 'react-native'

import MeasurementPicker from './MeasurementPicker'

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

export default class App extends React.Component {
	state = {
		quantity: 1,
		from: 'tableSpoon',
		to: 'teaSpoon'
	}

	render() {
		const { quantity, from, to } = this.state
		return (
			<View style={ styles.container }>
				<View>
					<MeasurementPicker
						selectedValue={ from }
						onValueChange={ value => this.setState({ from: value })}
						options={ measurement }
						skin={ skin.pickerSkin }/>
					<Picker
						selectedValue={ quantity }
						style={[ styles.picker, { height: 88, width: 125 } ]}
						itemStyle={{ height: 88 }}
						onValueChange={itemValue => this.setState({ quantity: itemValue })}>
						<Picker.Item label="1" value={ 1 } />
						<Picker.Item label="2" value={ 2 } />
						<Picker.Item label="3" value={ 3 } />
						<Picker.Item label="4" value={ 4 } />
						<Picker.Item label="5" value={ 5 } />
						<Picker.Item label="6" value={ 6 } />
						<Picker.Item label="7" value={ 7 } />
						<Picker.Item label="8" value={ 8 } />
					</Picker>
				</View>
				<View>
					<Text style={{ textAlign: 'center', fontSize: 24 }}>{ convert(quantity, measurementDic[from][to]) }</Text>
					<MeasurementPicker
						selectedValue={ to }
						onValueChange={ value => this.setState({ to: value })}
						options={ measurement }
						skin={ skin.pickerSkin }/>
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
	pickerSkin: {
		style: {
			height: 110,
			width: 250
		},
		itemStyle: {
			height: 110
		}
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'space-around'
	}
})