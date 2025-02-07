import * as React from 'react';
import { StrictMode } from 'react';
import { OverdriveProvider } from '@autoguru/overdrive/lib';
import { themeRef, vars } from '@autoguru/overdrive/lib/themes/base/vars.css';
import { tokens } from '@autoguru/overdrive/lib/themes/base/tokens';
import '@autoguru/overdrive/lib/reset/globalFonts.css';
import '@autoguru/overdrive/lib/reset/globalReset.css';

export default ({ children }) =>
	<StrictMode>
		<OverdriveProvider themeClass={themeRef} tokens={tokens} vars={vars}>
			{children}
		</OverdriveProvider>
	</StrictMode>
