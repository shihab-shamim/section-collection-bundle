import React from "react";
import { __ } from "@wordpress/i18n";
import {
  FormTokenField,
  __experimentalInputControl as InputControl,
  TextareaControl,
} from "@wordpress/components";
import { updateData } from "../../../utils/functions";
import { InlineMediaUpload } from "../../../../../../bpl-tools/Components";
const Items = ({
  attributes,
  setAttributes,
  // arrKey,
  index,
  // setActiveIndex = false
}) => {
  const { testimonials, selectedTheme } = attributes || [];
  return (
    <div>
      <InlineMediaUpload
        className="mt10"
        label={__("Profile Photo", "b-blocks")}
        placeholder={__("photo url...", "b-blocks")}
        types={["photo"]}
        value={testimonials[index]?.image}
        onChange={(value) =>
          setAttributes({
            testimonials: updateData(testimonials, value, index, "image"),
          })
        }
      />
      <InputControl
        label={__("Name", "b-blocks")}
        placeholder={__("name...", "b-blocks")}
        value={testimonials[index]?.name}
        //   onChange={v => updateSlides("heading",v)}
        onChange={(value) =>
          setAttributes({
            testimonials: updateData(testimonials, value, index, "name"),
          })
        }
      />
      <InputControl
        className="mt5"
        label={__("Designation", "b-blocks")}
        placeholder={__("designation...", "b-blocks")}
        value={testimonials[index]?.designation}
        onChange={(value) =>
          setAttributes({
            testimonials: updateData(testimonials, value, index, "designation"),
          })
        }
      />

      <TextareaControl
        className="mt5"
        label={__("Content", "b-blocks")}
        placeholder={__("content...", "b-blocks")}
        value={testimonials[index]?.content}
        onChange={(value) =>
          setAttributes({
            testimonials: updateData(testimonials, value, index, "content"),
          })
        }
      />

      {
        selectedTheme === "theme1" &&  <FormTokenField
        label={__("tags", "b-blocks")}
        placeholder={__("tags...", "b-blocks")}
        value={testimonials[index]?.tags}
        onChange={(value) =>
          setAttributes({
            testimonials: updateData(testimonials, value, index, "tags"),
          })
        }
      />
      }

      
    </div>
  );
};

export default Items;
