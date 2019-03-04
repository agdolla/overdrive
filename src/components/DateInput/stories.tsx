import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { DateInput } from '.';
import { formatDate } from './DateInput';

const todayStr: string = formatDate();

const sharedKnobs = placeholder => ({
	value: text('Value', todayStr),
	placeholder: text('Placeholder', placeholder),
	onChange: action('onChange'),
	onFocus: action('onFocus'),
	onBlur: action('onBlur'),
});
const isTouched = (touched: boolean) => boolean('isTouched', touched);
const isValid = (valid: boolean) => boolean('isValid', valid);

storiesOf('Components|Inputs/Date', module)
	.add('default', () => (
		<DateInput name="date" {...sharedKnobs('What is your DOB?')} />
	))
	.add('with a value', () => (
		<DateInput {...sharedKnobs('What is your DOB?')} name="abc" />
	))
	.add('with hint text', () => (
		<DateInput
			name="abc"
			{...sharedKnobs('What is your DOB?')}
			hintText={text('Hint Text', 'dd/mm/yyy')}
		/>
	))
	.add('with validation', () => (
		<DateInput
			{...sharedKnobs('What is your DOB?')}
			name="abc"
			isValid={isValid(false)}
			isTouched={isTouched(false)}
			hintText={text('Hint Text', 'dd/mm/yyy')}
		/>
	));
