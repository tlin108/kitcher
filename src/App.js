import React from 'react'
import {
	StyleSheet,
	Text,
	View,
	Picker
} from 'react-native'

const measurementDictionary = {
	tableSpoon: {
		teaSpoon: 3,
		tableSpoon: 1
	},
	teaSpoon: {
		tableSpoon: 0.33,
		teaSpoon: 1
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
						<Picker.Item label='Table Spoon' value='tableSpoon' />
						<Picker.Item label='Tea Spoon' value='teaSpoon' />
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
					<Text style={{ textAlign: 'center' }}>{ quantity * measurementDictionary[from][to] }</Text>
					<Picker
						selectedValue={ to }
						style={{ height: 100, width: 200 }}
						onValueChange={itemValue => this.setState({ to: itemValue })}>
						<Picker.Item label='Table Spoon' value='tableSpoon' />
						<Picker.Item label='Tea Spoon' value='teaSpoon' />
					</Picker>
				</View>
			</View>
		)
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