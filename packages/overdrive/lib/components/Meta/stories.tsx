import { CalendarIcon } from '@autoguru/icons';

import { Meta } from '.';

export default {
	title: 'Components/Meta',
	component: Meta,
};

export const standard = () => (
	<Meta variant="primary" icon={CalendarIcon} label="Hello World" />
);
