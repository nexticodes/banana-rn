import { StyleSheet } from 'react-native';
import * as colors from '@util/colors';

const activityIndicatorSize = 46;

export default StyleSheet.create({
	container: {
		height: 35,
		marginBottom: 15,
		alignItems: 'center',
	},
	textContainer: {
		height: 30,
		width: 'auto',
		borderBottomColor: 'white',
		borderBottomWidth: 3.5,
	},
	text: {
		textAlign: 'center',
		fontFamily: 'open-sans-bold',
		fontSize: 20,
		color: colors.NAVY_BLUE,
	},
	pressed: {
		color: 'white',
	},
	activityIndicatorContainer: {
		position: 'absolute',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
		width: activityIndicatorSize,
		height: activityIndicatorSize,
		borderRadius: activityIndicatorSize / 2,
	},
});