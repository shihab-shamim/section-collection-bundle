import React from "react";
import { useSelect } from "@wordpress/data";
import {
  RichText,
  MediaUpload,
  MediaUploadCheck,
} from "@wordpress/block-editor";
import { Button } from "@wordpress/components";

const TeamSectionOne = ({ attributes, setAttributes }) => {
  const isEditor = useSelect(
    (select) => select("core/edit-post") !== undefined,
    []
  );
  const { styleSl, team } = attributes;
  const { heading, items } = team;

  return (
    <div className={`team-section ${styleSl}`}>
      <section className="speakers-section-three">
        <div className="container">
          <div className="sec-title text-center">
            {isEditor ? (
              <RichText
                className="title"
                tagName="span"
                placeholder="Enter subtitle"
                allowedFormats={[
                  "core/bold",
                  "core/italic",
                  "core/link",
                  "core/text-color",
                ]}
                keepPlaceholderOnFocus={true}
                value={heading?.subtitle}
                onChange={(newSubTitle) => {
                  setAttributes({
                    team: {
                      ...team,
                      heading: {
                        ...heading,
                        subtitle: newSubTitle,
                      },
                    },
                  });
                }}
              />
            ) : (
              <span className="title">{heading?.subtitle}</span>
            )}

            {isEditor ? (
              <RichText
                tagName="h2"
                placeholder="Enter subtitle"
                allowedFormats={[
                  "core/bold",
                  "core/italic",
                  "core/link",
                  "core/text-color",
                ]}
                keepPlaceholderOnFocus={true}
                value={heading?.title}
                onChange={(newTitle) => {
                  setAttributes({
                    team: {
                      ...team,
                      heading: {
                        ...heading,
                        title: newTitle,
                      },
                    },
                  });
                }}
              />
            ) : (
              <h2>{heading?.title}</h2>
            )}
          </div>
          <div className="row">
            {items?.map((item, index) => (
              <div
                key={index}
                className="speaker-block-three col-xl-3 col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
              >
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      {isEditor && items?.length > 0 ? (
                        <MediaUploadCheck>
                          <MediaUpload
                            onSelect={(media) =>
                              setAttributes({
                                team: {
                                  ...team,
                                  items: items.map((item, i) =>
                                    i === index
                                      ? { ...item, image: media?.url }
                                      : item
                                  ),
                                },
                              })
                            }
                            allowedTypes={["image"]}
                            value={item?.image}
                            render={({ open }) => (
                              <div onClick={open} style={{ cursor: "pointer" }}>
                                {item?.image ? (
                                  <img src={item?.image} alt="Selected" />
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
                        <a
                          href={item?.portfoloLink}
                          rel="noreferrer noopener"
                          target={item?.isOpenNewTab ? "_blank" : "_self"}
                        >
                          <img src={item?.image} alt="image" />
                        </a>
                      )}
                    </figure>
                  </div>
                  <div className="info-box">
                    <h4 className="name">
                      {isEditor ? (
                        <RichText
                          tagName="a"
                          className="link d-block fs-18 fw-bold mb-1 text-heading hover:text-primary"
                          placeholder="Enter Name"
                          allowedFormats={[
                            "core/bold",
                            "core/italic",
                            "core/link",
                            "core/text-color",
                          ]}
                          keepPlaceholderOnFocus={true}
                          value={item?.name}
                          onChange={(newName) => {
                            setAttributes({
                              team: {
                                ...team,
                                items: items.map((i, iIndex) =>
                                  iIndex === index ? { ...i, name: newName } : i
                                ),
                              },
                            });
                          }}
                        />
                      ) : (
                        <a
                          href={item?.portfoloLink}
                          rel="noreferrer noopener"
                          target={item?.isOpenNewTab ? "_blank" : "_self"}
                        >
                          {item?.name}
                        </a>
                      )}
                    </h4>

                    {isEditor ? (
                      <RichText
                        tagName="span"
                        className="designation"
                        placeholder="Enter Role"
                        allowedFormats={[
                          "core/bold",
                          "core/italic",
                          "core/link",
                          "core/text-color",
                        ]}
                        keepPlaceholderOnFocus={true}
                        value={item?.role}
                        onChange={(newRole) => {
                          setAttributes({
                            team: {
                              ...team,
                              items: items.map((i, iIndex) =>
                                iIndex === index
                                  ? {
                                      ...i,
                                      role: newRole,
                                    }
                                  : i
                              ),
                            },
                          });
                        }}
                      />
                    ) : (
                      <span className="designation">{item?.role}</span>
                    )}
                  </div>

                  <div className="social-box">
                    <ul className="social-links social-icon-colored">
                      {item?.socialLinks?.map((social, index) => (
                        <li key={index}>
                          {isEditor ? (
                            <a style={{ cursor: "pointer" }}>
                              <div
                                className="social-icon"
                                dangerouslySetInnerHTML={{
                                  __html: social?.platform,
                                }}
                              />
                            </a>
                          ) : (
                            <a
                              href={social?.url}
                              target={
                                item?.isSocialLinksNewTab ? "_blank" : "_self"
                              }
                              rel="noreferrer noopener"
                            >
                              <div
                                className="social-icon"
                                dangerouslySetInnerHTML={{
                                  __html: social?.platform,
                                }}
                              />
                            </a>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamSectionOne;
