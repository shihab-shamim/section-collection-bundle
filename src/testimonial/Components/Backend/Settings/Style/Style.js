import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  __experimentalBoxControl as BoxControl,
  __experimentalBorderControl as BorderControl,
  __experimentalUnitControl as UnitControl,
} from "@wordpress/components";
import {
  Background,
  ColorControl,
  ShadowControl,
  Typography,
} from "../../../../../../../bpl-tools/Components";
import { updateData } from "../../../../utils/functions";

const Style = ({ attributes, setAttributes }) => {
  const { styles, layout, selectedTheme } = attributes || {};
  const { section, testimonial } = styles || {};
  const { bg, name, designation, content, image, tags } = testimonial || {};

  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Section Styles", "b-blocks")}
        initialOpen={true}
      >
        <Background
          label={__("Background", "b-blocks")}
          isImage={false}
          value={section.background}
          onChange={(value) =>
            setAttributes({
              styles: updateData(styles, value, "section", "background"),
            })
          }
        />

        {layout.sectionHeader.status && (
          <>
            <ColorControl
              label={__("Title Color", "b-blocks")}
              value={section.title.color}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    value,
                    "section",
                    "title",
                    "color"
                  ),
                })
              }
            />

            <Typography
              label={__("Title Typo", "b-blocks")}
              value={section.title.typo}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "section", "title", "typo"),
                })
              }
            />
            <ColorControl
              label={__("Sub Title Color", "b-blocks")}
              value={section.subtitle.color}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    value,
                    "section",
                    "subtitle",
                    "color"
                  ),
                })
              }
            />

            <Typography
              label={__("Sub Title Typo", "b-blocks")}
              value={section.subtitle.typo}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    value,
                    "section",
                    "subtitle",
                    "typo"
                  ),
                })
              }
            />
          </>
        )}
      </PanelBody>

      {/*---------------------------------- Testimonial -----------------------------------------*/}

      <PanelBody
        className="bPlPanelBody"
        title={__("Testimonial", "b-blocks")}
        initialOpen={false}
      >
        <Background
          label={__("Background", "b-blocks")}
          isImage={selectedTheme === "theme3"}
          value={bg}
          onChange={(value) =>
            setAttributes({
              styles: updateData(styles, value, "testimonial", "bg"),
            })
          }
        />

        <ShadowControl
          value={layout.testimonialBody.shadow}
          onChange={(value) =>
            setAttributes({
              layout: updateData(layout, value, "testimonialBody", "shadow"),
            })
          }
        />

        <ColorControl
          label={__("Name Color", "b-blocks")}
          value={name.color}
          onChange={(value) =>
            setAttributes({
              styles: updateData(styles, value, "testimonial", "name", "color"),
            })
          }
        />

        <Typography
          label={__("Name Typo", "b-blocks")}
          value={name.typo}
          onChange={(value) =>
            setAttributes({
              styles: updateData(styles, value, "testimonial", "name", "typo"),
            })
          }
        />

        <ColorControl
          label={__("Designation Color", "b-blocks")}
          value={designation.color}
          onChange={(value) =>
            setAttributes({
              styles: updateData(
                styles,
                value,
                "testimonial",
                "designation",
                "color"
              ),
            })
          }
        />

        <Typography
          label={__("Designation Typo", "b-blocks")}
          value={designation.typo}
          onChange={(value) =>
            setAttributes({
              styles: updateData(
                styles,
                value,
                "testimonial",
                "designation",
                "typo"
              ),
            })
          }
        />

        <ColorControl
          label={__("content Color", "b-blocks")}
          value={content.color}
          onChange={(value) =>
            setAttributes({
              styles: updateData(
                styles,
                value,
                "testimonial",
                "content",
                "color"
              ),
            })
          }
        />

        <Typography
          label={__("Content Typo", "b-blocks")}
          value={content.typo}
          onChange={(value) =>
            setAttributes({
              styles: updateData(
                styles,
                value,
                "testimonial",
                "content",
                "typo"
              ),
            })
          }
        />

        {/* only for theme 1 */}

        {selectedTheme === "theme1" && (
          <>
            <ColorControl
              label={__("Tags Color", "b-blocks")}
              value={tags.color}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    value,
                    "testimonial",
                    "tags",
                    "color"
                  ),
                })
              }
            />

            <Typography
              label={__("Tags Typo", "b-blocks")}
              value={tags.typo}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    value,
                    "testimonial",
                    "tags",
                    "typo"
                  ),
                })
              }
            />
          </>
        )}
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Image", "b-blocks")}
        initialOpen={false}
      >
        <UnitControl
          className="mt5"
          label={__("Height", "b-block")}
          step={1}
          shiftStep={5}
          value={image.height}
          onChange={(value) =>
            setAttributes({
              styles: updateData(
                styles,
                value,
                "testimonial",
                "image",
                "height"
              ),
            })
          }
        />
        <UnitControl
          className="mt5"
          label={__("Width", "b-block")}
          step={1}
          shiftStep={5}
          value={image.width}
          onChange={(value) =>
            setAttributes({
              styles: updateData(
                styles,
                value,
                "testimonial",
                "image",
                "width"
              ),
            })
          }
        />
        <BorderControl
          className="mt5"
          label={__("Border", "b-blocks")}
          onChange={(value) =>
            setAttributes({
              styles: updateData(
                styles,
                value,
                "testimonial",
                "image",
                "border"
              ),
            })
          }
          value={image.border}
        />

        <BoxControl
          className="mt10"
          values={image.BorderRadius}
          // values={"10px"}
          label={__("Border Radius", "b-block")}
          onChange={(value) =>
            setAttributes({
              styles: updateData(
                styles,
                value,
                "testimonial",
                "image",
                "BorderRadius"
              ),
            })
          }
        />
      </PanelBody>

      {/* <PanelBody
      
        className="bPlPanelBody"
        title={__("Content", "b-blocks")}
        initialOpen={false}
      >
      </PanelBody>
      <PanelBody
      
        className="bPlPanelBody"
        title={__("Image", "b-blocks")}
        initialOpen={false}
      >
      </PanelBody>
      <PanelBody
        className="bPlPanelBody"
        title={__("Tags", "b-blocks")}
        initialOpen={false}
      >
      </PanelBody> */}
    </>
  );
};

export default Style;
