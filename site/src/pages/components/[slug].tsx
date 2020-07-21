import { Box, Heading, Stack, Text } from '@autoguru/overdrive';
import * as React from 'react';
import { getAllRoutes, getComponentDoc } from '../../routeHelper';
import { ThemedProvider } from '../../components/ThemeSettingsProvider';
import Head from 'next/head';
import reactToJSXString from 'react-element-to-jsx-string';
import { Code } from '../../components/Code';

export default ({ slug }) => {
	const doc = getComponentDoc(slug as string)!;

	return (
		<Box marginTop={'8'}>
			<Head>
				<title>{doc.name} | AutoGuru Overdrive</title>
			</Head>
			<Stack space={'7'} dividers>
				<Stack space={'7'}>
					<Stack space={'1'}>
						<Heading is="h6" colour={'light'}>
							COMPONENT
						</Heading>
						<Heading is={'h1'}>{doc.name}</Heading>
						{doc.description && (
							<Text is={'p'}>{doc.description}</Text>
						)}
					</Stack>
					{doc.exports && (
						<Code>
							{`import { ${doc.exports.join(
								',',
							)} } from '@autoguru/overdrive';`}
						</Code>
					)}
				</Stack>
				<Stack dividers space="8">
					{doc.demos.map((demo, i) => (
						<Stack key={i} space="4">
							<Stack space={'1'}>
								<Heading is="h3">{demo.name}</Heading>
								{demo.description && demo.description}
							</Stack>

							<Stack space="2">
								<Box
									padding={'2'}
									backgroundColour={'gray200'}
									borderRadius={'1'}>
									<Stack space={'2'}>
										<ThemedProvider>
											<Box
												padding={'7'}
												borderRadius={'1'}
												backgroundColour={
													demo.backgroundColour ??
													'gray200'
												}>
												<demo.Example />
											</Box>
										</ThemedProvider>
										<Box
											padding={'4'}
											backgroundColour={'white'}
											borderRadius={'1'}>
											<Code>
												{demo.code ??
													reactToJSXString(
														demo.Example({}),
														{
															useBooleanShorthandSyntax: true,
															showFunctions: true,
															useFragmentShortSyntax: true,
														},
													)}
											</Code>
										</Box>
									</Stack>
								</Box>
							</Stack>
						</Stack>
					))}
				</Stack>
			</Stack>
		</Box>
	);
};

export async function getStaticPaths() {
	const routes = getAllRoutes();

	return {
		paths: routes.map((slug) => ({ params: { slug } })),
		fallback: false,
	};
}

// We need this function...
export async function getStaticProps({ params }) {
	return {
		props: params,
	};
}
