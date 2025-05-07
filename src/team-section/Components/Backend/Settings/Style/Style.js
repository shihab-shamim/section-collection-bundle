import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  PanelRow,
  RangeControl,
  __experimentalBorderBoxControl as BorderBoxControl,
  SelectControl,
} from "@wordpress/components";
import {
  BoxControl,
  ColorControl,
  ColorsControl,
  Device,
  Gradient,
  InlineMediaUpload,
  Label,
  ShadowControl,
  Typography,
} from "../../../../../../../bpl-tools/Components";
import { updateData } from "../../../../../../../bpl-tools/utils/functions";

const Style = ({ attributes, setAttributes, device }) => {
  const { styles, styleSl } = attributes;
  const { heading, items, container } = styles || {};
  const { badge, title, subTitle, description, highlightTitle } = heading || {};
  const { name, role, linkArrowIcon, socialLinks, image, cardBg, infoBox } =
    items || {};
  const { shadow } = cardBg || {};

  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Team Heading", "b-blocks")}
        initialOpen={false}
      >
        {styleSl === "styleDefault" && (
          <>
            <PanelRow>
              <Label className="">{__("Badge Icon Size", "b-blocks")}</Label>
              <Device />
            </PanelRow>
            <RangeControl
              value={badge?.icon?.size?.[device]}
              onChange={(value) => {
                setAttributes({
                  styles: updateData(
                    styles,
                    value,
                    "heading",
                    "badge",
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
              value={badge?.icon?.color}
              onChange={(newColor) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    newColor,
                    "heading",
                    "badge",
                    "icon",
                    "color"
                  ),
                })
              }
              defaultColor={badge?.icon?.color}
            />

            <div style={{ marginTop: "20px" }}></div>

            <Typography
              label={__("Badge Typography", "b-blocks")}
              value={badge?.typography}
              onChange={(newTypo) => {
                setAttributes({
                  styles: updateData(
                    styles,
                    newTypo,
                    "heading",
                    "badge",
                    "typography"
                  ),
                });
              }}
              defaultTypo={badge?.typography}
            />

            <div style={{ marginTop: "20px" }}></div>

            <ColorsControl
              label={__("Badge Colors", "b-blocks")}
              value={badge?.bgColor?.normal}
              onChange={(value) => {
                setAttributes({
                  styles: updateData(
                    styles,
                    value,
                    "heading",
                    "badge",
                    "bgColor",
                    "normal"
                  ),
                });
              }}
              defaultColor={badge?.bgColor?.normal}
            />

            <div style={{ marginTop: "20px" }}></div>

            <ColorsControl
              label={__("Badge Hover Colors", "b-blocks")}
              value={badge?.bgColor?.hover}
              onChange={(value) => {
                setAttributes({
                  styles: updateData(
                    styles,
                    value,
                    "heading",
                    "badge",
                    "bgColor",
                    "hover"
                  ),
                });
              }}
            />

            <div style={{ marginTop: "20px" }}></div>

            <BorderBoxControl
              label={__("Badge Border", "b-blocks")}
              value={badge?.border}
              onChange={(values) => {
                setAttributes({
                  styles: updateData(
                    styles,
                    values,
                    "heading",
                    "badge",
                    "border"
                  ),
                });
              }}
            />

            <div style={{ marginTop: "20px" }}></div>

            <BoxControl
              label={__("Badge Padding", "b-blocks")}
              values={badge?.padding}
              onChange={(values) => {
                setAttributes({
                  styles: updateData(
                    styles,
                    values,
                    "heading",
                    "badge",
                    "padding"
                  ),
                });
              }}
            />

            <div style={{ marginTop: "20px" }}></div>

            <BoxControl
              label={__("Badge Margin", "b-blocks")}
              values={badge?.margin}
              onChange={(values) => {
                setAttributes({
                  styles: updateData(
                    styles,
                    values,
                    "heading",
                    "badge",
                    "margin"
                  ),
                });
              }}
            />

            <div style={{ marginTop: "20px" }}></div>

            <BoxControl
              label={__("Badge Border Radius", "b-blocks")}
              values={badge?.borderRadius}
              onChange={(values) => {
                setAttributes({
                  styles: updateData(
                    styles,
                    values,
                    "heading",
                    "badge",
                    "borderRadius"
                  ),
                });
              }}
            />

            <div style={{ marginTop: "20px" }}></div>

            <PanelRow>
              <Label className="">{__("Badge Icon Spacing", "b-blocks")}</Label>
              <Device />
            </PanelRow>
            <RangeControl
              value={badge?.badgeIconGap?.[device]}
              onChange={(value) => {
                setAttributes({
                  styles: updateData(
                    styles,
                    value,
                    "heading",
                    "badge",
                    "badgeIconGap",
                    device
                  ),
                });
              }}
              min={-10}
              max={100}
              step={1}
            />
          </>
        )}

        {styleSl === "styleOne" && (
          <>
            <Typography
              label={__("Subtitle Typography", "b-blocks")}
              value={subTitle?.typography}
              onChange={(newTypo) => {
                setAttributes({
                  styles: updateData(
                    styles,
                    newTypo,
                    "heading",
                    "subTitle",
                    "typography"
                  ),
                });
              }}
              defaultTypo={subTitle?.typography}
            />

            <div style={{ marginTop: "20px" }}></div>

            {/* <ColorControl
              label={__("Subtitle Color", "b-blocks")}
              value={subTitle?.color}
              onChange={(newColor) => {
                setAttributes({
                  styles: updateData(
                    styles,
                    newColor,
                    "heading",
                    "subTitle",
                    "color"
                  ),
                });
              }}
              defaultColor={subTitle?.color}
            /> */}

            <Label className="">
              {__("Subtitle Gradient Color", "b-blocks")}
            </Label>
            <Gradient
              value={subTitle?.gradient}
              onChange={(newGradient) => {
                setAttributes({
                  styles: updateData(
                    styles,
                    newGradient,
                    "heading",
                    "subTitle",
                    "gradient"
                  ),
                });
              }}
            />

            <div style={{ marginTop: "20px" }}></div>

            <BoxControl
              label={__("Subtitle Margin", "b-blocks")}
              values={subTitle?.margin}
              onChange={(values) => {
                setAttributes({
                  styles: updateData(
                    styles,
                    values,
                    "heading",
                    "subTitle",
                    "margin"
                  ),
                });
              }}
            />
          </>
        )}

        <div style={{ marginTop: "20px" }}></div>

        {(styleSl === "styleDefault" ||
          styleSl === "styleOne" ||
          styleSl === "styleTwo") && (
          <>
            <Typography
              label={__("Title Typography", "b-blocks")}
              value={title?.typography}
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
              defaultTypo={title?.typography}
            />

            <div style={{ marginTop: "20px" }}></div>

            <ColorControl
              label={__("Title Color", "b-blocks")}
              value={title?.color}
              onChange={(newColor) => {
                setAttributes({
                  styles: updateData(
                    styles,
                    newColor,
                    "heading",
                    "title",
                    "color"
                  ),
                });
              }}
              defaultColor={title?.color}
            />

            <div style={{ marginTop: "20px" }}></div>

            {styleSl === "styleTwo" && (
              <>
                <ColorControl
                  label={__("Hightlight Title Color", "b-blocks")}
                  value={highlightTitle?.color}
                  onChange={(newColor) => {
                    setAttributes({
                      styles: updateData(
                        styles,
                        newColor,
                        "heading",
                        "highlightTitle",
                        "color"
                      ),
                    });
                  }}
                  defaultColor={highlightTitle?.color}
                />

                <div style={{ marginTop: "20px" }}></div>
              </>
            )}

            <BoxControl
              label={__("Title Margin", "b-blocks")}
              values={title?.margin}
              onChange={(values) => {
                setAttributes({
                  styles: updateData(
                    styles,
                    values,
                    "heading",
                    "title",
                    "margin"
                  ),
                });
              }}
            />
          </>
        )}

        <div style={{ marginTop: "20px" }}></div>

        {styleSl === "styleTwo" && (
          <>
            <Typography
              label={__("Description Typography", "b-blocks")}
              value={description?.typography}
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
              defaultTypo={description?.typography}
            />

            <div style={{ marginTop: "20px" }}></div>

            <ColorControl
              label={__("Description Color", "b-blocks")}
              value={description?.color}
              onChange={(newColor) => {
                setAttributes({
                  styles: updateData(
                    styles,
                    newColor,
                    "heading",
                    "description",
                    "color"
                  ),
                });
              }}
              defaultColor={description?.color}
            />

            <div style={{ marginTop: "20px" }}></div>

            <BoxControl
              label={__("Description Margin", "b-blocks")}
              values={description?.margin}
              onChange={(values) => {
                setAttributes({
                  styles: updateData(
                    styles,
                    values,
                    "heading",
                    "description",
                    "margin"
                  ),
                });
              }}
            />
          </>
        )}
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Team Items", "b-blocks")}
        initialOpen={false}
      >
        <Typography
          label={__("Name Typography", "b-blocks")}
          value={name?.typography}
          onChange={(newTypo) => {
            setAttributes({
              styles: updateData(
                styles,
                newTypo,
                "items",
                "name",
                "typography"
              ),
            });
          }}
          defaultTypo={name?.typography}
        />

        <div style={{ marginTop: "20px" }}></div>

        {styleSl === "styleDefault" && (
          <>
            <ColorControl
              label={__("Name Color", "b-blocks")}
              value={name?.textColor?.normal?.color}
              onChange={(newColor) => {
                setAttributes({
                  styles: updateData(
                    styles,
                    newColor,
                    "items",
                    "name",
                    "textColor",
                    "normal",
                    "color"
                  ),
                });
              }}
              defaultColor={name?.textColor?.normal?.color}
            />

            <div style={{ marginTop: "20px" }}></div>

            <ColorControl
              label={__("Name Hover Color", "b-blocks")}
              value={name?.textColor?.hover?.color}
              onChange={(newColor) => {
                setAttributes({
                  styles: updateData(
                    styles,
                    newColor,
                    "items",
                    "name",
                    "textColor",
                    "hover",
                    "color"
                  ),
                });
              }}
              defaultColor={name?.textColor?.hover?.color}
            />
          </>
        )}

        {styleSl === "styleTwo" && (
          <>
            <ColorControl
              label={__("Link Name Color", "b-blocks")}
              value={name?.link?.normal?.color}
              onChange={(newColor) => {
                setAttributes({
                  styles: updateData(
                    styles,
                    newColor,
                    "items",
                    "name",
                    "link",
                    "normal",
                    "color"
                  ),
                });
              }}
              defaultColor={name?.link?.normal?.color}
            />

            <div style={{ marginTop: "20px" }}></div>

            <ColorControl
              label={__("Link Name Hover Color", "b-blocks")}
              value={name?.link?.hover?.color}
              onChange={(newColor) => {
                setAttributes({
                  styles: updateData(
                    styles,
                    newColor,
                    "items",
                    "name",
                    "link",
                    "hover",
                    "color"
                  ),
                });
              }}
              defaultColor={name?.link?.hover?.color}
            />

            {/* <div style={{ marginTop: "20px" }}></div>

            <ColorControl
              label={__("Underline Color", "b-blocks")}
              value={name?.underline?.color}
              onChange={(newColor) => {
                setAttributes({
                  styles: updateData(
                    styles,
                    newColor,
                    "items",
                    "name",
                    "underline",
                    "color"
                  ),
                });
              }}
              defaultColor={name?.underline?.color}
            /> */}

            <div style={{ marginTop: "20px" }}></div>

            <RangeControl
              label={__("Underline Height", "b-blocks")}
              value={name?.underline?.width}
              onChange={(value) => {
                setAttributes({
                  styles: updateData(
                    styles,
                    value,
                    "items",
                    "name",
                    "underline",
                    "width"
                  ),
                });
              }}
              min={1}
              max={300}
              step={1}
            />

            <div style={{ marginTop: "20px" }}></div>

            <SelectControl
              label={__("Hover Text Decoration")}
              value={name?.textDecoration}
              options={[
                { label: __("None", "b-blocks"), value: "none" },
                { label: __("Underline", "b-blocks"), value: "underline" },
                { label: __("Overline", "b-blocks"), value: "overline" },
                {
                  label: __("Line Through", "b-blocks"),
                  value: "line-through",
                },
              ]}
              onChange={(value) => {
                setAttributes({
                  styles: updateData(
                    styles,
                    value,
                    "items",
                    "name",
                    "textDecoration"
                  ),
                });
              }}
            />

            <div style={{ marginTop: "20px" }}></div>
          </>
        )}

        {(styleSl === "styleOne" || styleSl === "styleTwo") && (
          <>
            <ColorControl
              label={__("Name Color", "b-blocks")}
              value={name?.color}
              onChange={(newColor) => {
                setAttributes({
                  styles: updateData(
                    styles,
                    newColor,
                    "items",
                    "name",
                    "color"
                  ),
                });
              }}
              defaultColor={name?.color}
            />
          </>
        )}

        <div style={{ marginTop: "20px" }}></div>

        <BoxControl
          label={__("Name Margin", "b-blocks")}
          values={name?.margin}
          onChange={(values) => {
            setAttributes({
              styles: updateData(styles, values, "items", "name", "margin"),
            });
          }}
        />
        <div style={{ marginTop: "20px" }}></div>
        <Typography
          label={__("Role Typography", "b-blocks")}
          value={role?.typography}
          onChange={(newTypo) => {
            setAttributes({
              styles: updateData(
                styles,
                newTypo,
                "items",
                "role",
                "typography"
              ),
            });
          }}
          defaultTypo={role?.typography}
        />

        <div style={{ marginTop: "20px" }}></div>

        <ColorControl
          label={__("Role Color", "b-blocks")}
          value={role?.color}
          onChange={(newColor) => {
            setAttributes({
              styles: updateData(styles, newColor, "items", "role", "color"),
            });
          }}
          defaultColor={role?.color}
        />

        <div style={{ marginTop: "20px" }}></div>

        <BoxControl
          label={__("Role Margin", "b-blocks")}
          values={role?.margin}
          onChange={(values) => {
            setAttributes({
              styles: updateData(styles, values, "items", "role", "margin"),
            });
          }}
        />

        {/* Link Arrow Icon */}
        <div style={{ marginTop: "20px" }}></div>

        {styleSl === "styleDefault" && (
          <>
            <BorderBoxControl
              label={__("Arrow Icon Border", "b-blocks")}
              value={linkArrowIcon?.border}
              onChange={(values) => {
                setAttributes({
                  styles: updateData(
                    styles,
                    values,
                    "items",
                    "linkArrowIcon",
                    "border"
                  ),
                });
              }}
            />

            <div style={{ marginTop: "20px" }}></div>

            <ColorsControl
              label={__("Arrow Icon Color", "b-blocks")}
              value={linkArrowIcon?.bgColor?.normal}
              onChange={(value) => {
                setAttributes({
                  styles: updateData(
                    styles,
                    value,
                    "items",
                    "linkArrowIcon",
                    "bgColor",
                    "normal"
                  ),
                });
              }}
              defaultColor={linkArrowIcon?.bgColor?.normal}
            />

            <div style={{ marginTop: "20px" }}></div>

            <ColorsControl
              label={__("Arrow Icon Hover Color", "b-blocks")}
              value={linkArrowIcon?.bgColor?.hover}
              onChange={(value) => {
                setAttributes({
                  styles: updateData(
                    styles,
                    value,
                    "items",
                    "linkArrowIcon",
                    "bgColor",
                    "hover"
                  ),
                });
              }}
              defaultColor={linkArrowIcon?.bgColor?.hover}
            />

            <div style={{ marginTop: "20px" }}></div>

            {/* width and height of the icon rounded cicle box */}
            <PanelRow>
              <Label className="">
                {__("Arrow Icon Container Size", "b-blocks")}
              </Label>
              <Device />
            </PanelRow>
            <RangeControl
              value={linkArrowIcon?.iconContainerSize?.[device]}
              onChange={(value) => {
                setAttributes({
                  styles: updateData(
                    styles,
                    value,
                    "items",
                    "linkArrowIcon",
                    "iconContainerSize",
                    device
                  ),
                });
              }}
              min={0}
              max={300}
              step={1}
            />

            <div style={{ marginTop: "20px" }}></div>

            <PanelRow>
              <Label className="">{__("Arrow Icon Size", "b-blocks")}</Label>
              <Device />
            </PanelRow>
            <RangeControl
              value={linkArrowIcon?.size?.[device]}
              onChange={(value) => {
                setAttributes({
                  styles: updateData(
                    styles,
                    value,
                    "items",
                    "linkArrowIcon",
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

            {/* border radius */}
            <BoxControl
              label={__("Arrow Icon Container Border Radius", "b-blocks")}
              values={linkArrowIcon?.borderRadius}
              onChange={(values) => {
                setAttributes({
                  styles: updateData(
                    styles,
                    values,
                    "items",
                    "linkArrowIcon",
                    "borderRadius"
                  ),
                });
              }}
            />
            <div style={{ marginTop: "20px" }}></div>

            <BoxControl
              label={__("Arrow Icon Margin", "b-blocks")}
              values={linkArrowIcon?.margin}
              onChange={(values) => {
                setAttributes({
                  styles: updateData(
                    styles,
                    values,
                    "items",
                    "linkArrowIcon",
                    "margin"
                  ),
                });
              }}
            />

            <div style={{ marginTop: "20px" }}></div>

            <BoxControl
              label={__("Image Border Radius", "b-blocks")}
              values={image?.borderRadius}
              onChange={(values) => {
                setAttributes({
                  styles: updateData(
                    styles,
                    values,
                    "items",
                    "image",
                    "borderRadius"
                  ),
                });
              }}
            />

            <div style={{ marginTop: "20px" }}></div>

            <BoxControl
              label={__("Info Box Border Radius", "b-blocks")}
              values={infoBox?.borderRadius}
              onChange={(values) => {
                setAttributes({
                  styles: updateData(
                    styles,
                    values,
                    "items",
                    "infoBox",
                    "borderRadius"
                  ),
                });
              }}
            />
          </>
        )}

        <div style={{ marginTop: "20px" }}></div>

        {styleSl === "styleOne" && (
          <>
            <ShadowControl
              label={__("Image Box Shadow", "b-blocks")}
              value={image?.shadow}
              onChange={(value) => {
                setAttributes({
                  styles: updateData(styles, value, "items", "image", "shadow"),
                });
              }}
              type="box"
              defaultValue={image?.shadow}
            />

            <div style={{ marginTop: "20px" }}></div>

            <BorderBoxControl
              label={__("Image Border", "b-blocks")}
              value={image?.border}
              onChange={(values) => {
                setAttributes({
                  styles: updateData(
                    styles,
                    values,
                    "items",
                    "image",
                    "border"
                  ),
                });
              }}
            />
          </>
        )}

        <div style={{ marginTop: "20px" }}></div>

        {(styleSl === "styleOne" || styleSl === "styleDefault") && (
          <>
            <ColorControl
              label={__("Info Box Background Color", "b-blocks")}
              value={items?.infoBox?.bgColor}
              onChange={(value) => {
                setAttributes({
                  styles: updateData(
                    styles,
                    value,
                    "items",
                    "infoBox",
                    "bgColor"
                  ),
                });
              }}
              defaultColor={items?.infoBox?.bgColor}
            />

            <div style={{ marginTop: "20px" }}></div>

            {styleSl === "styleDefault" && (
              <SelectControl
                label={__("Align Items")}
                value={items?.alignItems}
                options={[
                  { label: __("Left", "b-blocks"), value: "left" },
                  { label: __("Center", "b-blocks"), value: "center" },
                  { label: __("Right", "b-blocks"), value: "right" },
                ]}
                onChange={(value) => {
                  setAttributes({
                    styles: updateData(styles, value, "items", "alignItems"),
                  });
                }}
              />
            )}
          </>
        )}

        <div style={{ marginTop: "20px" }}></div>

        {styleSl === "styleOne" && (
          <>
            <ColorsControl
              label={__("Social Link Color", "b-blocks")}
              value={socialLinks?.normal}
              onChange={(value) => {
                setAttributes({
                  styles: updateData(
                    styles,
                    value,
                    "items",
                    "socialLinks",
                    "normal"
                  ),
                });
              }}
              defaultColor={socialLinks?.normal}
            />

            <div style={{ marginTop: "20px" }}></div>

            <ColorsControl
              label={__("Social Link Hover Color", "b-blocks")}
              value={socialLinks?.hover}
              onChange={(value) => {
                setAttributes({
                  styles: updateData(
                    styles,
                    value,
                    "items",
                    "socialLinks",
                    "hover"
                  ),
                });
              }}
              defaultColor={socialLinks?.hover}
            />

            <div style={{ marginTop: "20px" }}></div>

            <InlineMediaUpload
              label={__("Shape Image", "b-blocks")}
              value={items?.cardBg?.shapeImage}
              onChange={(value) => {
                setAttributes({
                  styles: updateData(
                    styles,
                    value,
                    "items",
                    "cardBg",
                    "shapeImage"
                  ),
                });
              }}
            />

            <div style={{ marginTop: "20px" }}></div>

            <ColorControl
              label={__("Card Background Color", "b-blocks")}
              value={items?.cardBg?.color}
              onChange={(value) => {
                setAttributes({
                  styles: updateData(styles, value, "items", "cardBg", "color"),
                });
              }}
              defaultColor={items?.cardBg?.color}
            />

            {/* Shadow control */}
            <ShadowControl
              label={__("Card Shadow", "b-blocks")}
              value={shadow}
              onChange={(value) => {
                setAttributes({
                  styles: updateData(
                    styles,
                    value,
                    "items",
                    "cardBg",
                    "shadow"
                  ),
                });
              }}
              type="box"
              defaultValue={shadow}
            />

            <div style={{ marginTop: "20px" }}></div>

            {/* Hover Shadow */}
            <ShadowControl
              label={__("Card Hover Shadow", "b-blocks")}
              value={items?.cardBg?.hoverShadow}
              onChange={(value) => {
                setAttributes({
                  styles: updateData(
                    styles,
                    value,
                    "items",
                    "cardBg",
                    "hoverShadow"
                  ),
                });
              }}
              type="box"
              defaultValue={items?.cardBg?.hoverShadow}
            />

            <div style={{ marginTop: "20px" }}></div>

            <SelectControl
              label={__("Align Items")}
              value={items?.alignItems}
              options={[
                { label: __("Left", "b-blocks"), value: "left" },
                { label: __("Center", "b-blocks"), value: "center" },
                { label: __("Right", "b-blocks"), value: "right" },
              ]}
              onChange={(value) => {
                setAttributes({
                  styles: updateData(styles, value, "items", "alignItems"),
                });
              }}
            />
          </>
        )}
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Container", "b-blocks")}
        initialOpen={false}
      >
        <BoxControl
          label={__("Border Radius", "b-blocks")}
          values={container?.borderRadius}
          onChange={(values) =>
            setAttributes({
              styles: updateData(styles, values, "container", "borderRadius"),
            })
          }
        />

        <div style={{ marginTop: "20px" }}></div>

        <BoxControl
          label={__("Padding", "b-blocks")}
          values={container?.padding}
          onChange={(values) => {
            setAttributes({
              styles: updateData(styles, values, "container", "padding"),
            });
          }}
        />

        <div style={{ marginTop: "20px" }}></div>

        <BoxControl
          label={__("Margin", "b-blocks")}
          values={container?.margin}
          onChange={(values) => {
            setAttributes({
              styles: updateData(styles, values, "container", "margin"),
            });
          }}
        />

        <div style={{ marginTop: "20px" }}></div>

        <ColorControl
          label={__("Background Color", "b-blocks")}
          value={container?.bgColor}
          onChange={(value) => {
            setAttributes({
              styles: updateData(styles, value, "container", "bgColor"),
            });
          }}
          defaultColor={container?.bgColor}
        />
      </PanelBody>
    </>
  );
};

export default Style;
