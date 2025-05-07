import React from "react";
import BallSvg from "../Compos/BallSvg";
import { RichText } from "@wordpress/block-editor";
import { updateData } from "../../../../../bpl-tools/utils/functions";
import { __ } from "@wordpress/i18n";

const Timeline1 = ({ attributes, setAttributes, from }) => {
  const { timeline, options } = attributes || {};
  return (
    <div className="main-cont">
      <div className="plugin-cont">
        <div className="plugin">
          <div className=" text-cont">
            {/* insider content*/}
            <div className="left-part">
              {/*left part*/}
              {from === "server" ? (
                <>
                  <RichText
                    tagName="h4"
                    className="header"
                    value={timeline.header}
                    onChange={(value) =>
                      setAttributes({
                        timeline: updateData(timeline, value, "header"),
                      })
                    }
                    placeholder={__("Title...")}
                  />
                  {options.button.status && (
                    <a
                      className="link"
                      target={options.button.isNewTab ? `_blank` : "_self"}
                      href={timeline.button.link}
                    >
                      <button type="button" className="btn">
                        {timeline.button.title}
                      </button>
                    </a>
                  )}
                  {/* left side card  */}
                  <div className=" left-cards-cont">
                    {timeline.leftContent.cards.map((card, index) => (
                      <div className="left-card" key={index}>
                        <div className="card-text-cont">
                          <RichText
                            tagName="h4"
                            className="card-title"
                            value={card.title}
                            onChange={(value) =>
                              setAttributes({
                                timeline: updateData(
                                  timeline,
                                  value,
                                  "leftContent",
                                  "cards",
                                  index,
                                  "title"
                                ),
                              })
                            }
                            placeholder={__("card title...")}
                          />
                          <RichText
                            tagName="p"
                            value={card.description}
                            onChange={(value) =>
                              setAttributes({
                                timeline: updateData(
                                  timeline,
                                  value,
                                  "leftContent",
                                  "cards",
                                  index,
                                  "description"
                                ),
                              })
                            }
                            placeholder={__("card title...")}
                          />
                        </div>
                        <BallSvg />
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <h4 className="header"> {timeline.header} </h4>
                  <button type="button" className="btn">
                    {timeline.button.title}
                  </button>
                  {/* left side card  */}
                  <div className=" left-cards-cont">
                    {timeline.leftContent.cards.map((card, index) => (
                      <div className="left-card" key={index}>
                        <div className="card-text-cont">
                          <h4 className="card-title">{card.title}</h4>
                          <p className="">{card.description}</p>
                        </div>
                        <BallSvg />
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
            {/*------------------------ right part --------------------*/}
            <div className="right-part">
              <ul className="lists-cont dashed-line">
                {timeline.timelines.map((tl, index) => (
                  <li className="list" key={index}>
                    <div className="timeline-serial">
                      {index < 9 ? `0${index + 1}` : `${index + 1}`}
                    </div>
                    <div className="timeline-text">
                      {from === "server" ? (
                        <>
                          <RichText
                            tagName="h6"
                            className="title"
                            value={tl.title}
                            onChange={(value) =>
                              setAttributes({
                                timeline: updateData(
                                  timeline,
                                  value,
                                  "rightContent",
                                  index,
                                  "title"
                                ),
                              })
                            }
                            placeholder={__("title...")}
                          />
                          <RichText
                            className="description"
                            tagName="p"
                            value={tl.description}
                            onChange={(value) =>
                              setAttributes({
                                timeline: updateData(
                                  timeline,
                                  value,
                                  "rightContent",
                                  index,
                                  "description"
                                ),
                              })
                            }
                            placeholder={__("description...")}
                          />
                        </>
                      ) : (
                        <>
                          <h6 className="title">{tl.title}</h6>
                          <p className="description">{tl.description} </p>
                        </>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline1;
