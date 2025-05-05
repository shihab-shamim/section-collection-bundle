import React from "react";
import { useSelect } from "@wordpress/data";
import {
  RichText,
  MediaUpload,
  MediaUploadCheck,
} from "@wordpress/block-editor";
import { Button } from "@wordpress/components";

const TeamSectionDefault = ({ attributes, setAttributes }) => {
  const isEditor = useSelect(
    (select) => select("core/edit-post") !== undefined,
    []
  );
  const { styleSl, team } = attributes;
  const { items, heading } = team;

  return (
    <>
      <div
        className={`section-space-top team-section ${styleSl} section-space-xsm-bottom`}
      >
        <div className="bg-body-tertiary">
          <div className="section-space-md-bottom">
            <div className="container">
              <div className="row g-4 justify-content-center">
                <div className="col-md-10 col-lg-8">
                  <div className="text-center">
                    <span className="btn btn-sm align-items-center bg-primary-emphasis hover:bg-primary-emphasis text-primary-subtle hover:text-primary-subtle cursor-default mb-4">
                      <span
                        className="align-middle fs-20 flex-shrink-0"
                        dangerouslySetInnerHTML={{
                          __html: heading?.icon,
                        }}
                      />
                      {isEditor ? (
                        <RichText
                          className="d-inline-block flex-grow-1 fw-medium subtitleText"
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
                        <span className="d-inline-block flex-grow-1 fw-medium subtitle">
                          {heading?.subtitle}
                        </span>
                      )}
                    </span>

                    {isEditor ? (
                      <RichText
                        className="mb-0 mx-auto title"
                        tagName="h3"
                        placeholder="Enter title"
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
                      <h3 className="mb-0 mx-auto title">{heading?.title}</h3>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row g-4">
              {items?.map((item, index) => {
                return (
                  <>
                    <div key={index} className="col-sm-6 col-lg-4 col-xl-3">
                      <div className="team-member-1">
                        <div className="rounded overflow-hidden">
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
                                  <div
                                    onClick={open}
                                    style={{ cursor: "pointer" }}
                                  >
                                    {item?.image ? (
                                      <img
                                        className="w-100 h-100 object-fit-cover transition team-member-1__img"
                                        src={item?.image}
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
                          ) : (
                            <img
                              src={item?.image}
                              alt="image"
                              className="w-100 h-100 object-fit-cover transition team-member-1__img"
                            />
                          )}
                        </div>
                        <div className="team-member-1__content px-2 px-sm-4 px-xl-2 px-xxl-4 z-1 position-relative">
                          <div className="d-flex align-items-center gap-3 rounded bg-light-subtle p-4 px-sm-6 px-lg-4 shadow-sm">
                            <div className="flex-grow-1">
                              {isEditor ? (
                                <RichText
                                  tagName="a"
                                  className="link d-block fs-18 fw-bold mb-1 text-heading hover:text-primary name"
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
                                          iIndex === index
                                            ? { ...i, name: newName }
                                            : i
                                        ),
                                      },
                                    });
                                  }}
                                />
                              ) : (
                                <a
                                  href={item?.portfoloLink}
                                  rel="noreferrer noopener"
                                  target={
                                    item?.isOpenNewTab ? "_blank" : "_self"
                                  }
                                  className="link d-block fs-18 fw-bold mb-1 text-heading hover:text-primary name"
                                >
                                  {item?.name}
                                </a>
                              )}

                              {isEditor ? (
                                <RichText
                                  tagName="p"
                                  className="mb-0 fs-14 role"
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
                                            ? { ...i, role: newRole }
                                            : i
                                        ),
                                      },
                                    });
                                  }}
                                />
                              ) : (
                                <p className="mb-0 fs-14 role">{item?.role}</p>
                              )}
                            </div>

                            {isEditor ? (
                              <div className="flex-shrink-0">
                                <a
                                  // href={item?.portfoloLink}
                                  // rel="noreferrer noopener"
                                  // target={isOpenNewTab ? "_blank" : "_self"}
                                  className="btn btn-sm btn-icon btn-primary-subtle rounded-circle"
                                >
                                  <div
                                    className="d-flex align-items-center link-icon justify-content-center"
                                    dangerouslySetInnerHTML={{
                                      __html: item?.icon,
                                    }}
                                  />
                                </a>
                              </div>
                            ) : (
                              <div className="flex-shrink-0">
                                <a
                                  href={item?.portfoloLink}
                                  rel="noreferrer noopener"
                                  target={
                                    item?.isOpenNewTab ? "_blank" : "_self"
                                  }
                                  className="btn btn-sm btn-icon btn-primary-subtle rounded-circle"
                                >
                                  <div
                                    className="d-flex align-items-center link-icon justify-content-center"
                                    dangerouslySetInnerHTML={{
                                      __html: item?.icon,
                                    }}
                                  />
                                </a>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamSectionDefault;
