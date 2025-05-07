import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  __experimentalInputControl as InputControl,
  __experimentalSpacer as Spacer,
  TextareaControl,
  PanelRow,
  SelectControl,
} from "@wordpress/components";

import {
  Device,
  IconLibrary,
  InlineMediaUpload,
  ItemsPanel,
  Label,
} from "../../../../../../../bpl-tools/Components";

import { updateData } from "../../../../utils/functions";
import AboutUsPanel from "../../AboutUsPanel/AboutUsPanel";
import { themes } from "../../../../utils/options";

const General = ({ attributes, setAttributes, device }) => {
  const { about, themeSl, styles } = attributes;
  const { heading, items, item } = about || {};

  const { image, button, title, description } = heading || {};
  const { text } = button || {};

  const updateTheme = (newTheme) => {
    setAttributes({
      themeSl: newTheme,
      about: themes?.[newTheme]?.about,
      styles: themes?.[newTheme]?.styles,
    });
  };

  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("About Us Styles", "b-blocks")}
        initialOpen={true}
      >
        <SelectControl
          label={__("Choose Style", "b-blocks")}
          value={themeSl}
          options={[
            { label: "Default", value: "themeOne" },
            { label: "Style 1", value: "themeTwo" },
            { label: "Style 2", value: "themeThree" },
            { label: "Style 3", value: "themeFour" },
          ]}
          onChange={updateTheme}
        />
      </PanelBody>

      <>
        <PanelBody
          className="bPlPanelBody"
          title={__("About Heading", "b-blocks")}
          initialOpen={false}
        >
          <IconLibrary
            label={__("Set Badge Icon", "b-blocks")}
            value={button?.icon?.svg}
            onChange={(icon) =>
              setAttributes({
                styles: updateData(
                  styles,
                  icon,
                  "heading",
                  "button",
                  "icon",
                  "svg"
                ),
              })
            }
          />

          <Spacer />

          <div style={{ marginTop: "20px" }}></div>

          <InputControl
            type="text"
            label={__("Badge Text", "b-blocks")}
            value={text}
            onChange={(text) =>
              setAttributes({
                about: {
                  ...about,
                  heading: { ...heading, button: { ...button, text } },
                },
              })
            }
          />

          <div style={{ marginTop: "20px" }}></div>

          <TextareaControl
            type="text"
            label={__("Title", "b-blocks")}
            value={title}
            onChange={(title) => {
              setAttributes({
                about: { ...about, heading: { ...heading, title } },
              });
            }}
            cols={10}
            rows={2}
          />

          <Spacer />

          <div style={{ marginTop: "20px" }}></div>

          {(themeSl === "themeThree" || themeSl === "themeFour") && (
            <TextareaControl
              type="text"
              label={__("Description", "b-blocks")}
              value={description}
              onChange={(description) => {
                setAttributes({
                  about: { ...about, heading: { ...heading, description } },
                });
              }}
              cols={10}
              rows={2}
            />
          )}

          <Spacer />
          <div style={{ marginTop: "20px" }}></div>

          {(themeSl === "themeOne" || themeSl === "themeFour") && (
            <>
              <PanelRow>
                <Label className="">{__("Image", "b-blocks")}</Label>
                <Device />
              </PanelRow>
              <InlineMediaUpload
                value={image?.[device]}
                onChange={(newImage) => {
                  setAttributes({
                    about: {
                      ...about,
                      heading: updateData(heading, newImage, "image", device),
                    },
                  });
                }}
                type="image"
                size="full"
              />
            </>
          )}

          <Spacer />

          <div style={{ marginTop: "16px" }} />

          {/* Image Two And Three */}
          {(themeSl === "themeTwo" || themeSl === "themeThree") && (
            <>
              <PanelRow>
                <Label className="">{__("Image", "b-blocks")}</Label>
                <Device />
              </PanelRow>

              {about?.heading?.images?.[device]?.map((img, index) => (
                <InlineMediaUpload
                  key={index}
                  value={img.url}
                  onChange={(newImage) => {
                    setAttributes({
                      about: {
                        ...about,
                        heading: {
                          ...about.heading,
                          images: {
                            ...about.heading.images,
                            [device]: about.heading.images[device].map(
                              (image, i) =>
                                i === index
                                  ? { ...image, url: newImage }
                                  : image
                            ),
                          },
                        },
                      },
                    });
                  }}
                  type="image"
                  size="full"
                />
              ))}
            </>
          )}
        </PanelBody>

        {(themeSl === "themeOne" ||
          themeSl === "themeTwo" ||
          themeSl === "themeFour") && (
          <PanelBody
            className="bPlPanelBody"
            title={__("About Items", "b-blocks")}
            initialOpen={false}
          >
            <ItemsPanel
              attributes={about}
              setAttributes={(newAbout) =>
                setAttributes({ about: { ...about, ...newAbout } })
              }
              themeSl={themeSl}
              arrKey="items"
              newItem={{
                id: Math.random().toString(36).substring(2, 9),
                image: {
                  url: items?.[0]?.image?.url,
                },
                title: items?.[0]?.title,
                description: items?.[0]?.description,
              }}
              ItemSettings={AboutUsPanel}
              itemLabel="About Item"
              design="sortable"
            />
          </PanelBody>
        )}

        {themeSl === "themeThree" && (
          <PanelBody
            className="bPlPanelBody"
            title={__("About Item", "b-blocks")}
            initialOpen={false}
          >
            <InputControl
              type="text"
              label={__("Title", "b-blocks")}
              value={item?.title}
              onChange={(title) =>
                setAttributes({
                  about: {
                    ...about,
                    item: { ...item, title },
                  },
                })
              }
            />

            <Spacer />

            <div style={{ marginTop: "20px" }}></div>

            <TextareaControl
              type="text"
              label={__("Description", "b-blocks")}
              value={item?.description}
              onChange={(description) =>
                setAttributes({
                  about: {
                    ...about,
                    item: { ...item, description },
                  },
                })
              }
              cols={10}
              rows={2}
            />
          </PanelBody>
        )}
      </>
    </>
  );
};

export default General;
