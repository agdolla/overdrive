import { style, styleVariants } from '@vanilla-extract/css';

import { vars } from '../../themes/base/vars.css';

export const disabled = style({ cursor: 'not-allowed' });

export const root = style({
	width: 'max-content',
	selectors: {
		[`&:not(${disabled}):focus`]: {
			borderColor: vars.colours.intent.information.background.mild,
		},
	},
});

export const handle = styleVariants({
	default: {
		width: vars.space[6],
		height: vars.space[6],
		backgroundColor: vars.colours.intent.primary.background.standard,
		transition: `background-color 0.1s ${vars.animation.easing.standard}`,
		selectors: {
			[`${root}:not(${disabled}) &:hover`]: {
				backgroundColor: vars.colours.intent.primary.background.strong,
			},
			[`${root}:not(${disabled}) &:active`]: {
				backgroundColor: vars.colours.intent.primary.background.strong,
			},
		},
	},
	disabled: {
		borderColor: vars.colours.background.neutral,
	},
});

export const label = style({
	minWidth: vars.space['8'],
});
