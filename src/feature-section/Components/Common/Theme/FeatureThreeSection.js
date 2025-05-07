import { useSelect } from '@wordpress/data';
import { RichText } from "@wordpress/block-editor";
import { updateData } from '../../../../../../bpl-tools/utils/functions';

const FeatureThreeSection = ({ attributes, setAttributes }) => {
    const isEditor = useSelect((select) => select('core/editor'));

    const { features } = attributes;

    return (
        <div className="main-container-three">
            <div className="sub-container">
                <div className="row-section">
                    <div className="col-sections">
                        <div className="bg-back">
                            <div className="section-row">
                                {features.map((feature, index) => (
                                    <div key={index} className="main-text-section">
                                        <div className="icon-button" >
                                            <div className='icon-svg' dangerouslySetInnerHTML={{ __html: feature.icon }} />
                                        </div>


                                        {isEditor ? (
                                            <>
                                                <h6 className="heading-text">

                                                    <a
                                                        href={feature?.link || '#'}
                                                        className="link-text"
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
                                                <p className="decs-text-three">
                                                    <RichText
                                                        tagName="p"
                                                        value={feature?.description}
                                                        onChange={(v) => setAttributes({ features: updateData(features, v, index, "description") })}
                                                        placeholder="Enter Description"
                                                        allowedFormats={['core/bold', 'core/italic', 'core/link', 'core/text-color']}
                                                    />
                                                </p>
                                            </>
                                        ) : (
                                            <>
                                                <h6 className="heading-text">
                                                    <a href={feature?.link || '#'} target={feature.buttonNewTab ? "_blank" : "_self"}
                                                        rel="noopener noreferrer" className="group-hover:text-primary link-text" dangerouslySetInnerHTML={{ __html: feature?.title }} />
                                                </h6>
                                                <p className="decs-text-three" dangerouslySetInnerHTML={{ __html: feature?.description }} />
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
    );
};

export default FeatureThreeSection;



