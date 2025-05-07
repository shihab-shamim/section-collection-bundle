import { produce } from "immer";

export const updateData = (attr, value, ...props) => {
  if (props.length === 0) {
    return value;
  }
  const [currentProp, ...remainingProps] = props;
  if (remainingProps.length === 0) {
    return produce(attr, draft => {
      draft[currentProp] = value;
    });
  }
  return produce(attr, draft => {
    if (!Object.prototype.hasOwnProperty.call(draft, currentProp)) {
      draft[currentProp] = {};
    }
    draft[currentProp] = updateData(draft[currentProp], value, ...remainingProps);
  });
};


export const getBorderStyles = (border) => {
  if (!border) return "";

  const { width, style, color, side } = border;
  if (!width || !style || !color) return "";


  if (side === "all") {
    return `border: ${width} ${style} ${color} !important;`;
  }

  const formattedSides = side.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase().split(" ");

  return `
    ${formattedSides.includes("top") ? `border-top: ${width} ${style} ${color} !important;` : ""}
    ${formattedSides.includes("right") ? `border-right: ${width} ${style} ${color} !important;` : ""}
    ${formattedSides.includes("bottom") ? `border-bottom: ${width} ${style} ${color} !important;` : ""}
    ${formattedSides.includes("left") ? `border-left: ${width} ${style} ${color} !important;` : ""}
  `;

};



