import type { ComponentDoc } from '@overdrive/site/componentDoc';
import * as React from 'react';
import { EStarRatingSize, StarRating } from './StarRating';

export default {
	name: 'Star Rating',
	exports: ['StarRating'],
	demos: [
		{
			name: 'Default',
			backgroundColour: 'white',
			Example: () => <StarRating rating={3} />,
		},
		{
			name: 'Large',
			backgroundColour: 'white',
			Example: () => (
				<StarRating rating={4.3} size={EStarRatingSize.Medium} />
			),
		},
		{
			name: 'Custom Label',
			backgroundColour: 'white',
			Example: () => (
				<StarRating
					rating={4.3}
					size={EStarRatingSize.Medium}
					label={'4.3 — 105 Reviews'}
				/>
			),
		},
	],
} as ComponentDoc;
