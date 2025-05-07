import React from "react";
import { useSelect } from "@wordpress/data";
import {
  RichText,
  MediaUpload,
  MediaUploadCheck,
} from "@wordpress/block-editor";
import { Button } from "@wordpress/components";

const TeamSectionTwo = ({ attributes, setAttributes }) => {
  const isEditor = useSelect(
    (select) => select("core/edit-post") !== undefined,
    []
  );
  const { styleSl, team } = attributes;
  const { heading, items, headingNumberOfPerson } = team;

  return (
    <div className={`team-section ${styleSl}`}>
      <section id="team" className="text-center section">
        <div className="container">
          {isEditor ? (
            <h2>
              <RichText
                tagName="span"
                className="highlight_secondary"
                placeholder="Enter subtitle"
                allowedFormats={[
                  "core/bold",
                  "core/italic",
                  "core/link",
                  "core/text-color",
                ]}
                keepPlaceholderOnFocus={true}
                value={heading?.highlightText}
                onChange={(newHighlightText) => {
                  setAttributes({
                    team: {
                      ...team,
                      heading: {
                        ...heading,
                        highlightText: newHighlightText,
                      },
                    },
                  });
                }}
              />
              &nbsp;
              <RichText
                tagName="span"
                placeholder="Enter subtitle"
                allowedFormats={[
                  "core/bold",
                  "core/italic",
                  "core/link",
                  "core/text-color",
                ]}
                keepPlaceholderOnFocus={true}
                value={heading?.titleText}
                onChange={(newTitleText) => {
                  setAttributes({
                    team: {
                      ...team,
                      heading: {
                        ...heading,
                        titleText: newTitleText,
                      },
                    },
                  });
                }}
              />
            </h2>
          ) : (
            <h2>
              <span className="highlight_secondary">
                {heading?.highlightText}
              </span>
              {heading?.titleText}
            </h2>
          )}

          {isEditor ? (
            <h5 className="team-description">
              <RichText
                tagName="span"
                placeholder="Enter description"
                allowedFormats={[
                  "core/bold",
                  "core/italic",
                  "core/link",
                  "core/text-color",
                ]}
                keepPlaceholderOnFocus={true}
                value={heading?.descriptionLine1}
                onChange={(newDescriptionLine1) => {
                  setAttributes({
                    team: {
                      ...team,
                      heading: {
                        ...heading,
                        descriptionLine1: newDescriptionLine1,
                      },
                    },
                  });
                }}
              />
              <br />
              <RichText
                tagName="span"
                placeholder="Enter description"
                allowedFormats={[
                  "core/bold",
                  "core/italic",
                  "core/link",
                  "core/text-color",
                ]}
                keepPlaceholderOnFocus={true}
                value={heading?.descriptionLine2}
                onChange={(newDescriptionLine2) => {
                  setAttributes({
                    team: {
                      ...team,
                      heading: {
                        ...heading,
                        descriptionLine2: newDescriptionLine2,
                      },
                    },
                  });
                }}
              />
            </h5>
          ) : (
            <h5 className="team-description">
              {heading?.descriptionLine1}
              <br />
              {heading?.descriptionLine2}
            </h5>
          )}

          <div className="hr big_size_hr invisible_hr">
            <i className="fa fa-"></i>
          </div>

          <div className="row">
            {items?.slice(0, headingNumberOfPerson).map((item, index) => (
              <div key={index} className="col-md-4 col-sm-12">
                <div className="team">
                  <div className="team-image">
                    {isEditor ? (
                      <MediaUploadCheck>
                        <MediaUpload
                          onSelect={(media) => {
                            setAttributes({
                              team: {
                                ...team,
                                items: items.map((i, iIndex) =>
                                  iIndex === index
                                    ? { ...i, image: media?.url }
                                    : i
                                ),
                              },
                            });
                          }}
                          allowedTypes={["image"]}
                          value={item?.image}
                          render={({ open }) => (
                            <div
                              onClick={open}
                              style={{
                                cursor: "pointer",
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              {item?.image ? (
                                <img
                                  className="img-circle large img-responsive"
                                  src={item?.image}
                                  alt="Selected"
                                />
                              ) : (
                                <Button variant="primary">Select Image</Button>
                              )}
                            </div>
                          )}
                        />
                      </MediaUploadCheck>
                    ) : (
                      <a
                        style={{
                          cursor: "pointer",
                          display: "flex",
                          justifyContent: "center",
                        }}
                        href={item?.portfoloLink}
                        target={item?.isOpenNewTab ? "_blank" : "_self"}
                        rel="noreferrer noopener"
                      >
                        <img
                          src={item?.image}
                          className="img-circle large img-responsive"
                          alt="image"
                        />
                      </a>
                    )}

                    <div className="team-links">
                      <div className="team-links-list">
                        <a href="#" target="_blank">
                          <i className="fa fa-envelope"></i>
                        </a>
                        <a href="#" target="_blank">
                          <i className="fa fa-facebook"></i>
                        </a>
                        <a href="#" target="_blank">
                          <i className="fa fa-linked"></i>
                        </a>
                        <a href="#" target="_blank">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="team-content">
                    <div className="team-name">
                      {isEditor ? (
                        <a>
                          <RichText
                            tagName="h5"
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
                        </a>
                      ) : (
                        <a
                          href={item?.portfoloLink}
                          target={item?.isOpenNewTab ? "_blank" : "_self"}
                          rel="noreferrer noopener"
                        >
                          <h5>{item?.name}</h5>
                        </a>
                      )}
                    </div>
                    {isEditor ? (
                      <RichText
                        tagName="div"
                        className="team-role"
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
                                iIndex === index ? { ...i, role: newRole } : i
                              ),
                            },
                          });
                        }}
                      />
                    ) : (
                      <div className="team-role">{item?.role}</div>
                    )}

                    <div className="team-description">{item?.description}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="hr invisible_hr">
            <i className="fa fa-"></i>
          </div>

          <div className="row">
            {items?.slice(headingNumberOfPerson).map((item, index) => (
              <div key={index} className="col-md-2 col-sm-4 col-xs-6">
                <div className="team">
                  <div className="team-image">
                    {isEditor ? (
                      <MediaUploadCheck>
                        <MediaUpload
                          onSelect={(media) => {
                            setAttributes({
                              team: {
                                ...team,
                                items: items?.map((i, iIndex) =>
                                  iIndex === index + 3
                                    ? { ...i, image: media?.url }
                                    : i
                                ),
                              },
                            });
                          }}
                          allowedTypes={["image"]}
                          value={item?.image}
                          render={({ open }) => (
                            <div
                              onClick={open}
                              style={{
                                cursor: "pointer",
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              {item?.image ? (
                                <img
                                  className="img-circle small img-responsive"
                                  src={item?.image}
                                  alt="Selected"
                                />
                              ) : (
                                <Button variant="primary">Select Image</Button>
                              )}
                            </div>
                          )}
                        />
                      </MediaUploadCheck>
                    ) : (
                      <a
                        style={{
                          cursor: "pointer",
                          display: "flex",
                          justifyContent: "center",
                        }}
                        href={item?.portfoloLink}
                      >
                        <img
                          src={item?.image}
                          className="img-circle small img-responsive"
                          alt="image"
                        />
                      </a>
                    )}

                    <div className="team-links">
                      <div className="team-links-list">
                        <a href="#" target="_blank">
                          <i className="fa fa-envelope"></i>
                        </a>
                        <a href="#" target="_blank">
                          <i className="fa fa-facebook"></i>
                        </a>
                        <a href="#" target="_blank">
                          <i className="fa fa-linked"></i>
                        </a>
                        <a href="#" target="_blank">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="team-content">
                    <div className="team-name">
                      {/* <h5>{item?.name}</h5> */}
                      {isEditor ? (
                        <RichText
                          tagName="h5"
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
                                  iIndex === index + 3
                                    ? { ...i, name: newName }
                                    : i
                                ),
                              },
                            });
                          }}
                        />
                      ) : (
                        <h5>{item?.name}</h5>
                      )}
                    </div>
                    {isEditor ? (
                      <RichText
                        tagName="div"
                        className="team-role"
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
                                iIndex === index + 3
                                  ? { ...i, role: newRole }
                                  : i
                              ),
                            },
                          });
                        }}
                      />
                    ) : (
                      <div className="team-role">{item?.role}</div>
                    )}
                    <div className="team-description">{item?.description}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="hr big_size_hr invisible_hr">
            <i className="fa fa-"></i>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamSectionTwo;
