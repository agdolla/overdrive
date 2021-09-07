import * as React from 'react';
import { Text } from '../../components/Text/Text';

import { useAttachedBoxes } from './';
import { Box } from '../../components';

export default {
	title: 'Foundation/Layout/Attached Boxes',
	parameters: {
		chromatic: { disable: true },
	},
};

const columnCount = [2, 3, 4, 5];
const gap = ['1', '2', '3', '4'];
export const One = () => {
	const count = 1;
	const [attachedBoxes, wrapperCls, wrapperStyle] = useAttachedBoxes({
		count,
		columnCount,
		gap,
		backgroundColour: 'gray700',
	});

	return (
		<Box className={wrapperCls} style={wrapperStyle}>
			{attachedBoxes.map((AttachedBox, index) => (
				<AttachedBox key={index}>
					<Text is="p" colour="white" align="center">
						{index + 1}
					</Text>
				</AttachedBox>
			))}
		</Box>
	);
};

export const Five = () => {
	const count = 5;
	const [attachedBoxes, wrapperCls, wrapperStyle] = useAttachedBoxes({
		count,
		columnCount,
		gap,
	});

	return (
		<Box className={wrapperCls} style={wrapperStyle}>
			{attachedBoxes.map((AttachedBox, index) => (
				<AttachedBox key={index}>
					<Text is="p" colour="white" align="center">
						{index + 1}
					</Text>
				</AttachedBox>
			))}
		</Box>
	);
};
export const Seven = () => {
	const count = 7;
	const [attachedBoxes, wrapperCls, wrapperStyle] = useAttachedBoxes({
		count,
		columnCount,
		gap,
		backgroundColour: 'gray700',
	});

	return (
		<Box className={wrapperCls} style={wrapperStyle}>
			{attachedBoxes.map((AttachedBox, index) => (
				<AttachedBox key={index}>
					<Text is="p" colour="white" align="center">
						{index + 1}
					</Text>
				</AttachedBox>
			))}
		</Box>
	);
};
export const TwentyThree = () => {
	const count = 23;
	const [attachedBoxes, wrapperCls, wrapperStyle] = useAttachedBoxes({
		count,
		columnCount,
		gap,
	});

	return (
		<Box className={wrapperCls} style={wrapperStyle}>
			{attachedBoxes.map((AttachedBox, index) => (
				<AttachedBox key={index}>
					<Text is="p" colour="white" align="center">
						{index + 1}
					</Text>
				</AttachedBox>
			))}
		</Box>
	);
};
