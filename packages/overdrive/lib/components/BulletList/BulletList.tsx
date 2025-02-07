import clsx from 'clsx';
import * as React from 'react';
import { FunctionComponent, useContext } from 'react';

import { Box } from '../Box';

import * as styles from './BulletList.css';
import { BulletListContext, bulletMap } from './context';

export interface Props {
	className?: string;
}

export const BulletList: FunctionComponent<Props> = ({
	children,
	className,
}) => {
	const stack = useContext(BulletListContext);
	return (
		<Box
			is="ul"
			className={clsx(className, styles.root, {
				[styles.firstOccurrence]: stack === -1,
			})}>
			<BulletListContext.Provider
				value={stack + 1 >= bulletMap.length ? 0 : stack + 1}>
				{children}
			</BulletListContext.Provider>
		</Box>
	);
};
