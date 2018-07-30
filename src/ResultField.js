import React from 'react'
import {
    StyleSheet,
    View,
    Text
} from 'react-native'

export default ({ value, unit }) => {
	const [ whole, fraction ] = value.split(' ')

	return (
		<View style={{ alignItems: 'center' }}>
			<View style={ baseSkin.resultContainerStyle} >
				<Text style={ baseSkin.resultTextStyle }>
					{ whole }&nbsp;
					{ fraction && (
						<Text style={ baseSkin.fractionStyle }>
							{ fraction }
						</Text> 
					)}&nbsp;
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
		width: 280,
		alignItems: 'center',
		borderStyle: 'solid',
		borderRadius: 10,
		backgroundColor: '#ffdd99'
	},
	resultTextStyle: {
		textAlign: 'center',
		width: 280, 
		fontSize: 80
	},
	fractionStyle: {
		fontSize: 30
	},
	unitTextStyle: {
		fontSize: 36
	}
})