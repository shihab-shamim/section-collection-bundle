import { __ } from "@wordpress/i18n";

import {
  Flex,
  FormToggle,
  PanelBody,
  PanelRow,
  SelectControl,
  TextareaControl,
} from "@wordpress/components";
// import { purposeTypeOptions } from '../../../../utils/options';
// import { updateData } from '../../../../utils/functions';
import {
  BButtonGroup,
  BoxControl,
  ColorsControl,
  ItemsPanel,
  Label,
} from "../../../../../../../bpl-tools/Components";
import Items from "../../Panel/Items";
import { themeChange, updateData } from "../../../../utils/functions";
import {
  __experimentalInputControl as InputControl,
  __experimentalNumberControl as NumberControl,
  __experimentalUnitControl as UnitControl,
  __experimentalBoxControl as BoxC,
  __experimentalBorderControl as BorderControl,
} from "@wordpress/components";
import {
  emUnit,
  pxUnit,
  remUnit,
  vhUnit,
  vwUnit,
} from "../../../../../../../bpl-tools/utils/options";
import { themeOptions } from "../../../../utils/options";

const General = ({ attributes, setAttributes, device }) => {
  const { options, layout, selectedTheme } = attributes;

  const {
    sectionBody,
    sectionHeader,
    testimonialBody,
    badge,
    testimonialBody3rdTheme,
  } = layout || {};

  const { margin, padding, colGap, rowGap, width, height, borderRadius } =
    sectionBody || {};

  const { testiBorderRadius, border } = testimonialBody || {};

  const {
    scroll,
    isTagsBottom,
    linkInNewTab,
    fogEffect,
    tagsAlignment,
    simulateTouch,
    slidingSpeed,
    glowEffect,
    keyboardControl,
    navButton,
  } = options || {};

  return (
    <>
      {/* --------------------------- layout setting ---------------------------- */}

      <PanelBody
        className="bPlPanelBody"
        title={__("Layout setting", "b-blocks")}
        initialOpen={true}
      >
        <PanelRow>
          <Label className="mt0">Select A Theme</Label>
          <SelectControl
            label={""}
            value={selectedTheme}
            options={themeOptions}
            onChange={(value) =>
              setAttributes(themeChange(value, attributes, device))
            }
          />
        </PanelRow>
        <Flex justify="start" align="center" gap={2}>
          <FormToggle
            checked={sectionHeader.status}
            onChange={() =>
              setAttributes({
                layout: updateData(
                  layout,
                  !sectionHeader.status,
                  "sectionHeader",
                  "status"
                ),
              })
            }
          />
          <p className="mt10">Section Header</p>
        </Flex>

        {sectionHeader.status && (
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
        )}

        {/* ---------------------- section body setting -------------------- */}

        <UnitControl
          className="mt5"
          label={__("Width", "b-block")}
          step={1}
          shiftStep={10}
          min={1}
          max={width?.includes("%") ? 100 : undefined}
          value={width}
          onChange={(value) => {
            setAttributes({
              layout: updateData(layout, value, "sectionBody", "width"),
            });
          }}
        />

        <UnitControl
          className="mt5"
          label={__("Height", "b-block")}
          units={[remUnit(), pxUnit(), vhUnit(), emUnit(), vwUnit()]}
          step={1}
          shiftStep={10}
          min={1}
          value={height}
          onChange={(value) => {
            setAttributes({
              layout: updateData(layout, value, "sectionBody", "height"),
            });
          }}
        />
        <BoxControl
          className="mt5"
          values={margin}
          label={__("Margin", "b-block")}
          onChange={(value) => {
            setAttributes({
              layout: updateData(layout, value, "sectionBody", "margin"),
            });
          }}
        />

        <BoxControl
          className="mt5"
          values={padding}
          label={__("Padding", "b-block")}
          onChange={(value) => {
            setAttributes({
              layout: updateData(layout, value, "sectionBody", "padding"),
            });
          }}
        />

        <UnitControl
          className="mt5"
          label={__("Gap Between Column", "b-block")}
          value={colGap}
          onChange={(value) => {
            setAttributes({
              layout: updateData(layout, value, "sectionBody", "colGap"),
            });
          }}
        />

        <UnitControl
          className="mt5 mb5"
          label={__("Gap Between Row", "b-block")}
          value={rowGap}
          onChange={(value) => {
            setAttributes({
              layout: updateData(layout, value, "sectionBody", "rowGap"),
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
          values={borderRadius}
          label={__("Border Radius", "b-block")}
          onChange={(value) => {
            setAttributes({
              layout: updateData(layout, value, "sectionBody", "borderRadius"),
            });
          }}
        />
      </PanelBody>

      {/*---------------------- Testimonial Panel -------------------- */}

      <PanelBody
        className="bPlPanelBody"
        title={__("Testimonials", "b-blocks")}
        initialOpen={false}
      >
        <ItemsPanel
          {...{ attributes, setAttributes }}
          arrKey="testimonials"
          newItem={{
            name: "Kiss Dorka",
            designation: "Product Design &amp; UX Lead",
            image:
              "https://templates.bplugins.com/wp-content/uploads/2025/02/p-32.png",
            content:
              "Started using @flowmapp to create some App and Website Sitempas. Really liking it. Easy to use. Good to see that user flows appear to be in the Product Roadmap as well.",
            tags: ["uxdesign", "ux", "webdesing", "uidesign"],
          }}
          ItemSettings={Items}
          itemLabel="Testimonial"
          design="sortable"
        />
      </PanelBody>

      {/* ---------------------- testimonial Body setting  ---------------------*/}

      <PanelBody
        className="bPlPanelBody"
        title={__("Testimonial Setting ", "b-blocks")}
        initialOpen={false}
      >
        <BoxControl
          label={__("Padding", "b-blocks")}
          values={testimonialBody.padding}
          onChange={(value) => {
            setAttributes({
              layout: updateData(layout, value, "testimonialBody", "padding"),
            });
          }}
        />

        {selectedTheme === "theme2" && (
          <>
            <UnitControl
              className="mt5"
              label={__("Height", "b-block")}
              value={testimonialBody.height}
              onChange={(value) => {
                setAttributes({
                  layout: updateData(
                    layout,
                    value,
                    "testimonialBody",
                    "height"
                  ),
                });
              }}
            />

            <UnitControl
              className="mt5 mb5"
              label={__("Width", "b-block")}
              value={testimonialBody.width}
              onChange={(value) => {
                setAttributes({
                  layout: updateData(layout, value, "testimonialBody", "width"),
                });
              }}
            />
          </>
        )}

        {/*-------------------------- only for theme 3 -----------------------*/}

        {selectedTheme === "theme3" && (
          <>
            <UnitControl
              className="mt5"
              label={__("Height", "b-block")}
              value={testimonialBody3rdTheme.height}
              onChange={(value) => {
                setAttributes({
                  layout: updateData(
                    layout,
                    value,
                    "testimonialBody3rdTheme",
                    "height"
                  ),
                });
              }}
            />

            <UnitControl
              className="mt5 mb5"
              label={__("Width", "b-block")}
              value={testimonialBody3rdTheme.width}
              min={1}
              step={1}
              max={
                testimonialBody3rdTheme.width?.includes("%") ? 100 : undefined
              }
              onChange={(value) => {
                setAttributes({
                  layout: updateData(
                    layout,
                    value,
                    "testimonialBody3rdTheme",
                    "width"
                  ),
                });
              }}
            />
          </>
        )}

        <BoxC
          className="mt10"
          resetValues={{
            top: "10px",
            right: "10px",
            bottom: "10px",
            left: "10px",
          }}
          values={testiBorderRadius}
          label={__("Border Radius", "b-block")}
          onChange={(value) => {
            setAttributes({
              layout: updateData(
                layout,
                value,
                "testimonialBody",
                "testiBorderRadius"
              ),
            });
          }}
        />

        <BorderControl
          className="mt5"
          label={__("Border", "b-blocks")}
          onChange={(value) =>
            setAttributes({
              layout: updateData(layout, value, "testimonialBody", "border"),
            })
          }
          value={border}
        />
      </PanelBody>

      {/* -------------------------------- options ----------------------------- */}

      <PanelBody
        className="bPlPanelBody"
        title={__("Options ", "b-blocks")}
        initialOpen={false}
      >
        {/* only for theme 1 */}

        {selectedTheme === "theme1" && (
          <>
            <Flex className="mt5" justify="start" align="center" gap={2}>
              <FormToggle
                checked={scroll.stopOnHover}
                onChange={() =>
                  setAttributes({
                    options: updateData(
                      options,
                      !scroll.stopOnHover,
                      "scroll",
                      "stopOnHover"
                    ),
                  })
                }
              />
              <p className="mt10">Animation Stop On Hover</p>
            </Flex>
            <NumberControl
              label={__("Animation Delay", "b-blocks")}
              value={scroll.speed}
              step={10}
              shiftStep={3}
              onChange={(value) =>
                setAttributes({
                  options: updateData(options, value, "scroll", "speed"),
                })
              }
            />
            <Flex justify="start" align="center" gap={2}>
              <FormToggle
                checked={isTagsBottom}
                onChange={() =>
                  setAttributes({
                    options: updateData(options, !isTagsBottom, "isTagsBottom"),
                  })
                }
              />
              <p className="mt10">Show Tags On Bottom</p>
            </Flex>
            <BButtonGroup
              options={[
                { label: "Left", value: "left" },
                { label: "Center", value: "center" },
                { label: "Right", value: "right" },
              ]}
              value={tagsAlignment}
              onChange={(value) => {
                setAttributes({
                  options: updateData(options, value, "tagsAlignment"),
                });
              }}
              label="Tags Alignment"
            />
          </>
        )}

        {/* only for theme 2 and theme 3 */}

        {selectedTheme === "theme2" ||
          (selectedTheme === "theme3" && (
            <>
              <Flex className="mt5" justify="start" align="center" gap={2}>
                <FormToggle
                  checked={simulateTouch}
                  onChange={() =>
                    setAttributes({
                      options: updateData(
                        options,
                        !simulateTouch,
                        "simulateTouch"
                      ),
                    })
                  }
                />
                <p className="mt10">Simulate Touch</p>
              </Flex>
              <p>Simulate Touch only work on Frontend</p>

              <NumberControl
                label={__("Sliding Delay (ms)", "b-blocks")}
                value={slidingSpeed}
                step={100}
                shiftStep={10}
                onChange={(value) =>
                  setAttributes({
                    options: updateData(options, value, "slidingSpeed"),
                  })
                }
              />
            </>
          ))}

        {/* only for theme 2 */}
        {selectedTheme === "theme2" && (
          <Flex className="mt5" justify="start" align="center" gap={2}>
            <FormToggle
              checked={glowEffect}
              onChange={() =>
                setAttributes({
                  options: updateData(options, !glowEffect, "glowEffect"),
                })
              }
            />
            <p className="mt10">Glow Effect</p>
          </Flex>
        )}

        {/* only for theme 3 */}
        {selectedTheme === "theme3" && (
          <>
            <Flex justify="start" align="center" gap={2}>
              <FormToggle
                checked={navButton}
                onChange={() =>
                  setAttributes({
                    options: updateData(options, !navButton, "navButton"),
                  })
                }
              />
              <p className="mt10">Show Navigation Button</p>
            </Flex>
            <Flex justify="start" align="center" gap={2}>
              <FormToggle
                checked={keyboardControl}
                onChange={() =>
                  setAttributes({
                    options: updateData(
                      options,
                      !keyboardControl,
                      "keyboardControl"
                    ),
                  })
                }
              />
              <p className="mt10">Slides Control With Keyborad</p>
            </Flex>
          </>
        )}

        <Flex justify="start" align="center" gap={2}>
          <FormToggle
            checked={linkInNewTab}
            onChange={() =>
              setAttributes({
                options: updateData(options, !linkInNewTab, "linkInNewTab"),
              })
            }
          />
          <p className="mt10">Links Open In New Tab</p>
        </Flex>
        {(selectedTheme === "theme1" || selectedTheme === "theme2") && (
          <Flex justify="start" align="center" gap={2}>
            <FormToggle
              checked={fogEffect}
              onChange={() =>
                setAttributes({
                  options: updateData(options, !fogEffect, "fogEffect"),
                })
              }
            />
            <p className="mt10">Fog Effect</p>
          </Flex>
        )}
      </PanelBody>
    </>
  );
};

export default General;
