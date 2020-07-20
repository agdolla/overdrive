import type { ComponentDoc } from '@overdrive/site/componentDoc';
import * as React from 'react';

import { Button } from './Button';

export default {
	name: 'Button',
	exports: ['Button'], // TODO: Find a better way of doing this
	description: 'A button, used when wanting to perform an action.',
	demos: [
		{
			name: 'Default',
			Example: () => <Button>Login</Button>,
		},
		{
			name: 'Primary',
			Example: () => <Button variant="primary">Login</Button>,
		},
		{
			name: 'Minimal',
			Example: () => (
				<Button minimal variant="primary">
					Login
				</Button>
			),
		},
		{
			name: 'Small',
			Example: () => (
				<Button variant="primary" size={'small'}>
					Login
				</Button>
			),
		},
		{
			name: 'Small Danger',
			Example: () => (
				<Button variant="danger" size={'small'}>
					Login
				</Button>
			),
		},
	],
} as ComponentDoc;
