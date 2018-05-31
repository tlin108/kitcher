import React from 'react'
import {
	StyleSheet,
	Picker
} from 'react-native'

export default function ({ selectedValue, onValueChange, options, skin }) {
	return (
		<Picker
			selectedValue={ selectedValue }
			style={[ baseSkin.style, skin && skin.style ]}
			itemStyle={ skin && skin.itemStyle }
			onValueChange={ onValueChange }>
			{ options.map(({ label, value }) => (
				<Picker.Item key={ value } value={ value } label={ label } />
			))}
		</Picker>
	)
}

const baseSkin = StyleSheet.create({
	style: {
		borderWidth: 1,
		borderRadius: 2,
		borderColor: '#ddd',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.1,
		shadowRadius: 2,
		elevation: 1,
		marginTop: 10
	}
})