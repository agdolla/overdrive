import { invariant } from '@autoguru/utilities';
import { ThemeVars } from '@vanilla-extract/css/dist/declarations/src/types';
import * as React from 'react';
import { createContext, FunctionComponent, useContext, useMemo } from 'react';

import { Tokens } from '../../themes/tokens';
import { makeRuntimeTokens, RuntimeTokens } from '../../themes/makeTheme';

type ThemeContextType = {
	vars: ThemeVars<Tokens>;
	themeClass: string;
};
const themeContext = createContext<ThemeContextType | null>(null);
const runtimeTokensContext = createContext<RuntimeTokens | null>(null);

export interface Props {
	vars: ThemeVars<Tokens>;
	themeClass: string;
	tokens: Tokens;
}

export const ThemeProvider: FunctionComponent<Props> = ({
															vars,
															tokens,
															themeClass,
															children,
														}) => (
	<themeContext.Provider value={
		useMemo(()=>({ vars, themeClass }), [vars, tokens,])}>
		<runtimeTokensContext.Provider
			value={useMemo(() => makeRuntimeTokens(tokens), [tokens])}>
			{children}
		</runtimeTokensContext.Provider>
	</themeContext.Provider>
);

export const useTheme = () => {
	const theme = useContext(themeContext);

	invariant(
		theme !== null,
		"You haven't provided an `OverdriveProvider`.",
	);

	return theme;
};

export const useRuntimeTokens = (): RuntimeTokens => {
	const tokens = useContext(runtimeTokensContext);
	invariant(tokens !== null, "You haven't provided a `OverdriveProvider`.");
	return tokens;
};
