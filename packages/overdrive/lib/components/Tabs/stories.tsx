import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import isChromatic from 'chromatic/isChromatic';
import * as React from 'react';
import { ComponentProps, useEffect, useState } from 'react';

import { Stack } from '../Stack';
import { StarRating } from '../StarRating';

import { Tab, TabList, TabPane, TabPanes, Tabs } from '.';

const TestChild = ({ label }) => {
	const [thing, sething] = useState(isChromatic() ? 0.5 : Math.random() * 5);

	useEffect(() => {
		const t = setInterval(() => {
			sething(isChromatic() ? 0.5 : Math.random() * 5);
		}, 1e3);

		return () => {
			clearInterval(t);
		};
	}, []);

	return <StarRating rating={thing} label={label} />;
};

export default {
	title: 'Components/Tabs',
	decorators: [
		(story) => (
			<div style={{ maxWidth: '500px', width: '100%' }}>{story()}</div>
		),
	],
	argTypes: {
		children: {
			control: {
				disable: true,
			},
		},
	},
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

const standardProps: ComponentProps<typeof Tabs> = {
	active: 0,
	onChange: action('onChange'),
	children: (
		<>
			<TabList>
				<Tab>Tab 1</Tab>
				<Tab>Tab 2</Tab>
			</TabList>

			<TabPanes>
				<TabPane>Content A</TabPane>
				<TabPane>
					<Stack>
						<TestChild label="5" />
						<TestChild label="4" />
						<TestChild label="3" />
						<TestChild label="2" />
						<TestChild label="1" />
					</Stack>
				</TabPane>
			</TabPanes>
		</>
	),
};
export const standard = Template.bind(standardProps);
standard.args = standardProps;

const withIndicationProps: ComponentProps<typeof Tabs> = {
	active: 0,
	onChange: action('onChange'),
	children: (
		<>
			<TabList>
				<Tab indication={2}>Tab 1</Tab>
				<Tab indication={0}>Tab 2</Tab>
			</TabList>

			<TabPanes>
				<TabPane>Content A</TabPane>
				<TabPane>Content B</TabPane>
			</TabPanes>
		</>
	),
};
export const withIndication = Template.bind(withIndicationProps);
withIndication.args = withIndicationProps;

const tabsWithoutPanesProps: ComponentProps<typeof Tabs> = {
	active: 0,
	onChange: action('onChange'),
	children: (
		<TabList>
			<Tab id="tab-1" is={<a href="/#tab-1" />}>
				Tab 1
			</Tab>
			<Tab id="tab-2" is={<a href="/#tab-2" />}>
				Tab 2
			</Tab>
		</TabList>
	),
};
export const tabsWithoutPanes = Template.bind(tabsWithoutPanesProps);
tabsWithoutPanes.args = tabsWithoutPanesProps;

const withStretchProps: ComponentProps<typeof Tabs> = {
	active: 0,
	onChange: action('onChange'),
	children: (
		<>
			<TabList stretch>
				<Tab>Tab 1</Tab>
				<Tab>Tab 2</Tab>
			</TabList>

			<TabPanes>
				<TabPane>Content A</TabPane>
				<TabPane>
					<Stack>
						<TestChild label="5" />
						<TestChild label="4" />
						<TestChild label="3" />
						<TestChild label="2" />
						<TestChild label="1" />
					</Stack>
				</TabPane>
			</TabPanes>
		</>
	),
};
export const withStretch = Template.bind(withStretchProps);
withStretch.args = withStretchProps;

const scrollableProps: ComponentProps<typeof Tabs> = {
	active: 0,
	onChange: action('onChange'),
	children: (
		<TabList scrollable>
			<Tab>Hello</Tab>
			<Tab indication={5}>Why isnt</Tab>
			<Tab>This a terribly</Tab>
			<Tab>Long</Tab>
			<Tab>Tab list</Tab>
			<Tab>Hello</Tab>
			<Tab>Why isnt</Tab>
			<Tab>This a terribly</Tab>
			<Tab>Long</Tab>
			<Tab>Tab list</Tab>
			<Tab>Hello</Tab>
			<Tab>Why isnt</Tab>
			<Tab>This a terribly</Tab>
			<Tab>Long</Tab>
			<Tab>Tab list</Tab>
		</TabList>
	),
};
export const scrollable = Template.bind(scrollableProps);
scrollable.args = scrollableProps;
