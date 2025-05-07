import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  __experimentalBorderBoxControl as BorderBoxControl,
  RangeControl,
  PanelRow,
  ToggleControl,
} from "@wordpress/components";
import {
  ColorControl,
  ColorsControl,
  Device,
  Label,
  Typography,
  BoxControl,
  Background,
} from "../../../../../../../bpl-tools/Components";
import { updateData } from "../../../../utils/functions";

const Style = ({ attributes, setAttributes, device }) => {
  const { styles, themeSl, about } = attributes;
  const { items, heading } = styles || {};
  const { button } = heading || {};

  return (
    <>
      <>
        <PanelBody
          className="bPlPanelBody"
          title={__("About Heading", "b-blocks")}
          initialOpen={true}
        >
          <PanelRow>
            <Label className="">{__("Badge Icon Size", "b-blocks")}</Label>
            <Device />
          </PanelRow>
          <RangeControl
            value={button?.icon?.size?.[device]}
            onChange={(value) => {
              setAttributes({
                styles: updateData(
                  styles,
                  value,
                  "heading",
                  "button",
                  "icon",
                  "size",
                  device
                ),
              });
            }}
            min={10}
            max={300}
            step={1}
          />

          <div style={{ marginTop: "20px" }}></div>

          <ColorControl
            label={__("Badge Icon Color", "b-blocks")}
            value={button?.icon?.color}
            onChange={(newColor) =>
              setAttributes({
                styles: updateData(
                  styles,
                  newColor,
                  "heading",
                  "button",
                  "icon",
                  "color"
                ),
              })
            }
            defaultColor={button?.icon?.color}
          />

          <div style={{ marginTop: "20px" }}></div>

          <Typography
            label={__("Badge Typography", "b-blocks")}
            value={button?.typography}
            onChange={(newTypo) => {
              setAttributes({
                styles: updateData(
                  styles,
                  newTypo,
                  "heading",
                  "button",
                  "typography"
                ),
              });
            }}
            defaultTypo={button?.typography}
          />

          <div style={{ marginTop: "20px" }}></div>

          <ColorsControl
            label={__("Badge Colors", "b-blocks")}
            value={button?.bgColor?.normal}
            onChange={(value) => {
              setAttributes({
                styles: updateData(
                  styles,
                  value,
                  "heading",
                  "button",
                  "bgColor",
                  "normal"
                ),
              });
            }}
          />

          <div style={{ marginTop: "20px" }}></div>

          {themeSl === "themeOne" && (
            <>
              <ColorsControl
                label={__("Badge Hover Colors", "b-blocks")}
                value={button?.bgColor?.hover}
                onChange={(value) => {
                  setAttributes({
                    styles: updateData(
                      styles,
                      value,
                      "heading",
                      "button",
                      "bgColor",
                      "hover"
                    ),
                  });
                }}
              />
            </>
          )}

          <div style={{ marginTop: "20px" }}></div>

          <BorderBoxControl
            label={__("Badge Border", "b-blocks")}
            value={button?.border}
            onChange={(values) =>
              setAttributes({
                styles: updateData(
                  styles,
                  values,
                  "heading",
                  "button",
                  "border"
                ),
              })
            }
          />

          <div style={{ marginTop: "20px" }}></div>

          <BoxControl
            label={__("Badge Padding", "b-blocks")}
            values={button?.padding}
            onChange={(values) => {
              setAttributes({
                styles: {
                  ...styles,
                  heading: {
                    ...heading,
                    button: { ...button, padding: values },
                  },
                },
              });
            }}
          />

          <div style={{ marginTop: "20px" }}></div>

          <BoxControl
            label={__("Badge Margin", "b-blocks")}
            values={button?.margin}
            onChange={(values) => {
              setAttributes({
                styles: {
                  ...styles,
                  heading: {
                    ...heading,
                    button: { ...button, margin: values },
                  },
                },
              });
            }}
          />

          <div style={{ marginTop: "20px" }}></div>

          <BoxControl
            label={__("Badge Border Radius", "b-blocks")}
            values={button?.borderRadius}
            onChange={(values) =>
              setAttributes({
                styles: {
                  ...styles,
                  heading: {
                    ...heading,
                    button: { ...button, borderRadius: values },
                  },
                },
              })
            }
          />

          <div style={{ marginTop: "20px" }}></div>

          <PanelRow>
            <Label className="">{__("Badge Icon Spacing", "b-blocks")}</Label>
            <Device />
          </PanelRow>
          <RangeControl
            value={button?.iconTextGap?.[device]}
            onChange={(value) => {
              setAttributes({
                styles: updateData(
                  styles,
                  value,
                  "heading",
                  "button",
                  "iconTextGap",
                  device
                ),
              });
            }}
            min={-10}
            max={100}
            step={1}
          />

          <div style={{ marginTop: "20px" }}></div>

          <Typography
            label={__("Title Typography", "b-blocks")}
            value={heading?.title?.typography}
            onChange={(newTypo) => {
              setAttributes({
                styles: updateData(
                  styles,
                  newTypo,
                  "heading",
                  "title",
                  "typography"
                ),
              });
            }}
            defaultTypo={heading?.title?.typography}
          />

          <div style={{ marginTop: "20px" }}></div>

          <ColorControl
            label={__("Title Color")}
            value={heading?.title?.color}
            onChange={(newColor) =>
              setAttributes({
                styles: updateData(
                  styles,
                  newColor,
                  "heading",
                  "title",
                  "color"
                ),
              })
            }
            defaultColor={heading?.title?.color}
          />

          <div style={{ marginTop: "20px" }}></div>

          {(themeSl === "themeThree" || themeSl === "themeFour") && (
            <>
              <Typography
                label={__("Description Typography", "b-blocks")}
                value={heading?.description?.typography}
                onChange={(newTypo) => {
                  setAttributes({
                    styles: updateData(
                      styles,
                      newTypo,
                      "heading",
                      "description",
                      "typography"
                    ),
                  });
                }}
                defaultTypo={heading?.description?.typography}
              />

              <div style={{ marginTop: "20px" }}></div>

              <ColorControl
                label={__("Description Color")}
                value={heading?.description?.color}
                onChange={(newColor) =>
                  setAttributes({
                    styles: updateData(
                      styles,
                      newColor,
                      "heading",
                      "description",
                      "color"
                    ),
                  })
                }
                defaultColor={heading?.description?.color}
              />
            </>
          )}

          <div style={{ marginTop: "20px" }}></div>

          {(themeSl === "themeOne" || themeSl === "themeFour") && (
            <>
              <PanelRow>
                <Label className="">{__("Image Width", "b-blocks")}</Label>
                <Device />
              </PanelRow>
              <RangeControl
                value={heading?.layout?.image?.[device]?.width}
                onChange={(value) => {
                  setAttributes({
                    styles: updateData(
                      styles,
                      value,
                      "heading",
                      "layout",
                      "image",
                      device,
                      "width"
                    ),
                  });
                }}
                min={0}
                max={2000}
                step={1}
              />

              <div style={{ marginTop: "20px" }}></div>

              <PanelRow>
                <Label className="">{__("Image Height", "b-blocks")}</Label>
                <Device />
              </PanelRow>
              <RangeControl
                value={heading?.layout?.image?.[device]?.height}
                onChange={(value) => {
                  setAttributes({
                    styles: updateData(
                      styles,
                      value,
                      "heading",
                      "layout",
                      "image",
                      device,
                      "height"
                    ),
                  });
                }}
                min={0}
                max={2000}
                step={1}
              />
            </>
          )}

          <div style={{ marginTop: "20px" }}></div>

          {themeSl === "themeOne" && (
            <>
              <PanelRow>
                <Label className="">{__("Section Padding", "b-blocks")}</Label>
                <Device />
              </PanelRow>
              <RangeControl
                value={heading?.layout?.sectionPadding?.[device]}
                onChange={(value) => {
                  setAttributes({
                    styles: updateData(
                      styles,
                      value,
                      "heading",
                      "layout",
                      "sectionPadding",
                      device
                    ),
                  });
                }}
                min={0}
                max={2000}
                step={1}
                defaultValue={heading?.layout?.sectionPadding?.[device]}
              />
            </>
          )}

          <div style={{ marginTop: "20px" }}></div>

          {(themeSl === "themeTwo" || themeSl === "themeThree") && (
            <BoxControl
              label={__("Image Border Radius", "b-blocks")}
              values={heading?.layout?.image?.borderRadius}
              onChange={(values) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    values,
                    "heading",
                    "layout",
                    "image",
                    "borderRadius"
                  ),
                })
              }
            />
          )}

          <div style={{ marginTop: "20px" }}></div>

          <ToggleControl
            label={__("Reverse Row Order", "b-blocks")}
            checked={heading?.layout?.rowDirection}
            onChange={(value) =>
              setAttributes({
                styles: updateData(
                  styles,
                  value,
                  "heading",
                  "layout",
                  "rowDirection"
                ),
              })
            }
          />
        </PanelBody>

        {(themeSl === "themeOne" ||
          themeSl === "themeTwo" ||
          themeSl === "themeFour") && (
          <PanelBody
            className="bPlPanelBody"
            title={__("About Items", "b-blocks")}
            initialOpen={false}
          >
            <Typography
              label="Title Typography"
              value={items?.title?.typography}
              onChange={(newTypo) => {
                setAttributes({
                  styles: updateData(
                    styles,
                    newTypo,
                    "items",
                    "title",
                    "typography"
                  ),
                });
              }}
            />

            <div style={{ marginTop: "20px" }}></div>

            <ColorControl
              label={__("Title Color", "b-blocks")}
              value={items?.title?.color}
              onChange={(newColor) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    newColor,
                    "items",
                    "title",
                    "color"
                  ),
                })
              }
              defaultColor={items?.title?.color}
            />

            <div style={{ marginTop: "20px" }}></div>

            <Typography
              label={__("Description Typography", "b-blocks")}
              value={items?.description?.typography}
              onChange={(newTypo) => {
                setAttributes({
                  styles: updateData(
                    styles,
                    newTypo,
                    "items",
                    "description",
                    "typography"
                  ),
                });
              }}
            />

            <div style={{ marginTop: "20px" }}></div>

            <ColorControl
              label={__("Description Color", "b-blocks")}
              value={items?.description?.color}
              onChange={(newColor) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    newColor,
                    "items",
                    "description",
                    "color"
                  ),
                })
              }
              defaultColor={items?.description?.color}
            />

            <div style={{ marginTop: "20px" }}></div>

            {themeSl === "themeTwo" && (
              <ColorControl
                label={__("Icons Color", "b-blocks")}
                value={items?.icon?.color}
                onChange={(newColor) =>
                  setAttributes({
                    styles: updateData(
                      styles,
                      newColor,
                      "items",
                      "icon",
                      "color"
                    ),
                  })
                }
              />
            )}

            <div style={{ marginTop: "20px" }}></div>

            <PanelRow>
              <Label className="">Icons Size</Label>
              <Device />
            </PanelRow>
            <RangeControl
              value={items?.icon?.size?.[device]}
              onChange={(value) => {
                setAttributes({
                  styles: updateData(
                    styles,
                    value,
                    "items",
                    "icon",
                    "size",
                    device
                  ),
                });
              }}
              min={0}
              max={300}
              step={1}
            />

            <div style={{ marginTop: "20px" }}></div>

            {themeSl === "themeFour" && (
              <>
                <BorderBoxControl
                  label={__("Icons Border", "b-blocks")}
                  value={items?.icon?.border}
                  onChange={(values) =>
                    setAttributes({
                      styles: updateData(
                        styles,
                        values,
                        "items",
                        "icon",
                        "border"
                      ),
                    })
                  }
                />

                <div style={{ marginTop: "20px" }}></div>

                <ColorsControl
                  label={__("Icons Bg Color", "b-blocks")}
                  value={items?.icon?.bgColor?.normal}
                  onChange={(value) => {
                    setAttributes({
                      styles: updateData(
                        styles,
                        value,
                        "items",
                        "icon",
                        "bgColor",
                        "normal"
                      ),
                    });
                  }}
                />

                <div style={{ marginTop: "20px" }}></div>

                <ColorsControl
                  label={__("Icons Bg Hover Color", "b-blocks")}
                  value={items?.icon?.bgColor?.hover}
                  onChange={(value) => {
                    setAttributes({
                      styles: updateData(
                        styles,
                        value,
                        "items",
                        "icon",
                        "bgColor",
                        "hover"
                      ),
                    });
                  }}
                />

                <div style={{ marginTop: "20px" }}></div>

                <PanelRow>
                  <Label className="">
                    {__("Icons Bg Width/Hight", "b-blocks")}
                  </Label>
                  <Device />
                </PanelRow>
                <RangeControl
                  value={items?.icon?.iconBgSize?.[device]}
                  onChange={(value) => {
                    setAttributes({
                      styles: updateData(
                        styles,
                        value,
                        "items",
                        "icon",
                        "iconBgSize",
                        device
                      ),
                    });
                  }}
                  min={0}
                  max={300}
                  step={1}
                />

                <div style={{ marginTop: "20px" }}></div>

                <BoxControl
                  label={__("Icons Border Radius", "b-blocks")}
                  values={items?.icon?.borderRadius}
                  onChange={(values) =>
                    setAttributes({
                      styles: updateData(
                        styles,
                        values,
                        "items",
                        "icon",
                        "borderRadius"
                      ),
                    })
                  }
                />
              </>
            )}

            <div style={{ marginTop: "20px" }}></div>

            {themeSl === "themeOne" && (
              <>
                <ColorControl
                  label={__("Separator Color", "b-blocks")}
                  value={items?.separator?.color}
                  onChange={(newColor) =>
                    setAttributes({
                      styles: updateData(
                        styles,
                        newColor,
                        "items",
                        "separator",
                        "color"
                      ),
                    })
                  }
                  defaultColor={items?.separator?.color}
                />

                <div style={{ marginTop: "20px" }}></div>

                <RangeControl
                  label={__("Separator Width", "b-blocks")}
                  value={items?.separator?.width}
                  onChange={(value) =>
                    setAttributes({
                      styles: updateData(
                        styles,
                        value,
                        "items",
                        "separator",
                        "width"
                      ),
                    })
                  }
                  min={0}
                  max={10}
                  step={1}
                />
              </>
            )}
          </PanelBody>
        )}

        {themeSl === "themeThree" && (
          <PanelBody
            className="bPlPanelBody"
            title={__("About Item", "b-blocks")}
            initialOpen={false}
          >
            <Typography
              label="Title Typography"
              value={styles?.item?.title?.typography}
              onChange={(newTypo) => {
                setAttributes({
                  styles: updateData(
                    styles,
                    newTypo,
                    "item",
                    "title",
                    "typography"
                  ),
                });
              }}
            />

            <div style={{ marginTop: "20px" }}></div>

            <ColorControl
              label={__("Title Color", "b-blocks")}
              value={styles?.item?.title?.color}
              onChange={(newColor) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    newColor,
                    "item",
                    "title",
                    "color"
                  ),
                })
              }
              defaultColor={styles?.item?.title?.color}
            />

            <div style={{ marginTop: "20px" }}></div>

            <Typography
              label={__("Description Typography", "b-blocks")}
              value={styles?.item?.description?.typography}
              onChange={(newTypo) => {
                setAttributes({
                  styles: updateData(
                    styles,
                    newTypo,
                    "item",
                    "description",
                    "typography"
                  ),
                });
              }}
            />

            <div style={{ marginTop: "20px" }}></div>

            <ColorControl
              label={__("Description Color", "b-blocks")}
              value={styles?.item?.description?.color}
              onChange={(newColor) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    newColor,
                    "item",
                    "description",
                    "color"
                  ),
                })
              }
              defaultColor={styles?.item?.description?.color}
            />
          </PanelBody>
        )}

        <PanelBody
          className="bPlPanelBody"
          title={__("Container", "b-blocks")}
          initialOpen={false}
        >
          <Background
            label="Set Background"
            value={about?.bg?.[device]}
            onChange={(value) => {
              setAttributes({
                about: {
                  ...about,
                  bg: {
                    ...about?.bg,
                    [device]: {
                      ...about?.bg?.[device],
                      ...value,
                    },
                  },
                },
              });
            }}
          />

          <div style={{ marginTop: "20px" }}></div>

          <BoxControl
            label={__("Border Radius", "b-blocks")}
            values={styles?.bg?.borderRadius}
            onChange={(values) =>
              setAttributes({
                styles: updateData(styles, values, "bg", "borderRadius"),
              })
            }
          />

          <div style={{ marginTop: "20px" }}></div>

          <PanelRow>
            <Label className="">{__("Margin", "b-blocks")}</Label>
            <Device />
          </PanelRow>
          <BoxControl
            values={styles?.bg?.margin?.[device]}
            onChange={(values) => {
              setAttributes({
                styles: updateData(styles, values, "bg", "margin", device),
              });
            }}
          />
          <div style={{ marginTop: "20px" }}></div>

          <PanelRow>
            <Label className="">{__("Padding", "b-blocks")}</Label>
            <Device />
          </PanelRow>
          <BoxControl
            values={styles?.bg?.padding?.[device]}
            onChange={(values) => {
              setAttributes({
                styles: updateData(styles, values, "bg", "padding", device),
              });
            }}
          />
        </PanelBody>
      </>
    </>
  );
};

export default Style;
