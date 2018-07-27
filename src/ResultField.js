import React from 'react'
import {
    StyleSheet,
    View,
    Text
} from 'react-native'

export default ({ value, unit }) => {
	return (
		<View style={{ alignItems: 'center' }}>
			<View style={ baseSkin.resultContainerStyle} >
				<Text style={ baseSkin.resultTextStyle }>
					{ value }&nbsp;
					<Text style={ baseSkin.unitTextStyle }>
						{ unit }
					</Text>
				</Text>
			</View>
		</View>
	)
}

const baseSkin = StyleSheet.create({
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
	},
	unitTextStyle: {
		fontSize: 56
	}
})