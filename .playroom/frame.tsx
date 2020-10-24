import '../packages/overdrive/lib/reset/font-face.css';
import '../packages/overdrive/lib/reset';

import { StrictMode } from 'react';
import { OverdriveProvider } from '@autoguru/overdrive';

export default ({ theme, children }) =>
	<StrictMode>
		<OverdriveProvider theme={theme}>
			{children}
		</OverdriveProvider>
	</StrictMode>
