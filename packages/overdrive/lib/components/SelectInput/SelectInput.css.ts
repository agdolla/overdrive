import { style } from '@vanilla-extract/css';

import { vars } from '../../themes/base/vars.css';

export const input = style({});
export const paddedInput = style({
	selectors: {
		[`${input}&`]: {
			paddingRight: vars.space['8'],
		},
	},
});

export const arrow = style({
	top: '0',
	right: '0',
});
