import React from 'react';

import { Text } from '../Typography';
import { OrderedList } from '.';

export default { title: 'Foundation|List/OrderedList' };

export const standard = () => (
	<OrderedList>
		<OrderedList.Item>
			<Text>Strawberry</Text>
		</OrderedList.Item>
		<OrderedList.Item>
			<Text>Watermelon</Text>
			<OrderedList>
				<OrderedList.Item>
					<Text>Mango</Text>
				</OrderedList.Item>
				<OrderedList.Item>
					<Text>Banana</Text>
				</OrderedList.Item>
				<OrderedList.Item>
					<Text>Apple</Text>
					<OrderedList>
						<OrderedList.Item>
							<Text>Grape</Text>
						</OrderedList.Item>
						<OrderedList.Item>
							<Text>Orange</Text>
						</OrderedList.Item>
					</OrderedList>
				</OrderedList.Item>
				<OrderedList.Item>
					<Text>Pineapple</Text>
				</OrderedList.Item>
			</OrderedList>
		</OrderedList.Item>
		<OrderedList.Item>
			<Text>Pear</Text>
		</OrderedList.Item>
	</OrderedList>
);