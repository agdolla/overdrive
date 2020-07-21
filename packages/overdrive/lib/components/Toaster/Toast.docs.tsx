import type { ComponentDoc } from '@overdrive/site/componentDoc';
import * as React from 'react';

import { Alert } from '../Alert';
import { Button } from '../Button';
import { Stack } from '../Stack';
import { useToast } from './Toast';

const Example = (intent) => () => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const toast = useToast();

	return (
		<Stack>
			<div style={{ maxWidth: 450 }}>
				<Alert dismissible intent={intent}>
					Very cool toast message!
				</Alert>
			</div>

			<Button
				size="small"
				onClick={() => toast[intent]('Very cool toast message!')}>
				Open Toast
			</Button>
		</Stack>
	);
};

export default {
	name: 'Toast',
	exports: ['useToast', 'ToastProvider'], // TODO: Find a better way of doing this
	description:
		'Are used to show toasts (Alerts) on top of the page. They will close themselves after a timeout—default is 5s, or if dismissed.',
	demos: [
		{
			name: 'Success',
			Example: Example('success'),
			code: `
			const toast = useToast();

			toast.success('Very cool toast message!');
			`,
		},
		{
			name: 'Danger',
			Example: Example('danger'),
			code: `
			const toast = useToast();

			toast.danger('Very cool toast message!');
			`,
		},
		{
			name: 'Warning',
			Example: Example('warning'),
			code: `
			const toast = useToast();

			toast.warning('Very cool toast message!');
			`,
		},
		{
			name: 'Information',
			Example: Example('information'),
			code: `
			const toast = useToast();

			toast.information('Very cool toast message!');
			`,
		},
	],
} as ComponentDoc;
