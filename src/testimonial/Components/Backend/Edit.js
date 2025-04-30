import { useBlockProps } from "@wordpress/block-editor";
import { withSelect } from "@wordpress/data";
import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import Testimonial from "../Common/Testimonial";
import Testimonial2nd from "../Common/Testimonial2nd";
import Testimonial3rd from "../Common/Testimonial3rd";

// import {DropZone } from '@wordpress/components';
// import { useState } from "react";
const Edit = (props) => {
  const { attributes, setAttributes, clientId , device} = props;
  // const { testimonials } = attributes;

  // const [imageURL, setImageURL] = useState(null);
  // console.log(imageURL);
  

  // const handleDrop = (files) => {
  //   if (files.length > 0) {
  //     const file = files[0]; // Get the first dropped file
  //     if (file.type.startsWith("image/")) { // Ensure it's an image
  //       const url = URL.createObjectURL(file); // Create a temporary URL
  //       setImageURL(url); // Save it in state
  //       console.log("Image URL:", url);
  //     }
  //   }
  // };

  const from = "server";
  
  return (
    <>
      <Settings {...{ attributes, setAttributes , device , clientId}} />

      <div {...useBlockProps()}>
        <Style attributes={attributes} id={`block-${clientId}`} />
        
        {
          attributes.selectedTheme === "theme1" ? <Testimonial attributes={attributes} setAttributes={setAttributes} from={from}/>: attributes.selectedTheme === "theme2"? <Testimonial2nd attributes={attributes} setAttributes={setAttributes} from={from}/>: attributes.selectedTheme === "theme3" ? <Testimonial3rd attributes={attributes} setAttributes={setAttributes} from={from}/>:""
        }

        {/* <div style={{ height: "50px", width: "50px", backgroundColor: "#aaa" }}>
      <DropZone onFilesDrop={handleDrop} />
      {imageURL && <img src={imageURL} alt="Dropped Image" width="100" />}
    </div> */}
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
