import React from "react";
import { RichText } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import { updateData } from "../../utils/functions";
import { checkMarkIcon } from "../../utils/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, EffectFade, Autoplay } from "swiper/modules";

const Testimonial3rd = ({ attributes, setAttributes, from }) => {
  const { testimonials, layout, options } = attributes || {};

  const { sectionHeader, badge } = layout || {};

  return (
    <div className="mainCont" data-bs-theme="light" data-theme="home-3">
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
          <div className="testimonial-rows testimonial-rows-3rd">
            <div className="testimonial-cont-3rd">
              <Swiper
                className="mySwiper lists lists-3rd"
                key={`${options.simulateTouch}-${options.slidingSpeed}-${options.navButton}-${options.keyboardControl}`}
                slidesPerView={1}
                spaceBetween={0}
                simulateTouch={
                  from === "server" ? false : options.simulateTouch
                }
                autoplay={{
                  delay: options.slidingSpeed,
                  disableOnInteraction: false,
                }}
                effect={"fade"}
                keyboard={{
                  enabled: options.keyboardControl,
                }}
                navigation={options.navButton}
                modules={[Keyboard, Navigation, EffectFade, Autoplay]}
              >
                {testimonials?.map((testimonial, index) => {
                  const { name, designation, content, image } =
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
                    <SwiperSlide
                      className="list list-3rd"
                      key={index}
                    >
                      <div>
                        <div
                          className="quoteSymble"
                          dangerouslySetInnerHTML={{
                            __html: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path></svg>`,
                          }}
                        />

                        {from === "server" ? (
                          <>
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
                            <div className="intro intro3rd">
                              <div className="image-cont">
                                <img src={image} alt="image" className="img" />
                              </div>
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
                            </div>
                          </>
                        ) : (
                          <>
                            <p className="content">
                              {content}
                            </p>
                            <div className="intro">
                              <div className="image-cont">
                                <img
                                  src={image}
                                  alt="image"
                                  className="img"
                                />
                              </div>
                              <div className="text-cont">
                                <p className="name">{name} </p>
                                <span className="designation">
                                  {designation}
                                </span>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial3rd;
