import * as React from 'react';
import memoize from 'fast-memoize';
import prettier from 'prettier/standalone';
import typescriptParser from 'prettier/parser-typescript';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import prismTheme from './codeTheme';
import tsxLanguage from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';
import { useTextStyles } from '@autoguru/overdrive';

SyntaxHighlighter.registerLanguage('tsx', tsxLanguage);

const format = memoize((code) =>
	prettier
		.format(code, {
			parser: 'typescript',
			plugins: [typescriptParser],
			printWidth: 80,
			bracketSpacing: true,
			jsxBracketSameLine: true,
			proseWrap: 'always',
			singleQuote: true,
			semi: false,
			tabWidth: 4,
			trailingComma: 'all',
			useTabs: false,
		})
		.replace(/^;/, ''),
);

export const Code = ({ children }) => (
	<SyntaxHighlighter
		language={'tsx'}
		style={prismTheme}
		codeTagProps={{
			className: useTextStyles({
				size: '3',
			}),
			style: {
				fontFamily:
					'"Dank Mono", "Fira Code", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
			},
		}}
		customStyle={{
			borderRadius: '0',
		}}>
		{format(children)}
	</SyntaxHighlighter>
);
