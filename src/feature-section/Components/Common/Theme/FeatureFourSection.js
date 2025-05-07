import { useSelect } from '@wordpress/data';
import { RichText } from "@wordpress/block-editor";
import { updateData } from '../../../../../../bpl-tools/utils/functions';


const FeatureFourSection = ({ attributes, setAttributes }) => {
    const isEditor = useSelect((select) => select('core/editor'));
    const { features } = attributes;

    return (
        <>
            <div className="section-wrapper">
                <div className="feature-container">
                    <div className="feature-row">
                        <div className="feature-column">
                            <div className="feature-box">
                                <div className="feature-box-row">

                                    {features.map((feature, index) => (
                                      
                                        <div key={index}className="feature-item ">
                                            <div className="icon-wrapper" >
                                            <div className="badge-icon" dangerouslySetInnerHTML={{ __html: feature.icon }} />
                                            </div>

                                            {isEditor ? (
                                                <>
                                                   <h6 className="feature-title">

                                                        <a
                                                            href={feature?.link || '#'}
                                                            className="feature-link"
                                                            target={isEditor ? "_self" : "_blank"} onClick={(e) => isEditor && e.preventDefault()}
                                                            rel="noopener noreferrer"
                                                        >
                                                            <RichText
                                                                value={feature?.title}
                                                                onChange={(v) => setAttributes({ features: updateData(features, v, index, "title") })}
                                                                placeholder="Enter Title"
                                                                allowedFormats={['core/bold', 'core/italic', 'core/link', 'core/text-color']}
                                                            />
                                                        </a>
                                                    </h6>
                                                    <p className="feature-description">
                                                        <RichText
                                                            value={feature?.description}
                                                            onChange={(v) => setAttributes({ features: updateData(features, v, index, "description") })}
                                                            placeholder="Enter Description"
                                                            allowedFormats={['core/bold', 'core/italic', 'core/link', 'core/text-color']}
                                                        />
                                                    </p>
                                                </>
                                            ) : (
                                                <>
                                                    <h6 className="feature-title">
                                                        <a href={feature?.link || '#'} target={feature.buttonNewTab ? "_blank" : "_self"}
                                                            rel="noopener noreferrer" className="feature-link" dangerouslySetInnerHTML={{ __html: feature?.title }} />
                                                    </h6>
                                                    <p className="feature-description" dangerouslySetInnerHTML={{ __html: feature?.description }} />
                                                </>
                                            )}

                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeatureFourSection;