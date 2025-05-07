import {
  __experimentalInputControl as InputControl,
  ToggleControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { produce } from "immer";
import {
  IconLibrary,
  InlineMediaUpload,
} from "../../../../../../bpl-tools/Components";
import "./style.scss";

const TeamItemsPanel = ({
  attributes,
  setAttributes,
  arrKey,
  index,
  setActiveIndex = false,
  styleSl,
}) => {
  const items = attributes[arrKey] || {};
  const { items: itemsData } = attributes || {};

  const updateTeamItems = (property, val, childProperty = null) => {
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

  const updateSocialLink = (memberIndex, linkIndex, field, value) => {
    const updatedItems = [...items];

    updatedItems[memberIndex].socialLinks[linkIndex] = {
      ...updatedItems[memberIndex].socialLinks[linkIndex],
      [field]: value,
    };

    setAttributes({
      team: {
        ...attributes.team,
        items: updatedItems,
      },
    });
  };

  const updateLinkToggle = (index, field, value) => {
    const updatedItems = itemsData?.map((item, i) => {
      if (i !== index) return item;
      return {
        ...item,
        [field]: value,
      };
    });

    setAttributes({
      [arrKey]: updatedItems,
    });
  };

  return (
    <div>
      <InlineMediaUpload
        label={__("Image", "b-blocks")}
        value={items?.[index]?.image}
        onChange={(image) => updateTeamItems("image", image)}
        type="image"
        size="full"
      />

      <div style={{ marginTop: "20px" }}></div>

      <InputControl
        label={__("Name", "b-blocks")}
        value={items?.[index]?.name}
        onChange={(name) => updateTeamItems("name", name)}
      />

      <div style={{ marginTop: "20px" }}></div>

      <InputControl
        label={__("Role", "b-blocks")}
        value={items?.[index]?.role}
        onChange={(role) => updateTeamItems("role", role)}
      />

      <div style={{ marginTop: "20px" }}></div>

      <InputControl
        label={__("Portfolio Link", "b-blocks")}
        value={items?.[index]?.portfoloLink}
        onChange={(portfoloLink) =>
          updateTeamItems("portfoloLink", portfoloLink)
        }
      />

      <div style={{ marginTop: "20px" }}></div>

      {styleSl === "styleDefault" && (
        <ToggleControl
          label={__("Open Link In New Tab", "b-blocks")}
          checked={items?.[index]?.isOpenNewTab}
          onChange={(isOpenNewTab) => {
            updateLinkToggle(index, "isOpenNewTab", isOpenNewTab);
          }}
        />
      )}

      <div style={{ marginTop: "20px" }}></div>

      {(styleSl === "styleOne" || styleSl === "styleTwo") && (
        <>
          <ToggleControl
            label={__("Open Link In New Tab", "b-blocks")}
            checked={items?.[index]?.isOpenNewTab}
            onChange={(isOpenNewTab) => {
              updateLinkToggle(index, "isOpenNewTab", isOpenNewTab);
            }}
          />
        </>
      )}

      <div style={{ marginTop: "20px" }}></div>

      {styleSl === "styleOne" && (
        <>
          {items?.[index]?.socialLinks?.map((social, socialIndex) => (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span
                  className="social-icon"
                  dangerouslySetInnerHTML={{
                    __html: social?.platform,
                  }}
                />

                <IconLibrary
                  label={__("", "b-blocks")}
                  value={social?.[socialIndex]?.platform}
                  onChange={(value) =>
                    updateSocialLink(index, socialIndex, "platform", value)
                  }
                />
              </div>

              <div style={{ marginTop: "12px" }}></div>

              <InputControl
                label={__("Social Link", "b-blocks")}
                value={social?.url}
                onChange={(value) =>
                  updateSocialLink(index, socialIndex, "url", value)
                }
              />

              <div style={{ marginTop: "20px" }}></div>
            </>
          ))}

          <div style={{ marginTop: "20px" }}></div>

          <ToggleControl
            label={__("Open Social Link In New Tab", "b-blocks")}
            checked={items?.[index]?.isSocialLinksNewTab}
            onChange={(isSocialLinksNewTab) =>
              updateLinkToggle(
                index,
                "isSocialLinksNewTab",
                isSocialLinksNewTab
              )
            }
          />
        </>
      )}
    </div>
  );
};

export default TeamItemsPanel;
