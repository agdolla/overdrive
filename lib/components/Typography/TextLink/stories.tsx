import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Text } from '..';
import { TextLink } from '.';

storiesOf('Foundation|Typography/TextLink', module)
	.addDecorator(story => (
		<div style={{ width: '100%', maxWidth: 300 }}>{story()}</div>
	))
	.add('default', () => {
		return (
			<>
				<Text is="p">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Ad,{' '}
					<TextLink href="test" strong={boolean('Strong', false)}>
						Hello
					</TextLink>{' '}
					autem consectetur consequuntur eius ex{' '}
					<TextLink href="test" strong={boolean('Strong', false)}>
						Hello
					</TextLink>{' '}
					fugiat illo ipsum nobis numquam, officiis placeat quia,
					quidem reprehenderit rerum temporibus veniam vero.
				</Text>
			</>
		);
	});