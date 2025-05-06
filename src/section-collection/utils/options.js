import { __ } from '@wordpress/i18n';

import { verticalLineIcon, horizontalLineIcon } from './icons';

export const styleOpt = [
	{ label: __('Style-1', 'section-collection'), value: 'style1' },
	{ label: __('Style-2', 'section-collection'), value: 'style2' },
	{ label: __('Style-3', 'section-collection'), value: 'style3' },
	{ label: __('Style-4', 'section-collection'), value: 'style4' },
	// { label: __('Style-5', 'section-collection'), value: 'style5' },
]

export const layouts = [
	{ label: __('Vertical', 'textdomain'), value: 'vertical', icon: verticalLineIcon },
	{ label: __('Horizontal', 'textdomain'), value: 'horizontal', icon: horizontalLineIcon }
];

export const generalStyleTabs = [
	{ name: 'general', title: __('General', 'textdomain') },
	{ name: 'style', title: __('Style', 'textdomain') }
];