export const themeSwitch = (layout, attributes = {}) => produce(attributes, (draft) => {
// console.log("layout", attributes);

  // draft['layout']['theme'] = theme;
  // draft.layout.theme = layout;



  switch (layout) {
    case 'theme-1':

      draft["features"] = [
        {
          icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\"><circle cx=\"9\" cy=\"7\" r=\"1\" fill=\"currentColor\"></circle><path fill=\"currentColor\" d=\"M27 22.14V18a2 2 0 0 0-2-2h-8v-4h9a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h9v4H7a2 2 0 0 0-2 2v4.14a4 4 0 1 0 2 0V18h8v4h-3v8h8v-8h-3v-4h8v4.14a4 4 0 1 0 2 0M8 26a2 2 0 1 1-2-2a2 2 0 0 1 2 2m10-2v4h-4v-4ZM6 10V4h20v6Zm20 18a2 2 0 1 1 2-2a2 2 0 0 1-2 2\"></path></svg>",
          title: "01 — Sitemap",
          description: "Generate the information structure of the website using a visual sitemap."
        },

        {
          icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" color=\"currentColor\"><path d=\"M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12m0 0h19M13 7h4\"></path><circle cx=\"8.25\" cy=\"7\" r=\"1.25\"></circle><circle cx=\"8.25\" cy=\"17\" r=\"1.25\"></circle><path d=\"M13 17h4\"></path></g></svg>",
          title: "02 — Custom data retention",
          description: "Generate the information structure of the website using a visual sitemap."
        },

        {
          icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M20 4.746a2.75 2.75 0 0 0-2.75-2.75H4.75A2.75 2.75 0 0 0 2 4.746v12.5a2.75 2.75 0 0 0 2.75 2.75h6.666l.105-.42c.096-.384.253-.748.463-1.08H4.75c-.69 0-1.25-.56-1.25-1.25v-12.5c0-.69.56-1.25 1.25-1.25h12.5c.69 0 1.25.56 1.25 1.25v7.113c.437-.4.956-.66 1.5-.781zm-4 9.609V6.728l-.007-.1A.744.744 0 0 0 15.25 6a.74.74 0 0 0-.75.73v8.541l.007.099c.017.125.067.24.142.337zm-8.507-5.71a.75.75 0 0 0-.743-.646a.75.75 0 0 0-.75.747v6.507l.007.101c.05.365.363.645.743.645c.414 0 .75-.334.75-.746V8.746zm4.214 2.972a.73.73 0 0 0-.732-.62a.73.73 0 0 0-.725.733l.035 3.547l.008.099a.73.73 0 0 0 .732.62a.73.73 0 0 0 .725-.733l-.035-3.548zm7.393 1.052l-5.903 5.902a2.7 2.7 0 0 0-.706 1.248l-.458 1.83a1.087 1.087 0 0 0 1.319 1.319l1.83-.458a2.7 2.7 0 0 0 1.248-.706l5.902-5.903A2.286 2.286 0 0 0 19.1 12.67\"></path></svg>",
          title: "03 — Redaction of PII",
          description: "Generate the information structure of the website using a visual sitemap.",
        },

        {
          icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 36 36\"><path fill=\"currentColor\" d=\"M4 18.24V7.91c0-.65 2.09-1.84 5.5-1.84S15 7.27 15 7.91V9.7a19 19 0 0 1 2-.2V7.91c0-2.52-3.77-3.84-7.5-3.84S2 5.4 2 7.91v10.33C2 20.4 4.77 21.67 7.9 22v-2C5.46 19.68 4 18.78 4 18.24\" class=\"clr-i-outline--alerted clr-i-outline-path-1--alerted\"></path><path fill=\"currentColor\" d=\"M24.65 18.52c-.85 1-3.42 2-6.65 2a14.5 14.5 0 0 1-4-.52v1.46a16.3 16.3 0 0 0 4 .47a12.76 12.76 0 0 0 6.65-1.56v3.12c-.85 1-3.42 2-6.65 2a14.5 14.5 0 0 1-4-.53v1.46a16.3 16.3 0 0 0 4 .47a12.76 12.76 0 0 0 6.65-1.56v2.29C24.65 28.57 22 30 18 30s-6.65-1.43-6.65-2.38V15.23c0-.95 2.65-2.38 6.65-2.38h.75a3.7 3.7 0 0 1-.08-2h-.66c-4.93 0-8.65 1.88-8.65 4.38v12.31c0 2.5 3.72 4.38 8.65 4.38s8.65-1.88 8.65-4.38V15.4h-2Z\" class=\"clr-i-outline--alerted clr-i-outline-path-2--alerted\"></path><path fill=\"currentColor\" d=\"M22 4.8c-1.75.63-3 1.68-3 3.12V9.5h.25Z\" class=\"clr-i-outline--alerted clr-i-outline-path-3--alerted\"></path><path fill=\"currentColor\" d=\"M33.68 15.4H32v2.84c0 .54-1.46 1.44-3.9 1.73v2c3.13-.32 5.9-1.6 5.9-3.75v-2.84Z\" class=\"clr-i-outline--alerted clr-i-outline-path-4--alerted\"></path><path fill=\"currentColor\" d=\"M26.85 1.14L21.13 11a1.28 1.28 0 0 0 1.1 2h11.45a1.28 1.28 0 0 0 1.1-2l-5.72-9.86a1.28 1.28 0 0 0-2.21 0\" class=\"clr-i-outline--alerted clr-i-outline-path-5--alerted clr-i-alert\"></path><path fill=\"none\" d=\"M0 0h36v36H0z\"></path></svg>",
          title: "04 — Zero-Retention",
          description: "Generate the information structure of the website using a visual sitemap."

        },

        {
          icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 1024 1024\"><path fill=\"currentColor\" d=\"m665.216 768l110.848 192h-73.856L591.36 768H433.024L322.176 960H248.32l110.848-192H160a32 32 0 0 1-32-32V192H64a32 32 0 0 1 0-64h896a32 32 0 1 1 0 64h-64v544a32 32 0 0 1-32 32zM832 192H192v512h640zM352 448a32 32 0 0 1 32 32v64a32 32 0 0 1-64 0v-64a32 32 0 0 1 32-32m160-64a32 32 0 0 1 32 32v128a32 32 0 0 1-64 0V416a32 32 0 0 1 32-32m160-64a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V352a32 32 0 0 1 32-32\"></path></svg>",
          title: "05 — Response Procedure",
          description: "Generate the information structure of the website using a visual sitemap."
        },
        
        {
          icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 36 36\"><path fill=\"currentColor\" d=\"M4 18.24V7.91c0-.65 2.09-1.84 5.5-1.84S15 7.27 15 7.91V9.7a19 19 0 0 1 2-.2V7.91c0-2.52-3.77-3.84-7.5-3.84S2 5.4 2 7.91v10.33C2 20.4 4.77 21.67 7.9 22v-2C5.46 19.68 4 18.78 4 18.24\" class=\"clr-i-outline--alerted clr-i-outline-path-1--alerted\"></path><path fill=\"currentColor\" d=\"M24.65 18.52c-.85 1-3.42 2-6.65 2a14.5 14.5 0 0 1-4-.52v1.46a16.3 16.3 0 0 0 4 .47a12.76 12.76 0 0 0 6.65-1.56v3.12c-.85 1-3.42 2-6.65 2a14.5 14.5 0 0 1-4-.53v1.46a16.3 16.3 0 0 0 4 .47a12.76 12.76 0 0 0 6.65-1.56v2.29C24.65 28.57 22 30 18 30s-6.65-1.43-6.65-2.38V15.23c0-.95 2.65-2.38 6.65-2.38h.75a3.7 3.7 0 0 1-.08-2h-.66c-4.93 0-8.65 1.88-8.65 4.38v12.31c0 2.5 3.72 4.38 8.65 4.38s8.65-1.88 8.65-4.38V15.4h-2Z\" class=\"clr-i-outline--alerted clr-i-outline-path-2--alerted\"></path><path fill=\"currentColor\" d=\"M22 4.8c-1.75.63-3 1.68-3 3.12V9.5h.25Z\" class=\"clr-i-outline--alerted clr-i-outline-path-3--alerted\"></path><path fill=\"currentColor\" d=\"M33.68 15.4H32v2.84c0 .54-1.46 1.44-3.9 1.73v2c3.13-.32 5.9-1.6 5.9-3.75v-2.84Z\" class=\"clr-i-outline--alerted clr-i-outline-path-4--alerted\"></path><path fill=\"currentColor\" d=\"M26.85 1.14L21.13 11a1.28 1.28 0 0 0 1.1 2h11.45a1.28 1.28 0 0 0 1.1-2l-5.72-9.86a1.28 1.28 0 0 0-2.21 0\" class=\"clr-i-outline--alerted clr-i-outline-path-5--alerted clr-i-alert\"></path><path fill=\"none\" d=\"M0 0h36v36H0z\"></path></svg>",
          title: "04 — Zero-Retention",
          description: "Generate the information structure of the website using a visual sitemap."

        },
        
        {
          icon: "<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'><g fill='none' stroke='currentColor' strokeLinecap='round' strokeWidth='1.5'><path d='M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2' /><path strokeLinejoin='round' d='m13 7l2 2l5-5' /><path d='m2 12.5l1.752-1.533a2.3 2.3 0 0 1 3.14.105l4.29 4.29a2 2 0 0 0 2.564.222l.299-.21a3 3 0 0 1 3.731.225L21 18.5' opacity='.5' /></g></svg>",
          title: "07 — Well Done!",
          description: "Generate the information structure of the website using a visual sitemap. Expect minimal interruption with our promise of data recovery in no more than six hours."
        }
      ];
      draft["layout"]["theme"]="theme-1"
      draft["section"]["background"]["type"] = 'image';
      draft["section"]["background"]["color"] = '#2B3035';
      draft["section"]["background"]["gradient"] = 'linear-gradient(45deg, #FF0000, #00FF00)';
      draft["section"]["background"]["image"]["url"] = 'https://templates.bplugins.com/wp-content/uploads/2025/02/section-collection-plugin-bg-1.png';
      draft["section"]["background"]["position"] = 'center center';
      draft["section"]["background"]["attachment"] = 'initial';
      draft["section"]["background"]["repeat"] = 'no-repeat';
      draft["section"]["background"]["size"] = 'cover';
      draft["section"]["background"]["overlayColor"] = 'rgba(0, 0, 0, 0.1)';

      draft["section"]["padding"]["desktop"] = { top: '136px', right: '0px', bottom: '136px', left: '0px' };
      draft["section"]["padding"]["tablet"] = { top: '60px', right: '0px', bottom: '60px', left: '0px' };
      draft["section"]["padding"]["mobile"] = { top: '30px', right: '30px', bottom: '30px', left: '30px' };

      draft["section"]["margin"]["desktop"] = { top: '0px', right: '0px', bottom: '0px', left: '0px' };
      draft["section"]["margin"]["tablet"] = { top: '0px', right: '0px', bottom: '0px', left: '0px' };
      draft["section"]["margin"]["mobile"] = { top: '0px', right: '0px', bottom: '0px', left: '0px' };


      draft["heading"]["subTitle"]["text"] = "Easy Usage";
      draft["heading"]["subTitle"]["iconColor"] = "#fff";
      draft["heading"]["subTitle"]["bg"] = "#5422D9";
      draft["heading"]["subTitle"]["height"] = "18px";
      // draft["heading"]["subTitle"]["showSubTitle"] = "true";
      draft["heading"]["subTitle"]["radius"] = { top: '3px', right: '3px', bottom: '3px', left: '3px' };
      draft["heading"]["subTitle"]["padding"] = { top: '5px', right: '8px', bottom: '5px', left: '8px' };
      draft["heading"]["subTitle"]["icon"] = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z\" clip-rule=\"evenodd\"></path></svg>";

      draft["heading"]["subTitle"]["color"] = "#fff";
      draft["heading"]["subTitle"]["typo"]["fontFamily"] = "Manrope";
      draft["heading"]["subTitle"]["typo"]["fontCategory"] = "sans-serif";
      draft["heading"]["subTitle"]["typo"]["fontWeight"] = 500;
      draft["heading"]["subTitle"]["typo"]["lineHeight"] = "18px";
      draft["heading"]["subTitle"]["typo"]["fontStyle"] = "normal";
      draft["heading"]["subTitle"]["typo"]["fontSize"]["desktop"] = 15;
      draft["heading"]["subTitle"]["typo"]["fontSize"]["tablet"] = 12;
      draft["heading"]["subTitle"]["typo"]["fontSize"]["mobile"] = 12;

      // title
      draft["heading"]["title"]["text"] = "Featured Tools Use";
      // draft["heading"]["title"]["showtitle"] = "true";
      draft["heading"]["title"]["margin"] = { top: '0px', right: '0px', bottom: '16px', left: '0px' };
      draft["heading"]["title"]["padding"] = { top: '0px', right: '10px', bottom: '0px', left: '10px' };

      draft["heading"]["title"]["color"] = "#fff";
      draft["heading"]["title"]["typo"]["fontFamily"] = "Default";
      draft["heading"]["title"]["typo"]["fontCategory"] = "sans-serif";
      draft["heading"]["title"]["typo"]["fontWeight"] = 700;
      draft["heading"]["title"]["typo"]["lineHeight"] = "70px";
      draft["heading"]["title"]["typo"]["fontStyle"] = "normal";
      draft["heading"]["title"]["typo"]["textTransform"] = "none";
      draft["heading"]["title"]["typo"]["textDecoration"] = "auto";
      draft["heading"]["title"]["typo"]["letterSpace"] = "0px";
      draft["heading"]["title"]["typo"]["fontSize"]["desktop"] = 55;
      draft["heading"]["title"]["typo"]["fontSize"]["tablet"] = 28;
      draft["heading"]["title"]["typo"]["fontSize"]["mobile"] = 28;

   
      draft["style"]["bg"] = 'rgb(13, 14, 16)';
      draft["style"]["radius"] = { top: '16px', right: '16px', bottom: '16px', left: '16px' };
      draft["style"]["padding"] = { top: '20px', right: '20px', bottom: '20px', left: '20px' };
      draft["style"]["gap"] = "23px";
      draft["style"]["icon"]["color"] = "#fff";
      draft["style"]["margin"] = { top: '0px', right: '-12px', bottom: '0px', left: '-12px' };

      draft["style"]["title"]["color"] = "rgba(255, 255, 255, 0.9)";

      draft["style"]["title"]["typo"]["fontWeight"] = 800;
      draft["style"]["title"]["typo"]["fontStyle"] = "normal";
      draft["style"]["title"]["typo"]["textTransform"] = "none";
      draft["style"]["title"]["typo"]["textDecoration"] = "auto";
      draft["style"]["title"]["typo"]["letterSpace"] = "0px";
      draft["style"]["title"]["typo"]["fontFamily"] = "Manrope";
      draft["style"]["title"]["typo"]["fontCategory"] = "sans-serif";
      draft["style"]["title"]["typo"]["lineHeight"] = "26px";
      draft["style"]["title"]["typo"]["fontSize"]["desktop"] = 18;
      draft["style"]["title"]["typo"]["fontSize"]["tablet"] = 18;
      draft["style"]["title"]["typo"]["fontSize"]["mobile"] = 18;

      draft["style"]["icon"]["height"] = "30px";

      draft["style"]["des"]["color"] = "rgba(255, 255, 255, 0.43)";
      draft["style"]["des"]["typo"]["fontFamily"] = "Manrope";
      draft["style"]["des"]["typo"]["fontCategory"] = "sans-serif";
      draft["style"]["des"]["typo"]["fontWeight"] = 500;
      draft["style"]["des"]["typo"]["fontStyle"] = "normal";
      draft["style"]["des"]["typo"]["textTransform"] = "none";
      draft["style"]["des"]["typo"]["textDecoration"] = "auto";
      draft["style"]["des"]["typo"]["letterSpace"] = "0px";
      draft["style"]["des"]["typo"]["lineHeight"] = "27px";

      draft["style"]["des"]["typo"]["fontSize"]["desktop"] = 14;
      draft["style"]["des"]["typo"]["fontSize"]["tablet"] = 14;
      draft["style"]["des"]["typo"]["fontSize"]["mobile"] = 14;


      break;

    case 'theme-2':


      draft["features"] = [
        {
          icon: "<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'><path fill='currentColor' d='M12.222 5.977a5.4 5.4 0 0 1 3.823 1.496l2.868-2.868A9.6 9.6 0 0 0 12.222 2a10 10 0 0 0-8.937 5.51l3.341 2.59a5.96 5.96 0 0 1 5.596-4.123' opacity='.7'></path><path fill='currentColor' d='M3.285 7.51a10.01 10.01 0 0 0 0 8.98l3.341-2.59a5.9 5.9 0 0 1 0-3.8z'></path><path fill='currentColor' d='M15.608 17.068A6.033 6.033 0 0 1 6.626 13.9l-3.34 2.59A10 10 0 0 0 12.221 22a9.55 9.55 0 0 0 6.618-2.423z' opacity='.5'></path><path fill='currentColor' d='M21.64 10.182h-9.418v3.868h5.382a4.6 4.6 0 0 1-1.996 3.018l-.01.006l.01-.006l3.232 2.51a9.75 9.75 0 0 0 2.982-7.35q0-1.032-.182-2.046' opacity='.25'></path></svg>",
          title: "Real-Time Google",
          description: "Search Integration"
        },
        {
          icon: "<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'><path fill='currentColor' d='M10 20h3.627a5.25 5.25 0 1 1 8.369-6.34Q22 12.9 22 12c0-.442 0-1.608-.002-2H2.002C2 10.392 2 11.558 2 12c0 3.771 0 5.657 1.172 6.828S6.229 20 10 20' opacity='.5'></path><path fill='currentColor' d='M5.25 16a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75'></path><path fill='currentColor' fill-rule='evenodd' d='M17.75 14.5a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5M14 16.75a3.75 3.75 0 1 1 6.879 2.068l.901.902a.75.75 0 1 1-1.06 1.06l-.902-.901A3.75 3.75 0 0 1 14 16.75' clip-rule='evenodd'></path><path fill='currentColor' d='M9.995 4h4.01c3.781 0 5.672 0 6.846 1.116c.846.803 1.083 1.96 1.149 3.884v1H2V9c.066-1.925.303-3.08 1.149-3.884C4.323 4 6.214 4 9.995 4'></path></svg>",
          title: "Agent Mode",
          description: "Research with extensive citations"
        },
        {
          icon: "<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'><path fill='currentColor' d='M3 10c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172S21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172S3 17.771 3 14z' opacity='.5'></path><path fill='currentColor' d='M16.519 16.501c.175-.136.334-.295.651-.612l3.957-3.958c.096-.095.052-.26-.075-.305a4.3 4.3 0 0 1-1.644-1.034a4.3 4.3 0 0 1-1.034-1.644c-.045-.127-.21-.171-.305-.075L14.11 12.83c-.317.317-.476.476-.612.651q-.243.311-.412.666c-.095.2-.166.414-.308.84l-.184.55l-.292.875l-.273.82a.584.584 0 0 0 .738.738l.82-.273l.875-.292l.55-.184c.426-.142.64-.212.84-.308q.355-.17.666-.412m5.849-5.809a2.163 2.163 0 1 0-3.06-3.059l-.126.128a.52.52 0 0 0-.148.465c.02.107.055.265.12.452c.13.375.376.867.839 1.33s.955.709 1.33.839c.188.065.345.1.452.12a.53.53 0 0 0 .465-.148z'></path><path fill='currentColor' fill-rule='evenodd' d='M7.25 9A.75.75 0 0 1 8 8.25h6.5a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 9m0 4a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75' clip-rule='evenodd'></path></svg>",

          title: "Chat with your",
          description: "PDF and Docs"
        },
        {
          icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"m20.83 10.715l-.518 1.932c-.605 2.255-.907 3.383-1.592 4.114a4 4 0 0 1-2.01 1.161q-.145.034-.295.052c-.915.113-2.032-.186-4.064-.73c-2.255-.605-3.383-.907-4.114-1.592a4 4 0 0 1-1.161-2.011c-.228-.976.074-2.103.679-4.358l.517-1.932l.244-.905c.455-1.666.761-2.583 1.348-3.21a4 4 0 0 1 2.01-1.16c.976-.228 2.104.074 4.36.679c2.254.604 3.382.906 4.113 1.59a4 4 0 0 1 1.161 2.012c.228.976-.075 2.103-.679 4.358m-9.778-.91a.75.75 0 0 1 .919-.53l4.83 1.295a.75.75 0 1 1-.389 1.448l-4.83-1.294a.75.75 0 0 1-.53-.918m-.776 2.898a.75.75 0 0 1 .918-.53l2.898.777a.75.75 0 1 1-.388 1.448l-2.898-.776a.75.75 0 0 1-.53-.919\" clip-rule=\"evenodd\"></path><path fill=\"currentColor\" d=\"M16.415 17.975a4 4 0 0 1-1.068 1.677c-.731.685-1.859.987-4.114 1.591s-3.383.907-4.358.679a4 4 0 0 1-2.011-1.161c-.685-.731-.988-1.859-1.592-4.114l-.517-1.932c-.605-2.255-.907-3.383-.68-4.358a4 4 0 0 1 1.162-2.011c.731-.685 1.859-.987 4.114-1.592q.638-.172 1.165-.309l-.244.906l-.517 1.932c-.605 2.255-.907 3.382-.68 4.358a4 4 0 0 0 1.162 2.011c.731.685 1.859.987 4.114 1.592c2.032.544 3.149.843 4.064.73\" opacity=\".5\"></path></svg>",
          title: "Summarize",
          description: "Webpages"
        },
        {
          icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" color=\"currentColor\"><path d=\"M7 18v-2.5m0 0V14c0-.471 0-.707.154-.854C7.308 13 7.555 13 8.05 13h.7c.725 0 1.313.56 1.313 1.25S9.475 15.5 8.75 15.5zM21 13h-1.312c-.825 0-1.238 0-1.494.244s-.256.637-.256 1.423v.833m0 2.5v-2.5m0 0h2.187m-4.375 0c0 1.38-1.175 2.5-2.625 2.5c-.327 0-.49 0-.613-.067c-.291-.16-.262-.485-.262-.766v-3.334c0-.281-.03-.606.262-.766c.122-.067.286-.067.613-.067c1.45 0 2.625 1.12 2.625 2.5\"></path><path d=\"M15 22h-4.273c-3.26 0-4.892 0-6.024-.798a4.1 4.1 0 0 1-.855-.805C3 19.331 3 17.797 3 14.727v-2.545c0-2.963 0-4.445.469-5.628c.754-1.903 2.348-3.403 4.37-4.113C9.095 2 10.668 2 13.818 2c1.798 0 2.698 0 3.416.252c1.155.406 2.066 1.263 2.497 2.35C20 5.278 20 6.125 20 7.818V10\"></path><path d=\"M3 12a3.333 3.333 0 0 1 3.333-3.333c.666 0 1.451.116 2.098-.057A1.67 1.67 0 0 0 9.61 7.43c.173-.647.057-1.432.057-2.098A3.333 3.333 0 0 1 13 2\"></path></g></svg>",
          title: "Generate human-like",
          description: "PDF and Docs"
        },
        {
          icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 1024 1024\"><path fill=\"currentColor\" fill-opacity=\".15\" d=\"M512 552c54.3 0 98-43.2 98-96V232c0-52.8-43.7-96-98-96s-98 43.2-98 96v224c0 52.8 43.7 96 98 96\"></path><path fill=\"currentColor\" d=\"M842 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8c0 140.3-113.7 254-254 254S258 594.3 258 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8c0 168.7 126.6 307.9 290 327.6V884H326.7c-13.7 0-24.7 14.3-24.7 32v36c0 4.4 2.8 8 6.2 8h407.6c3.4 0 6.2-3.6 6.2-8v-36c0-17.7-11-32-24.7-32H548V782.1c165.3-18 294-158 294-328.1\"></path><path fill=\"currentColor\" d=\"M512 624c93.9 0 170-75.2 170-168V232c0-92.8-76.1-168-170-168s-170 75.2-170 168v224c0 92.8 76.1 168 170 168m-98-392c0-52.8 43.7-96 98-96s98 43.2 98 96v224c0 52.8-43.7 96-98 96s-98-43.2-98-96z\"></path></svg>",
          title: "Summarize",
          description: "Audio Files"
        },
        {
          icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 20 20\"><path fill=\"currentColor\" d=\"M17.132 1.06a.5.5 0 0 1 .677.203A9.96 9.96 0 0 1 19 6a9.96 9.96 0 0 1-1.19 4.737a.5.5 0 1 1-.881-.474A8.96 8.96 0 0 0 18 6a8.96 8.96 0 0 0-1.071-4.263a.5.5 0 0 1 .203-.677m-2.325 1.974a.5.5 0 0 1 .654.269A7 7 0 0 1 16 6a7 7 0 0 1-.539 2.697a.5.5 0 1 1-.922-.385A6 6 0 0 0 15 6c0-.82-.164-1.6-.461-2.312a.5.5 0 0 1 .268-.654M5 6a4 4 0 1 1 8 0a4 4 0 0 1-8 0m4-3a3 3 0 1 0 0 6a3 3 0 0 0 0-6M2 13c0-1.113.903-2 2.009-2H14a2 2 0 0 1 2 2c0 1.691-.833 2.966-2.135 3.797C12.583 17.614 10.855 18 9 18s-3.583-.386-4.865-1.203C2.833 15.967 2 14.69 2 13m2.009-1C3.448 12 3 12.447 3 13c0 1.309.622 2.284 1.673 2.953C5.743 16.636 7.265 17 9 17s3.257-.364 4.327-1.047C14.377 15.283 15 14.31 15 13a1 1 0 0 0-1-1z\"></path></svg>",
          title: "Write in your",
          description: "Brand Voice"
        },
        {
          icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M19 13.25a.75.75 0 0 1 .75.75v2.25H22a.75.75 0 0 1 0 1.5h-2.25V20a.75.75 0 0 1-1.5 0v-2.25H16a.75.75 0 0 1 0-1.5h2.25V14a.75.75 0 0 1 .75-.75M9 7.75a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5M6.25 9a2.75 2.75 0 1 1 5.5 0a2.75 2.75 0 0 1-5.5 0\" opacity=\".5\"></path><path fill=\"currentColor\" d=\"M12.633 3.25H9.367c-1.092 0-1.958 0-2.655.057c-.714.058-1.317.18-1.868.46a4.75 4.75 0 0 0-2.076 2.077c-.281.55-.403 1.154-.461 1.868c-.057.697-.057 1.563-.057 2.655v3.266c0 .937 0 1.708.036 2.348q.005.104.013.2l.001.017l.007.09c.058.714.18 1.317.46 1.869a4.75 4.75 0 0 0 2.286 2.173q.158.069.323.121c.405.132.845.202 1.336.242c.697.057 1.563.057 2.655.057h3.883a.75.75 0 1 0 0-1.5H9.4c-1.132 0-1.937 0-2.566-.052c-.62-.05-1.005-.147-1.31-.302a3.25 3.25 0 0 1-1.42-1.42c-.16-.315-.257-.714-.307-1.37l-.002-.035l-.01-.17v-.042a.3.3 0 0 1 .024-.073l.004-.006l.023-.033c.03-.04.071-.09.148-.182l.062-.075c.431-.516.724-.866.97-1.114c.24-.243.38-.328.483-.366a1.25 1.25 0 0 1 .859 0c.103.038.242.123.484.366c.245.248.538.598.969 1.114a1.58 1.58 0 0 0 2.351.086l3.004-3.11c.41-.425.687-.71.917-.913c.224-.196.353-.267.451-.3a1.25 1.25 0 0 1 .79 0c.13.044.3.149.656.49a.75.75 0 1 0 1.04-1.08c-.382-.368-.756-.677-1.223-.833a2.75 2.75 0 0 0-1.737 0c-.368.123-.672.338-.966.596a18 18 0 0 0-.985.975l-3.026 3.133a.08.08 0 0 1-.12-.004l-.021-.026c-.404-.484-.738-.885-1.036-1.185c-.307-.31-.63-.57-1.033-.718a2.75 2.75 0 0 0-1.888 0c-.403.148-.727.408-1.034.718a8 8 0 0 0-.201.211V10.4c0-1.132 0-1.937.052-2.566c.05-.62.147-1.005.302-1.31a3.25 3.25 0 0 1 1.42-1.42c.305-.155.69-.251 1.31-.302c.63-.051 1.434-.052 2.566-.052h3.2c1.133 0 1.937 0 2.566.052c.62.05 1.005.147 1.31.302a3.25 3.25 0 0 1 1.42 1.42c.155.305.251.69.302 1.31c.051.63.052 1.434.052 2.566a.75.75 0 0 0 1.5 0v-.033c0-1.092 0-1.958-.057-2.655c-.058-.714-.18-1.317-.46-1.868a4.75 4.75 0 0 0-2.076-2.076c-.552-.281-1.155-.403-1.869-.461c-.697-.057-1.563-.057-2.655-.057\"></path></svg>",
          title: "AI Image",
          description: "Generation"
        },
        {
          icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\"><g fill=\"none\"><path fill=\"currentColor\" fill-opacity=\".16\" d=\"M20.6 4H3.4A2.4 2.4 0 0 0 1 6.4v11.2A2.4 2.4 0 0 0 3.4 20h17.2a2.4 2.4 0 0 0 2.4-2.4V6.4A2.4 2.4 0 0 0 20.6 4\"></path><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M5 15h5m-5-3h5M5 9h5m3 3l2 2l4-4M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V6.4A2.4 2.4 0 0 1 3.4 4\"></path></g></svg>",
          title: "In-Built",
          description: "Fact Check"
        },
        {
          icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><path stroke-linecap=\"round\" d=\"M22 13v-1c0-3.771 0-5.657-1.172-6.828S17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h3\"></path><path stroke-linecap=\"round\" d=\"M10 16H6m-4-6h20\" opacity=\".4\"></path><circle cx=\"18\" cy=\"17\" r=\"3\"></circle><path stroke-linecap=\"round\" d=\"m20.5 19.5l1 1\"></path></g></svg>",
          title: "In-Built",
          description: "Plagiarism Check"
        },
      ];
        draft["layout"]["theme"]="theme-2"
      draft["section"]["background"]["type"] = 'solid';
      draft["section"]["background"]["color"] = '#2B3035';
      draft["section"]["background"]["gradient"] = 'linear-gradient(45deg, #FF0000, #00FF00)';
      draft["section"]["background"]["image"]["url"] = 'https://templates.bplugins.com/wp-content/uploads/2025/02/section-collection-plugin-bg-1.png';
      draft["section"]["background"]["position"] = 'center center';
      draft["section"]["background"]["attachment"] = 'initial';
      draft["section"]["background"]["repeat"] = 'no-repeat';
      draft["section"]["background"]["size"] = 'cover';
      draft["section"]["background"]["overlayColor"] = 'rgba(0, 0, 0, 0.1)';

      draft["section"]["padding"]["desktop"] = { top: '136px', right: '0px', bottom: '136px', left: '0px' };
      draft["section"]["padding"]["tablet"] = { top: '60px', right: '0px', bottom: '60px', left: '0px' };
      draft["section"]["padding"]["mobile"] = { top: '30px', right: '0px', bottom: '30px', left: '0px' };

      draft["section"]["margin"]["desktop"] = { top: '0px', right: '0px', bottom: '0px', left: '0px' };
      draft["section"]["margin"]["tablet"] = { top: '0px', right: '0px', bottom: '0px', left: '0px' };
      draft["section"]["margin"]["mobile"] = { top: '0px', right: '0px', bottom: '0px', left: '0px' };

      draft["style"]["radius"] = { top: '8px', right: '8px', bottom: '8px', left: '8px' };
      draft["style"]["padding"] = { top: '8px', right: '16px', bottom: '8px', left: '16px' };
    
      draft["style"]["icon"]["height"] = "46px";
      draft["style"]["gap"] = "12px";
      draft["style"]["itemGap"] = "16px";
      draft["style"]["icon"]["color"] = "#d4dce4";

      draft["style"]["bg"] = 'rgba(33, 37, 41, 1)';

      draft["style"]["shadow"] = [{
        hOffset: "0px",
        vOffset: "10px",
        blur: "20px",
        spreed: "-4px",
        color: "rgba(145, 158, 171, 0.16)",
        isInset: false
      }];
      
      draft["style"]["title"]["color"] = "#DEE2E6";
      draft["style"]["title"]["typo"]["fontFamily"] = "Manrope";
      draft["style"]["title"]["typo"]["fontCategory"] = "sans-serif";
      draft["style"]["title"]["typo"]["fontStyle"] = "normal";
      draft["style"]["title"]["typo"]["textTransform"] = "none";
      draft["style"]["title"]["typo"]["textDecoration"] = "auto";
      draft["style"]["title"]["typo"]["letterSpace"] = "0px";
      draft["style"]["title"]["typo"]["fontWeight"] = 700;
      draft["style"]["title"]["typo"]["lineHeight"] = "16px";
      draft["style"]["title"]["typo"]["fontSize"]["desktop"] = 19;
      draft["style"]["title"]["typo"]["fontSize"]["tablet"] = 19;
      draft["style"]["title"]["typo"]["fontSize"]["mobile"] = 19;

      draft["style"]["des"]["color"] = "#DEE2E6";
      draft["style"]["des"]["typo"]["fontFamily"] = "Manrope";
      draft["style"]["des"]["typo"]["fontCategory"] = "sans-serif";
      draft["style"]["des"]["typo"]["fontStyle"] = "normal";
      draft["style"]["des"]["typo"]["textTransform"] = "none";
      draft["style"]["des"]["typo"]["textDecoration"] = "auto";
      draft["style"]["des"]["typo"]["letterSpace"] = "0px";
      draft["style"]["des"]["typo"]["fontSize"]["desktop"] = 16;
      draft["style"]["des"]["typo"]["fontSize"]["tablet"] = 16;
      draft["style"]["des"]["typo"]["fontSize"]["mobile"] = 16;
      break;

    case 'theme-3':

      draft["features"] = [
        {
          icon: "<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 1200 1200'><path fill='currentColor' d='m910.143 91.119l-16.916 81.053a196.3 196.3 0 0 0-49.691 14.743l-58.229-58.825l-66.309 53.661l45.354 69.303c-10.104 13.862-18.357 29.104-24.623 45.503l-82.85-.374l-8.906 84.87l81.055 16.914c2.723 17.329 7.746 33.897 14.742 49.545l-58.824 58.376l53.66 66.31l69.303-45.43a196 196 0 0 0 45.504 24.698l-.375 82.774l84.871 8.904l16.838-81.053c17.346-2.722 34.035-7.666 49.695-14.669l58.301 58.825l66.309-53.735l-45.428-69.229a195.8 195.8 0 0 0 24.697-45.503l82.773.3l8.906-84.87l-81.053-16.765c-2.725-17.354-7.66-34.103-14.67-49.77l58.824-58.227l-53.734-66.309l-69.229 45.354c-13.869-10.111-29.17-18.428-45.578-24.697l.373-82.774zm14.068 197.131c2.668.009 5.373.09 8.084.374c43.355 4.555 74.756 43.384 70.201 86.741c-4.555 43.355-43.385 74.83-86.742 70.274c-43.355-4.555-74.83-43.384-70.275-86.739c4.269-40.647 38.724-70.789 78.732-70.65m-608.981 6.96l-11.375 112.711c-23.205 6.187-45.185 15.324-65.486 27.092l-87.714-71.696l-82.55 82.55l71.698 87.788c-11.768 20.308-20.91 42.272-27.092 65.484L0 610.44v116.751l112.71 11.376a268 268 0 0 0 27.092 65.41l-71.698 87.789l82.55 82.55l87.789-71.697a268 268 0 0 0 65.411 27.093l11.375 112.71h116.752l11.301-112.71c23.212-6.183 45.178-15.325 65.484-27.093l87.788 71.697l82.55-82.55l-71.697-87.714c11.768-20.302 20.906-42.281 27.092-65.485l112.711-11.376V610.44L634.5 599.138c-6.186-23.225-15.314-45.243-27.092-65.561l71.697-87.714l-82.55-82.549l-87.713 71.696c-20.316-11.775-42.336-20.905-65.562-27.093l-11.301-112.71H315.23zm58.376 265.61c59.649 0 107.996 48.348 107.996 107.996S433.255 776.81 373.606 776.81S265.61 728.463 265.61 668.816c0-59.648 48.348-107.996 107.996-107.996m495.673 144.219l-11.9 59.273c-12.188 1.993-23.873 5.653-34.877 10.776l-41.012-43.033l-46.553 39.292l31.883 50.667c-7.102 10.143-12.959 21.308-17.363 33.306l-58.15-.301l-6.287 62.118l56.955 12.35a147.7 147.7 0 0 0 10.328 36.298l-41.312 42.659l37.721 48.497l48.721-33.229a136 136 0 0 0 31.957 18.037l-.225 60.621l59.648 6.511l11.824-59.349c12.189-1.991 23.869-5.579 34.875-10.702l41.014 43.033l46.625-39.291l-31.957-50.668c7.104-10.139 12.959-21.312 17.363-33.306l58.229.226l6.211-62.043l-56.953-12.35c-1.914-12.695-5.402-24.911-10.328-36.372l41.311-42.585l-37.719-48.572l-48.646 33.229c-9.746-7.396-20.498-13.449-32.031-18.036l.299-60.546zm9.879 144.144c1.873.009 3.783.092 5.688.301c30.473 3.331 52.521 31.745 49.32 63.465c-3.201 31.719-30.449 54.748-60.922 51.416s-52.596-31.746-49.395-63.466c3.001-29.738 27.19-51.818 55.309-51.716'></path></svg>",
          title: "Advance Dashboard",
          description: "Create AI images that visualize a  product or idea, draft a   creative concept, or push the limits.",
          link: "https://www.w3schools.com/css/css3_transitions.asp",
          buttonNewTab: false

        },

        {
          icon: "<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'><path fill='currentColor' d='M12 22A10 10 0 0 1 2 12A10 10 0 0 1 12 2c5.5 0 10 4 10 9a6 6 0 0 1-6 6h-1.8c-.3 0-.5.2-.5.5c0 .1.1.2.1.3c.4.5.6 1.1.6 1.7c.1 1.4-1 2.5-2.4 2.5m0-18a8 8 0 0 0-8 8a8 8 0 0 0 8 8c.3 0 .5-.2.5-.5c0-.2-.1-.3-.1-.4c-.4-.5-.6-1-.6-1.6c0-1.4 1.1-2.5 2.5-2.5H16a4 4 0 0 0 4-4c0-3.9-3.6-7-8-7m-5.5 6c.8 0 1.5.7 1.5 1.5S7.3 13 6.5 13S5 12.3 5 11.5S5.7 10 6.5 10m3-4c.8 0 1.5.7 1.5 1.5S10.3 9 9.5 9S8 8.3 8 7.5S8.7 6 9.5 6m5 0c.8 0 1.5.7 1.5 1.5S15.3 9 14.5 9S13 8.3 13 7.5S13.7 6 14.5 6m3 4c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5'></path></svg>",
          "title": "Customizable",
          description: "Create AI images that visualize a  product or idea, draft a   creative concept, or push the limits.",
          link: "https://pixellyo.com/nextai/html/block-page-fact.html",
          buttonNewTab: false

        },

        {

          icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-width=\"1.5\"><path d=\"M11 2c-4.055.007-6.178.107-7.535 1.464C2 4.928 2 7.285 2 11.999s0 7.071 1.465 8.536c1.464 1.464 3.821 1.464 8.535 1.464s7.071 0 8.536-1.464c1.357-1.357 1.456-3.48 1.464-7.536\" opacity=\".5\"></path><path stroke-linejoin=\"round\" d=\"m13 11l9-9m0 0h-5.344M22 2v5.344M21 3l-9 9m0 0h4m-4 0V8\"></path></g></svg>",
          title: "Scalable",
          description: "Create AI images that visualize a  product or idea, draft a   creative concept, or push the limits.",
          link: "https://bplugins.com/",
          buttonNewTab: false
        },

        {
          icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M7.5 5.6L5 7l1.4-2.5L5 2l2.5 1.4L10 2L8.6 4.5L10 7zm12 9.8L22 14l-1.4 2.5L22 19l-2.5-1.4L17 19l1.4-2.5L17 14zM22 2l-1.4 2.5L22 7l-2.5-1.4L17 7l1.4-2.5L17 2l2.5 1.4zm-8.66 10.78l2.44-2.44l-2.12-2.12l-2.44 2.44zm1.03-5.49l2.34 2.34c.39.37.39 1.02 0 1.41L5.04 22.71c-.39.39-1.04.39-1.41 0l-2.34-2.34c-.39-.37-.39-1.02 0-1.41L12.96 7.29c.39-.39 1.04-.39 1.41 0\"></path></svg>",
          title: "Magic Edit",
          description: "Create AI images that visualize a   product or idea, draft a   creative concept, or push the limits.",
          link: "https://wordpress.github.io/gutenberg/?path=/docs/components-bordercontrol--docs",
          buttonNewTab: false

        },
      ]
      draft["layout"]["theme"]="theme-3"

      draft["section"]["background"]["type"] = 'solid';
      draft["section"]["background"]["color"] = '#2b303500';
      draft["section"]["background"]["gradient"] = 'linear-gradient(45deg, #FF0000, #00FF00)';
      draft["section"]["background"]["image"]["url"] = 'https://templates.bplugins.com/wp-content/uploads/2025/02/section-collection-plugin-bg-1.png';
      draft["section"]["background"]["position"] = 'center center';
      draft["section"]["background"]["attachment"] = 'initial';
      draft["section"]["background"]["repeat"] = 'no-repeat';
      draft["section"]["background"]["size"] = 'cover';
      draft["section"]["background"]["overlayColor"] = 'rgba(0, 0, 0, 0.1)';

      draft["section"]["padding"]["desktop"] = { top: '0px', right: '0px', bottom: '0px', left: '0px' };
      draft["section"]["padding"]["tablet"] = { top: '0px', right: '0px', bottom: '0px', left: '0px' };
      draft["section"]["padding"]["mobile"] = { top: '0px', right: '30px', bottom: '0px', left: '30px' };

      draft["section"]["margin"]["desktop"] = { top: '0px', right: '0px', bottom: '0px', left: '0px' };
      draft["section"]["margin"]["tablet"] = { top: '0px', right: '0px', bottom: '0px', left: '0px' };
      draft["section"]["margin"]["mobile"] = { top: '0px', right: '0px', bottom: '0px', left: '0px' };


      draft["style"]["bg"] = 'rgba(0, 0, 0, 1)';
      draft["style"]["radius"] = { top: '8px', right: '8px', bottom: '8px', left: '8px' };
      draft["style"]["padding"] = { top: '24px', right: '24px', bottom: '24px', left: '24px' };



      draft["style"]["title"]["color"] = "rgb(252, 252, 253)";
      draft["style"]["title"]["typo"]["fontFamily"] = "Manrope";
      draft["style"]["title"]["typo"]["fontCategory"] = "sans-serif";
      draft["style"]["title"]["typo"]["fontStyle"] = "normal";
      draft["style"]["title"]["typo"]["textTransform"] = "none";
      draft["style"]["title"]["typo"]["textDecoration"] = "auto";
      draft["style"]["title"]["typo"]["letterSpace"] = "0px";
      draft["style"]["title"]["typo"]["fontWeight"] = 700;
      draft["style"]["title"]["typo"]["lineHeight"] = "19px";
      draft["style"]["title"]["typo"]["fontSize"]["desktop"] = 20;
      draft["style"]["title"]["typo"]["fontSize"]["tablet"] = 16;
      draft["style"]["title"]["typo"]["fontSize"]["mobile"] = 16;



      draft["style"]["des"]["color"] = "rgba(252, 252, 253, 0.7)";
      draft["style"]["des"]["typo"]["fontFamily"] = "Manrope";
      draft["style"]["des"]["typo"]["fontCategory"] = "sans-serif";
      draft["style"]["des"]["typo"]["fontStyle"] = "normal";
      draft["style"]["des"]["typo"]["textTransform"] = "none";
      draft["style"]["des"]["typo"]["textDecoration"] = "auto";
      draft["style"]["des"]["typo"]["letterSpace"] = "0px";
      draft["style"]["des"]["typo"]["fontWeight"] = 400;
      draft["style"]["des"]["typo"]["lineHeight"] = "";
      draft["style"]["des"]["typo"]["fontSize"]["desktop"] = 16;
      draft["style"]["des"]["typo"]["fontSize"]["tablet"] = 14;
      draft["style"]["des"]["typo"]["fontSize"]["mobile"] = 14;

      draft["style"]["icon"]["color"] = "rgba(252, 252, 253,1)";

      draft["style"]["icon"]["height"] = "24px";

      draft["style"]["iconButton"]["colorBg"] = 'rgba(18, 17, 17, 0.6)';
      draft["style"]["iconButton"]["height"] = '48px';
      draft["style"]["iconButton"]["border"] = { width: '1px', style: 'solid', color: 'rgba(252, 252, 253, 0.1)', side: 'all', radius: '8px' };

      draft["style"]["icon"]["hoverColor"] = 'rgba(9, 10, 12, 1)';
      draft["style"]["iconButton"]["hoverBg"] = 'rgba(246, 92, 52,1)';
      draft["style"]["title"]["hoverColor"] = 'rgba(246, 92, 52, 1)';

      break;


    case 'theme-4':

      draft["features"] = [
        {
          icon:'<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1200 1200"><path fill="currentColor" d="m910.143 91.119l-16.916 81.053a196.3 196.3 0 0 0-49.691 14.743l-58.229-58.825l-66.309 53.661l45.354 69.303c-10.104 13.862-18.357 29.104-24.623 45.503l-82.85-.374l-8.906 84.87l81.055 16.914c2.723 17.329 7.746 33.897 14.742 49.545l-58.824 58.376l53.66 66.31l69.303-45.43a196 196 0 0 0 45.504 24.698l-.375 82.774l84.871 8.904l16.838-81.053c17.346-2.722 34.035-7.666 49.695-14.669l58.301 58.825l66.309-53.735l-45.428-69.229a195.8 195.8 0 0 0 24.697-45.503l82.773.3l8.906-84.87l-81.053-16.765c-2.725-17.354-7.66-34.103-14.67-49.77l58.824-58.227l-53.734-66.309l-69.229 45.354c-13.869-10.111-29.17-18.428-45.578-24.697l.373-82.774zm14.068 197.131c2.668.009 5.373.09 8.084.374c43.355 4.555 74.756 43.384 70.201 86.741c-4.555 43.355-43.385 74.83-86.742 70.274c-43.355-4.555-74.83-43.384-70.275-86.739c4.269-40.647 38.724-70.789 78.732-70.65m-608.981 6.96l-11.375 112.711c-23.205 6.187-45.185 15.324-65.486 27.092l-87.714-71.696l-82.55 82.55l71.698 87.788c-11.768 20.308-20.91 42.272-27.092 65.484L0 610.44v116.751l112.71 11.376a268 268 0 0 0 27.092 65.41l-71.698 87.789l82.55 82.55l87.789-71.697a268 268 0 0 0 65.411 27.093l11.375 112.71h116.752l11.301-112.71c23.212-6.183 45.178-15.325 65.484-27.093l87.788 71.697l82.55-82.55l-71.697-87.714c11.768-20.302 20.906-42.281 27.092-65.485l112.711-11.376V610.44L634.5 599.138c-6.186-23.225-15.314-45.243-27.092-65.561l71.697-87.714l-82.55-82.549l-87.713 71.696c-20.316-11.775-42.336-20.905-65.562-27.093l-11.301-112.71H315.23zm58.376 265.61c59.649 0 107.996 48.348 107.996 107.996S433.255 776.81 373.606 776.81S265.61 728.463 265.61 668.816c0-59.648 48.348-107.996 107.996-107.996m495.673 144.219l-11.9 59.273c-12.188 1.993-23.873 5.653-34.877 10.776l-41.012-43.033l-46.553 39.292l31.883 50.667c-7.102 10.143-12.959 21.308-17.363 33.306l-58.15-.301l-6.287 62.118l56.955 12.35a147.7 147.7 0 0 0 10.328 36.298l-41.312 42.659l37.721 48.497l48.721-33.229a136 136 0 0 0 31.957 18.037l-.225 60.621l59.648 6.511l11.824-59.349c12.189-1.991 23.869-5.579 34.875-10.702l41.014 43.033l46.625-39.291l-31.957-50.668c7.104-10.139 12.959-21.312 17.363-33.306l58.229.226l6.211-62.043l-56.953-12.35c-1.914-12.695-5.402-24.911-10.328-36.372l41.311-42.585l-37.719-48.572l-48.646 33.229c-9.746-7.396-20.498-13.449-32.031-18.036l.299-60.546zm9.879 144.144c1.873.009 3.783.092 5.688.301c30.473 3.331 52.521 31.745 49.32 63.465c-3.201 31.719-30.449 54.748-60.922 51.416s-52.596-31.746-49.395-63.466c3.001-29.738 27.19-51.818 55.309-51.716"></path></svg>',
          title: "Advance Dashboard",
          description: "Create AI images that visualize a product or idea, draft a creative concept, or push the limits of what's possible.",
          link: "https://www.w3schools.com/css/css3_transitions.asp",
          buttonNewTab: false

        },

        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22A10 10 0 0 1 2 12A10 10 0 0 1 12 2c5.5 0 10 4 10 9a6 6 0 0 1-6 6h-1.8c-.3 0-.5.2-.5.5c0 .1.1.2.1.3c.4.5.6 1.1.6 1.7c.1 1.4-1 2.5-2.4 2.5m0-18a8 8 0 0 0-8 8a8 8 0 0 0 8 8c.3 0 .5-.2.5-.5c0-.2-.1-.3-.1-.4c-.4-.5-.6-1-.6-1.6c0-1.4 1.1-2.5 2.5-2.5H16a4 4 0 0 0 4-4c0-3.9-3.6-7-8-7m-5.5 6c.8 0 1.5.7 1.5 1.5S7.3 13 6.5 13S5 12.3 5 11.5S5.7 10 6.5 10m3-4c.8 0 1.5.7 1.5 1.5S10.3 9 9.5 9S8 8.3 8 7.5S8.7 6 9.5 6m5 0c.8 0 1.5.7 1.5 1.5S15.3 9 14.5 9S13 8.3 13 7.5S13.7 6 14.5 6m3 4c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5"></path></svg>',
          title: "Customizable",
          description: "Create AI images that visualize a product or idea, draft a creative concept, or push the limits of what's possible.",
          link: "https://pixellyo.com/nextai/html/block-page-fact.html",
          buttonNewTab: false

        },

        {

          icon: "<svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'><g fill='none' stroke='currentColor' stroke-linecap='round' stroke-width='1.5'><path d='M11 2c-4.055.007-6.178.107-7.535 1.464C2 4.928 2 7.285 2 11.999s0 7.071 1.465 8.536c1.464 1.464 3.821 1.464 8.535 1.464s7.071 0 8.536-1.464c1.357-1.357 1.456-3.48 1.464-7.536' opacity='.5'></path><path stroke-linejoin='round' d='m13 11l9-9m0 0h-5.344M22 2v5.344M21 3l-9 9m0 0h4m-4 0V8'></path></g></svg>",
          title: "Scalable",
          description: "Create AI images that visualize a product or idea, draft a creative concept, or push the limits of what's possible.",
          link: "https://wordpress.github.io/gutenberg/?path=/docs/components-bordercontrol--docs",
          buttonNewTab: false
        },

        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M7.5 5.6L5 7l1.4-2.5L5 2l2.5 1.4L10 2L8.6 4.5L10 7zm12 9.8L22 14l-1.4 2.5L22 19l-2.5-1.4L17 19l1.4-2.5L17 14zM22 2l-1.4 2.5L22 7l-2.5-1.4L17 7l1.4-2.5L17 2l2.5 1.4zm-8.66 10.78l2.44-2.44l-2.12-2.12l-2.44 2.44zm1.03-5.49l2.34 2.34c.39.37.39 1.02 0 1.41L5.04 22.71c-.39.39-1.04.39-1.41 0l-2.34-2.34c-.39-.37-.39-1.02 0-1.41L12.96 7.29c.39-.39 1.04-.39 1.41 0"></path></svg>',
          title: "Magic Edit",
          description: "Create AI images that visualize a product or idea, draft a creative concept, or push the limits of what's possible.",
          link: "https://pixellyo.com/nextai/html/block-page-fact.html",
          buttonNewTab: false

        },

        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M14 1.5a.5.5 0 0 0-1 0V2h-.5a.5.5 0 0 0 0 1h.5v.5a.5.5 0 0 0 1 0V3h.5a.5.5 0 0 0 0-1H14zm-9.588.426C4.51 1.453 4.924 1 5.5 1s.99.453 1.089.926a3.2 3.2 0 0 0 .864 1.62a3.2 3.2 0 0 0 1.62.865c.473.098.926.512.926 1.09c0 .576-.453.99-.926 1.088a3.2 3.2 0 0 0-1.62.865a3.2 3.2 0 0 0-.864 1.62c-.098.472-.512.926-1.09.926c-.576 0-.99-.453-1.088-.926a3.2 3.2 0 0 0-.865-1.621a3.2 3.2 0 0 0-1.62-.864c-.472-.098-.925-.511-.926-1.087c-.001-.578.453-.993.926-1.091a3.2 3.2 0 0 0 1.62-.864a3.2 3.2 0 0 0 .865-1.62M11 5.5q0-.264-.06-.5h.56A2.5 2.5 0 0 1 14 7.5v4a2.5 2.5 0 0 1-2.5 2.5h-4A2.5 2.5 0 0 1 5 11.5v-.56a2.1 2.1 0 0 0 1 0v.56A1.5 1.5 0 0 0 7.5 13h4a1.5 1.5 0 0 0 1.5-1.5v-4A1.5 1.5 0 0 0 11.5 6h-.56q.06-.236.06-.5m-3 3a.5.5 0 0 1 .5-.5H11a.5.5 0 0 1 0 1H8.5a.5.5 0 0 1-.5-.5m.5 1.5a.5.5 0 0 0 0 1H10a.5.5 0 0 0 0-1zm-6 2a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 0 1H3v.5a.5.5 0 0 1-1 0V14h-.5a.5.5 0 0 1 0-1H2v-.5a.5.5 0 0 1 .5-.5"></path></svg>',
          title: "Advance Prompt",
          description: "Create AI images that visualize a product or idea, draft a creative concept, or push the limits of what's possible.",
          link: "https://www.unminify2.com/",
          buttonNewTab: false

        },

        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 21 21"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m10.5 15.429l3.548 1.837a1 1 0 0 0 .907.006l2.992-1.496a1 1 0 0 0 .553-.894v-2.764a1 1 0 0 0-.553-.894L14.5 9.5l-3.46 1.792a1 1 0 0 0-.54.888z"></path><path d="m3.04 15.708l3.008 1.558a1 1 0 0 0 .907.006L10.5 15.5v-3.382a1 1 0 0 0-.553-.894L6.5 9.5l-3.46 1.792a1 1 0 0 0-.54.888v2.64a1 1 0 0 0 .54.888M6.5 9.429l3.548 1.837a1 1 0 0 0 .907.006L14.5 9.5V6.118a1 1 0 0 0-.553-.894l-2.992-1.496a1 1 0 0 0-.907.006L7.04 5.292a1 1 0 0 0-.54.888z"></path><path d="m6.846 5.673l3.207 1.603a1 1 0 0 0 .894 0L14.12 5.69h0m-3.274 5.983l3.207 1.603a1 1 0 0 0 .894 0l3.172-1.586h0m-15.273-.017l3.207 1.603a1 1 0 0 0 .894 0l3.172-1.586h0M10.5 7.5v4m4 2V17m-8-3.5V17"></path></g></svg>',
          title: "Modular",
          description: "Create AI images that visualize a product or idea, draft a creative concept, or push the limits of what's possible.",
          link: "https://wordpress.github.io/gutenberg/?path=/docs/docs-introduction--page",
          buttonNewTab: false

        },

        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.292 10.25v-4a3.5 3.5 0 0 1 3.5-3.5h2.448a3.5 3.5 0 0 1 1.447.313M13.75 21.25h2.458a3.5 3.5 0 0 0 3.5-3.5v-5.53c0-.505-.109-.999-.314-1.45m-7.706-7.707a3.5 3.5 0 0 1 1.027.712l5.968 5.97c.3.3.54.647.711 1.026m-7.706-7.708V8.77a2 2 0 0 0 2 2h5.706"></path><path fill="currentColor" fill-rule="evenodd" d="M6.5 23a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11m1.548-8.64a3.5 3.5 0 0 0-4.929 2.234a.5.5 0 0 0 .966.259A2.5 2.5 0 0 1 8.3 15.765h-.565a.5.5 0 0 0 0 1H9.5a.5.5 0 0 0 .5-.5V14.5a.5.5 0 0 0-1 0v.55a3.5 3.5 0 0 0-.952-.69m1.833 4.046a.5.5 0 0 0-.966-.259A2.5 2.5 0 0 1 4.7 19.235h.565a.5.5 0 0 0 0-1H3.5a.5.5 0 0 0-.5.5V20.5a.5.5 0 0 0 1 0v-.55a3.5 3.5 0 0 0 5.88-1.544" clip-rule="evenodd"></path></g></svg>',
          title: "Always in Sync",
          description: "Create AI images that visualize a product or idea, draft a creative concept, or push the limits of what's possible.",
          link: "https://tastewp.com/",
          buttonNewTab: false

        },

        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="M10 3a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M7.5 4.5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0m8-.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0a2 2 0 0 1-4 0m-10 0a1 1 0 1 1 2 0a1 1 0 0 1-2 0m1-2a2 2 0 1 0 0 4a2 2 0 0 0 0-4m.6 11.998L5 15a2 2 0 0 1-2-2V9.25A.25.25 0 0 1 3.25 9h1.764c.04-.367.17-.708.365-1H3.25C2.56 8 2 8.56 2 9.25V13a3 3 0 0 0 3.404 2.973a5 5 0 0 1-.304-.975m9.496.975Q14.794 16 15 16a3 3 0 0 0 3-3V9.25C18 8.56 17.44 8 16.75 8h-2.129c.196.292.325.633.365 1h1.764a.25.25 0 0 1 .25.25V13a2 2 0 0 1-2.1 1.998a5 5 0 0 1-.304.975M7.25 8C6.56 8 6 8.56 6 9.25V14a4 4 0 0 0 8 0V9.25C14 8.56 13.44 8 12.75 8zM7 9.25A.25.25 0 0 1 7.25 9h5.5a.25.25 0 0 1 .25.25V14a3 3 0 1 1-6 0z"></path></svg>',
          title: "Work with Team",
          description: "Create AI images that visualize a product or idea, draft a creative concept, or push the limits of what's possible.",
          link: "https://wp-gb.com/",
          buttonNewTab: false

        },
      ]
      draft["layout"]["theme"]="theme-4"
      draft["section"]["background"]["type"] = 'solid';
      draft["section"]["background"]["color"] = '#2b303600';
      draft["section"]["background"]["gradient"] = 'linear-gradient(45deg, #FF0000, #00FF00)';
      draft["section"]["background"]["image"]["url"] = 'https://templates.bplugins.com/wp-content/uploads/2025/02/section-collection-plugin-bg-1.png';
      draft["section"]["background"]["position"] = 'center center';
      draft["section"]["background"]["attachment"] = 'initial';
      draft["section"]["background"]["repeat"] = 'no-repeat';
      draft["section"]["background"]["size"] = 'cover';
      draft["section"]["background"]["overlayColor"] = 'rgba(0, 0, 0, 0.1)';

      draft["section"]["padding"]["desktop"] = { top: '0px', right: '0px', bottom: '0px', left: '0px' };
      draft["section"]["padding"]["tablet"] = { top: '0px', right: '0px', bottom: '0px', left: '0px' };
      draft["section"]["padding"]["mobile"] = { top: '0px', right: '30px', bottom: '0px', left: '30px' };

      draft["section"]["margin"]["desktop"] = { top: '0px', right: '0px', bottom: '0px', left: '0px' };
      draft["section"]["margin"]["tablet"] = { top: '0px', right: '0px', bottom: '0px', left: '0px' };
      draft["section"]["margin"]["mobile"] = { top: '0px', right: '0px', bottom: '0px', left: '0px' };


      draft["style"]["margin"] = { top: '0px', right: '-8px', bottom: '0px', left: '-8px' };
      draft["style"]["featureFourPadding"] = { top: '0px', right: '0px', bottom: '0px', left: '0px' };

      draft["style"]["bg"] = 'rgba(0, 0, 0,1)';

      draft["style"]["borderColor"] = 'rgba(247, 247, 247, 1)';

      draft["style"]["radius"] = { top: '8px', right: '8px', bottom: '8px', left: '8px' };
      draft["style"]["padding"] = { top: '24px', right: '24px', bottom: '24px', left: '24px'};

     
      draft["style"]["iconButton"]["colorBg"] = 'rgba(19,20,20,1)';
      draft["style"]["iconButton"]["height"] = '48px';
      draft["style"]["iconButton"]["border"] = { width: '0px', style: 'solid', color: 'rgba(252, 252, 253, 0.1)', side: 'all', radius: '8px' };

      draft["style"]["icon"]["height"] = "24px";
      draft["style"]["icon"]["color"] = "rgb(252, 252, 253)";
      
      draft["style"]["icon"]["hoverColor"] = 'rgba(9, 10, 12, 1)';
      draft["style"]["iconButton"]["hoverBg"] = 'rgba(199, 247, 47,1)';
      draft["style"]["title"]["hoverColor"] = 'rgba(199, 247, 47,1)';


      draft["style"]["title"]["color"] = "rgba(252, 252, 253, 0.9)";
      draft["style"]["title"]["typo"]["fontFamily"] = "Manrope";
      draft["style"]["title"]["typo"]["fontCategory"] = "sans-serif";
      draft["style"]["title"]["typo"]["fontStyle"] = "normal";
      draft["style"]["title"]["typo"]["textTransform"] = "none";
      draft["style"]["title"]["typo"]["textDecoration"] = "auto";
      draft["style"]["title"]["typo"]["letterSpace"] = "0px";
      draft["style"]["title"]["typo"]["fontWeight"] = 700;
      draft["style"]["title"]["typo"]["lineHeight"] = "25px";
      draft["style"]["title"]["typo"]["fontSize"]["desktop"] = 20;
      draft["style"]["title"]["typo"]["fontSize"]["tablet"] = 16;
      draft["style"]["title"]["typo"]["fontSize"]["mobile"] = 16;



      draft["style"]["des"]["color"] = "rgba(252, 252, 253, 0.6)";
      draft["style"]["des"]["typo"]["fontFamily"] = "Manrope";
      draft["style"]["des"]["typo"]["fontCategory"] = "sans-serif";
      draft["style"]["des"]["typo"]["fontStyle"] = "normal";
      draft["style"]["des"]["typo"]["textTransform"] = "none";
      draft["style"]["des"]["typo"]["textDecoration"] = "auto";
      draft["style"]["des"]["typo"]["letterSpace"] = "0px";
      draft["style"]["des"]["typo"]["fontWeight"] = 550;
      draft["style"]["des"]["typo"]["lineHeight"] = "23px";
      draft["style"]["des"]["typo"]["fontSize"]["desktop"] = 16;
      draft["style"]["des"]["typo"]["fontSize"]["tablet"] = 14;
      draft["style"]["des"]["typo"]["fontSize"]["mobile"] = 14;

      break;
  }
});

