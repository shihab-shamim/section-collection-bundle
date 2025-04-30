import { useBlockProps } from "@wordpress/block-editor";
import Settings from "./Settings/Settings";
import Style from "../Common/Style";

import { withSelect } from '@wordpress/data';
import Theme from "../Common/Theme/Theme";


const Edit = (props) => {
  const { attributes, setAttributes, clientId, device } = props;

  return (
    <>
      <Settings {...{ attributes, setAttributes, device,clientId }} />

      <div {...useBlockProps()}>
        <div>
          <Style attributes={attributes} id={`block-${clientId}`} device={device} />

          <Theme {...{ attributes, setAttributes, device}} />
        </div>
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
