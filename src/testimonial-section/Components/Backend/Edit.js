import { useBlockProps } from "@wordpress/block-editor";
import { withSelect } from "@wordpress/data";
import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import Testimonial from "../Common/Testimonial";
import Testimonial2nd from "../Common/Testimonial2nd";
import Testimonial3rd from "../Common/Testimonial3rd";
const Edit = (props) => {
  const { attributes, setAttributes, clientId , device} = props;

  const from = "server";
  
  return (
    <>
      <Settings {...{ attributes, setAttributes , device , clientId}} />

      <div {...useBlockProps()}>
        <Style attributes={attributes} id={`block-${clientId}`} />
        
        {
          attributes.selectedTheme === "theme1" ? <Testimonial attributes={attributes} setAttributes={setAttributes} from={from}/>: attributes.selectedTheme === "theme2"? <Testimonial2nd attributes={attributes} setAttributes={setAttributes} from={from}/>: attributes.selectedTheme === "theme3" ? <Testimonial3rd attributes={attributes} setAttributes={setAttributes} from={from}/>:""
        }
      </div>
    </>
  );
};
export default withSelect((select) => {
  const { getDeviceType } = select("core/editor");
  return {
    device: getDeviceType()?.toLowerCase(),
  };
})(Edit);
