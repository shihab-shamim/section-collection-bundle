import React from "react";
import { RichText } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import { updateData } from "../../utils/functions";
import { checkMarkIcon } from "../../utils/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const Testimonial2nd = ({ attributes, setAttributes, from }) => {
  const { testimonials, layout, options } = attributes || {};

  const { sectionHeader, badge, sectionBody } = layout || {};

  return (
    <div className="mainCont">
      <div className="testimonial-plugin">
        {/*-------------------- header part --------------------------*/}
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
        {/*------------------------------ body -------------------------------------*/}

        <div
          className="section-body"
          style={{
            padding: "0px",
            position: "relative",
          }}
        >
          <div
            className="testimonial-rows"
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/*------------------------ first slider -------------------------------------*/}

            <div className="testimonial-slider-1">
              <Swiper
                key={`${sectionBody.colGap}-${sectionBody.rowGap}-${options.simulateTouch}-${options.slidingSpeed}`}
                simulateTouch={
                  from === "server" ? false : options.simulateTouch
                }
                spaceBetween={sectionBody.rowGap}
                loop={true}
                centeredSlides={true}
                speed={options.slidingSpeed}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                }}
                slidesPerView={"auto"}
                modules={[Autoplay]}
                className="mySwiper lists"
                style={{}}
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
                      key={index}
                      style={{}}
                      className="list theme2List"
                    >
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
                          <div className="testimonial-footer intro" style={{}}>
                            <div className="image-cont theme2-image-cont">
                              <img
                                src={image}
                                alt="image"
                                className="img"
                                style={{}}
                              />
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
                          <p className="content" style={{}}>
                            {content}
                          </p>
                          <div className="testimonial-footer intro" style={{}}>
                            <div className="image-cont theme2-image-cont">
                              <img
                                src={image}
                                alt="image"
                                className="img"
                                style={{}}
                              />
                            </div>
                            <div className="text-cont">
                              <p className="name">{name} </p>
                              <span className="designation">{designation}</span>
                            </div>
                          </div>
                        </>
                      )}
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>

            {/* ---------------------second slider------------------ */}

            <div style={{ textAlign: "left" }} className="testimonial-slider-2">
              <Swiper
                key={`${sectionBody.colGap}-${sectionBody.rowGap}-${options.simulateTouch}-${options.slidingSpeed}`}
                spaceBetween={sectionBody.rowGap}
                loop={true}
                dir="rtl"
                simulateTouch={
                  from === "server" ? false : options.simulateTouch
                }
                centeredSlides={true}
                speed={options.slidingSpeed}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                }}
                slidesPerView={"auto"}
                modules={[Autoplay]}
                className="mySwiper lists"
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
                      key={index}
                      style={{}}
                      className="list theme2List"
                    >
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
                          <div className="testimonial-footer2 intro" style={{}}>
                            <div className="image-cont theme2-image-cont">
                              <img
                                src={image}
                                alt="image"
                                className="img"
                                style={{}}
                              />
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
                          <p className="content">{content}</p>
                          <div className="testimonial-footer2 intro" style={{}}>
                            <div className="image-cont theme2-image-cont">
                              <img
                                src={image}
                                alt="image"
                                className="img"
                                style={{}}
                              />
                            </div>
                            <div className="text-cont">
                              <p className="name">{name} </p>
                              <span className="designation">{designation}</span>
                            </div>
                          </div>
                        </>
                      )}
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>

          {/*---------------------- SVG part -------------------*/}
          {options.glowEffect && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="931"
              height="815"
              viewBox="0 0 931 815"
              className="b-blocks-glow-svg"
            >
              <g filter="url(#filter0_f_8001_8009)">
                <path
                  d="M724.978 256.138C748.883 223.446 782.903 148 829.407 148C868.323 148 861.752 261.729 793.81 356.036C636.472 539.564 520.855 548 416.426 548C311.998 548 267 495.048 267 462.356C267 429.663 298.454 383.138 468.309 383.138C638.162 383.138 701.072 288.831 724.978 256.138Z"
                  fill="#00ff00"
                  className="b-blocks-glow-svg-path"
                ></path>
              </g>
              <defs>
                <filter
                  id="filter0_f_8001_8009"
                  x="0.333405"
                  y="-118.667"
                  width="1119.59"
                  height="933.333"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    stdDeviation="133.333"
                    result="effect1_foregroundBlur_8001_8009"
                  ></feGaussianBlur>
                </filter>
              </defs>
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonial2nd;
