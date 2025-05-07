import { __ } from "@wordpress/i18n";
import { produce } from "immer";
import { InlineMediaUpload } from "../../../../../bpl-tools/Components";
const ImageItemPanel = ({
  attributes,
  setAttributes,
  arrKey,
  index,
  setActiveIndex = false,
}) => {
  const items = attributes[arrKey];

  const updateImageItems = (property, val, childProperty = null) => {
    const newItems = produce(attributes[arrKey], (draft) => {
      if (null !== childProperty) {
        draft[index][property][childProperty] = val;
      } else {
        draft[index][property] = val;
      }
    });

    setAttributes({ [arrKey]: newItems });
    setActiveIndex && setActiveIndex(index);
  };

  return (
    <div>
      <InlineMediaUpload
        label={__("Image", "b-blocks")}
        value={items?.[index]?.url}
        onChange={(image) => updateImageItems("url", image)}
        type="image"
        size="full"
      />
    </div>
  );
};

export default ImageItemPanel;
