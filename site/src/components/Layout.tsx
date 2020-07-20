import * as React from 'react';
import { Header } from './Header';
import { Box, Section } from '@autoguru/overdrive';
import { Sidebar } from './Sidebar';
import * as styleRefs from './Layout.treat';
import { useStyles } from 'react-treat';

export const Layout = ({ children }) => {
	const styles = useStyles(styleRefs);
	return (
		<Box width="full" height={'full'} className={styles.root}>
			<Sidebar />
			<Box width={'full'}>
				<Header />
				<Section paddingX={'3'} width={'large'}>
					{children}
				</Section>
			</Box>
		</Box>
	);
};
