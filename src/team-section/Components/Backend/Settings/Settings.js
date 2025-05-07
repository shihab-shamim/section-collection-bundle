import { __ } from "@wordpress/i18n";
import {
  InspectorControls,
  BlockControls,
  AlignmentToolbar,
} from "@wordpress/block-editor";
import { TabPanel } from "@wordpress/components";
import { tabController } from "../../../../../../bpl-tools/utils/functions";
import {
  generalStyleTabs,
  styleItems,
  toolTipPresets,
} from "../../../utils/options";
import General from "./General/General";
import Style from "./Style/Style";
import BPlBlockPreview from "./Panel/BplBlockPreview/BplBlockPreview";
// import BplBlockPreview from "./Panel/BplBlockPreview/BplBlockPreview";

const Settings = ({ attributes, setAttributes, device }) => {
  const { styleSl, alignment } = attributes;

  const updateStyle = (newStyle) => {
    setAttributes({
      styleSl: newStyle,
      team: styleItems?.[newStyle]?.team,
      styles: styleItems?.[newStyle]?.styles,
    });
  };

  return (
    <>
      <InspectorControls>
        <div className="bBlocksInspectorInfo">
          Need more block like this? Checkout the bundle ➡
          <a
            href="https://wordpress.org/plugins/b-blocks"
            target="_blank"
            rel="noopener noreferrer"
          >
            B Blocks
          </a>
        </div>

        <TabPanel
          className="bPlTabPanel wp-block-b-blocks-team-section"
          activeClass="activeTab"
          tabs={generalStyleTabs}
          onSelect={tabController}
        >
          {(tab) => (
            <>
              {"general" === tab.name && (
                <General
                  attributes={attributes}
                  setAttributes={setAttributes}
                  device={device}
                />
              )}

              {"style" === tab.name && (
                <Style
                  attributes={attributes}
                  setAttributes={setAttributes}
                  device={device}
                />
              )}
            </>
          )}
        </TabPanel>
      </InspectorControls>

      <BlockControls>
        <AlignmentToolbar
          value={alignment}
          onChange={(val) => setAttributes({ alignment: val })}
          describedBy={__("Block Name Alignment")}
          alignmentControls={[
            {
              title: __("Block Name in left", "textdomain"),
              align: "left",
              icon: "align-left",
            },
            {
              title: __("Block Name in center", "textdomain"),
              align: "center",
              icon: "align-center",
            },
            {
              title: __("Block Name in right", "textdomain"),
              align: "right",
              icon: "align-right",
            },
          ]}
        />

        <BPlBlockPreview
          options={toolTipPresets}
          value={styleSl}
          onChange={(value) => updateStyle(value)}
        />

        {/* // it's working but not the best way to do it. */}
        {/* <BplBlockPreview
          clientId={clientId}
          value={styleSl}
          onChange={(newStyle) => setAttributes({ styleSl: newStyle })}
          previewWidth="400px"
          previewHeight="300px"
          viewportWidth={1200}
        /> */}
      </BlockControls>
    </>
  );
};
export default Settings;
