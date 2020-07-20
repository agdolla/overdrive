import { createContext, useContext, useState } from 'react';

import * as themeRefs from '@autoguru/overdrive/themes';
import { OverdriveProvider, ToastProvider } from '@autoguru/overdrive';

const themeSetting = createContext(null);

export const useThemeSetting = () => useContext(themeSetting);

export const ThemeSettingContextProvider = ({ children }) => {
	const [theme, setTheme] = useState(themeRefs.baseTheme);

	return (
		<themeSetting.Provider value={{ theme, setTheme }}>
			{children}
		</themeSetting.Provider>
	);
};

export const ThemedProvider = ({ children }) => {
	const { theme } = useThemeSetting();

	return <OverdriveProvider theme={theme}>{children}</OverdriveProvider>;
};
