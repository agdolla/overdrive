import React, { useState } from 'react';
import { mount, render, shallow } from 'enzyme';
import { Switch } from './Switch';
import { act } from 'react-dom/test-utils';

describe('<Switch />', () => {
	it('should not throw', () =>
		expect(() => shallow(<Switch />)).not.toThrow());

	it('should match snapshot without props', () => {
		expect(render(<Switch />)).toMatchSnapshot();
	});

	it('should match snapshot when un-toggled', () => {
		expect(render(<Switch toggled={false} />)).toMatchSnapshot();
	});

	it('should match snapshot when un-toggled and disabled', () => {
		expect(render(<Switch disabled toggled={false} />)).toMatchSnapshot();
	});

	it('should match snapshot when toggled', () => {
		expect(render(<Switch toggled />)).toMatchSnapshot();
	});

	it('should match snapshot when toggled and disabled', () => {
		expect(render(<Switch toggled disabled />)).toMatchSnapshot();
	});

	it('should pass on className to dom element', () => {
		const toggleButton = mount(
			<Switch className="toggleButton-class" value={10} />,
		);
		expect(
			toggleButton.find('div.toggleButton-class').length === 1,
		).toBeTruthy();
	});

	it('should set toggle to false by default', () => {
		const toggleButton = mount(<Switch />);
		expect(toggleButton.find('.toggled').length === 0).toBeTruthy();
	});

	it('should be toggled on when toggled prop is set to true', () => {
		const toggleButton = mount(<Switch toggled />);
		expect(toggleButton.find('.toggled').length === 1).toBeTruthy();
	});

	it('should be enabled by default', () => {
		const toggleButton = mount(<Switch />);
		expect(toggleButton.find('[disabled]').length === 0).toBeTruthy();
	});

	it('should be disabled on when disabled prop is set to true', () => {
		const toggleButton = mount(<Switch disabled />);
		expect(toggleButton.find('[disabled]').length === 1).toBeTruthy();
	});

	it('should fire change with the correct changed value when clicked', () => {
		const spyedCallback = jest.fn();

		const wrapper = mount(
			<Switch toggled={false} onChange={spyedCallback} />,
		);

		wrapper.find('div').simulate('click');

		expect(spyedCallback).toHaveBeenCalledWith(true);

		wrapper.find('div').simulate('click');

		expect(spyedCallback).toHaveBeenCalledWith(false);

		wrapper.find('div').simulate('click');

		expect(spyedCallback).toHaveBeenCalledWith(true);
		expect(spyedCallback).toHaveBeenCalledTimes(3);

		wrapper.unmount();
	});

	it('should not fire change if clicked while disabled', () => {
		const spyedCallback = jest.fn();

		const wrapper = mount(
			<Switch disabled toggled={false} onChange={spyedCallback} />,
		);

		wrapper.find('div').simulate('click');

		expect(spyedCallback).not.toHaveBeenCalled();

		wrapper.unmount();
	});

	it('should update its value when and a value prop comes in', done => {
		const ToggleButtonWrapper = ({ getToggleSetter }) => {
			const [toggled, toggledValue] = useState(false);

			getToggleSetter(toggledValue);

			return <Switch toggled={toggled} />;
		};

		const wrapper = mount(
			<ToggleButtonWrapper getToggleSetter={onSetToggle} />,
		);

		function onSetToggle(setToggle) {
			setTimeout(() => {
				expect(!wrapper.html().includes('toggled')).toEqual(true);

				act(() => {
					setToggle(true);
				});

				expect(wrapper.html().includes('toggled')).toEqual(true);

				act(() => {
					setToggle(false);
				});

				expect(!wrapper.html().includes('toggled')).toEqual(true);

				wrapper.unmount();
				done();
			}, 100);
		}
	});
});