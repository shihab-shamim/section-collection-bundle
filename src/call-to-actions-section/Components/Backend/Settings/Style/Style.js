import { __ } from "@wordpress/i18n";
import { PanelBody, __experimentalSpacer as Spacer, PanelRow, __experimentalUnitControl as UnitControl, Button, } from "@wordpress/components";
import { Background, BoxControl, ColorControl, Device, Gradient, Label, SolidBackground, Typography } from "../../../../../../../bpl-tools/Components";
import { paddingReset, resetButtonPadding, resetButtonRadius, resetCtaMargin, resetMargin, resetPadding, resetRadius } from "../../../../utils/options";
import { updateData } from "../../../../../../../bpl-tools/utils/functions";
import { useState } from "react";


const Style = ({ attributes, setAttributes, device = "desktop" }) => {
  const { layout, style } = attributes;

  const { theme } = layout;
  const [selectedItem, setSelectedItem] = useState('Title');


  return (
    <>
      {(theme === "theme-1" || theme === "theme-2" || theme === "theme-3") && (
        <>
          <PanelBody
            className="bPlPanelBody"
            title={__("CTA Container", "b-blocks")}
            initialOpen={false}
          >
            <Background
              label={__("Background", "b-blocks")}
              value={style?.background}
              onChange={(newBg) => { setAttributes({ style: { ...style, background: newBg } }); }}
            />

            <Spacer />

            <PanelRow>
              <Label className="">{__("Padding", "b-blocks")}</Label>
              <Device />
            </PanelRow>
            <BoxControl
              values={style?.padding[device]}
              resetValues={resetPadding}
              onChange={(newValue) => { setAttributes({ style: { ...style, padding: { ...style?.padding, [device]: newValue } } }); }}
            />
            <Spacer />
            <PanelRow>
              <Label className="">{__("Margin", "b-blocks")}</Label>
              <Device />
            </PanelRow>
            <BoxControl
              values={style?.margin[device]}
              resetValues={resetCtaMargin}
              onChange={(newValue) => {setAttributes({style: {...style, margin: { ...style.margin, [device]: newValue }}}); }}
            />
            <Spacer />
            <BoxControl
              label={__("Radius", "b-blocks")}
              values={style?.radius}
              resetValues={resetRadius}
              onChange={(redi) => { setAttributes({ style: { ...style, radius: redi } }); }}
            />

          </PanelBody>

          <PanelBody
            className="bPlPanelBody"
            title={__("CTA Section", "b-blocks")}
            initialOpen={false}
          >
            <PanelRow>
              <Label className="">{__("Width", "b-blocks")}</Label>
              <Device />
            </PanelRow>
            <UnitControl
              value={style?.ctaStyle?.containerWidth[device]}
              onChange={(wid) => { setAttributes({ style: updateData(style, wid, "ctaStyle", "containerWidth", device) }); }}
            />
            <Spacer />

            <Background
              label={__("Background", "b-blocks")}
              value={style?.ctaStyle?.background}
              onChange={(newBg) => { setAttributes({ style: { ...style, ctaStyle: { ...style.ctaStyle, background: newBg } } }); }}
            />

            <Spacer />

            {(theme === "theme-1" || theme === "theme-2") && (
              <>
                <UnitControl
                  label={__("Border Width", "b-blocks")}
                  value={style?.ctaStyle?.borderWidth}
                  onChange={(width) => { setAttributes({ style: updateData(style, width, 'ctaStyle', 'borderWidth') }); }}
                />

                <Spacer />

                <ColorControl
                  label={__("Border Color", "b-blocks")}
                  defaultColor="rgba(1, 1, 8, 0.86)"
                  value={
                    theme === "theme-1"
                      ? style?.ctaStyle?.borderColor
                      : style?.ctaStyle?.borderColorTwo
                  }
                  onChange={(textcolor) => {
                    if (theme === "theme-1") {
                      setAttributes({
                        style: updateData(style, textcolor, 'ctaStyle', 'borderColor'),
                      });
                    } else if (theme === "theme-2") {
                      setAttributes({
                        style: updateData(style, textcolor, 'ctaStyle', 'borderColorTwo'),
                      });
                    }
                  }}
                />
              </>
            )}
            <Spacer />

            <PanelRow>
              <Label className="">{__("margin", "b-blocks")}</Label>
              <Device />
            </PanelRow>
            <BoxControl
              values={style?.ctaStyle?.margin[device]}
              resetValues={resetMargin}
              onChange={(mar) => { setAttributes({ style: updateData(style, mar, "ctaStyle", "margin", device) }); }}
            />

            <Spacer />

            <PanelRow>
              <Label className="">{__("Padding", "b-blocks")}</Label>
              <Device />
            </PanelRow>
            <BoxControl
              values={style?.ctaStyle?.padding[device]}
              resetValues={paddingReset}
              onChange={(padd) => { setAttributes({ style: updateData(style, padd, "ctaStyle", "padding", device) }); }}
            />

            <Spacer />

            <BoxControl
              label={__("Radius", "b-blocks")}
              values={
                theme === "theme-3"
                  ? style?.ctaStyle?.radiusThree
                  : style?.ctaStyle?.radius
              }
              resetValues={resetRadius}
              onChange={(redi) => {
                if (theme === "theme-2" || theme === "theme-1") {
                  setAttributes({
                    style: updateData(style, redi, 'ctaStyle', 'radius'),
                  });
                } else if (theme === "theme-3") {
                  setAttributes({
                    style: updateData(style, redi, 'ctaStyle', 'radiusThree'),
                  });
                }
              }}
            />

            <Spacer className="tab" />

            {/* Tab bar */}

            <div className="tabCo">
              <Button className={`tabCon ${selectedItem === "Title" ? "active" : ""}`} onClick={() => setSelectedItem('Title')}>Title</Button>
              <Button className={`tabCon ${selectedItem === "Description" ? "active" : ""}`} onClick={() => setSelectedItem('Description')}>Description</Button>
              <Button className={`tabCon ${selectedItem === "Button Text" ? "active" : ""}`} onClick={() => setSelectedItem('Button Text')}>Button</Button>
            </div>

            <Spacer />

            {/* Title tab */}
            {selectedItem === 'Title' && (
              <>
                <Typography
                  label={__('Title Typography:', 'b-blocks')}
                  defaults={{ fontSize: { desktop: 76, tablet: 39, mobile: 39 }, }}
                  value={style?.ctaStyle?.title?.typo}
                  onChange={(typo) => { setAttributes({ style: updateData(style, typo, 'ctaStyle', 'title', 'typo') }); }}
                />
                <Spacer />

                <ColorControl
                  label={__("Text Color", "b-blocks")}
                  defaultColor="rgba(252, 252, 253, 1)"
                  value={style?.ctaStyle?.title?.color}
                  onChange={(textcolor) => { setAttributes({ style: updateData(style, textcolor, 'ctaStyle', 'title', 'color') }); }}
                />
                <Spacer />
                {(theme === "theme-1" || theme === "theme-2") && (
                  <>
                    <Gradient
                      label={__("Highlight Text Color", "b-blocks")}
                      value={
                        theme === "theme-1"
                          ? style?.ctaStyle?.title?.gradient
                          : style?.ctaStyle?.title?.gradientTwo
                      }
                      onChange={(textcolor) => {
                        if (theme === "theme-1") {
                          setAttributes({
                            style: updateData(style, textcolor, 'ctaStyle', 'title', 'gradient'),
                          });
                        } else if (theme === "theme-2") {
                          setAttributes({
                            style: updateData(style, textcolor, 'ctaStyle', 'title', 'gradientTwo'),
                          });
                        }
                      }}
                    />
                  </>
                )}
              </>
            )}

            <Spacer />

            {/* Description tab*/}
            {selectedItem === 'Description' && (
              <>
                <ColorControl
                  label={__("Text Color", "b-blocks")}
                  defaultColor="rgba(252, 252, 253, 1)"
                  value={style?.ctaStyle?.des?.color}
                  onChange={(textcolor) => { setAttributes({ style: updateData(style, textcolor, 'ctaStyle', 'des', 'color'), }); }}
                />
                <Spacer />
                <Typography
                  label={__('Description Typography:', 'b-blocks')}
                  value={style?.ctaStyle?.des?.typo}
                  onChange={(typo) => { setAttributes({ style: updateData(style, typo, 'ctaStyle', 'des', 'typo'), }); }}
                />
              </>
            )}

            <Spacer />
            {/* button tab */}
            {selectedItem === 'Button Text' && (
              <>
                <Typography
                  label={__('Button Typography:', 'b-blocks')}
                  value={style?.ctaStyle?.button?.typo}
                  onChange={(typo) => { setAttributes({ style: updateData(style, typo, 'ctaStyle', 'button', 'typo'), }); }}
                />
                <Spacer />
                <ColorControl
                  label={__("Text Color", "b-blocks")}
                  defaultColor="rgba(13, 13, 14, 0.9)"
                  value={
                    theme === "theme-1"
                      ? style?.ctaStyle?.button?.color
                      : style?.ctaStyle?.button?.colorTwo
                  }
                  onChange={(textcolor) => {
                    if (theme === "theme-1") {
                      setAttributes({
                        style: updateData(style, textcolor, 'ctaStyle', 'button', 'color'),
                      });
                    } else if (theme === "theme-2" || theme === "theme-3") {
                      setAttributes({
                        style: updateData(style, textcolor, 'ctaStyle', 'button', 'colorTwo'),
                      });
                    }
                  }}
                />
                <Spacer />
                <SolidBackground
                  label={__("Background Color", "b-blocks")}
                  value={
                    theme === "theme-1"
                      ? style?.ctaStyle?.button?.bg
                      : theme === "theme-2"
                        ? style?.ctaStyle?.button?.bgtwo
                        : style?.ctaStyle?.button?.bgThree
                  }
                  onChange={(bgColor) => {
                    if (theme === "theme-1") {
                      setAttributes({
                        style: updateData(style, bgColor, 'ctaStyle', 'button', 'bg'),
                      });
                    } else if (theme === "theme-2") {
                      setAttributes({
                        style: updateData(style, bgColor, 'ctaStyle', 'button', 'bgtwo'),
                      });
                    }
                    else if (theme === "theme-3") {
                      setAttributes({
                        style: updateData(style, bgColor, 'ctaStyle', 'button', 'bgThree'),
                      });
                    }
                  }}

                />
                <Spacer />
                <ColorControl
                  label={__("Hover Background Color", "b-blocks")}
                  defaultColor="rgba(201, 245, 57, 0.918)"
                  value={
                    theme === "theme-1"
                      ? style?.ctaStyle?.button?.bgHoverColor
                      : theme === "theme-2"
                        ? style?.ctaStyle?.button?.bgHoverColorTwo
                        : style?.ctaStyle?.button?.bgHoverColorThree
                  }
                  onChange={(hoverBgColor) => {
                    if (theme === "theme-1") {
                      setAttributes({
                        style: updateData(style, hoverBgColor, 'ctaStyle', 'button', 'bgHoverColor'),
                      });
                    } else if (theme === "theme-2") {
                      setAttributes({
                        style: updateData(style, hoverBgColor, 'ctaStyle', 'button', 'bgHoverColorTwo'),
                      });
                    }
                    else if (theme === "theme-3") {
                      setAttributes({
                        style: updateData(style, hoverBgColor, 'ctaStyle', 'button', 'bgHoverColorThree'),
                      });
                    }
                  }}
                />
                <Spacer />

                <UnitControl
                  label={__("Button Icon Width", "b-blocks")}
                  value={style?.ctaStyle?.button?.width}
                  onChange={(newwidth) => { setAttributes({ style: updateData(style, newwidth, 'ctaStyle', 'button', 'width'), }); }}
                />

                <Spacer />
                <PanelRow>
                  <Label className="">{__("Padding", "b-blocks")}</Label>
                  <Device />
                </PanelRow>
                <BoxControl
                  values={style?.ctaStyle?.button?.padding[device]}
                  resetValues={resetButtonPadding}
                  onChange={(padd) => { setAttributes({ style: updateData(style, padd, "ctaStyle", "button", "padding", device) }); }}
                />
                <Spacer />
                <BoxControl
                  label={__("Radius", "b-blocks")}
                  values={style?.ctaStyle?.button?.radius}
                  resetValues={resetButtonRadius}
                  onChange={(radiu) => { setAttributes({ style: updateData(style, radiu, "ctaStyle", "button", "radius") }); }}
                />
              </>
            )}
          </PanelBody>
        </>
      )}
    </>
  );
};

export default Style;
