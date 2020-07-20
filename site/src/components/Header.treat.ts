import { style } from 'treat';
import { hex2rgba } from '@autoguru/overdrive/lib/utils';

export const root = style((theme) => ({
	position: 'sticky',
	top: 0,
	zIndex: 9,

	backgroundColor: 'rgb(255,255,255,0.8)',
	backdropFilter: 'blur(5px)',
}));
