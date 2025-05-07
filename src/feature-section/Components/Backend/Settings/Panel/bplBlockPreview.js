import React, { useState } from "react";
import { Button, Popover } from "@wordpress/components";


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
              className={`bPl-previewBtn ${value === theme.value ? "bPl-activeBtn" : ""
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


















































// import { BlockPreview } from '@wordpress/block-editor';
// import { parse } from '@wordpress/blocks';
// import { Button, Popover } from '@wordpress/components';
// import { useState } from 'react';

// const BplBlockPreview = ({
//   blocks,
//   value,
//   onChange,
//   minHeight = "",
//   minWidth = "200px"
// }) => {

//   const [activeIndex, setActiveIndex] = useState(null);

//   const handleButtonClick = (blockValue, idx) => {
//     onChange(blockValue);
//     setActiveIndex(idx);
//     handleBlockReplace(blockValue)
//   };

//   const handleMouseInteraction = (idx, isEnter) => {
//     setActiveIndex(isEnter ? idx : null);
//   };

//   const handleBlockReplace = (blockContent) => {
//     onChange(blockContent);
//   };

//   return (
//     <div className='bPlBlockPreviewWrapper'>
//       {blocks.map((block, idx) => (
//         <div key={idx}>
//           <div>    <Button
//             className={`bPl-previewBtn ${value === block.value ? "bPl-activeBtn" : ""}`}
//             onClick={() => handleButtonClick(block.value, idx, block.value)}
//             onMouseEnter={() => handleMouseInteraction(idx, true)}
//             onMouseLeave={() => handleMouseInteraction(idx, false)}
//           >
//             {block.label}
//           </Button></div>
//           {activeIndex === idx && (
//             <Popover
//               style={{ cursor: "pointer" }}
//               onClick={() => handleButtonClick(block.value, idx, block.value)}
//             >
//               <div
//                 onMouseEnter={() => handleMouseInteraction(idx, true)}
//                 onMouseLeave={() => handleMouseInteraction(idx, false)}
//                 style={{ minWidth, minHeight }}
//               >
//                 <BlockPreview
//                   blocks={parse(block.content)}
//                   viewportWidth={1600}
//                 />
//               </div>
//             </Popover>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BplBlockPreview;