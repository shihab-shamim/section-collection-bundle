import { __ } from '@wordpress/i18n';

export const generalStyleTabs = [
	{ name: 'general', title: __('General', 'textdomain') },
	{ name: 'style', title: __('Style', 'textdomain') },
	// { name: 'advanced', title: __('Advanced', 'textdomain') }
];

export const themeOptions = [
	{ label: "Theme One", value: "theme-1" },
	{ label: "Theme Two", value: "theme-2" },
	{ label: "Theme Three", value: "theme-3" }
	// { label: "Style Four", value: "theme-4" },
];

export const resetPadding = { top: "0px", right: "0px", bottom: "0px", left: "0px" };
export const resetCtaMargin = { top: "0px", right: "0px",bottom: "0px", left: "0px" };

export const resetMargin = { top: "0px", right: "-12px", bottom: "0px", left: "-12px" };

export const paddingReset = { top: "120px", right: 0, bottom: "120px", left: 0 };

export const resetRadius= { top: '0px', right: '0px', bottom: '0px', left: '0px' };
export const resetButtonRadius= { top: '6px', right: '6px', bottom: '6px', left: '6px' };

export const resetButtonPadding = { top: "9px", right: "16px", bottom: "9px", left: "16px"};

export const borderDefaultVal = { width: '1px', style: 'solid', color: 'rgba(252, 252, 253, 0.2)', side: 'all', radius: '8px' };
