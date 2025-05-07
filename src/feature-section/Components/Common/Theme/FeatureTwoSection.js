
import { useSelect } from '@wordpress/data';
import { RichText } from "@wordpress/block-editor";
import { updateData } from '../../../../../../bpl-tools/utils/functions';


const FeatureTwoSection = ({ attributes, setAttributes }) => {
    const isEditor = useSelect((select) => select('core/editor'));
    const { features } = attributes;

    return (
        <div className="main-section">
            <div className="main-container">
                <div className="row-container">
                    <div className="col-section">
                        <ul className="list-section">
                            {features.map((feature, index) => (
                                <li key={index}>
                                    <div className="d-flex">
                                        <div className="icon" dangerouslySetInnerHTML={{ __html: feature.icon }} />
                                        <div className="text-section">

                                            {isEditor ? (
                                                <RichText
                                                    className="text-heading"
                                                    tagName="p"
                                                    value={feature?.title}
                                                    onChange={(v) => setAttributes({ features: updateData(features, v, index, "title") })}
                                                    placeholder="Enter Description"
                                                    allowedFormats={['core/bold', 'core/italic', 'core/link', 'core/text-color']}
                                                />
                                            ) : (
                                                <p className="text-heading" dangerouslySetInnerHTML={{ __html: feature?.title }} />
                                            )}


                                            {isEditor ? (
                                                <RichText
                                                    className="text-dec"
                                                    value={feature?.description}
                                                    onChange={(v) => setAttributes({ features: updateData(features, v, index, "description") })}
                                                    placeholder="Enter Your Name"
                                                    allowedFormats={['core/bold', 'core/italic', 'core/link', 'core/text-color']}
                                                />
                                            ) : (

                                                <span className="text-dec" dangerouslySetInnerHTML={{ __html: feature?.description }} />
                                            )}

                                        </div>
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

export default FeatureTwoSection;

