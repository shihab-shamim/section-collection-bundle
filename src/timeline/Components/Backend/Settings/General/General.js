import { __ } from "@wordpress/i18n";
import { BoxControl, Device, Label  } from "../../../../../../../bpl-tools/Components";
import {
  __experimentalUnitControl as UnitControl,
  __experimentalBoxControl as BoxC,
  __experimentalInputControl as InputControl,
  PanelBody,
  PanelRow,
  // SelectControl,
  TextareaControl,
  Flex,
  FormToggle,
} from "@wordpress/components";
import {
  emUnit,
  pxUnit,
  remUnit,
  vhUnit,
  vwUnit,
} from "../../../../../../../bpl-tools/utils/options";
import { updateData } from "../../../../../../../bpl-tools/utils/functions";
// import { ThemeOptions } from "../../../../utils/options";
// import { themeChange } from "../../../../utils/functions";
import { copyIcon, deleteIcon } from "../../../../utils/icons";

const General = ({ attributes, device, setAttributes }) => {
  const { layout, selectedTheme, timeline, options } = attributes;
  const { section, body } = layout || {};
  const { button } = options || {};

  const handleDelete = (Index) => {
    const updatedTimeline = timeline.timelines.filter(
      (_, index) => index !== Index
    );
    setAttributes({
      timeline: updateData(timeline, updatedTimeline, "timelines"),
    });
  };

  const handleDuplicate = (index) => {
    const tlToDuplicate = { ...timeline.timelines[index] };
    const updatedtl = [...timeline.timelines];
    updatedtl.splice(index + 1, 0, tlToDuplicate);
    setAttributes({ timeline: updateData(timeline, updatedtl, "timelines") });
  };

  const handleAdd = () => {
    const defaultTimeline = {
      time: "2020",
      title: "For Developers",
      description:
        "Our team has the expertise to help you achieve your visual content goals",
    };

    const updatedTimeline = [...timeline.timelines, defaultTimeline];
    setAttributes({
      timeline: updateData(timeline, updatedTimeline, "timelines"),
    });
  };

  const handleDeleteCard = (Index) => {
    const updatedCards = timeline.leftContent.cards.filter(
      (_, index) => index !== Index
    );
    setAttributes({
      timeline: updateData(timeline, updatedCards, "leftContent", "cards"),
    });
  };

  const handleDuplicateCard = (index) => {
    const cardToDuplicate = { ...timeline.leftContent.cards[index] };
    const updatedcard = [...timeline.leftContent.cards];
    updatedcard.splice(index + 1, 0, cardToDuplicate);
    setAttributes({
      timeline: updateData(timeline, updatedcard, "leftContent", "cards"),
    });
  };

  const handleAddCard = () => {
    const defaultCard = {
      title: "Demo Title",
      description:
        "Our team has the expertise to help you achieve your visual content goals",
    };

    const updatedCard = [...timeline.leftContent.cards, defaultCard];
    setAttributes({
      timeline: updateData(timeline, updatedCard, "leftContent", "cards"),
    });
  };

  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Layout setting", "b-blocks")}
        initialOpen={true}
      >
        {/* <PanelRow>
          <Label className="mt0">Select A Theme</Label>
          <SelectControl
            value={selectedTheme}
            options={ThemeOptions}
            onChange={(value) =>
              setAttributes(themeChange(value, attributes, device))
            }
          />
        </PanelRow> */}

        {/* {sectionHeader.status && (
          <>
            <Flex justify="start" align="center" gap={2}>
              <FormToggle
                checked={badge.status}
                onChange={() =>
                  setAttributes({
                    layout: updateData(
                      layout,
                      !badge.status,
                      "badge",
                      "status"
                    ),
                  })
                }
              />
              <p className="mt10">Badge</p>
            </Flex>

            {badge.status && (
              <>
                <InputControl
                  label={__("Badge text", "b-blocks")}
                  placeholder={__("badge text...", "b-blocks")}
                  value={badge.text}
                  onChange={(value) =>
                    setAttributes({
                      layout: updateData(layout, value, "badge", "text"),
                    })
                  }
                />

                <ColorsControl
                  value={badge.colors}
                  onChange={(value) =>
                    setAttributes({
                      layout: updateData(layout, value, "badge", "colors"),
                    })
                  }
                />
              </>
            )}
            <InputControl
              className="mt5"
              label={__("Title", "b-blocks")}
              placeholder={__("title...", "b-blocks")}
              value={sectionHeader.title}
              onChange={(value) =>
                setAttributes({
                  layout: updateData(layout, value, "sectionHeader", "title"),
                })
              }
            />
            <TextareaControl
              className="mt5"
              label={__("Sut Title", "b-blocks")}
              placeholder={__("sub title...", "b-blocks")}
              value={sectionHeader.subtitle}
              onChange={(value) =>
                setAttributes({
                  layout: updateData(
                    layout,
                    value,
                    "sectionHeader",
                    "subtitle"
                  ),
                })
              }
            />
          </>
        )} */}

        {/* ---------------------- section body setting -------------------- */}

        <PanelRow>
          <Label className="mt0">{__("Section Margin", "b-block")}</Label>
          <Device />
        </PanelRow>
        <BoxControl
          className="mt5"
          values={section.margin?.[device]}
          onChange={(value) => {
            setAttributes({
              layout: updateData(layout, value, "section", "margin", device),
            });
          }}
        />

        <PanelRow>
          <Label className="mt0">{__("Section Padding", "b-block")}</Label>
          <Device />
        </PanelRow>
        <BoxControl
          className="mt5"
          values={section.padding?.[device]}
          onChange={(value) => {
            setAttributes({
              layout: updateData(layout, value, "section", "padding", device),
            });
          }}
        />

        {/* ---------------------- content body setting -------------------- */}

        {selectedTheme === "theme1" && (
          <>
            {" "}
            <PanelRow>
              <Label className="mt0">{__("Margin", "b-block")}</Label>
              <Device />
            </PanelRow>
            <BoxControl
              className="mt5"
              values={body.margin?.[device]}
              onChange={(value) => {
                setAttributes({
                  layout: updateData(layout, value, "body", "margin", device),
                });
              }}
            />
            <PanelRow>
              <Label className="mt0">{__("Padding", "b-block")}</Label>
              <Device />
            </PanelRow>
            <BoxControl
              className="mt5"
              values={body.padding?.[device]}
              onChange={(value) => {
                setAttributes({
                  layout: updateData(layout, value, "body", "padding", device),
                });
              }}
            />
            <PanelRow>
              <Label className="mt0">{__("Width", "b-block")}</Label>
              <Device />
            </PanelRow>
            <UnitControl
              className="mt5"
              step={1}
              shiftStep={10}
              min={1}
              max={body.width?.[device]?.includes("%") ? 100 : undefined}
              value={body.width?.[device]}
              onChange={(value) => {
                setAttributes({
                  layout: updateData(layout, value, "body", "width", device),
                });
              }}
            />
            <PanelRow>
              <Label className="mt0">{__("Height", "b-block")}</Label>
              <Device />
            </PanelRow>
            <UnitControl
              className="mt5"
              units={[remUnit(), pxUnit(), vhUnit(), emUnit(), vwUnit()]}
              step={1}
              shiftStep={10}
              min={1}
              value={body.height?.[device]}
              onChange={(value) => {
                setAttributes({
                  layout: updateData(layout, value, "body", "height", device),
                });
              }}
            />
            <BoxC
              resetValues={{
                top: "0px",
                right: "0px",
                bottom: "0px",
                left: "0px",
              }}
              className="mt10"
              values={section.borderRadius}
              label={__("Border Radius", "b-block")}
              onChange={(value) => {
                setAttributes({
                  layout: updateData(layout, value, "section", "borderRadius"),
                });
              }}
            />
          </>
        )}
      </PanelBody>

      {/*------------------- timeline setting  ------------------------*/}

      <PanelBody
        className="bPlPanelBody"
        title={__("Timeline Setting", "b-blocks")}
        initialOpen={false}
      >
        {timeline.timelines?.map((tl, index) => {
          const { title, description } = tl || {};
          return (
            <PanelBody
              key={index}
              className="bPlPanelBody"
              title={__(`timeline-${index + 1} ( ${title} )`, "b-blocks")}
              initialOpen={false}
            >
              <InputControl
                label={__("Title", "b-blocks")}
                className="mt5"
                value={title}
                placeholder={__("Title", "b-blocks")}
                onChange={(value) =>
                  setAttributes({
                    timeline: updateData(
                      timeline,
                      value,
                      "timelines",
                      index,
                      "title"
                    ),
                  })
                }
              />
              <TextareaControl
                className="mt5"
                label={__("Description", "b-blocks")}
                value={description}
                placeholder={__("Description", "b-blocks")}
                onChange={(value) =>
                  setAttributes({
                    timeline: updateData(
                      timeline,
                      value,
                      "timelines",
                      index,
                      "description"
                    ),
                  })
                }
              />
              <Flex>
                <button
                  className="btn copy"
                  onClick={() => handleDuplicate(index)}
                >
                  <span>{copyIcon}</span>Duplicate
                </button>
                {timeline.timelines.length > 1 && (
                  <button
                    onClick={() => handleDelete(index)}
                    className="btn delete"
                  >
                    <span>{deleteIcon}</span>Delete
                  </button>
                )}
              </Flex>
            </PanelBody>
          );
        })}

        <button className="btn add" onClick={handleAdd}>
          Add A New Timeline
        </button>

        {/* left side cards  */}

        {selectedTheme === "theme1" && (
          <>
            <p className="extra-lable">Left Side Cards:</p>

            {timeline.leftContent?.cards?.map((card, index) => {
              const { title, description } = card || {};
              return (
                <PanelBody
                  key={index}
                  className="bPlPanelBody"
                  title={__(`Card-${index + 1} ( ${title} )`, "b-blocks")}
                  initialOpen={false}
                >
                  <InputControl
                    label={__("Title", "b-blocks")}
                    className="mt5"
                    value={title}
                    placeholder={__("Title", "b-blocks")}
                    onChange={(value) =>
                      setAttributes({
                        timeline: updateData(
                          timeline,
                          value,
                          "leftContent",
                          "cards",
                          index,
                          "title"
                        ),
                      })
                    }
                  />
                  <TextareaControl
                    className="mt5"
                    label={__("Description", "b-blocks")}
                    value={description}
                    placeholder={__("Description", "b-blocks")}
                    onChange={(value) =>
                      setAttributes({
                        timeline: updateData(
                          timeline,
                          value,
                          "leftContent",
                          "cards",
                          index,
                          "description"
                        ),
                      })
                    }
                  />
                  <Flex>
                    <button
                      className="btn copy"
                      onClick={() => handleDuplicateCard(index)}
                    >
                      <span>{copyIcon}</span>Duplicate
                    </button>
                    {timeline.timelines.length > 1 && (
                      <button
                        onClick={() => handleDeleteCard(index)}
                        className="btn delete"
                      >
                        <span>{deleteIcon}</span>Delete
                      </button>
                    )}
                  </Flex>
                </PanelBody>
              );
            })}

            <button className="btn add" onClick={handleAddCard}>
              Add A New Card
            </button>

            <p className="extra-lable">Button:</p>
            <Flex justify="start" align="center" gap={2}>
              <FormToggle
                checked={button.status}
                onChange={() =>
                  setAttributes({
                    options: updateData(
                      options,
                      !button.status,
                      "button",
                      "status"
                    ),
                  })
                }
              />
              <p className="mt10">Button</p>
            </Flex>
            {button.status && (
              <>
                <InputControl
                  label={__("Button Title", "b-blocks")}
                  className="mt5"
                  value={timeline.button.title}
                  placeholder={__("Title...", "b-blocks")}
                  onChange={(value) =>
                    setAttributes({
                      timeline: updateData(timeline, value, "button", "title"),
                    })
                  }
                />
                <InputControl
                  label={__("Button Link", "b-blocks")}
                  className="mt5"
                  value={timeline.button.link}
                  placeholder={__("Link...", "b-blocks")}
                  onChange={(value) =>
                    setAttributes({
                      timeline: updateData(timeline, value, "button", "link"),
                    })
                  }
                />
                <Flex justify="start" align="center" gap={2}>
                  <FormToggle
                    checked={button.isNewTab}
                    onChange={() =>
                      setAttributes({
                        options: updateData(
                          options,
                          !button.isNewTab,
                          "button",
                          "isNewTab"
                        ),
                      })
                    }
                  />
                  <p className="mt10">Link Open In New Tab</p>
                </Flex>
              </>
            )}
          </>
        )}
      </PanelBody>
    </>
  );
};

export default General;
