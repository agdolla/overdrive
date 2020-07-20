import { style } from 'treat';

export const root = style((theme) => ({
	display: 'grid',
	gridTemplateColumns: 'minmax(220px, 14vw) 1fr',
	gridGap: theme.space['8'],
}));
