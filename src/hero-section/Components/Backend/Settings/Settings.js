import { useState } from 'react';
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, PanelRow, TabPanel, ToggleControl, SelectControl, __experimentalBoxControl as BoxControl } from '@wordpress/components';
import { produce } from 'immer';

// Settings Components
import { ColorControl, Background, ColorsControl, Label, Typography } from '../../../../../../bpl-tools/Components';
import { BDevice, BorderControl } from '../../../../../../bpl-tools/Components/Deprecated';
import { generalStyleTabs, styleOpt } from '../../../utils/options';
import { tabController } from '../../../../../../bpl-tools/utils/functions';

const Settings = ({ attributes, updateObject }) => {
    const { wrapper, template, elements, title, subTitle, button, } = attributes;
    const { background, padding, border } = wrapper;
    const { isTitle, isSubTitle, isBtnOne, isBtnTwo, isImg } = elements;
    const [device, setDevice] = useState('desktop');

    return <>
        <InspectorControls>
            <div className='prefixInspectorInfo'>
                Need more block like this? Checkout the bundle ➡ <a href='https://wordpress.org/plugins/b-blocks' target='_blank' rel='noopener noreferrer'>B Blocks</a>
            </div>

            <TabPanel className='bPlTabPanel' activeClass='activeTab' tabs={generalStyleTabs} onSelect={tabController}>{tab => <>
                {'general' === tab.name && <>

                    <PanelBody className='bPlPanelBody' title={__('Style', 'section-collection')} initialOpen={false}>
                        <SelectControl label={__("Choose Style", "section-collection")} labelPosition='side' value={template?.style} options={styleOpt} onChange={(val) => { updateObject('template', 'style', val) }} __nextHasNoMarginBottom />
                    </PanelBody>

                    <PanelBody className='bPlPanelBody' title={__('Elements', 'section-collection')} initialOpen={false}>
                        <ToggleControl label={__('Title', 'section-collection')} className='mt10' checked={isTitle} onChange={(val) => updateObject('elements', 'isTitle', val)} />

                        {
                            template.style !== "style2" && <ToggleControl label={__('Sub Title', 'section-collection')} className='mt10' checked={isSubTitle} onChange={(val) => updateObject('elements', 'isSubTitle', val)} />
                        }

                        <ToggleControl label={__('Button One', 'section-collection')} className='mt10' checked={isBtnOne} onChange={(val) => updateObject('elements', 'isBtnOne', val)} />

                        {
                            (template.style === "style2" || template.style === "style3") && <ToggleControl label={__('Button Two', 'section-collection')} className='mt10' checked={isBtnTwo} onChange={(val) => updateObject('elements', 'isBtnTwo', val)} />
                        }

                        {
                            template?.style === "style4" && <ToggleControl label={__('Image', 'section-collection')} className='mt10' checked={isImg} onChange={(val) => updateObject('elements', 'isImg', val)} />
                        }
                    </PanelBody>
                </>}

                {'style' === tab.name && <>
                    <PanelBody className='bPlPanelBody' title={__('Wrapper', 'section-collection')} initialOpen={false}>
                        <Background className='mb0' label={__('Background:', 'section-collection')} value={background} onChange={val => updateObject('wrapper', 'background', val)} />

                        <PanelRow className='mt0'>
                            <Label mt='0'>{__('Padding:', 'section-collection')}</Label>
                            <BDevice device={device} onChange={val => setDevice(val)} />
                        </PanelRow>

                        <BoxControl values={padding[device]} onChange={val => updateObject('wrapper', 'padding', val, device)} />

                        <BorderControl className='mt10' label={__('Border', 'section-collection')} value={border} onChange={(val) => { updateObject('wrapper', 'border', val) }} />
                    </PanelBody>

                    <PanelBody className='bPlPanelBody' title={__('Title', 'section-collection')} initialOpen={false}>
                        <Typography className='mb10' label={__('Typography', 'section-collection')} value={title.typo} onChange={(val) => { updateObject('title', 'typo', val) }} produce={produce} />

                        <ColorControl className='' label={__('Color', 'section-collection')} value={title?.color} onChange={(val) => updateObject('title', 'color', val)} />
                    </PanelBody>

                    {
                        template?.style !== "style2" && <PanelBody className='bPlPanelBody' title={__('Sub Title', 'section-collection')} initialOpen={false}>
                            <Typography className='mb10' label={__('Typography', 'section-collection')} value={subTitle?.typo} onChange={(val) => updateObject('subTitle', 'typo', val)} produce={produce} />

                            <ColorControl className='' label={__('Color', 'section-collection')} value={subTitle?.color} onChange={(val) => updateObject('subTitle', 'color', val)} />
                        </PanelBody>
                    }

                    <PanelBody className='bPlPanelBody' title={__('Button', 'section-collection')} initialOpen={false}>
                        <Typography className='mb10' label={__('Typography', 'section-collection')} value={button?.typo} onChange={(val) => updateObject('button', 'typo', val)} produce={produce} />

                        <ColorsControl className='mb10' label={__('Colors', 'section-collection')} value={button?.colors} onChange={(val) => updateObject('button', 'colors', val)} />

                        <ColorsControl className='mb10' label={__('Hovers Colors', 'section-collection')} value={button.hoverColors} onChange={(val) => updateObject('button', 'hoverColors', val)} />

                        <PanelRow className='mt0'>
                            <Label mt='0'>{__('Padding:', 'section-collection')}</Label>
                            <BDevice device={device} onChange={val => setDevice(val)} />
                        </PanelRow>

                        <BoxControl values={button.padding[device]} onChange={val => updateObject('button', 'padding', val, device)} />

                        <BorderControl className='mt10' label={__('Border', 'section-collection')} value={button?.border} onChange={(val) => updateObject('button', 'border', val)} />
                    </PanelBody>
                </>}
            </>}</TabPanel>
        </InspectorControls>
    </>;
};
export default Settings;