import type { BoxStyleProps } from '@autoguru/overdrive';

export interface ComponentDoc {
	name: string;
	exports?: string[];
	description?: string;
	demos: Array<{
		name: string;
		backgroundColour?: BoxStyleProps['backgroundColour'];
		Example: (props: {}) => JSX.Element;
		code?: string;
	}>;
}
