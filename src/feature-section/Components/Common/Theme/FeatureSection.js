import { RichText } from "@wordpress/block-editor";
import { useSelect } from '@wordpress/data';
import { updateData } from "../../../../../../bpl-tools/utils/functions";


const FeatureSection = ({ attributes, setAttributes, }) => {
    const isEditor = useSelect((select) => select('core/editor'));

    const { features, heading } = attributes;

    const { subTitle, title } = heading;

    return (
        <div className="usage-section-1">
            <div className="section-space">
                <div>
                    <div className="heading-main">
                        {subTitle?.showSubTitle ?

                            <span className="badge">
                                <div className="badge-icon-wrapper" dangerouslySetInnerHTML={{ __html: subTitle.icon }} />

                                {isEditor ? (
                                    <RichText className="d-inline-block"
                                        value={subTitle?.text}
                                        placeholder="Your Badge Text"
                                        onChange={(v) => {
                                            setAttributes({ heading: { ...heading, subTitle: { ...heading.subTitle, text: v } } })
                                        }
                                        }
                                        allowedFormats={['core/bold', 'core/italic', 'core/link', 'core/text-color']}
                                    />) : (<span className="d-inline-block" dangerouslySetInnerHTML={{ __html: subTitle?.text }} />)}
                            </span>
                            : ""
                        }
                        {title?.showTitle
                            ?
                            <>
                                {isEditor ? (
                                    <RichText className="title"
                                        tagName="h3"
                                        value={title?.text}
                                        onChange={v => { setAttributes({ heading: { ...heading, title: { ...heading.title, text: v } } }) }}
                                        allowedFormats={['core/bold', 'core/italic', 'core/link', 'core/text-color']}
                                        placeholder="Enter Your Title"
                                    />) : (<h3 className="title" dangerouslySetInnerHTML={{ __html: title?.text }} />)
                                }
                            </>
                            : ""
                        }
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row" >

                    {features?.map((item, indexFeature) => {

                        const isLastFeature = indexFeature === features.length - 1;

                        return (
                            <div className={`first-col ${isLastFeature ? "last-feature" : ""}`} key={indexFeature}>
                                <div className="bg-dark">
                                    <div className="icon" dangerouslySetInnerHTML={{ __html: item.icon }} />
                                    {isEditor ? (
                                        <RichText
                                            className={`title-text ${isLastFeature ? "last-title-text" : ""}`}
                                            tagName="h6"
                                            value={item.title}
                                            onChange={(v) => setAttributes({ features: updateData(features, v, indexFeature, 'title') })}
                                            allowedFormats={['core/bold', 'core/italic', 'core/link', 'core/text-color']}
                                            placeholder="Enter Your Title"
                                        />
                                    ) : (
                                        <h6 className="title-text" dangerouslySetInnerHTML={{ __html: item.title }} />
                                    )}

                                    {isEditor ? (
                                        <RichText className={`dec-text ${isLastFeature ? "last-dec-text" : ""}`}
                                            tagName="p"
                                            value={item.description}
                                            onChange={(v) => setAttributes({ features: updateData(features, v, indexFeature, "description") })}
                                            allowedFormats={['core/bold', 'core/italic', 'core/link', 'core/text-color']}
                                            placeholder="Enter Your description"
                                        />
                                    ) : (
                                        <p className={`dec-text ${isLastFeature ? "last-dec-text" : ""}`} dangerouslySetInnerHTML={{ __html: item.description }} />
                                    )}
                                </div>
                            </div>
                        );
                    })}

                </div>
            </div>
        </div>
    );

};

export default FeatureSection;
