import { style, styleVariants } from '@vanilla-extract/css';

import { vars } from '../../themes/base/vars.css';
import { mapTokenToProperty } from '../../utils/mapTokenToProperty';

export const child = {
	spaces: styleVariants(
		mapTokenToProperty(vars.space, (value) => ({
			paddingBottom: value,
		})),
	),
	default: style({
		':last-child': {
			paddingBottom: 0,
		},
	}),
};
