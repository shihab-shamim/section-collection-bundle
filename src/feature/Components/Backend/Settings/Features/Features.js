
import { __ } from "@wordpress/i18n";

import { TextControl, __experimentalSpacer as Spacer, TextareaControl, ToggleControl } from '@wordpress/components';
import { IconLibrary } from '../../../../../../../bpl-tools/Components';
import { updateData } from '../../../../../../../bpl-tools/utils/functions';



const Features = ({ attributes, setAttributes, arrKey, index }) => {

  const features = attributes[arrKey];

  const { layout } = attributes;
  const { theme } = layout;

  return (
    <>

      {(theme === "theme-1" || theme === "theme-2" || theme === "theme-3" || theme === "theme-4") && (
        <>

          <IconLibrary
            label={__("Select Icon", "b-blocks")}
            value={features[index]?.icon}
            onChange={val => setAttributes({ features: updateData(features, val, index, 'icon') })}
          />
          <Spacer />

          <TextControl 
            value={features[index]?.title.replace(/<[^>]*>/g, '')}
            label={__("Title", "b-blocks")}
            placeholder="Enter Your Title"
            onChange={val => setAttributes({ features: updateData(features, val, index, 'title') })}
          />
          <Spacer />

          <TextareaControl
            label={__("Description", "b-blocks")}
            value={features[index]?.description.replace(/<[^>]*>/g, '')}
            onChange={dec => setAttributes({ features: updateData(features, dec, index, 'description') })}
            placeholder="Enter Your Description"
          />

          {
            (theme === "theme-3" || theme === "theme-4") && (
              <>
                <Spacer />
                
                <TextControl
                  label={__("Title URL", "b-blocks")}
                  value={features[index]?.link || '#'}
                  onChange={url => setAttributes({ features: updateData(features, url, index, 'link') })}
                  placeholder="Enter URL"
                />
                <Spacer />

                <ToggleControl
                  label={__("Open In New Tab", "b-blocks")}
                  checked={features[index]?.buttonNewTab || false}
                  onChange={(value) => setAttributes({ features: updateData(features, value, index, 'buttonNewTab') })}

                />
              </>
            )
          }

        </>
      )}

    </>
  );
};

export default Features;


