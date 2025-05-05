import { __ } from '@wordpress/i18n';

export const generalStyleTabs = [
	{ name: 'general', title: __('General', 'textdomain') },
	{ name: 'style', title: __('Style', 'textdomain') },
	// { name: 'advanced', title: __('Advanced', 'textdomain') }
];

export const purposeTypeOptions = [
	{ label: 'Test', value: 'test' },
	{ label: 'Final', value: 'final' }
]
export const resetValues = { top: 0, right: 0, bottom: 0, left: 0 };
export const resetPadding = { top: "136px", right: 0, bottom: "136px", left: 0 };
export const mainRadius = { top: "0px", right: "0px", bottom: "0px", left: "0px" };
export const resetRadius = { top: "8px", right: "8px", bottom: "8px", left: "8px" };
export const resetItemPadding = { top: "8px", right: "16px", bottom: "8px", left: "16px" };
export const resetItem3Padding = { top: "24px", right: "24px", bottom: "24px", left: "24px" };
export const borderDefaultVal = { width: '1px', style: 'solid', color: 'rgba(252, 252, 253, 0.1)', side: 'all', radius: '8px' };
export const resetItemOnePadding = { top: "5px", right: "8px", bottom: "5px", left: "8px" };
export const resetMargin = { top: "0px", right: "-8px", bottom: "0px", left: "-8px" };
export const resetTitle = { top: 24, right: 0, bottom: 12, left: 0 };
export const resetdec = { top: 0, right: 0, bottom: 16, left: 0 };

export const themeOptions = [
	{ label: "Theme One", value: "theme-1" },
	{ label: "Theme Two", value: "theme-2" },
	{ label: "Theme Three", value: "theme-3" },
	{ label: "Theme Four", value: "theme-4" },
];

export const themePreview = [
	{
		label: "Theme One",
		value: "theme-1",
		img: "https://i.ibb.co.com/8LZkNNTZ/1-min.png",
		height: "auto",
		width: "160px",
	},
	{
		label: "Theme Two",
		value: "theme-2",
		img: "https://i.ibb.co.com/LDGbH3YV/2-min.png",
		height: "auto",
		width: "160px",
	},
	{
		label: "Theme Three",
		value: "theme-3",
		img: "https://i.ibb.co.com/r2V37nTk/3-min.png",
		height: "auto",
		width: "160px",
	},
	{
		label: "Theme Four",
		value: "theme-4",
		img: "https://i.ibb.co.com/HDmdKKwP/4-min.png",
		height: "auto",
		width: "160px",
	},
];
