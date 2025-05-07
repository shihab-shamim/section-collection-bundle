import { __ } from '@wordpress/i18n';
import { PanelBody, SelectControl } from '@wordpress/components';
import { themeOptions } from '../../../../utils/options';
import { themeSwitch } from '../../../../utils/functions';
import { updateData } from "../../../../../../../bpl-tools/utils/functions";
import { TextControl, __experimentalSpacer as Spacer, ToggleControl } from '@wordpress/components';
import { IconLibrary } from "../../../../../../../bpl-tools/Components";


const General = ({ attributes, setAttributes, device = "desktop" }) => {
  const { layout, callToActions, showIcon } = attributes;
  const { theme } = layout;


  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Choose Style ", "b-blocks")}
        initialOpen={false}
      >
        <SelectControl 
        className="help" 
        value={layout?.theme}
          onChange={(val) => setAttributes(themeSwitch(val, attributes, device))}
          options={themeOptions}
          help={(<>
            <span className="span">
              {__("Warning : ")}
            </span>
            <span className="text">{__("If you change and save settings for one style, and then switch to another style and save, the changes made to the first style will be lost.")}</span>
          </>
          )}
        />
      </PanelBody>

      <PanelBody className='bPlPanelBody' title={__('CTA Items', 'b-blocks')} initialOpen={false}>
        {callToActions?.map((cta, index) => (
          <div className="cta-main-container" key={index}>
            <TextControl
              value={cta?.title.replace(/<[^>]*>/g, '')}
              label={__("Title", "b-blocks")}
              placeholder="Enter Title"
              onChange={val => setAttributes({ callToActions: updateData(callToActions, val, index, 'title') })}
            />
            <Spacer />

            <TextControl
              value={cta?.description.replace(/<[^>]*>/g, '')}
              label={__("Description", "b-blocks")}
              placeholder="Enter Description"
              onChange={val => setAttributes({ callToActions: updateData(callToActions, val, index, 'description') })}
            />
            <Spacer />
            <TextControl
              label={__("Button Name", "b-blocks")}
              value={cta?.buttonName.replace(/<[^>]*>/g, '')}
              onChange={dec => setAttributes({ callToActions: updateData(callToActions, dec, index, 'buttonName') })}
              placeholder="Enter Button Name"
            />
            <Spacer />

            {(theme === "theme-1" || theme === "theme-3") && (
              <>
                <ToggleControl
                  label={__('Show Icon', 'my-plugin')}
                  checked={!!showIcon}
                  onChange={(value) => setAttributes({ showIcon: value })}
                />
                <Spacer style={{ marginTop: '10px' }} />

                {showIcon && (
                  <IconLibrary
                    label={__("Button Icon", "b-blocks")}
                    value={cta?.icon}
                    onChange={val => setAttributes({ callToActions: updateData(callToActions, val, index, 'icon') })}
                  />
                )}
              </>
            )}

            <Spacer />

            <TextControl
              label={__("Button URL", "b-blocks")}
              value={cta?.buttonLink || '#'}
              onChange={url => setAttributes({ callToActions: updateData(callToActions, url, index, 'buttonLink') })}
              placeholder="Enter URL"
            />
            <Spacer />

            <ToggleControl
              label={__("Open In New Tab", "b-blocks")}
              checked={cta?.buttonNewTab || false}
              onChange={(value) => setAttributes({ callToActions: updateData(callToActions, value, index, 'buttonNewTab') })}

            />
          </div>
        ))}
      </PanelBody>
    </>

  )
}

export default General