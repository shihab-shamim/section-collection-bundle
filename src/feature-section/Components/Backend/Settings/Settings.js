// import Advanced from '../../../../../bpl-tools/Advanced/index';
import { __ } from '@wordpress/i18n';
import { InspectorControls, BlockControls, AlignmentToolbar } from '@wordpress/block-editor';
import { TabPanel } from '@wordpress/components';
import { tabController } from '../../../../../../bpl-tools/utils/functions';
import { generalStyleTabs, themePreview } from '../../../utils/options';
import General from './General/General';
import Style from './Style/Style';
import BPlBlockPreview from './Panel/bplBlockPreview';
import { themeSwitch } from '../../../utils/functions';




const Settings = ({ attributes, setAttributes, device, }) => {
    // advanced
	const { alignment, layout } = attributes;


	return <>
		<InspectorControls>
			<div className='bBlocksInspectorInfo'>
				Need more block like this? Checkout the bundle ➡ <a href='https://wordpress.org/plugins/b-blocks' target='_blank' rel='noopener noreferrer'>B Blocks</a>
			</div>

			<TabPanel className='bPlTabPanel wp-block-b-blocks-info-list' activeClass='activeTab'
				tabs={generalStyleTabs}
				onSelect={tabController}
			>
				{
					tab => <>
						{'general' === tab.name && <General attributes={attributes} setAttributes={setAttributes} device={device} />}

						{'style' === tab.name && <Style attributes={attributes} setAttributes={setAttributes} device={device} />}

						{/* {'advanced' === tab.name && <Advanced advanced={advanced} onChange={(newData) => setAttributes({ advanced: newData })} isPremium={true} />} */}
					</>
				}
			</TabPanel>
		</InspectorControls>


		<BlockControls>

			<AlignmentToolbar value={alignment} onChange={val => setAttributes({ alignment: val })} describedBy={__('Block Name Alignment')} alignmentControls={[
				{ title: __('Block Name in left', 'textdomain'), align: 'left', icon: 'align-left' },
				{ title: __('Block Name in center', 'textdomain'), align: 'center', icon: 'align-center' },
				{ title: __('Block Name in right', 'textdomain'), align: 'right', icon: 'align-right' }
			]} />

			<BPlBlockPreview options={themePreview} value={layout?.theme} onChange={(val) => setAttributes(themeSwitch(val, attributes))} />
		</BlockControls>
	</>;
};
export default Settings;