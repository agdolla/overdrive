import type { BoxStyleProps } from '@autoguru/overdrive';

export interface ComponentDoc {
	name: string;
	exports?: string[];
	description?: string;
	demos: Array<{
		name: string;
		description?: JSX.Element;
		backgroundColour?: BoxStyleProps['backgroundColour'];
		Example: (props: {}) => JSX.Element;
		code?: string;
	}>;
}
