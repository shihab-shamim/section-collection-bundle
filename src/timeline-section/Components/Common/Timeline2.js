import React from "react";
import { RichText } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import { updateData } from "../../utils/functions";

const Timeline2 = ({ attributes, setAttributes, from }) => {
  const { timeline } = attributes || {};
  return (
    <div className="main-cont2">
      <div className="container">
        <div className="header">
          {from === "server" ? (
            <>
              <RichText
                tagName="h1"
                value={timeline.header}
                onChange={(value) =>
                  setAttributes({
                    timeline: updateData(timeline, value, "header"),
                  })
                }
                placeholder={__("Title...")}
              />

              <RichText
                tagName="p"
                value={timeline.description}
                onChange={(value) =>
                  setAttributes({
                    timeline: updateData(timeline, value, "description"),
                  })
                }
                placeholder={__("Title...")}
              />
            </>
          ) : (
            <>
              <h1>How does AI Image Work?</h1>
              <p>
                Your own generative AI Large Language Model framework, designed
                and launched. Take creativity a step further with the
                transformative power of our Image Generation tool. Its not just
                about bringing
              </p>
            </>
          )}
        </div>
        <div
          className="body"
          style={{ display: "flex", flexDirection: "row-reverse" }}
        >
          {/* Play button positioned on the left center */}
          <div className="play-button-container">
            <div className="play-button">
              <div className="play-icon"></div>
            </div>
          </div>
          <div className="content-section" style={{ width: "50%" }}>
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
  );
};

export default Timeline2;

{
  /* Timeline with dots  */
}
//   <div className="timeline-wrapper" >
//   <div className="timeline"></div>
//   <div className="timeline-dots">
//       <div className="timeline-dot dot-1"></div>
//       <div className="timeline-dot dot-2"></div>
//       <div className="timeline-dot dot-3"></div>
//   </div>
// </div>
{
  /* Timeline content  */
}
{
  /* <div className="timeline-content">
  <div className="timeline-item">
      <h2 className="timeline-title">For Amazing Creator</h2>
      <p className="timeline-text">Delcap Asset Management Ltd is incorporated in London and regulated by the Financial Conduct Authority (FCA).</p>
  </div>
  <div className="timeline-item">
      <h2 className="timeline-title">Easy For Teams</h2>
      <p className="timeline-text">To be able to create an account, input your email address and password.</p>
  </div>
  <div className="timeline-item">
      <h2 className="timeline-title">For Developers</h2>
      <p className="timeline-text">Our team has the expertise to help you achieve your visual content goals</p>
  </div>
</div> */
}
