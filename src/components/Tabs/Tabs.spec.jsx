import React from 'react';
import { mount, shallow } from 'enzyme';
import { EVariant, Tabs } from './Tabs';
import { act } from 'react-dom/test-utils';
import { ETabsSize } from './index';
import { Tab } from './Tab';
import ReactDOM from 'react-dom';

describe.skip('<Tabs />', () => {
	const tabData = [
		{
			title: 'tab 1 title',
			content: 'tab 1 content',
		},
		{
			title: 'tab 2 title',
			content: 'tab 2 content',
		},
		{
			title: 'tab 3 title',
			content: 'tab 3 content',
		},
	];

	it('should throw if a tab element is not nested inside a Tabs element', () =>
		expect(() =>
			shallow(
				<Tab title="tab">
					<p>Tab content</p>
				</Tab>
			)
		).toThrow());

	it('should not throw', () => expect(() => shallow(<Tabs />)).not.toThrow());

	it('should not throw with nested tab items', () =>
		expect(() =>
			shallow(
				<Tabs>
					{tabData.map(tabData => (
						<Tab key={tabData} title={tabData.title}>
							{tabData.content}
						</Tab>
					))}
				</Tabs>
			)
		).not.toThrow());

	it('should match snapshot with nested tab items', () => {
		const tabs = mount(
			<Tabs>
				{tabData.map(tabData => (
					<Tab key={tabData} title={tabData.title}>
						{tabData.content}
					</Tab>
				))}
			</Tabs>
		);
		expect(tabs.html()).toMatchSnapshot();

		tabs.unmount();
	});

	it('should display the first tab pane by default', () => {
		const tabs = mount(
			<Tabs>
				{tabData.map(tabData => (
					<Tab key={tabData} title={tabData.title}>
						{tabData.content}
					</Tab>
				))}
			</Tabs>
		);

		expect(
			tabs
				.find('.tabPane')
				.at(0)
				.hasClass('tabPaneActive')
		).toEqual(true);
		expect(
			tabs
				.find('.tabPane')
				.at(1)
				.hasClass('tabPaneActive')
		).toEqual(false);
		expect(
			tabs
				.find('.tabPane')
				.at(2)
				.hasClass('tabPaneActive')
		).toEqual(false);

		tabs.unmount();
	});

	describe('when rendered to the DOM', () => {
		let container;

		const evt = new Event('click', {
			bubbles: true,
			cancelable: false,
			composed: false,
		});

		beforeEach(function() {
			container = document.createElement('div');
			document.body.appendChild(container);
		});

		afterEach(function() {
			document.body.removeChild(container);
			document = null;
		});

		it('should only display the first tab pane when tab 1 is clicked', done => {
			act(() => {
				ReactDOM.render(
					<Tabs>
						{tabData.map(tabData => (
							<Tab key={tabData} title={tabData.title}>
								{tabData.content}
							</Tab>
						))}
					</Tabs>,
					container
				);
			});

			act(() => {
				document
					.querySelector('.tabs button:nth-child(1)')
					.dispatchEvent(evt);

				setTimeout(() => {
					expect(
						document
							.querySelector('.tabPane:nth-child(1)')
							.className.includes('tabPaneActive')
					).toEqual(true);
					expect(
						document
							.querySelector('.tabPane:nth-child(2)')
							.className.includes('tabPaneActive')
					).toEqual(false);
					expect(
						document
							.querySelector('.tabPane:nth-child(3)')
							.className.includes('tabPaneActive')
					).toEqual(false);
					done();
				});
			});
		});

		it('should only display the second tab pane when tab 2 is clicked', done => {
			act(() => {
				ReactDOM.render(
					<Tabs>
						{tabData.map(tabData => (
							<Tab key={tabData} title={tabData.title}>
								{tabData.content}
							</Tab>
						))}
					</Tabs>,
					container
				);
			});

			act(() => {
				document
					.querySelector('.tabs button:nth-child(2)')
					.dispatchEvent(evt);

				setTimeout(() => {
					expect(
						document
							.querySelector('.tabPane:nth-child(1)')
							.className.includes('tabPaneActive')
					).toEqual(false);
					expect(
						document
							.querySelector('.tabPane:nth-child(2)')
							.className.includes('tabPaneActive')
					).toEqual(true);
					expect(
						document
							.querySelector('.tabPane:nth-child(3)')
							.className.includes('tabPaneActive')
					).toEqual(false);
					done();
				});
			});
		});

		it('should only display the third tab pane when tab 3 is clicked', done => {
			act(() => {
				ReactDOM.render(
					<Tabs>
						{tabData.map(tabData => (
							<Tab key={tabData} title={tabData.title}>
								{tabData.content}
							</Tab>
						))}
					</Tabs>,
					container
				);
			});

			act(() => {
				document
					.querySelector('.tabs button:nth-child(3)')
					.dispatchEvent(evt);

				setTimeout(() => {
					expect(
						document
							.querySelector('.tabPane:nth-child(1)')
							.className.includes('tabPaneActive')
					).toEqual(false);
					expect(
						document
							.querySelector('.tabPane:nth-child(2)')
							.className.includes('tabPaneActive')
					).toEqual(false);
					expect(
						document
							.querySelector('.tabPane:nth-child(3)')
							.className.includes('tabPaneActive')
					).toEqual(true);
					done();
				});
			});
		});
	});
});
