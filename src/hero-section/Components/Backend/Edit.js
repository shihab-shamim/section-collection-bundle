import { useEffect, useState } from 'react';
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton, Popover, Button } from "@wordpress/components";
import { RichText, MediaUpload, MediaUploadCheck, BlockControls, __experimentalLinkControl as LinkControl } from '@wordpress/block-editor';

import { produce } from 'immer';
import Layout from '../Common/Wrapper';


import Settings from './Settings/Settings';
import Style from '../Common/Style';
import { tabController } from '../../../../../bpl-tools/utils/functions'
import { link } from '../../utils/icons';

const Edit = props => {
	const { attributes, setAttributes, clientId, isSelected } = props;

	useEffect(() => { clientId && setAttributes({ cId: clientId.substring(0, 10) }); }, [clientId]); // Set & Update clientId to cId

	useEffect(() => tabController(), [isSelected]);

	const [isBtnOneLinkPickerVisible, setIsBtnOneLinkPickerVisible] = useState(false);
	const [isBtnTwoLinkPickerVisible, setIsBtnTwoLinkPickerVisible] = useState(false);

	const updateObject = (obj, key, val, otherKey = null) => {
		const newObj = produce(attributes[obj], draft => {
			if (null !== otherKey) {
				draft[key][otherKey] = val;
			} else {
				draft[key] = val;
			}
		});
		setAttributes({ [obj]: newObj });
	}

	const { content } = attributes;
	const { title, subTitle, btnOneText, btnOneUrl, btnTwoUrl, btnTwoText, img } = content;

	const titleArea = (
		<RichText tagName="h2" className='title' value={title} onChange={(val) => updateObject('content', 'title', val)} allowedFormats={['core/bold', 'core/italic']} placeholder={__('Enter your title', 'section-collection')} inlineToolbar
		/>
	);

	const subTitleArea = (
		<RichText tagName="h4" className='subTitle' value={subTitle} onChange={(val) => updateObject('content', 'subTitle', val)} allowedFormats={['core/bold', 'core/italic']} placeholder={__('Enter your sub title', 'section-collection')} inlineToolbar
		/>
	);

	const btnOneTextArea = (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton label='Button-one' onClick={() => setIsBtnOneLinkPickerVisible(!isBtnOneLinkPickerVisible)} icon={link} />
				</ToolbarGroup>
			</BlockControls>

			<RichText tagName="a" className='btn' value={btnOneText} onChange={(val) => updateObject('content', 'btnOneText', val)} allowedFormats={[]} placeholder={__('Enter your text', 'section-collection')}
			/>

			{isBtnOneLinkPickerVisible && (
				<Popover position="middle left" onFocusOutside={() => setIsBtnOneLinkPickerVisible(false)}>
					<LinkControl settings={[]} value={btnOneUrl} onChange={(val) => updateObject('content', 'btnOneUrl', val)} />
					<Button variant='primary' onClick={() => setIsBtnOneLinkPickerVisible(false)} style={{ display: 'block', width: '100%' }} > Confirm </Button>
				</Popover>
			)}
		</>
	);

	const btnTwoTextArea = (
		<>
			<BlockControls> <ToolbarGroup> <ToolbarButton label='button-two' onClick={() => setIsBtnTwoLinkPickerVisible(!isBtnTwoLinkPickerVisible)} icon={link} /> </ToolbarGroup> </BlockControls>

			<RichText tagName="a" className='btn' value={btnTwoText} onChange={(val) => updateObject('content', 'btnTwoText', val)} allowedFormats={[]} placeholder={__('Enter your text', 'section-collection')} inlineToolbar />

			{isBtnTwoLinkPickerVisible && (
				<Popover position="middle center" onFocusOutside={() => setIsBtnTwoLinkPickerVisible(false)}>
					<LinkControl settings={[]} value={btnTwoUrl} onChange={(val) => updateObject('content', 'btnTwoUrl', val)}
					/>
					<Button variant='primary' onClick={() => setIsBtnTwoLinkPickerVisible(false)} style={{ display: 'block', width: '100%' }} > Confirm </Button>
				</Popover>)}
		</>);

	const imgArea = (
		<div className="imgArea">
			<div className="uploadArea">
				<div className='upload'>
					<MediaUploadCheck> <MediaUpload allowedTypes={['image']} value={img} onSelect={({ id, url, alt, title }) => setAttributes({ content: { ...content, img: { id, url, alt, title } } })} render={({ open }) => <ToolbarButton label="upload" onClick={open} />}
					/> </MediaUploadCheck>
				</div>
			</div>
			<div className="img">
				<img src={img.url} alt="" />
			</div>
		</div>
	);

	const itemsProps = { titleArea, subTitleArea, btnOneTextArea, btnTwoTextArea, imgArea };

	return (
		<>
			<Settings attributes={attributes} setAttributes={setAttributes} updateObject={updateObject} />

			<div {...useBlockProps()} id={`bpsc-${clientId}`}>
				<Style attributes={attributes} id={`bpsc-${clientId}`} />

				<div className={`bpscSectionCollection`}>
					<Layout attributes={attributes} {...itemsProps} />
				</div>
			</div>
		</>
	);
};

export default Edit;
