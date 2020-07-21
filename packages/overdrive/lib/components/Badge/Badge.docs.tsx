import type { ComponentDoc } from '@overdrive/site/componentDoc';
import * as React from 'react';

import { Badge } from './Badge';

export default {
	name: 'Badge',
	exports: ['Badge'],
	description:
		'Are used for items that need to be labeled or organized using keywords that describe them.',
	demos: [
		{
			name: 'Default',
			Example: () => <Badge label="Paid" />,
		},
		{
			name: 'Red',
			Example: () => <Badge label="Paid" colour="red" />,
		},
		{
			name: 'Red Inverted',
			backgroundColour: 'white',
			Example: () => <Badge label="Paid" colour="red" look="inverted" />,
		},
		{
			name: 'Green',
			Example: () => <Badge label="Paid" colour="green" />,
		},
		{
			name: 'Green Inverted',
			backgroundColour: 'white',
			Example: () => (
				<Badge label="Paid" colour="green" look="inverted" />
			),
		},
		{
			name: 'Yellow',
			Example: () => <Badge label="Paid" colour="yellow" />,
		},
		{
			name: 'Yellow Inverted',
			backgroundColour: 'white',
			Example: () => (
				<Badge label="Paid" colour="yellow" look="inverted" />
			),
		},
		{
			name: 'Blue',
			Example: () => <Badge label="Paid" colour="blue" />,
		},
		{
			name: 'Blue Inverted',
			backgroundColour: 'white',
			Example: () => <Badge label="Paid" colour="blue" look="inverted" />,
		},
	],
} as ComponentDoc;
