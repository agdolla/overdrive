import * as React from 'react';
import {
	ComponentProps,
	createContext,
	FunctionComponent,
	useContext,
	useRef,
} from 'react';
import { useStyles } from 'react-treat';

import { Box } from '../Box';
import * as styleRefs from '../Flyout/Flyout.treat';
import { Positioner } from '../Positioner';

const parentContext = createContext<HTMLElement | null>(null);

export const Flyout: FunctionComponent<
	ComponentProps<typeof Positioner> & { onRequestClose(): void }
> = ({
	triggerRef,
	isOpen,
	children,
	alignment,
	triggerOffset,
	onRequestClose,
}) => {
	const styles = useStyles(styleRefs);

	const myRef = useRef<HTMLElement>(null);
	const parentContainer = useContext(parentContext);

	return (
		<Positioner
			container={parentContainer ?? undefined}
			triggerRef={triggerRef}
			isOpen={isOpen}
			alignment={alignment}
			triggerOffset={triggerOffset}
			onRequestClose={onRequestClose}>
			<Box
				ref={myRef}
				className={styles.root}
				backgroundColour="white"
				boxShadow="4"
				borderRadius="1"
				borderWidth="1"
				borderColour="gray">
				{children}
			</Box>
		</Positioner>
	);
};
