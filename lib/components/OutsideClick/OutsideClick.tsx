import { warning } from '@autoguru/utilities';
import {
	Children,
	cloneElement,
	memo,
	NamedExoticComponent,
	ReactElement,
	RefObject,
	useEffect,
	useRef,
} from 'react';

import { setRef } from '../../utils';

export const useOutsideClick = (
	refs: Array<RefObject<HTMLElement>>,
	onClickAway: () => void,
) => {
	const callbackRef = useRef(onClickAway);
	const refsRef = useRef(refs);

	useEffect(() => {
		setRef(refsRef, refs);
	}, [refs]);

	// So we don't have to re-bind events when a callback gets updated, simply call the callback when the event fires.
	useEffect(() => {
		setRef(callbackRef, onClickAway);
	}, [onClickAway]);

	useEffect(() => {
		if (
			typeof document === 'undefined' ||
			typeof onClickAway !== 'function'
		)
			return void 0;

		return bindEvent(document, 'click', (event) => {
			if (!refsRef.current.every((node) => node.current !== null)) {
				return;
			}

			const currentRefs = refsRef.current;
			let insideDOM = false;

			const paths = event.composedPath();

			currentRefs.forEach((ref) => {
				if (paths.includes(ref.current)) {
					insideDOM = true;
				}
			});

			if (insideDOM === false) {
				callbackRef.current();
			}
		});
	}, []);
};

const bindEvent = <
	Node extends HTMLElement | HTMLDocument,
	K extends keyof HTMLElementEventMap
>(
	node: Node,
	event: K,
	callback: (event: HTMLElementEventMap[K]) => unknown,
) => {
	node.addEventListener(event, callback as EventListener, {
		passive: true,
	});

	return () => {
		node.removeEventListener(event, callback as EventListener);
	};
};

interface Props {
	children: ReactElement;

	onOutsideClick?(): void;
}

export const OutsideClick: NamedExoticComponent<Props> = memo(
	({ children, onOutsideClick = () => void 0 }) => {
		const child = Children.only(children);

		const rootClickRef = useRef<HTMLElement>(null);
		const hasRef = Object.prototype.hasOwnProperty.call(child.props, 'ref');

		warning(
			!hasRef,
			'This component overrides the child ref, use with caution.',
		);

		useOutsideClick([rootClickRef], onOutsideClick);

		return cloneElement(child, {
			ref: rootClickRef,
		});
	},
);
