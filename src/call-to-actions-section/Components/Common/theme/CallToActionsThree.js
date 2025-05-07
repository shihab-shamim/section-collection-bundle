import { RichText } from "@wordpress/block-editor";
import { useSelect } from '@wordpress/data';
import { updateData } from "../../../../../../bpl-tools/utils/functions";
const CallToActionsThree = ({ attributes, setAttributes,}) => {

  const isEditor = useSelect((select) => select('core/editor'));
  const { callToActions,showIcon } = attributes;

  return (
        <div className="cta-main-container">
      <div className="cta-sub-container">
        <div className="cta-container-row ">
          <div className="cta-col">
            <div className="cta-section cta-section-three">
              <div className="cta-row-section ">
                {callToActions?.map((cta, index) => (
                  <>
                    <div className="cta-hero-section" key={index}>
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
                          <a href={cta?.buttonLink || '#'} className="cta-button cta-button-three" target={cta.buttonNewTab ? "_blank" : "_self"}
                            rel={cta?.buttonNewTab ? "noopener noreferrer" : undefined} onClick={(e) => e.preventDefault()}
                          >
                            <RichText
                              className="cta-button-text cta-button-text-two"
                              tagName="span"
                              value={cta?.buttonName}
                              onChange={(v) =>setAttributes({callToActions: updateData(callToActions, v, index, "buttonName"),})}
                              placeholder="Enter Button Text"
                            />
                             {showIcon && (
                              <div className="cta-button-icon cta-button-icon-Three" dangerouslySetInnerHTML={{ __html: cta?.icon }} />
                              )}
                            
                          </a>
                        </>

                      ) : (
                      // FrontEnd 
                        <>
                        {/* Heading */}
                          <h2 className="cta-title">
                            <span className="textCta" dangerouslySetInnerHTML={{ __html: cta?.title }} />
                          </h2>
                          <p className="cta-sub-title" dangerouslySetInnerHTML={{ __html: cta.description }} />

                          {/* button Front */}
                          <a href={cta?.buttonLink || '#'} className="cta-button" target={cta?.buttonNewTab ? "_blank" : "_self"}
                            rel={cta?.buttonNewTab ? "noopener noreferrer" : undefined}
                          >
                            <span className="cta-button-text">{cta?.buttonName}</span>

                            {showIcon && (
                              <div className="cta-button-icon" dangerouslySetInnerHTML={{ __html: cta?.icon }}/>
                            )}
                            
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

export default CallToActionsThree;



