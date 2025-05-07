import React, { useEffect, useRef } from "react";
import { RichText } from "@wordpress/block-editor";
import { useSelect } from "@wordpress/data";
import { updateData } from "../../utils/functions";
import { MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import { Button } from "@wordpress/components";

const AboutUs = ({ attributes, setAttributes, device }) => {
  const isEditor = useSelect(
    (select) => select("core/edit-post") !== undefined,
    []
  );

  const { about, styles, themeSl } = attributes || {};
  const { items, heading, isOpenLinkInNewTab } = about || {};
  const { image, title, button } = heading || {};
  const { target, text } = button || {};

  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const items = containerRef.current.querySelectorAll(".about-wrapper");

      items.forEach((item) => {
        item.classList.remove("no-after", "item-one", "item-two");
      });

      if (items.length > 1) {
        if (items.length % 2 === 0) {
          items[items.length - 1].classList.add("no-after");
          items[items.length - 2].classList.add("no-after");
        } else {
          items[items.length - 1].classList.add("no-after");
        }

        items.forEach((item, index) => {
          if (index % 2 === 0 && items[index + 1]) {
            items[index].classList.add("item-one");
            items[index + 1].classList.add("item-two");
          }
        });
      }
    }
  }, [items]);

  const hasAnchorLink = (description) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = description;
    return tempDiv.querySelector("a") !== null;
  };

  const updatedisOpenLinkInNewTab = { ...isOpenLinkInNewTab };
  about?.items?.forEach((item) => {
    if (
      hasAnchorLink(item.description) &&
      !(item.id in updatedisOpenLinkInNewTab)
    ) {
      updatedisOpenLinkInNewTab[item.id] = false;
    }
  });

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
      <div className="about-2 section-space-y">
        <div className="section-space-md-bottom">
          <div className="container">
            <div className="row g-4 align-items-md-end justify-content-xl-between">
              <div className="col-md-7 col-xl-6 about-heading">
                <span className="btn btn-primary btn-sm align-items-center cursor-default mb-4">
                  {/* Badge Icon */}
                  {styles?.heading?.button?.icon?.svg ? (
                    <div
                      className="btn-icon"
                      dangerouslySetInnerHTML={{
                        __html: styles?.heading?.button?.icon?.svg,
                      }}
                    />
                  ) : (
                    <div
                      className="btn-icon align-middle fs-20 flex-shrink-0"
                      dangerouslySetInnerHTML={{
                        __html: styles?.heading?.button?.icon?.svg,
                      }}
                    />
                  )}

                  {/* Badge Text */}
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
                          about: { ...about, heading: { ...heading, btn } },
                        });
                      }}
                    />
                  ) : (
                    <a
                      // href={url || "#"}
                      target={target ? "_blank" : "_self"}
                      rel={target ? "noopener noreferrer" : ""}
                      className="d-inline-block btn-text flex-grow-1 fw-medium"
                    >
                      {text}
                    </a>
                  )}
                </span>

                {/* Heading Title */}
                {isEditor ? (
                  <RichText
                    tagName="h3"
                    className="mb-0 about-title"
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
                  <h3 className="mb-0 about-title">{title}</h3>
                )}
              </div>

              {/* Heading Image */}
              <div className="col-md-5 heading-image">
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
                                    className="img-fluid d-xl-none"
                                    src={image?.[device]}
                                    alt="Selected"
                                  />
                                ) : (
                                  <Button variant="primary">
                                    Select Image
                                  </Button>
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
                        className="img-fluid d-xl-none"
                      />
                    )}

                <div className="d-none d-xl-inline-block position-relative z-1">
                  {isEditor
                    ? image?.[device] && (
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
                                  <Button variant="primary">
                                    Select Image
                                  </Button>
                                )}
                              </div>
                            )}
                          />
                        </MediaUploadCheck>
                      )
                    : image?.desktop && (
                        <img
                          src={image?.desktop}
                          alt="about us"
                          className="img-fluid"
                        />
                      )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div
            className="row g-4 about-2__separator about-item-section"
            ref={containerRef}
          >
            {items?.map((item, index) => {
              const targetValue = isOpenLinkInNewTab[item.id]
                ? "_blank"
                : "_self";

              const hasLink = hasAnchorLink(item.description);

              const onSelectImage = (media) => {
                setAttributes({
                  about: {
                    ...about,
                    items: updateData(items, media.url, index, "image", "url"),
                  },
                });
              };

              return (
                <div key={index} className="col-lg-6 about-wrapper">
                  <div className="d-flex about-body flex-column flex-md-row gap-4 gap-xl-8 align-items-md-center px-xl-10 px-xxl-15 py-xl-10">
                    <div className="flex-shrink-0 body-icons">
                      {isEditor ? (
                        <MediaUploadCheck>
                          <MediaUpload
                            onSelect={onSelectImage}
                            allowedTypes={["image"]}
                            value={item.image?.url}
                            render={({ open }) => (
                              <div onClick={open} style={{ cursor: "pointer" }}>
                                {item.image?.url ? (
                                  <img
                                    className="img-fluid"
                                    src={item.image?.url}
                                    alt="Selected"
                                    style={{ maxWidth: "100%", height: "auto" }}
                                  />
                                ) : (
                                  <Button variant="primary">
                                    Select Image
                                  </Button>
                                )}
                              </div>
                            )}
                          />
                        </MediaUploadCheck>
                      ) : (
                        <img
                          src={item.image?.url}
                          alt="about item"
                          className="img-fluid"
                        />
                      )}
                    </div>

                    <div className="flex-grow-1 body-content">
                      {isEditor ? (
                        <RichText
                          tagName="h6"
                          className="body-title"
                          value={item.title}
                          onChange={(title) => {
                            setAttributes({
                              about: {
                                ...about,
                                items: updateData(items, title, index, "title"),
                              },
                            });
                          }}
                          placeholder="Enter title"
                          keepPlaceholderOnFocus={true}
                          allowedFormats={[
                            "core/bold",
                            "core/italic",
                            "core/link",
                            "core/text-color",
                          ]}
                        />
                      ) : (
                        <h6 className="body-title">{item.title}</h6>
                      )}

                      {isEditor ? (
                        <RichText
                          className="mb-0 body-description"
                          placeholder="Enter description"
                          allowedFormats={[
                            "core/bold",
                            "core/italic",
                            "core/link",
                            "core/text-color",
                          ]}
                          keepPlaceholderOnFocus={true}
                          tagName="p"
                          value={item.description}
                          onChange={(description) => {
                            setAttributes({
                              about: {
                                ...about,
                                items: updateData(
                                  items,
                                  description,
                                  index,
                                  "description"
                                ),
                              },
                            });
                          }}
                        />
                      ) : (
                        <div
                          className="mb-0 body-description"
                          dangerouslySetInnerHTML={{
                            __html: hasLink
                              ? item.description.replace(
                                  /<a /g,
                                  `<a rel="noopener noreferrer" target="${targetValue}" `
                                )
                              : item.description,
                          }}
                        />
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
