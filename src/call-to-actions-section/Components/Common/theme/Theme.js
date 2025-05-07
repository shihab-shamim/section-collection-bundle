import CallToActionsOne from "./CallToActionsOne";
import CallToActionsThree from "./CallToActionsThree";
import CallToActionsTwo from "./CallToActionsTwo";

const Theme = (props) => {
    const { attributes } = props;
    const { theme } = attributes?.layout || {};

    return (
        <div>
            {
                theme === "theme-1" ? <CallToActionsOne {...props} /> : theme === "theme-2" ? <CallToActionsTwo {...props} /> : theme === "theme-3" ? <CallToActionsThree {...props} /> : null
            }
        </div>
    );
};

export default Theme;