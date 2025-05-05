import { RichText } from "@wordpress/block-editor";
import { useSelect } from '@wordpress/data';
import { updateData } from "../../../../../../bpl-tools/utils/functions";


const CallToActionsTwo = ({ attributes, setAttributes}) => {

  const isEditor = useSelect((select) => select('core/editor'));
  const { callToActions} = attributes;

  return (
        <div className="cta-main-container">
          <div className="cta-sub-container">
            <div className="cta-container-row ">
              <div className="cta-col">
                <div className="cta-section cta-section-two">
                  <div className="cta-row-section ">
                    {callToActions?.map((cta, index) => (
                      <>
                        <div className="cta-hero-section " key={index}>
                          {isEditor ? (
                            <>
                              {/* heading */}
                              <h2 className="cta-title">
                                <RichText className="textCta"
                                  tagName="span"
                                  value={cta?.title}
                                  onChange={(v) =>setAttributes({callToActions: updateData(callToActions, v, index, "title"),})}
                                  allowedFormats={["core/bold","core/italic","core/link", "core/text-color",]}
                                 // placeholder="Enter Your Heading"
                                />
                                <br/>
                                <span className="cta-highlight-text cta-highlight-text-two">
                                  <RichText
                                    className="cta-highlight-text cta-highlight-text-two"
                                    tagName="span"
                                    value={cta?.highlight}
                                    onChange={(v) =>setAttributes({callToActions: updateData(callToActions, v, index, "highlight"),})}
                                    allowedFormats={["core/bold","core/italic","core/link","core/text-color",]}
                                    // placeholder="Enter Your Highlight Text"
                                  />
                                </span>
                              </h2>
    
                              {/* dec */}
                              <RichText
                                className="cta-sub-title"
                                tagName="p"
                                value={cta.description}
                                onChange={(v) => setAttributes({ callToActions: updateData(callToActions, v, index, "description") })}
                                allowedFormats={['core/bold', 'core/italic', 'core/link', 'core/text-color']}
                                placeholder="Enter Your description"
                              />
    
                              {/* button */}
                              <a href={cta?.buttonLink || '#'} className="cta-button cta-button-two" target={cta.buttonNewTab ? "_blank" : "_self"}
                                rel={cta?.buttonNewTab ? "noopener noreferrer" : undefined} onClick={(e) => e.preventDefault()}
                              >
                                <RichText
                                  className="cta-button-text cta-button-text-two"
                                  tagName="span"
                                  value={cta?.buttonName}
                                  onChange={(v) =>setAttributes({callToActions: updateData(callToActions, v, index, "buttonName"),})}
                                  placeholder="Enter Button Text"
                                />
                              </a>
                            </>
    
                          ) : (
                          // FrontEnd 
                            <>
                            {/* Heading */}
                              <h2 className="cta-title">
                                <span className="textCta" dangerouslySetInnerHTML={{ __html: cta?.title }} />
                                <span className="cta-highlight-text cta-highlight-text-two" dangerouslySetInnerHTML={{ __html: cta?.highlight }}/>
                              </h2>
                              <p className="cta-sub-title" dangerouslySetInnerHTML={{ __html: cta.description }} />
    
                              {/* button  */}
                              <a href={cta?.buttonLink || '#'} className="cta-button  cta-button-two" target={cta?.buttonNewTab ? "_blank" : "_self"}
                                rel={cta?.buttonNewTab ? "noopener noreferrer" : undefined}
                              >
                              <span className="cta-button-text cta-button-text-two">{cta?.buttonName}</span>
                              </a>
                            </>
                          )}
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
};

export default CallToActionsTwo;