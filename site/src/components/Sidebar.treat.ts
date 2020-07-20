import { style, styleMap } from 'treat';

export const root = style({
	position: 'sticky',
	top: 0,
	bottom: 0,
	height: '100vh',
	overflow: 'hidden',
});

export const navigation = style({
	height: '100%',
	overflowY: 'auto',
	overflowX: 'hidden',
	overscrollBehavior: 'contain',
	// @ts-ignore
	webkitOverflowScrolling: 'touch',
	'-webkit-overflow-scrolling': 'touch',
});

export const navButton = styleMap((theme) => ({
	default: {
		backgroundColor: 'transparent',

		transitionDuration: '.2s',
		transitionTimingFunction: theme.animation.easing.decelerate,
		transitionProperty: 'background-color',

		':hover': {
			backgroundColor: theme.colours.gamut.gray200,
		},
	},
	active: {
		backgroundColor: theme.colours.gamut.gray200,

		':hover': {
			backgroundColor: theme.colours.gamut.gray300,
		},
	},
}));
