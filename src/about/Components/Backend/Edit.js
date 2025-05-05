import { useBlockProps } from "@wordpress/block-editor";
import { withSelect } from "@wordpress/data";
import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import AboutUs from "../AboutUs/AboutUs";

import AboutUsThree from "../AboutUs/AboutUsThree";
import AboutUsTwo from "../AboutUs/AboutUsTwo";
import AboutUsFour from "../AboutUs/AboutUsFour";
import { BplBlockPreview } from "../../../../../bpl-tools/Components";

const Edit = (props) => {
  const { attributes, setAttributes, clientId, device } = props;
  const { themeSl } = attributes;

  return (
    <>
      <Settings {...{ attributes, setAttributes, device, clientId }} />

      <div {...useBlockProps()}>
        <div>
          <Style
            attributes={attributes}
            device={device}
            id={`block-${clientId}`}
          />

          { 
            themeSl==="themeOne"?<AboutUs
              attributes={attributes}
              setAttributes={setAttributes}
              device={device}
            />:themeSl==="themeTwo"? <AboutUsTwo
              attributes={attributes}
              setAttributes={setAttributes}
              device={device}
            />:themeSl==="themeThree"?<AboutUsThree
              attributes={attributes}
              setAttributes={setAttributes}
              device={device}/>:themeSl==="themeFour"?  <AboutUsFour
              attributes={attributes}
              setAttributes={setAttributes}
              device={device}/>:null
          }

          {/* {themeSl === "themeOne" && (
            <AboutUs
              attributes={attributes}
              setAttributes={setAttributes}
              device={device}
            />
          )}
          {themeSl === "themeTwo" && (
            <AboutUsTwo
              attributes={attributes}
              setAttributes={setAttributes}
              device={device}
            />
          )}

          {themeSl === "themeThree" && (
            <AboutUsThree
              attributes={attributes}
              setAttributes={setAttributes}
              device={device}
            />
          )}
          {themeSl === "themeFour" && (
            <AboutUsFour
              attributes={attributes}
              setAttributes={setAttributes}
              device={device}
            />
          )}
          {themeSl === "themeFive" && (
            <AboutUsFive
              attributes={attributes}
              setAttributes={setAttributes}
              device={device}
            />
          )} */}
        </div>
        {/* <BplBlockPreview/> */}
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
