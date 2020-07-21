import type { ComponentDoc } from '@overdrive/site/componentDoc';
import * as React from 'react';

import { Alert } from './Alert';

export default {
	name: 'Alert',
	exports: ['Alert'], // TODO: Find a better way of doing this
	description: 'Draws strong attention to the user.',
	demos: [
		{
			name: 'Default (success)',
			Example: () => <Alert>This is a very important message.</Alert>,
		},
		{
			name: 'Danger',
			Example: () => (
				<Alert intent="danger">This is a very important message.</Alert>
			),
		},
		{
			name: 'Warning',
			Example: () => (
				<Alert intent="warning">
					This is a very important message.
				</Alert>
			),
		},
		{
			name: 'Information',
			Example: () => (
				<Alert intent="information">
					This is a very important message.
				</Alert>
			),
		},
		{
			name: 'Danger Dismissible',
			Example: () => (
				<Alert dismissible intent="danger">
					This is a very important message.
				</Alert>
			),
		},
		{
			name: 'Success Inline',
			Example: () => (
				<Alert inline intent="success">
					This is a very important message.
				</Alert>
			),
		},
	],
} as ComponentDoc;
