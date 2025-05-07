import FeatureFourSection from "./FeatureFourSection";
import FeatureSection from "./FeatureSection";
import FeatureThreeSection from "./FeatureThreeSection";
import FeatureTwoSection from "./FeatureTwoSection";


const Theme = (props) => {
    const { attributes } = props;
    const { theme } = attributes?.layout || {};

    return (
        <div >
			{
				theme==="theme-1"? <FeatureSection {...props} />:theme==="theme-2"?<FeatureTwoSection {...props} />:theme==="theme-3"?<FeatureThreeSection {...props} />:theme==="theme-4"?<FeatureFourSection {...props} />:null
			}
        </div>
    );
};

export default Theme;