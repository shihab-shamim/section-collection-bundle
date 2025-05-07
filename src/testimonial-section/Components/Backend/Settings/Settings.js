import { __ } from "@wordpress/i18n";
import {
  InspectorControls,
  BlockControls,
  AlignmentToolbar,
} from "@wordpress/block-editor";
import { TabPanel } from "@wordpress/components";
import { tabController } from "../../../../../../bpl-tools/utils/functions";
import { generalStyleTabs } from "../../../utils/options";
import General from "./General/General";
import Style from "./Style/Style";
import { BplBlockPreview } from "../../../../../../bpl-tools/Components";
import themes from "./theme.json";
import { updateData } from "../../../utils/functions";

const Settings = ({ attributes, setAttributes, device, clientId }) => {
  const { alignment } = attributes;

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
          className="bPlTabPanel wp-block-b-blocks-test-purpose"
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
                <Style attributes={attributes} setAttributes={setAttributes} />
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
              title: __("left", "b-blocks"),
              align: "left",
              icon: "align-left",
            },
            {
              title: __("center", "b-blocks"),
              align: "center",
              icon: "align-center",
            },
            {
              title: __("right", "b-blocks"),
              align: "right",
              icon: "align-right",
            },
          ]}
        />

        <BplBlockPreview
          blocks={themes}
          clientId={clientId}
          value={attributes.selectedTheme}
          onChange={(value) =>
            setAttributes({
              selectedTheme: updateData(attributes, value, "selectedTheme"),
            })
          }
        />
      </BlockControls>
    </>
  );
};
export default Settings;
