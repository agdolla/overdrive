import * as React from 'react';
import {
	ComponentProps,
	createContext,
	FunctionComponent,
	useCallback,
	useContext,
	useRef,
	useState,
} from 'react';
import { useStyles } from 'react-treat';

import { Box } from '../Box';
import * as styleRefs from '../Flyout/Flyout.treat';
import { useOutsideClick } from '../OutsideClick';
import { Positioner } from '../Positioner';
import { setRef } from '../../utils';

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
	const [contextValue, setContextValue] = useState(null);

	const refSetter = useCallback((node) => {
		setRef(myRef, node);
		setContextValue(node);
	}, []);

	useOutsideClick([triggerRef, myRef], onRequestClose);

	return (
		<parentContext.Provider value={contextValue}>
			<Positioner
				container={parentContainer ?? undefined}
				triggerRef={triggerRef}
				isOpen={isOpen}
				alignment={alignment}
				triggerOffset={triggerOffset}>
				<Box
					ref={refSetter}
					className={styles.root}
					backgroundColour="white"
					boxShadow="4"
					borderRadius="1"
					borderWidth="1"
					borderColour="gray">
					{children}
				</Box>
			</Positioner>
		</parentContext.Provider>
	);
};
