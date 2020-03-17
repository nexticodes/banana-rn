import { StyleSheet } from 'react-native';
import * as colors from '@util/colors';

export default StyleSheet.create({
	outerContainer: {
		flex: 1,
	},
	input: {
		height: 50,
		marginBottom: 15,
		backgroundColor: colors.LIGHT_YELLOW,
		fontSize: 18,
		fontFamily: 'open-sans-regular',
		paddingLeft: 12,
	},
	passwordContainer: {
		height: 50,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		backgroundColor: 'white',
	},
	iconContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		width: 50,
	},
	hideIcon: {
		fontSize: 26,
		color: colors.NAVY_BLUE,
	},
	banner: {
		height: 'fit-content',
		justifyContent: 'center',
		paddingVertical: 55,
		paddingHorizontal: '5%',
		backgroundColor: colors.BANANA_YELLOW,
	},
	innerContainer: {
		flexGrow: 1,
		paddingTop: 'calc(100vh * (35 / 640))',
		paddingHorizontal: '15%',
		justifyContent: 'space-between',
	},
	form: {
	},
	buttonContainer: {
		flexDirection: 'row',
		paddingHorizontal: '8%',
		justifyContent: 'space-between',
		alignItems: 'center',
		bottom: 50,
	},
	link: {
		color: colors.NAVY_BLUE,
		textAlign: 'right',
	},
});
