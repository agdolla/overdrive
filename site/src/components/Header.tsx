import { useThemeSetting } from './ThemeSettingsProvider';
import * as React from 'react';
import {
	Box,
	Column,
	Columns,
	Inline,
	Text,
	useTextStyles,
} from '@autoguru/overdrive';
import * as styleRefs from './Header.treat';
import { useStyles } from 'react-treat';

export const Header = () => {
	const styles = useStyles(styleRefs);

	const { theme } = useThemeSetting();

	return (
		<Box className={styles.root} padding={'4'}>
			<Columns noWrap>
				<Column grow>
					{/*TODO: Impl search, but we need a smaller input...*/}
					<Text size={'2'}>Search coming soon....</Text>
				</Column>
				<Column>
					<Inline space={'3'}>
						<StorybookLink />
						<GitHubLink />
					</Inline>
				</Column>
			</Columns>
		</Box>
	);
};

const GitHubLink = () => {
	return (
		<Box
			is={'a'}
			href={'https://github.com/autoguru-au/overdrive/'}
			target={'_blank'}
			className={useTextStyles({
				colour: 'muted',
			})}>
			<svg
				width="16px"
				role="presentation"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				fill={'currentColor'}>
				<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
			</svg>
		</Box>
	);
};

const StorybookLink = () => {
	return (
		<Box
			is={'a'}
			href={'/storybook'}
			target={'_blank'}
			className={useTextStyles({
				colour: 'muted',
			})}>
			<svg
				width="16px"
				role="presentation"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				fill={'currentColor'}>
				<path d="M16.34.24l-.12 2.71a.18.18 0 0 0 .29.15l1.06-.8.9.7a.18.18 0 0 0 .28-.14L18.65.1l1.33-.1a1.2 1.2 0 0 1 1.28 1.2v21.6A1.2 1.2 0 0 1 20 24l-16.1-.72a1.2 1.2 0 0 1-1.15-1.16L2 2.32a1.2 1.2 0 0 1 1.13-1.27l13.2-.83.01.02zM13.27 9.3c0 .47 3.16.24 3.59-.08 0-3.2-1.72-4.89-4.86-4.89-3.15 0-4.9 1.72-4.9 4.29 0 4.45 6 4.53 6 6.96 0 .7-.32 1.1-1.05 1.1-.96 0-1.35-.49-1.3-2.16 0-.36-3.65-.48-3.77 0-.27 4.03 2.23 5.2 5.1 5.2 2.79 0 4.97-1.49 4.97-4.18 0-4.77-6.1-4.64-6.1-7 0-.97.72-1.1 1.13-1.1.45 0 1.25.07 1.19 1.87z" />
			</svg>
		</Box>
	);
};
