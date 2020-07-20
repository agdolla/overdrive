import Link from 'next/link';
import { Box, Heading, Stack, Text } from '@autoguru/overdrive';
import * as React from 'react';
import { useMemo } from 'react';
import { useRouter } from 'next/router';
import { getAllRoutes, getComponentDoc } from '../routeHelper';
import * as styleRefs from './Sidebar.treat';
import { useStyles } from 'react-treat';

export const Sidebar = () => {
	const styles = useStyles(styleRefs);
	const router = useRouter();

	const routes = useMemo(
		() =>
			getAllRoutes().map((slug) => ({
				slug,
				name: getComponentDoc(slug).name,
			})),
		[],
	);

	return (
		<Box padding="5" className={styles.root}>
			<Box display={'flex'} flexDirection={'column'} height={'full'}>
				<Box
					borderRadius={'1'}
					is={'img'}
					src={require('../../../logo.png')}
					role={'presentation'}
					width={'full'}
					display={'block'}
				/>

				<Box className={styles.navigation} is={'nav'} marginTop={'8'}>
					<Stack space={'5'}>
						<Stack space={'2'}>
							<Heading is={'h6'} colour={'light'}>
								COMPONENTS
							</Heading>
							<Stack space={'1'}>
								{routes.map((doc) => {
									const pageRoute = `/components/${doc.slug}`;
									const isActive =
										router.asPath === pageRoute;
									return (
										<Link
											passHref
											key={doc.slug}
											href={`/components/[slug]`}
											as={pageRoute}>
											{/*TODO: We should be using Button, but need to make it be purely a renderer*/}
											<Box
												display={'block'}
												is="a"
												padding="3"
												borderRadius={'1'}
												className={[
													styles.navButton.default,
													isActive &&
														styles.navButton.active,
												]}>
												<Text
													is={'span'}
													size={'3'}
													fontWeight={'semiBold'}
													colour={
														isActive
															? 'dark'
															: 'neutral'
													}>
													{doc.name}
												</Text>
											</Box>
										</Link>
									);
								})}
							</Stack>
						</Stack>
					</Stack>
				</Box>
			</Box>
		</Box>
	);
};
