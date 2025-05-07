import React from "react";
import { useSelect } from "@wordpress/data";
import {
  RichText,
  MediaUpload,
  MediaUploadCheck,
} from "@wordpress/block-editor";
import { Button } from "@wordpress/components";

const AboutUsFour = ({ attributes, setAttributes, device }) => {
  const { about, styles, themeSl } = attributes || {};
  const { items, heading } = about || {};
  const { image, title, description, button } = heading || {};
  const { text } = button || {};

  const isEditor = useSelect(
    (select) => select("core/edit-post") !== undefined,
    []
  );

  const onSelectImage = (media) => {
    setAttributes({
      about: {
        ...about,
        heading: {
          ...heading,
          image: {
            ...heading.image,
            [device]: media.url,
          },
        },
      },
    });
  };

  return (
    <div className={`about-us ${themeSl}`}>
      <div
        className={`section-space-top section-space-xsm-bottom bg-body-tertiary`}
      >
        <div className="container">
          <div className="row g-4 justify-content-between align-items-center">
            <div className="col-lg-5">
              {isEditor
                ? image?.[device] && (
                    <>
                      <MediaUploadCheck>
                        <MediaUpload
                          onSelect={onSelectImage}
                          allowedTypes={["image"]}
                          value={image?.[device]}
                          render={({ open }) => (
                            <div onClick={open} style={{ cursor: "pointer" }}>
                              {image?.[device] ? (
                                <img
                                  className="img-fluid"
                                  src={image?.[device]}
                                  alt="Selected"
                                />
                              ) : (
                                <Button variant="primary">Select Image</Button>
                              )}
                            </div>
                          )}
                        />
                      </MediaUploadCheck>
                    </>
                  )
                : image?.mobile && (
                    <img
                      src={image?.mobile}
                      alt="about us"
                      className="img-fluid "
                    />
                  )}
            </div>
            <div className="col-lg-7 col-xxl-6">
              <span className="btn btn-sm align-items-center bg-primary-emphasis hover:bg-primary-emphasis text-primary-subtle hover:text-primary-subtle cursor-default mb-4">
                <span
                  className="align-middle btn-icon fs-20 flex-shrink-0"
                  dangerouslySetInnerHTML={{
                    __html: styles?.heading?.button?.icon?.svg,
                  }}
                />

                {isEditor ? (
                  <RichText
                    className="d-inline-block btn-text flex-grow-1 fw-medium"
                    tagName="span"
                    placeholder="Enter badge text"
                    allowedFormats={[
                      "core/bold",
                      "core/italic",
                      "core/link",
                      "core/text-color",
                    ]}
                    keepPlaceholderOnFocus={true}
                    value={text}
                    onChange={(btn) => {
                      setAttributes({
                        about: {
                          ...about,
                          heading: {
                            ...heading,
                            button: { ...button, text: btn },
                          },
                        },
                      });
                    }}
                  />
                ) : (
                  <span className="d-inline-block btn-text flex-grow-1 fw-medium">
                    {text}
                  </span>
                )}
              </span>
              {isEditor ? (
                <RichText
                  tagName="h3"
                  className="heading-title"
                  placeholder="Enter title"
                  allowedFormats={[
                    "core/bold",
                    "core/italic",
                    "core/link",
                    "core/text-color",
                  ]}
                  keepPlaceholderOnFocus={true}
                  value={title}
                  onChange={(title) => {
                    setAttributes({
                      about: { ...about, heading: { ...heading, title } },
                    });
                  }}
                />
              ) : (
                <h3>{title}</h3>
              )}

              {/* Description */}
              {isEditor ? (
                <RichText
                  tagName="p"
                  className="heading-description mb-6"
                  placeholder="Enter title"
                  allowedFormats={[
                    "core/bold",
                    "core/italic",
                    "core/link",
                    "core/text-color",
                  ]}
                  keepPlaceholderOnFocus={true}
                  value={description}
                  onChange={(description) => {
                    setAttributes({
                      about: { ...about, heading: { ...heading, description } },
                    });
                  }}
                />
              ) : (
                <p className="mb-6">{description}</p>
              )}

              <div className="row g-4">
                {items?.map((item, index) => (
                  <div key={index} className="col-md-6">
                    <ul className="list gap-5">
                      <li className="d-flex align-items-center gap-4">
                        <span
                          style={{ position: "relative" }}
                          className="btn btn-icon btn-xsm btn-primary-subtle rounded-circle cursor-default flex-shrink-0"
                        >
                          <div
                            className="item-icon"
                            style={{
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -50%)",
                              width: "24px",
                              height: "24px",
                            }}
                            dangerouslySetInnerHTML={{
                              __html: item?.image?.url,
                            }}
                          />
                        </span>

                        {isEditor ? (
                          <>
                            <RichText
                              tagName="h6"
                              className="mb-0 item-title"
                              placeholder="Enter title"
                              allowedFormats={[
                                "core/bold",
                                "core/italic",
                                "core/link",
                                "core/text-color",
                              ]}
                              keepPlaceholderOnFocus={true}
                              value={item?.title}
                              onChange={(title) => {
                                const updatedItems = [...items];
                                updatedItems[index] = {
                                  ...updatedItems[index],
                                  title,
                                };
                                setAttributes({
                                  about: {
                                    ...about,
                                    items: updatedItems,
                                  },
                                });
                              }}
                            />
                            &nbsp;
                            <RichText
                              tagName="span"
                              className=" fs-16 text-body fw-normal item-description"
                              placeholder="Enter description"
                              allowedFormats={[
                                "core/bold",
                                "core/italic",
                                "core/link",
                                "core/text-color",
                              ]}
                              keepPlaceholderOnFocus={true}
                              value={item?.description}
                              onChange={(description) => {
                                const updatedItems = [...items];
                                updatedItems[index] = {
                                  ...updatedItems[index],
                                  description,
                                };
                                setAttributes({
                                  about: {
                                    ...about,
                                    items: updatedItems,
                                  },
                                });
                              }}
                            />
                          </>
                        ) : (
                          <h6 className="mb-0 item-title">
                            {item?.title} &nbsp;
                            <span className="fs-16 item-description text-body fw-normal">
                              {item?.description}
                            </span>
                          </h6>
                        )}
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsFour;
