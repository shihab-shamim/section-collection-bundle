import { __ } from "@wordpress/i18n";
import {
  InspectorControls,
  BlockControls,
  AlignmentToolbar,
} from "@wordpress/block-editor";
import { TabPanel } from "@wordpress/components";
import { tabController } from "../../../../../../bpl-tools/utils/functions";
import { generalStyleTabs, toolTipPresets } from "../../../utils/options";
import General from "./General/General";
import Style from "./Style/Style";
import Advanced from "../../../../../../bpl-tools/Advanced/index";
import { themes } from "../../../utils/options";
import BPlBlockPreview from "./Panel/BPlBlockPreview/BPlBlockPreview";

const Settings = ({ attributes, setAttributes, device }) => {
  const { alignment, advanced, themeSl } = attributes;

  const updateTheme = (newTheme) => {
    setAttributes({
      themeSl: newTheme,
      about: themes[newTheme].about,
      styles: themes[newTheme].styles,
    });
  };

  return (
    <>
      <InspectorControls>
        <div className="bBlocksInspectorInfo">
          Need more block like this? Checkout the bundle ➡{" "}
          <a
            href="https://wordpress.org/plugins/b-blocks"
            target="_blank"
            rel="noopener noreferrer"
          >
            B Blocks
          </a>
        </div>

        <TabPanel
          className="bPlTabPanel wp-block-b-blocks-about-us"
          activeClass="activeTab"
          tabs={generalStyleTabs}
          onSelect={tabController}
        >
          {(tab) => (
            <>
              {"general" === tab.name && (
                <General
                  device={device}
                  attributes={attributes}
                  setAttributes={setAttributes}
                />
              )}

              {"style" === tab.name && (
                <Style
                  device={device}
                  attributes={attributes}
                  setAttributes={setAttributes}
                />
              )}

              {"advanced" === tab.name && (
                <Advanced
                  advanced={advanced}
                  onChange={(v) => {
                    setAttributes({
                      advanced: v,
                    });
                  }}
                  // isPremium={true}
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
          value={themeSl}
          onChange={(value) => updateTheme(value)}
        />
      </BlockControls>
    </>
  );
};
export default Settings;
