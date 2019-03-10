import cx from 'clsx';
import React from 'react';
import { WindowClose } from '../../icons';
import { EHeadingSize, Heading } from '../Heading';
import { Icon } from '../Icon';
import { EModalCloseCode, withModal } from '../ModalBase';
import styles from './style.scss';

export enum ESize {
	Standard = 'standard', // 800px wide
}

export interface IProps {
	size?: ESize;
	className?: string;
	title: string;
}

export const StandardModal = withModal<IProps>(
	({
		size = ESize.Standard,
		className = '',
		title,
		onRequestClose,
		children,
	}) => {
		const closeButtonHandler = () => {
			onRequestClose(EModalCloseCode.Button);
		};

		return (
			<article
				className={cx([
					styles.modal,
					{ [styles.modalSizeStandard]: size === ESize.Standard },
					className,
				])}>
				<header className={cx(styles.header, styles.headerWithBorder)}>
					<button
						className={styles.headerCloseButton}
						onClick={closeButtonHandler}>
						<Icon size={20} icon={WindowClose} />
					</button>
					<div className={styles.headerTitle}>
						<Heading
							size={EHeadingSize.Heading5}
							children={title}
						/>
					</div>
				</header>
				<main className={styles.content}>{children}</main>
			</article>
		);
	}
);
