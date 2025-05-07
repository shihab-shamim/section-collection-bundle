import { RichText } from "@wordpress/block-editor";
import { useSelect } from "@wordpress/data";
import { updateData } from "../../utils/functions";
import { MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import { Button } from "@wordpress/components";

const AboutUsTwo = ({ attributes, setAttributes, device }) => {
  const { themeSl } = attributes;

  const { about, styles } = attributes || {};
  const { items, heading, isOpenLinkInNewTab } = about || {};
  const { images, title, button } = heading || {};
  const { text } = button || {};

  const isEditor = useSelect(
    (select) => select("core/edit-post") !== undefined,
    []
  );

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

  const imageSet = images?.[device] || images?.desktop;

  const onSelectImage = (media, index) => {
    if (!media || !media.url) return;

    const updatedImages = Array.isArray(about?.heading?.images?.[device])
      ? about.heading.images[device].map((img, i) =>
          i === index ? { ...img, url: media.url } : img
        )
      : [{ url: media.url }];

    setAttributes({
      about: {
        ...about,
        heading: {
          ...about.heading,
          images: {
            ...about.heading.images,
            [device]: updatedImages,
          },
        },
      },
    });
  };

  return (
    <div className={`about-us ${themeSl}`}>
      <div className="bg-body p-4 p-md-12 rounded-4">
        <div className="row g-4 align-items-center">
          <div className="col-lg-5 col-xl-6">
            <div className="row g-4">
              <div className="col-sm-6">
                {isEditor &&
                Array.isArray(imageSet) &&
                imageSet.length > 0 &&
                imageSet[0]?.url ? (
                  <>
                    <MediaUploadCheck>
                      <MediaUpload
                        onSelect={(media) => onSelectImage(media, 0)}
                        allowedTypes={["image"]}
                        value={imageSet[0]?.url}
                        render={({ open }) => (
                          <div onClick={open} style={{ cursor: "pointer" }}>
                            {imageSet[0]?.url ? (
                              <img
                                className="img-fluid"
                                src={imageSet[0].url}
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
                ) : Array.isArray(imageSet) &&
                  imageSet.length > 0 &&
                  imageSet[0]?.url ? (
                  <img
                    src={imageSet[0]?.url}
                    alt="about us"
                    className="img-fluid"
                  />
                ) : (
                  <Button variant="primary">Select Image</Button>
                )}
              </div>
              <div className="col-sm-6">
                {isEditor &&
                Array.isArray(imageSet) &&
                imageSet.length > 0 &&
                imageSet[1]?.url ? (
                  <>
                    <MediaUploadCheck>
                      <MediaUpload
                        onSelect={(media) => onSelectImage(media, 1)}
                        allowedTypes={["image"]}
                        value={imageSet[1]?.url}
                        render={({ open }) => (
                          <div onClick={open} style={{ cursor: "pointer" }}>
                            {imageSet[1]?.url ? (
                              <img
                                className="img-fluid"
                                src={imageSet[1].url}
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
                ) : Array.isArray(imageSet) &&
                  imageSet.length > 1 &&
                  imageSet[1]?.url ? (
                  <img
                    src={imageSet[1]?.url}
                    alt="about us"
                    className="img-fluid"
                  />
                ) : (
                  <Button variant="primary">Select Image</Button>
                )}
              </div>
              <div className="col-12">
                {isEditor &&
                Array.isArray(imageSet) &&
                imageSet.length > 0 &&
                imageSet[2]?.url ? (
                  <>
                    <MediaUploadCheck>
                      <MediaUpload
                        onSelect={(media) => onSelectImage(media, 2)}
                        allowedTypes={["image"]}
                        value={imageSet[2]?.url}
                        render={({ open }) => (
                          <div onClick={open} style={{ cursor: "pointer" }}>
                            {imageSet[2]?.url ? (
                              <img
                                className="img-fluid"
                                src={imageSet[2].url}
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
                ) : Array.isArray(imageSet) &&
                  imageSet.length > 0 &&
                  imageSet[2]?.url ? (
                  <img
                    src={imageSet[2]?.url}
                    alt="about us"
                    className="img-fluid"
                  />
                ) : (
                  <Button variant="primary">Select Image</Button>
                )}
              </div>
            </div>
          </div>

          <div className="col-lg-7 col-xl-6">
            <span className="badge text-bg-primary">
              <span
                className="fs-16 badge-icon flex-shrink-0"
                dangerouslySetInnerHTML={{
                  __html: styles?.heading?.button?.icon?.svg,
                }}
              />

              {isEditor ? (
                <RichText
                  className="d-inline-block badge-text"
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
                        heading: {
                          ...heading,
                          button: { ...button, text },
                        },
                      },
                    });
                  }}
                />
              ) : (
                <span className="d-inline-block badge-text">{text}</span>
              )}
            </span>

            {isEditor ? (
              <RichText
                tagName="h4"
                className="mt-2 mb-12 about-title"
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
              <h4 className="mt-2 mb-12">{title}</h4>
            )}

            <div className="row g-4">
              {items?.map((item, index) => {
                const targetValue = isOpenLinkInNewTab[item.id]
                  ? "_blank"
                  : "_self";

                const hasLink = hasAnchorLink(item.description);

                return (
                  <div key={index} className="col-sm-6">
                    <span
                      className="fs-32 lh-1 mb-3 item-icon"
                      dangerouslySetInnerHTML={{
                        __html: item?.image?.url,
                      }}
                    />

                    {isEditor ? (
                      <RichText
                        tagName="h6"
                        className="fs-20 mb-2 item-title"
                        value={item?.title}
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
                      <h6 className="fs-20 mb-2 item-title">{item?.title}</h6>
                    )}

                    {isEditor ? (
                      <RichText
                        className="mb-0 fs-14 item-description"
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
                        className="mb-0 fs-14 item-description"
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
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsTwo;
