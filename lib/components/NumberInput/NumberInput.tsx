import React from 'react';

import { withEnhancedInput } from '../InputBase';

const isEdge: boolean =
	typeof navigator !== 'undefined' && /edge/i.test(navigator.userAgent);

const type = isEdge ? 'text' : 'number';

export const NumberInput = withEnhancedInput<
	Partial<Pick<HTMLInputElement, 'min' | 'max'>>
>(
	({ field, eventHandlers, validation, suffixed, prefixed, ...rest }) => (
		<input
			{...eventHandlers}
			{...field}
			{...rest}
			autoComplete="off"
			type={type}
		/>
	),
	{
		primitiveType: type,
	},
);
