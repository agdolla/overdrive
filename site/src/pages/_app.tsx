import '@autoguru/overdrive/lib/reset/font-face.css';
import '@autoguru/overdrive/reset';

import { OverdriveProvider, ToastProvider } from '@autoguru/overdrive';
import * as React from 'react';
import { baseTheme } from '@autoguru/overdrive/lib/themes';
import { ThemeSettingContextProvider } from '../components/ThemeSettingsProvider';
import { Layout } from '../components/Layout';

export default function App({ Component, pageProps }) {
	if (Component.name === 'Error') return <Component {...pageProps} />;

	return (
		<OverdriveProvider theme={baseTheme}>
			<ToastProvider>
				<ThemeSettingContextProvider>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</ThemeSettingContextProvider>
			</ToastProvider>
		</OverdriveProvider>
	);
}
