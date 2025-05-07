import { useBlockProps } from "@wordpress/block-editor";
import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import TeamSectionDefault from "../TeamSection/TeamSectionDefault";
import TeamSectionOne from "../TeamSection/TeamSectionOne";
import TeamSectionTwo from "../TeamSection/TeamSectionTwo";
import { withSelect } from "@wordpress/data";

const Edit = (props) => {
  const { attributes, setAttributes, clientId, device } = props;
  const { styleSl } = attributes;

  return (
    <>
      <Settings {...{ attributes, setAttributes, clientId, device }} />

      <div {...useBlockProps()}>
        <Style
          attributes={attributes}
          device={device}
          id={`block-${clientId}`}
        />

        {styleSl === "styleDefault" && (
          <TeamSectionDefault
            attributes={attributes}
            setAttributes={setAttributes}
            device={device}
          />
        )}
        {styleSl === "styleOne" && (
          <TeamSectionOne
            attributes={attributes}
            setAttributes={setAttributes}
            device={device}
          />
        )}
        {styleSl === "styleTwo" && (
          <TeamSectionTwo
            attributes={attributes}
            setAttributes={setAttributes}
            device={device}
          />
        )}
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
