import { select } from '@storybook/addon-knobs';
import * as React from 'react';
import { useCallback, useRef, useState } from 'react';

import { Button } from '../Button';
import { EPositionerAlignment } from '../Positioner';
import { TextInput } from '../TextInput';
import { Flyout } from '.';
import { StandardModal } from '../StandardModal';
import { Box } from '../Box';
import { Stack } from '../Stack';

const alignmentPicker = () =>
	select('Alignment', EPositionerAlignment, EPositionerAlignment.BOTTOM_LEFT);

export default {
	title: 'Components|Flyout',
	component: Flyout,
	parameters: { chromatic: { disable: true } },
};

const Impl = ({ children }) => {
	const triggerRef = useRef(null);
	const [isOpen, setIsOpen] = useState(true);
	const closer = useCallback(() => setIsOpen(false), []);
	const toggle = useCallback(() => setIsOpen(!isOpen), [isOpen]);

	return (
		<>
			<Button ref={triggerRef} onClick={toggle}>
				some trigger
			</Button>
			<Flyout
				triggerRef={triggerRef}
				alignment={alignmentPicker()}
				isOpen={isOpen}
				onRequestClose={closer}>
				<Box padding={'4'}>
					<Stack spacing={'4'}>
						<TextInput name="example" placeholder="example" />
						<Button size="small" variant="primary" onClick={closer}>
							Save
						</Button>
						{children}
					</Stack>
				</Box>
			</Flyout>
		</>
	);
};

export const Standard = Impl;

export const InsideModal = () => (
	<StandardModal isOpen title="Flyout In Modal">
		<Box padding="5">
			<Impl>
				<Impl />
			</Impl>
		</Box>
	</StandardModal>
);
