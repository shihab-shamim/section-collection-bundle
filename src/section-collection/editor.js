import { registerBlockType } from '@wordpress/blocks';

import metadata from '../inc/block.json';

import './editor.scss';
import { blockIcon } from './utils/icons';
import Edit from './Edit';

registerBlockType(metadata, {
	icon: blockIcon,

	// Build in Functions
	edit: Edit,

	save: () => null
});