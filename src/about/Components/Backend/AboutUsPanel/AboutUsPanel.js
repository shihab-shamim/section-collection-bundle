import {
  __experimentalInputControl as InputControl,
  TextareaControl,
  ToggleControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { produce } from "immer";
import {
  IconLibrary,
  InlineMediaUpload,
} from "../../../../../../bpl-tools/Components";  


const AboutUsPanel = ({
  attributes,
  setAttributes,
  arrKey,
  index,
  setActiveIndex = false,
  themeSl,
}) => {
  const items = attributes[arrKey];
  const { isOpenLinkInNewTab } = attributes;

  const updateAboutUsItems = (property, val, childProperty = null) => {
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

  const hasAnchorLink = (description) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = description;
    return tempDiv.querySelector("a") !== null;
  };

  const updatedisOpenLinkInNewTab = { ...isOpenLinkInNewTab };
  attributes.items.forEach((item) => {
    if (
      hasAnchorLink(item.description) &&
      !(item.id in updatedisOpenLinkInNewTab)
    ) {
      updatedisOpenLinkInNewTab[item.id] = false;
    }
  });

  const handleToggle = (id) => {
    setAttributes({
      isOpenLinkInNewTab: {
        ...isOpenLinkInNewTab,
        [id]: !isOpenLinkInNewTab[id],
      },
    });
  };

  const hasLink = hasAnchorLink(items[index]?.description);

  return (
    <div>
      {themeSl === "themeOne" && (
        <InlineMediaUpload
          label={__("Icon", "b-blocks")}
          value={items[index]?.image?.url}
          onChange={(image) => updateAboutUsItems("image", image, "url")}
          type="image"
          size="full"
        />
      )}

      <div style={{ marginTop: "20px" }}></div>

      {(themeSl === "themeTwo" || themeSl === "themeFour") && (
        <div className="about-us-icon">
          <IconLibrary
            label={__("Icon", "b-blocks")}
            value={items[index]?.image.url}
            onChange={(icon) => updateAboutUsItems("image", icon, "url")}
          />
        </div>
      )}

      <div style={{ marginTop: "20px" }}></div>

      <InputControl
        type="text"
        label={__("Title", "b-blocks")}
        value={items[index]?.title}
        onChange={(title) => updateAboutUsItems("title", title)}
      />

      <div style={{ marginTop: "20px" }}></div>

      {themeSl === "themeFour" && (
        <TextareaControl
          type="text"
          label={__("Subtitle", "b-blocks")}
          value={items[index]?.description}
          onChange={(description) =>
            updateAboutUsItems("description", description)
          }
          cols={10}
          rows={2}
        />
      )}

      {(themeSl === "themeOne" || themeSl === "themeTwo") && (
        <TextareaControl
          type="text"
          label={__("Description", "b-blocks")}
          value={items[index]?.description}
          onChange={(description) =>
            updateAboutUsItems("description", description)
          }
          cols={10}
          rows={2}
        />
      )}

      <div style={{ marginTop: "20px" }}></div>

      {hasLink && (
        <ToggleControl
          label="Open Link in New Tab"
          checked={isOpenLinkInNewTab[items[index]?.id] || false}
          onChange={() => handleToggle(items[index]?.id)}
        />
      )}
    </div>
  );
};

export default AboutUsPanel;
