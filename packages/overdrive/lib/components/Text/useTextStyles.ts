import clsx from 'clsx';
import { ComponentProps } from 'react';

import type { BoxStyleProps } from '../Box';
import { useBoxStyles } from '../Box';
import { Text } from '../Text';

import * as styles from './useTextStyles.css';

export interface TextStyleProps {
	/** @deprecated Because when you go `useTextStyles` for alignment, you should be using `useBoxStyles` */
	align?: BoxStyleProps['textAlign'];
	colour?: keyof typeof styles.colours | 'unset';
	fontWeight?: keyof typeof styles.fontWeight;
	is?: ComponentProps<typeof Text>['is'];
	noWrap?: boolean;
	size?: keyof typeof styles.sizes;
	transform?: keyof typeof styles.transform;
}

export const useTextStyles = ({
								  align,
								  colour,
								  fontWeight,
								  is,
								  noWrap,
								  size,
								  transform,
							  }: TextStyleProps) => {
	return clsx(
		styles.root,
		useBoxStyles({ is, textAlign: align }),
		colour !== 'unset' && styles.colours[colour ?? 'neutral'],
		styles.fontWeight[fontWeight!],
		noWrap && styles.noWrap,
		styles.sizes[size!],
		styles.transform[transform!],
	);
};
