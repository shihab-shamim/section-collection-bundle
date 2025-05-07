import { useBlockProps } from "@wordpress/block-editor";

import { withSelect } from "@wordpress/data";
import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import Timeline1 from "../Common/Timeline1";
import Timeline2 from "../Common/Timeline2";

const Edit = (props) => {
  const { attributes, setAttributes, clientId, device } = props;
  
  const from = "server";
  const {selectedTheme} = attributes || {}
  

  return (
    <>
      <Settings {...{ attributes, setAttributes, device }} />

      <div {...useBlockProps()}>
        <Style attributes={attributes} id={`block-${clientId}`} />


        {
          selectedTheme === "theme1" ?  < Timeline1 attributes={attributes} setAttributes={setAttributes} from={from}/> : <Timeline2 attributes={attributes} setAttributes={setAttributes} from={from}/>
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
