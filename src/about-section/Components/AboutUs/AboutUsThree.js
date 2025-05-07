import React from "react";
import { useSelect } from "@wordpress/data";
import {
  RichText,
  MediaUpload,
  MediaUploadCheck,
} from "@wordpress/block-editor";
import { Button } from "@wordpress/components";

const AboutUsThree = ({ attributes, setAttributes, device }) => {
  const { themeSl } = attributes;
  const { about, styles } = attributes || {};
  const { item, heading } = about || {};
  const { images, title, description, button } = heading || {};
  const { text } = button || {};

  const isEditor = useSelect(
    (select) => select("core/edit-post") !== undefined,
    []
  );

  const imageSet = images?.[device] || images?.desktop;

  // const onSelectImage = (media, index) => {
  //   if (!media || !media.url) return;

  //   setAttributes({
  //     about: {
  //       ...about,
  //       heading: {
  //         ...about.heading,
  //         images: {
  //           ...about.heading.images,
  //           [device]: about?.heading?.images[device].map((img, i) =>
  //             i === index ? media.url : img.url
  //           ),
  //         },
  //       },
  //     },
  //   });
  // };

  const onSelectImage = (media, index) => {
    if (!media || !media.url) return;

    setAttributes({
      about: {
        ...about,
        heading: {
          ...about.heading,
          images: {
            ...about.heading.images,
            [device]: about?.heading?.images[device].map((img, i) =>
              i === index ? { ...img, url: media.url } : img
            ),
          },
        },
      },
    });
  };

  return (
    <div className={`about-us ${themeSl}`}>
      <div className="section-space-top section-space-xsm-bottom bg-body-tertiary">
        <div className="container">
          <div className="row g-4 align-items-center justify-content-between">
            <div className="col-lg-6 col-xxl-5">
              <span className="btn btn-sm align-items-center bg-primary-emphasis hover:bg-primary-emphasis text-primary-subtle hover:text-primary-subtle cursor-default mb-4">
                
                <div
                  className="align-middle btn-icon fs-20 flex-shrink-0"
                  dangerouslySetInnerHTML={{
                    __html: styles?.heading?.button?.icon?.svg,
                  }}
                />

               
                {isEditor ? (
                  <RichText
                    className="d-inline-block flex-grow-1 fw-medium btn-text"
                    tagName="span"
                    placeholder="Enter bagde text"
                    allowedFormats={[
                      "core/bold",
                      "core/italic",
                      "core/link",
                      "core/text-color",
                    ]}
                    keepPlaceholderOnFocus={true}
                    value={text}
                    onChange={(text) => {
                      setAttributes({
                        about: {
                          ...about,
                          heading: { ...heading, button: { ...button, text } },
                        },
                      });
                    }}
                  />
                ) : (
                  <span className="d-inline-block flex-grow-1 fw-medium btn-text">
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
                <h3 className="heading-title">{title}</h3>
              )}

              {isEditor ? (
                <RichText
                  tagName="p"
                  className="heading-description"
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
                <p className="heading-description">{description}</p>
              )}

              {isEditor ? (
                <RichText
                  tagName="h6"
                  className="item-title"
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
                    setAttributes({
                      about: { ...about, item: { ...item, title } },
                    });
                  }}
                />
              ) : (
                <h6 className="item-title">{item?.title}</h6>
              )}

              {isEditor ? (
                <RichText
                  tagName="p"
                  className="mb-0 item-description"
                  placeholder="Enter title"
                  allowedFormats={[
                    "core/bold",
                    "core/italic",
                    "core/link",
                    "core/text-color",
                  ]}
                  keepPlaceholderOnFocus={true}
                  value={item?.description}
                  onChange={(description) => {
                    setAttributes({
                      about: { ...about, item: { ...item, description } },
                    });
                  }}
                />
              ) : (
                <p className="mb-0 item-description">{item?.description}</p>
              )}
            </div>

            {/* Images */}
            {/* <div className="col-lg-6">
              <div className="row g-4">
                <div className="col-sm-7">
                  {isEditor
                    ? imageSet[0]?.url && (
                        <>
                          <MediaUploadCheck>
                            <MediaUpload
                              onSelect={(media) => onSelectImage(media, 0)}
                              allowedTypes={["image"]}
                              value={imageSet[0]?.url}
                              render={({ open }) => (
                                <div
                                  onClick={open}
                                  style={{ cursor: "pointer" }}
                                >
                                  {images?.[device] ? (
                                    <img
                                      className="img-fluid rounded-3 w-100"
                                      src={imageSet[0]?.url}
                                      alt="Selected"
                                      // style={{ maxWidth: "100%", height: "auto" }}
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
                    : imageSet[0]?.url && (
                        <img
                          src={imageSet[0]?.url}
                          alt="about us"
                          className="img-fluid rounded-3 w-100"
                        />
                      )}
                </div>
                <div className="col-sm-5">
                  {isEditor
                    ? imageSet[1]?.url && (
                        <>
                          <MediaUploadCheck>
                            <MediaUpload
                              onSelect={(media) => onSelectImage(media, 1)}
                              allowedTypes={["image"]}
                              value={imageSet[1]?.url}
                              render={({ open }) => (
                                <div
                                  onClick={open}
                                  style={{ cursor: "pointer" }}
                                >
                                  {images?.[device] ? (
                                    <img
                                      className="img-fluid rounded-3 w-100"
                                      src={imageSet[1]?.url}
                                      alt="Selected"
                                      // style={{ maxWidth: "100%", height: "auto" }}
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
                    : imageSet[1]?.url && (
                        <img
                          src={imageSet[1]?.url}
                          alt="about us"
                          className="img-fluid rounded-3 w-100"
                        />
                      )}
                </div>
                <div className="col-sm-5">
                  {isEditor
                    ? imageSet[2]?.url && (
                        <>
                          <MediaUploadCheck>
                            <MediaUpload
                              onSelect={(media) => onSelectImage(media, 2)}
                              allowedTypes={["image"]}
                              value={imageSet[2]?.url}
                              render={({ open }) => (
                                <div
                                  onClick={open}
                                  style={{ cursor: "pointer" }}
                                >
                                  {images?.[device] ? (
                                    <img
                                      className="img-fluid rounded-3 w-100"
                                      src={imageSet[2]?.url}
                                      alt="Selected"
                                      // style={{ maxWidth: "100%", height: "auto" }}
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
                    : imageSet[2]?.url && (
                        <img
                          src={imageSet[2]?.url}
                          alt="about us"
                          className="img-fluid rounded-3 w-100"
                        />
                      )}
                </div>
                <div className="col-sm-7">
                  {isEditor
                    ? imageSet[3]?.url && (
                        <>
                          <MediaUploadCheck>
                            <MediaUpload
                              onSelect={(media) => onSelectImage(media, 3)}
                              allowedTypes={["image"]}
                              value={imageSet[3]?.url}
                              render={({ open }) => (
                                <div
                                  onClick={open}
                                  style={{ cursor: "pointer" }}
                                >
                                  {images?.[device] ? (
                                    <img
                                      className="img-fluid rounded-3 w-100"
                                      src={imageSet[3]?.url}
                                      alt="Selected"
                                      // style={{ maxWidth: "100%", height: "auto" }}
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
                    : imageSet[3]?.url && (
                        <img
                          src={imageSet[3]?.url}
                          alt="about us"
                          className="img-fluid rounded-3 w-100"
                        />
                      )}
                </div>
              </div>
            </div> */}

            <div className="col-lg-6">
              <div className="row g-4">
                {imageSet?.map((image, index) => {
                  const columnClasses = [
                    "col-sm-7",
                    "col-sm-5",
                    "col-sm-5",
                    "col-sm-7",
                  ];
                  const assignedClass =
                    columnClasses[index % columnClasses.length];

                  return (
                    <div key={index} className={assignedClass}>
                      {isEditor
                        ? image?.url && (
                            <MediaUploadCheck>
                              <MediaUpload
                                onSelect={(media) =>
                                  onSelectImage(media, index)
                                }
                                allowedTypes={["image"]}
                                value={image?.url}
                                render={({ open }) => (
                                  <div
                                    onClick={open}
                                    style={{ cursor: "pointer" }}
                                  >
                                    {images?.[device] ? (
                                      <img
                                        className="img-fluid rounded-3 w-100"
                                        src={image?.url}
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
                        : image?.url && (
                            <img
                              src={image?.url}
                              alt="about us"
                              className="img-fluid rounded-3 w-100"
                            />
                          )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsThree;
