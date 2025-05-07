import { useBlockProps } from "@wordpress/block-editor";
import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import Theme from "../Common/theme/Theme";
import { withSelect } from '@wordpress/data';

const Edit = (props) => {
  const { attributes, setAttributes, device, clientId } = props;

  return (
    <>
      <Settings {...{ attributes, setAttributes, device, clientId }} />

      <div {...useBlockProps()}>
        <Style attributes={attributes} id={`block-${clientId}`} device={device} />

        <div className="bBlocksCallToActions">
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
