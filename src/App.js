import React from 'react'
import {
	StyleSheet,
	Text,
	View,
	Picker
} from 'react-native'

import map from 'lodash/map'

const measurementDic = {
	teaSpoon: {
		label: 'Tea Spoon',
		teaSpoon: 1,
		tableSpoon: (1 / 3),
		cup: ( 1 / 48 )
	},
	tableSpoon: {
		label: 'Table Spoon',
		teaSpoon: 3,
		tableSpoon: 1,
		cup: (1 / 16)
	},
	cup: {
		label: 'Cup',
		teaSpoon: 48,
		tableSpoon: 16,
		cup: 1
	}
}

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
					<Picker
						selectedValue={ from }
						style={{ height: 100, width: 200 }}
						onValueChange={itemValue => this.setState({ from: itemValue })}>
						{ map(measurementDic, (val, key) => (
							<Picker.Item key={ key } value={ key } label={ measurementDic[key].label } />
						))}
					</Picker>
					<Picker
						selectedValue={ quantity }
						style={{ height: 50, width: 100 }}
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
					<Picker
						selectedValue={ to }
						style={{ height: 100, width: 200 }}
						onValueChange={itemValue => this.setState({ to: itemValue })}>
						{ map(measurementDic, (val, key) => (
							<Picker.Item key={ key } value={ key } label={ measurementDic[key].label } />
						))}
					</Picker>
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

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'space-around'
	}
})