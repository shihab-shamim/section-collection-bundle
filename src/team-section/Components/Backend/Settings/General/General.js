import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  SelectControl,
  __experimentalInputControl as InputControl,
  __experimentalSpacer as Spacer,
  TextareaControl,
  __experimentalNumberControl as NumberControl,
} from "@wordpress/components";
import { getNewItemByStyle, updateData } from "../../../../utils/functions";
import { styleItems } from "../../../../utils/options";
import {
  IconLibrary,
  ItemsPanel,
} from "../../../../../../../bpl-tools/Components";
import TeamItemsPanel from "../../TeamItemsPanel/TeamItemsPanel";

const General = ({ attributes, setAttributes }) => {
  const { styleSl, team } = attributes;
  const { heading, headingNumberOfPerson } = team || {};
  const { highlightText, titleText, descriptionLine1, descriptionLine2 } =
    heading || {};

  const updateStyle = (newStyle) => {
    setAttributes({
      styleSl: newStyle,
      team: styleItems?.[newStyle]?.team,
      styles: styleItems?.[newStyle]?.styles,
    });
  };

  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Team Styles", "b-blocks")}
        initialOpen={true}
      >
        <SelectControl
          label={__("Choose Style", "b-blocks")}
          value={styleSl}
          options={[
            { label: "Default", value: "styleDefault" },
            { label: "Style 1", value: "styleOne" },
            { label: "Style 2", value: "styleTwo" },
          ]}
          onChange={updateStyle}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Team Heading", "b-blocks")}
        initialOpen={false}
      >
        {styleSl === "styleDefault" && (
          <>
            <IconLibrary
              label={__("Set Badge Icon", "b-blocks")}
              value={team?.heading?.icon}
              onChange={(icon) =>
                setAttributes({
                  team: {
                    ...team,
                    heading: {
                      ...team.heading,
                      icon,
                    },
                  },
                })
              }
            />
          </>
        )}

        <div style={{ marginTop: "20px" }}></div>

        {(styleSl === "styleDefault" || styleSl === "styleOne") && (
          <>
            <InputControl
              type="text"
              label={__("Subtitle", "b-blocks")}
              value={heading?.subtitle}
              onChange={(subtitle) =>
                setAttributes({
                  team: {
                    ...team,
                    heading: {
                      ...team.heading,
                      subtitle,
                    },
                  },
                })
              }
            />

            <Spacer />

            <div style={{ marginTop: "20px" }}></div>

            <InputControl
              type="text"
              label={__("Title", "b-blocks")}
              value={heading?.title}
              onChange={(title) =>
                setAttributes({
                  team: {
                    ...team,
                    heading: {
                      ...team.heading,
                      title,
                    },
                  },
                })
              }
            />
          </>
        )}

        {styleSl === "styleTwo" && (
          <>
            <NumberControl
              label={__("Heading Number Of Person", "b-blocks")}
              value={headingNumberOfPerson}
              onChange={(headingNumberOfPerson) =>
                setAttributes({
                  team: {
                    ...team,
                    headingNumberOfPerson,
                  },
                })
              }
              min={1}
              max={100}
              step={1}
            />

            <div style={{ marginTop: "20px" }}></div>

            <InputControl
              type="text"
              label={__("Highlight Title", "b-blocks")}
              value={highlightText}
              onChange={(highlighTitle) =>
                setAttributes({
                  team: updateData(
                    team,
                    highlighTitle,
                    "heading",
                    "highlightText"
                  ),
                })
              }
            />

            <div style={{ marginTop: "20px" }}></div>

            <InputControl
              type="text"
              label={__("Title", "b-blocks")}
              value={titleText}
              onChange={(title) =>
                setAttributes({
                  team: updateData(team, title, "heading", "titleText"),
                })
              }
            />

            <div style={{ marginTop: "20px" }}></div>

            <TextareaControl
              label={__("Description Line 1", "b-blocks")}
              value={descriptionLine1}
              onChange={(descriptionLine1) =>
                setAttributes({
                  team: updateData(
                    team,
                    descriptionLine1,
                    "heading",
                    "descriptionLine1"
                  ),
                })
              }
            />

            <div style={{ marginTop: "20px" }}></div>

            <TextareaControl
              label={__("Description Line 2", "b-blocks")}
              value={descriptionLine2}
              onChange={(descriptionLine2) =>
                setAttributes({
                  team: updateData(
                    team,
                    descriptionLine2,
                    "heading",
                    "descriptionLine2"
                  ),
                })
              }
            />
          </>
        )}
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Team Items", "b-blocks")}
        initialOpen={false}
      >
        <ItemsPanel
          styleSl={styleSl}
          attributes={team}
          setAttributes={(newTeam) =>
            setAttributes({ team: { ...team, ...newTeam } })
          }
          arrKey="items"
          newItem={getNewItemByStyle(styleSl)}
          ItemSettings={TeamItemsPanel}
          itemLabel="Team Member"
          design="sortable"
        />
      </PanelBody>
    </>
  );
};

export default General;
