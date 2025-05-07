import React, { useState } from "react";
import { Button, Popover } from "@wordpress/components";
import "./style.scss";

const BPlBlockPreview = ({ options, value, onChange }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleButtonClick = (blockValue, idx) => {
    onChange(blockValue);
    setActiveIndex(idx);
    handleBlockReplace(blockValue);
  };

  const handleMouseInteraction = (idx, isEnter) => {
    setActiveIndex(isEnter ? idx : null);
  };

  const handleBlockReplace = (blockContent) => {
    onChange(blockContent);
  };

  return (
    <div className="bPlBlockPreviewWrapper">
      {options?.map((theme, idx) => (
        <div key={idx}>
          <div>
            <Button
              className={`bPl-previewBtn ${
                value === theme.value ? "bPl-activeBtn" : ""
              }`}
              onClick={() => handleButtonClick(theme.value, idx, theme.content)}
              onMouseEnter={() => handleMouseInteraction(idx, true)}
              onMouseLeave={() => handleMouseInteraction(idx, false)}
            >
              {theme.label}
            </Button>
          </div>
          {activeIndex === idx && (
            <Popover
              style={{ cursor: "pointer" }}
              onClick={() => handleButtonClick(theme.value, idx, theme.content)}
            >
              <div
                onMouseEnter={() => handleMouseInteraction(idx, true)}
                onMouseLeave={() => handleMouseInteraction(idx, false)}
                style={{ height: theme.height, width: theme.width }}
              >
                <img
                  src={theme.img}
                  style={{
                    minHeight: "100%",
                    width: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            </Popover>
          )}
        </div>
      ))}
    </div>
  );
};

export default BPlBlockPreview;



// it's working but not the best way to do it.
// import { BlockPreview } from "@wordpress/block-editor";
// import { parse } from "@wordpress/blocks";
// import { Button, Popover } from "@wordpress/components";
// import { useState, useEffect, useRef } from "@wordpress/element";
// import { styleItems } from "../../../../../utils/options"; // Adjust path to where styleItems is defined

// const BPlBlockPreview = ({
//   clientId,
//   value,
//   onChange,
//   viewportWidth = 1200,
//   previewWidth = "400px",
//   previewHeight = "300px",
// }) => {
//   const [activeIndex, setActiveIndex] = useState(null);
//   const [isHoveringPreview, setIsHoveringPreview] = useState(false);
//   const hoverTimeoutRef = useRef(null);

//   // Format label from style key
//   const formatLabel = (key) => {
//     if (key === "styleDefault") return "Default";
//     if (key === "styleOne") return "Style One";
//     return key
//       .replace(/^style/, "")
//       .replace(/([A-Z])/g, " $1")
//       .trim();
//   };

//   // Get attributes for a style
//   const getStyleAttributes = (styleKey) => {
//     const styleConfig = styleItems[styleKey] || styleItems.styleDefault;
//     return {
//       team: { ...styleConfig.team },
//       styles: { ...styleConfig.styles },
//       styleSl: styleKey,
//     };
//   };

//   // Get block content as a WordPress block comment
//   const getBlockContent = (styleKey) => {
//     const attributes = getStyleAttributes(styleKey);
//     return `<!-- wp:b-blocks/team-section ${JSON.stringify(attributes)} /-->`;
//   };

//   // Generate styles array from styleItems
//   const styles = Object.keys(styleItems).map((key) => ({
//     value: key,
//     label: formatLabel(key),
//     content: getBlockContent(key),
//   }));

//   // Clean up timeouts on unmount
//   useEffect(() => {
//     return () => {
//       if (hoverTimeoutRef.current) {
//         clearTimeout(hoverTimeoutRef.current);
//       }
//     };
//   }, []);

//   // Handle style selection
//   const handleStyleSelect = (styleKey) => {
//     clearTimeout(hoverTimeoutRef.current);
//     const attributes = getStyleAttributes(styleKey);
//     onChange(styleKey);
//     if (clientId) {
//       wp.data.dispatch("core/block-editor").updateBlockAttributes(clientId, {
//         style: styleKey,
//         team: attributes.team,
//         styles: attributes.styles,
//         styleSl: attributes.styleSl,
//       });
//     }
//     setActiveIndex(null);
//   };

//   // Handle mouse enter with debounce
//   const handleMouseEnter = (index) => {
//     clearTimeout(hoverTimeoutRef.current);
//     hoverTimeoutRef.current = setTimeout(() => {
//       setActiveIndex(index);
//     }, 300);
//   };

//   // Handle mouse leave with debounce
//   const handleMouseLeave = () => {
//     clearTimeout(hoverTimeoutRef.current);
//     hoverTimeoutRef.current = setTimeout(() => {
//       if (!isHoveringPreview) {
//         setActiveIndex(null);
//       }
//     }, 200);
//   };

//   return (
//     <div className="bPlBlockPreviewWrapper bpl-block-preview-container flex flex-wrap gap-4 p-4 bg-gray-50 rounded-md">
//       {styles.map((style, index) => (
//         <div key={style.value} className="bpl-preview-item relative">
//           <Button
//             className={`bPl-previewBtn bpl-style-button px-4 py-2 rounded-md border text-sm font-medium transition-colors ${
//               value === style.value
//                 ? "bPl-activeBtn bg-blue-500 text-white border-blue-500"
//                 : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
//             }`}
//             onClick={() => handleStyleSelect(style.value)}
//             onMouseEnter={() => handleMouseEnter(index)}
//             onMouseLeave={handleMouseLeave}
//             aria-label={`Select ${style.label} style`}
//           >
//             {style.label}
//           </Button>

//           {activeIndex === index && (
//             <Popover
//               className="bpl-preview-popover shadow-lg rounded-md z-[1000]"
//               position="bottom center"
//               focusOnMount={false}
//               onClose={() => setActiveIndex(null)}
//               onMouseEnter={() => setIsHoveringPreview(true)}
//               onMouseLeave={() => {
//                 setIsHoveringPreview(false);
//                 handleMouseLeave();
//               }}
//             >
//               <div
//                 className="bpl-preview-content bg-white"
//                 style={{
//                   width: previewWidth,
//                   height: previewHeight,
//                   cursor: "pointer",
//                   overflow: "hidden",
//                 }}
//                 onClick={() => handleStyleSelect(style.value)}
//               >
//                 <BlockPreview
//                   blocks={parse(style.content)}
//                   viewportWidth={viewportWidth}
//                   __experimentalLive
//                 />
//               </div>
//             </Popover>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BPlBlockPreview;
