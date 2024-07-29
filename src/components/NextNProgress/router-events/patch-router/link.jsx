'use client';

import NextLink, { LinkProps } from 'next/link';
import React, { forwardRef, ReactNode } from 'react';

import { onStart } from '../events';
import { shouldTriggerStartEvent } from './should-trigger-start-event';

export const Link = forwardRef(function Link(
	{ onClick, className, children, id, ...rest },
	ref,
) {
	return (
		<NextLink
			onClick={event => {
				linkClicked(event);
				if (onClick) onClick(event);
			}}
			className={className}
			id={id}
			{...rest}
			ref={ref}
		>
			{children}
		</NextLink>
	);
});
export function linkClicked(event) {
	const anchorElement = event.currentTarget;
	const { href } = anchorElement;
	if (href || href.startsWith('/')) {
		if (shouldTriggerStartEvent(href, event)) onStart();
	}
}