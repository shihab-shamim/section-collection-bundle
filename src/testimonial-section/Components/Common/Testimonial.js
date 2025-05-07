import React from "react";
import { RichText } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import { updateData } from "../../utils/functions";
import { checkMarkIcon } from "../../utils/icons";

const Testimonial = ({ attributes, setAttributes, from }) => {
  const { testimonials, layout, options } = attributes || {};

  const { sectionHeader, badge } = layout || {};

  return (
    <div className="mainCont">
      <div className="testimonial-plugin">
        {sectionHeader.status &&
          (from === "server" ? (
            <div className="section-title">
              {badge.status && (
                <div className="badge">
                  <span className="checkIcon">{checkMarkIcon}</span>
                  <RichText
                    className="text"
                    tagName="span"
                    allowedFormats={[]}
                    value={badge.text}
                    onChange={(value) =>
                      setAttributes({
                        layout: updateData(layout, value, "badge", "text"),
                      })
                    }
                    placeholder={__("Badge...")}
                  />
                </div>
              )}
              <RichText
                className="title"
                tagName="h3"
                allowedFormats={[]}
                value={sectionHeader.title}
                onChange={(value) =>
                  setAttributes({
                    layout: updateData(layout, value, "sectionHeader", "title"),
                  })
                }
                placeholder={__("Title...")}
              />
              <RichText
                className="sub-title"
                tagName="p"
                allowedFormats={[]}
                value={sectionHeader.subtitle}
                onChange={(value) =>
                  setAttributes({
                    layout: updateData(
                      layout,
                      value,
                      "sectionHeader",
                      "subtitle"
                    ),
                  })
                }
                placeholder={__("Sub Title...")}
              />
            </div>
          ) : (
            <div className="section-title">
              <div className="badge">
                <span className="checkIcon">{checkMarkIcon}</span>
                <span className="text"> {badge.text} </span>
              </div>
              <h3 className="title">{sectionHeader.title}</h3>
              <p className="sub-title">{sectionHeader.subtitle}</p>
            </div>
          ))}
        <div className="section-body container">
          <div className="testimonial-rows">
            <div className="column">
              <ul className="lists theme1Ani">
                {testimonials.map((testimonial, index) => {
                  const { name, image, content, tags, designation } =
                    testimonial || {};

                  const newContent = content.replace(
                    /<a(?![^>]*class=)/g,
                    `<a class="link" ${
                      options.linkInNewTab
                        ? 'target="_blank" rel="noopener noreferrer"'
                        : ""
                    }`
                  );

                  return (
                    <li key={index}>
                      {from === "server" ? (
                        <>
                          <div className="list">
                            <div className=" intro">
                              <div className="text-cont">
                                <RichText
                                  className="name"
                                  tagName="p"
                                  allowedFormats={[]}
                                  value={name}
                                  onChange={(value) =>
                                    setAttributes({
                                      testimonials: updateData(
                                        testimonials,
                                        value,
                                        index,
                                        "name"
                                      ),
                                    })
                                  }
                                  placeholder={__("Name...")}
                                />
                                <RichText
                                  className="designation"
                                  tagName="span"
                                  allowedFormats={[]}
                                  value={designation}
                                  onChange={(value) =>
                                    setAttributes({
                                      testimonials: updateData(
                                        testimonials,
                                        value,
                                        index,
                                        "designation"
                                      ),
                                    })
                                  }
                                  placeholder={__("Designation...")}
                                />
                              </div>
                              <div className="image-cont">
                                <img src={image} alt="image" className="img" />
                              </div>
                            </div>
                            {!options.isTagsBottom && (
                              <ul className="tags up-tags">
                                {tags?.map((tag, inx) => (
                                  <li key={inx}>
                                    <RichText
                                      tagName="span"
                                      allowedFormats={[]}
                                      value={
                                        tag.startsWith("#") ? tag : `#${tag}`
                                      }
                                      onChange={(value) => {
                                        const cleanValue = value.replace(
                                          /^#+/,
                                          "#"
                                        );
                                        setAttributes({
                                          testimonials: updateData(
                                            testimonials,
                                            cleanValue,
                                            index,
                                            "tags",
                                            inx
                                          ),
                                        });
                                      }}
                                    />
                                  </li>
                                ))}
                              </ul>
                            )}
                            <RichText
                              tagName="p"
                              className="content"
                              value={newContent}
                              allowedFormats={[
                                "core/bold",
                                "core/italic",
                                "core/link",
                                "core/text-color",
                              ]}
                              onChange={(value) =>
                                setAttributes({
                                  testimonials: updateData(
                                    testimonials,
                                    value,
                                    index,
                                    "content"
                                  ),
                                })
                              }
                              placeholder={__("Content...")}
                            />
                            {options.isTagsBottom && (
                              <ul className="tags">
                                {tags?.map((tag, inx) => (
                                  <li key={inx}>
                                    <RichText
                                      tagName="span"
                                      allowedFormats={[]}
                                      value={
                                        tag.startsWith("#") ? tag : `#${tag}`
                                      }
                                      onChange={(value) => {
                                        const cleanValue = value.replace(
                                          /^#+/,
                                          "#"
                                        );
                                        setAttributes({
                                          testimonials: updateData(
                                            testimonials,
                                            cleanValue,
                                            index,
                                            "tags",
                                            inx
                                          ),
                                        });
                                      }}
                                    />
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="list">
                            <div className=" intro">
                              <div className="text-cont">
                                <p className="name">{name}</p>
                                <span className="designation">
                                  {designation}
                                </span>
                              </div>
                              <div className="image-cont">
                                <img src={image} alt="image" className="img" />
                              </div>
                            </div>
                            {!options.isTagsBottom && (
                              <>
                                <ul className="tags">
                                  {tags?.map((tag, index) => (
                                    <li key={index}>
                                      <span>{`#${tag}`}</span>
                                    </li>
                                  ))}
                                </ul>
                              </>
                            )}

                            <p
                              className="content"
                              dangerouslySetInnerHTML={{ __html: newContent }}
                            ></p>
                            {options.isTagsBottom && (
                              <>
                                <ul className="tags">
                                  {tags?.map((tag, index) => (
                                    <li key={index}>
                                      <span>{`#${tag}`}</span>
                                    </li>
                                  ))}
                                </ul>
                              </>
                            )}
                          </div>
                        </>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* ---------------------------column 2----------------------- */}

            <div className="column reverce">
              <div className="scroller-y" data-direction="bottom">
                <ul className="lists theme1Ani">
                  {testimonials.map((testimonial, index) => {
                    const { name, image, content, tags, designation } =
                      testimonial || {};

                    const newContent = content.replace(
                      /<a(?![^>]*class=)/g,
                      `<a class="link" ${
                        options.linkInNewTab
                          ? 'target="_blank" rel="noopener noreferrer"'
                          : ""
                      }`
                    );

                    return (
                      <li key={index}>
                        {from === "server" ? (
                          <>
                            <div className="list">
                              <div className=" intro">
                                <div className="text-cont">
                                  <RichText
                                    className="name"
                                    tagName="p"
                                    allowedFormats={[]}
                                    value={name}
                                    onChange={(value) =>
                                      setAttributes({
                                        testimonials: updateData(
                                          testimonials,
                                          value,
                                          index,
                                          "name"
                                        ),
                                      })
                                    }
                                    placeholder={__("Name...")}
                                  />
                                  <RichText
                                    className="designation"
                                    tagName="span"
                                    allowedFormats={[]}
                                    value={designation}
                                    onChange={(value) =>
                                      setAttributes({
                                        testimonials: updateData(
                                          testimonials,
                                          value,
                                          index,
                                          "designation"
                                        ),
                                      })
                                    }
                                    placeholder={__("Designation...")}
                                  />
                                </div>
                                <div className="image-cont">
                                  <img
                                    src={image}
                                    alt="image"
                                    className="img"
                                  />
                                </div>
                              </div>
                              {!options.isTagsBottom && (
                                <ul className="tags up-tags">
                                  {tags?.map((tag, inx) => (
                                    <li key={inx}>
                                      <RichText
                                        tagName="span"
                                        allowedFormats={[]}
                                        value={
                                          tag.startsWith("#") ? tag : `#${tag}`
                                        }
                                        onChange={(value) => {
                                          const cleanValue = value.replace(
                                            /^#+/,
                                            "#"
                                          );
                                          setAttributes({
                                            testimonials: updateData(
                                              testimonials,
                                              cleanValue,
                                              index,
                                              "tags",
                                              inx
                                            ),
                                          });
                                        }}
                                      />
                                    </li>
                                  ))}
                                </ul>
                              )}
                              <RichText
                                tagName="p"
                                className="content"
                                value={newContent}
                                allowedFormats={[
                                  "core/bold",
                                  "core/italic",
                                  "core/link",
                                  "core/text-color",
                                ]}
                                onChange={(value) =>
                                  setAttributes({
                                    testimonials: updateData(
                                      testimonials,
                                      value,
                                      index,
                                      "content"
                                    ),
                                  })
                                }
                                placeholder={__("Content...")}
                              />
                              {options.isTagsBottom && (
                                <ul className="tags">
                                  {tags?.map((tag, inx) => (
                                    <li key={inx}>
                                      <RichText
                                        tagName="span"
                                        allowedFormats={[]}
                                        value={
                                          tag.startsWith("#") ? tag : `#${tag}`
                                        }
                                        onChange={(value) => {
                                          const cleanValue = value.replace(
                                            /^#+/,
                                            "#"
                                          );
                                          setAttributes({
                                            testimonials: updateData(
                                              testimonials,
                                              cleanValue,
                                              index,
                                              "tags",
                                              inx
                                            ),
                                          });
                                        }}
                                      />
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="list">
                              <div className=" intro">
                                <div className="text-cont">
                                  <p className="name">{name}</p>
                                  <span className="designation">
                                    {designation}
                                  </span>
                                </div>
                                <div className="image-cont">
                                  <img
                                    src={image}
                                    alt="image"
                                    className="img"
                                  />
                                </div>
                              </div>
                              {!options.isTagsBottom && (
                                <>
                                  <ul className="tags">
                                    {tags?.map((tag, index) => (
                                      <li key={index}>
                                        <span>{`#${tag}`}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </>
                              )}

                              <p
                                className="content"
                                dangerouslySetInnerHTML={{ __html: newContent }}
                              ></p>
                              {options.isTagsBottom && (
                                <>
                                  <ul className="tags">
                                    {tags?.map((tag, index) => (
                                      <li key={index}>
                                        <span>{`#${tag}`}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </>
                              )}
                            </div>
                          </>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/*---------------------- column3 ----------------------------- */}

            <div className="column column3">
              <ul className="lists theme1Ani">
                {testimonials.map((testimonial, index) => {
                  const { name, image, content, tags, designation } =
                    testimonial || {};

                  const newContent = content.replace(
                    /<a(?![^>]*class=)/g,
                    `<a class="link" ${
                      options.linkInNewTab
                        ? 'target="_blank" rel="noopener noreferrer"'
                        : ""
                    }`
                  );

                  return (
                    <li key={index}>
                      {from === "server" ? (
                        <>
                          <div className="list">
                            <div className=" intro">
                              <div className="text-cont">
                                <RichText
                                  className="name"
                                  tagName="p"
                                  allowedFormats={[]}
                                  value={name}
                                  onChange={(value) =>
                                    setAttributes({
                                      testimonials: updateData(
                                        testimonials,
                                        value,
                                        index,
                                        "name"
                                      ),
                                    })
                                  }
                                  placeholder={__("Name...")}
                                />
                                <RichText
                                  className="designation"
                                  tagName="span"
                                  allowedFormats={[]}
                                  value={designation}
                                  onChange={(value) =>
                                    setAttributes({
                                      testimonials: updateData(
                                        testimonials,
                                        value,
                                        index,
                                        "designation"
                                      ),
                                    })
                                  }
                                  placeholder={__("Designation...")}
                                />
                              </div>
                              <div className="image-cont">
                                <img src={image} alt="image" className="img" />
                              </div>
                            </div>
                            {!options.isTagsBottom && (
                              <ul className="tags up-tags">
                                {tags?.map((tag, inx) => (
                                  <li key={inx}>
                                    <RichText
                                      tagName="span"
                                      allowedFormats={[]}
                                      value={
                                        tag.startsWith("#") ? tag : `#${tag}`
                                      }
                                      onChange={(value) => {
                                        const cleanValue = value.replace(
                                          /^#+/,
                                          "#"
                                        );
                                        setAttributes({
                                          testimonials: updateData(
                                            testimonials,
                                            cleanValue,
                                            index,
                                            "tags",
                                            inx
                                          ),
                                        });
                                      }}
                                    />
                                  </li>
                                ))}
                              </ul>
                            )}
                            <RichText
                              tagName="p"
                              className="content"
                              value={newContent}
                              allowedFormats={[
                                "core/bold",
                                "core/italic",
                                "core/link",
                                "core/text-color",
                              ]}
                              onChange={(value) =>
                                setAttributes({
                                  testimonials: updateData(
                                    testimonials,
                                    value,
                                    index,
                                    "content"
                                  ),
                                })
                              }
                              placeholder={__("Content...")}
                            />
                            {options.isTagsBottom && (
                              <ul className="tags">
                                {tags?.map((tag, inx) => (
                                  <li key={inx}>
                                    <RichText
                                      tagName="span"
                                      allowedFormats={[]}
                                      value={
                                        tag.startsWith("#") ? tag : `#${tag}`
                                      }
                                      onChange={(value) => {
                                        const cleanValue = value.replace(
                                          /^#+/,
                                          "#"
                                        );
                                        setAttributes({
                                          testimonials: updateData(
                                            testimonials,
                                            cleanValue,
                                            index,
                                            "tags",
                                            inx
                                          ),
                                        });
                                      }}
                                    />
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="list">
                            <div className=" intro">
                              <div className="text-cont">
                                <p className="name">{name}</p>
                                <span className="designation">
                                  {designation}
                                </span>
                              </div>
                              <div className="image-cont">
                                <img src={image} alt="image" className="img" />
                              </div>
                            </div>
                            {!options.isTagsBottom && (
                              <>
                                <ul className="tags">
                                  {tags?.map((tag, index) => (
                                    <li key={index}>
                                      <span>{`#${tag}`}</span>
                                    </li>
                                  ))}
                                </ul>
                              </>
                            )}

                            <p
                              className="content"
                              dangerouslySetInnerHTML={{ __html: newContent }}
                            ></p>
                            {options.isTagsBottom && (
                              <>
                                <ul className="tags">
                                  {tags?.map((tag, index) => (
                                    <li key={index}>
                                      <span>{`#${tag}`}</span>
                                    </li>
                                  ))}
                                </ul>
                              </>
                            )}
                          </div>
                        </>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
