import { produce } from "immer";

export const themeSwitch = (layout, attributes = {}) => produce(attributes, (draft) => {


  switch (layout) {

    // #theme 1
    case 'theme-1':
      draft["layout"]["theme"] = "theme-1";
      draft["callToActions"] =
        [
          {
            title: "Code Less,",
            highlight: "Create More Magic",
            description: "Dream it up, then add it to your design.",
            buttonName: "Get a Demo",
            buttonLink: "https://bplugins.com/",
            icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" id=\"arrow-right\"><path fill-rule=\"evenodd\" d=\"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8\"></path></svg>"
          }
        ];
      //main cta
      draft["style"]["background"]["type"] = 'solid';
      draft["style"]["background"]["color"] = '#2B3035';
      draft["style"]["background"]["gradient"] = 'linear-gradient(45deg, #FF0000, #00FF00)';
      draft["style"]["background"]["image"]["url"] = 'https://templates.bplugins.com/wp-content/uploads/2025/02/section-collection-plugin-bg-1.png';
      draft["style"]["background"]["position"] = 'center center';
      draft["style"]["background"]["attachment"] = 'initial';
      draft["style"]["background"]["repeat"] = 'no-repeat';
      draft["style"]["background"]["size"] = 'cover';
      draft["style"]["background"]["overlayColor"] = 'rgba(0, 0, 0, 0.1)';

      draft["style"]["padding"]["desktop"] = { top: '136px', right: '0px', bottom: '136px', left: '0px' };
      draft["style"]["padding"]["tablet"] = { top: '60px', right: '0px', bottom: '60px', left: '0px' };
      draft["style"]["padding"]["mobile"] = { top: '30px', right: '0px', bottom: '30px', left: '0px' };

      draft["style"]["radius"] = { top: '0px', right: '0px', bottom: '0px', left: '0px' };

      //cta
      draft["style"]["ctaStyle"]["background"]["type"] = 'image';
      draft["style"]["ctaStyle"]["background"]["color"] = '#2B3035';
      draft["style"]["ctaStyle"]["background"]["gradient"] = 'linear-gradient(45deg,rgb(0, 255, 0),rgb(255, 0, 128))';
      draft["style"]["ctaStyle"]["background"]["image"]["url"] = 'https://templates.bplugins.com/wp-content/uploads/2025/03/section-collection-bg-cta-tomor.png';
      draft["style"]["ctaStyle"]["background"]["position"] = 'center center';
      draft["style"]["ctaStyle"]["background"]["attachment"] = 'initial';
      draft["style"]["ctaStyle"]["background"]["repeat"] = 'no-repeat';
      draft["style"]["ctaStyle"]["background"]["size"] = 'cover';
      draft["style"]["ctaStyle"]["background"]["overlayColor"] = 'rgba(0, 0, 0, 0.1)';

      draft["style"]["ctaStyle"]["radius"] = { top: '0px', right: '0px', bottom: '0px', left: '0px' };

      draft["style"]["ctaStyle"]["padding"]["desktop"] = { top: '120px', right: '0px', bottom: '120px', left: '0px' };
      draft["style"]["ctaStyle"]["padding"]["tablet"] = { top: '60px', right: '0px', bottom: '60px', left: '0px' };
      draft["style"]["ctaStyle"]["padding"]["mobile"] = { top: '30px', right: '0px', bottom: '30px', left: '0px' };

      draft["style"]["ctaStyle"]["margin"]["desktop"] = { top: '0px', right: '-12px', bottom: '0px', left: '-12px' };
      draft["style"]["ctaStyle"]["margin"]["tablet"] = { top: '0px', right: '-12px', bottom: '0px', left: '-12px' };
      draft["style"]["ctaStyle"]["margin"]["mobile"] = { top: '0px', right: '-12px', bottom: '0px', left: '-12px' };

      draft["style"]["ctaStyle"]["borderColor"] = "rgba(1, 1, 8, 0.86)";
      draft["style"]["ctaStyle"]["borderWidth"] = "1px";
      draft["style"]["ctaStyle"]["containerWidth"]["desktop"] = "1320px";
      draft["style"]["ctaStyle"]["containerWidth"]["tablet"] = "960px";
      draft["style"]["ctaStyle"]["containerWidth"]["mobile"] = "540px";

    
      draft["style"]["ctaStyle"]["title"]["gradient"] = {
        type: "linear",
        radialType: "ellipse",
        colors: [
          { color: "#fff", position: 20 },
          { color: "#c7f32f", position: 65 }
        ],
        centerPositions: { x: 50, y: 50 }
      };

      draft["style"]["ctaStyle"]["title"]["color"] = "rgba(252, 252, 253, 1)";

      draft["style"]["ctaStyle"]["title"]["typo"]["fontFamily"] = "Manrope";
      draft["style"]["ctaStyle"]["title"]["typo"]["fontCategory"] = "sans-serif";
      draft["style"]["ctaStyle"]["title"]["typo"]["fontStyle"] = "normal";
      draft["style"]["ctaStyle"]["title"]["typo"]["textTransform"] = "none";
      draft["style"]["ctaStyle"]["title"]["typo"]["textDecoration"] = "auto";
      draft["style"]["ctaStyle"]["title"]["typo"]["letterSpace"] = "0px";
      draft["style"]["ctaStyle"]["title"]["typo"]["fontWeight"] = 700;
      draft["style"]["ctaStyle"]["title"]["typo"]["lineHeight"] = "90px";
      draft["style"]["ctaStyle"]["title"]["typo"]["fontSize"]["desktop"] = 76;
      draft["style"]["ctaStyle"]["title"]["typo"]["fontSize"]["tablet"] = 39;
      draft["style"]["ctaStyle"]["title"]["typo"]["fontSize"]["mobile"] = 39;

      draft["style"]["ctaStyle"]["des"]["color"] = "rgba(252, 252, 253, 1)";

      draft["style"]["ctaStyle"]["des"]["typo"]["fontFamily"] = "Manrope";
      draft["style"]["ctaStyle"]["des"]["typo"]["fontCategory"] = "sans-serif";
      draft["style"]["ctaStyle"]["des"]["typo"]["fontStyle"] = "normal";
      draft["style"]["ctaStyle"]["des"]["typo"]["textTransform"] = "none";
      draft["style"]["ctaStyle"]["des"]["typo"]["textDecoration"] = "auto";
      draft["style"]["ctaStyle"]["des"]["typo"]["letterSpace"] = "0px";
      draft["style"]["ctaStyle"]["des"]["typo"]["fontWeight"] = 500;
      draft["style"]["ctaStyle"]["des"]["typo"]["lineHeight"] = "45px";
      draft["style"]["ctaStyle"]["des"]["typo"]["fontSize"]["desktop"] = 17;
      draft["style"]["ctaStyle"]["des"]["typo"]["fontSize"]["tablet"] = 14;
      draft["style"]["ctaStyle"]["des"]["typo"]["fontSize"]["mobile"] = 14;

      draft["style"]["ctaStyle"]["button"]["color"] = "rgba(13, 13, 14, 0.9)";

      draft["style"]["ctaStyle"]["button"]["typo"]["fontFamily"] = "Manrope";
      draft["style"]["ctaStyle"]["button"]["typo"]["fontCategory"] = "sans-serif";
      draft["style"]["ctaStyle"]["button"]["typo"]["fontStyle"] = "normal";
      draft["style"]["ctaStyle"]["button"]["typo"]["textTransform"] = "none";
      draft["style"]["ctaStyle"]["button"]["typo"]["textDecoration"] = "auto";
      draft["style"]["ctaStyle"]["button"]["typo"]["letterSpace"] = "0px";
      draft["style"]["ctaStyle"]["button"]["typo"]["fontWeight"] = 600;
      draft["style"]["ctaStyle"]["button"]["typo"]["lineHeight"] = "27px";
      draft["style"]["ctaStyle"]["button"]["typo"]["fontSize"]["desktop"] = 17;
      draft["style"]["ctaStyle"]["button"]["typo"]["fontSize"]["tablet"] = 16;
      draft["style"]["ctaStyle"]["button"]["typo"]["fontSize"]["mobile"] = 16;


      draft["style"]["ctaStyle"]["button"]["radius"] = { top: '6px', right: '6px', bottom: '6px', left: '6px' };

      draft["style"]["ctaStyle"]["button"]["padding"]["desktop"] = { top: '9px', right: '16px', bottom: '9px', left: '16px' };
      draft["style"]["ctaStyle"]["button"]["padding"]["tablet"] = { top: '9px', right: '16px', bottom: '9px', left: '16px' };
      draft["style"]["ctaStyle"]["button"]["padding"]["mobile"] = { top: '8px', right: '16px', bottom: '8px', left: '16px' };
      draft["style"]["ctaStyle"]["button"]["bg"] = '#c7f32f';
      draft["style"]["ctaStyle"]["button"]["width"] = '19px';

      draft["style"]["ctaStyle"]["button"]["bgHoverColor"] = 'rgba(201, 245, 57, 0.918)';

      break;


     // #theme 2
    case 'theme-2':
      
      draft["layout"]["theme"] = "theme-2"
      draft["callToActions"] =
        [
          {
            title: "Get Started Used        ",
            highlight: "For Free",
            description: "Dream it up, then add it to your design",
            buttonName: "Get a Demo",
            icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\"><path d=\"M407.8 294.7c-3.3-.4-6.7-.8-10-1.3c3.4 .4 6.7 .9 10 1.3zM288 227.1C261.9 176.4 190.9 81.9 124.9 35.3C61.6-9.4 37.5-1.7 21.6 5.5C3.3 13.8 0 41.9 0 58.4S9.1 194 15 213.9c19.5 65.7 89.1 87.9 153.2 80.7c3.3-.5 6.6-.9 10-1.4c-3.3 .5-6.6 1-10 1.4C74.3 308.6-9.1 342.8 100.3 464.5C220.6 589.1 265.1 437.8 288 361.1c22.9 76.7 49.2 222.5 185.6 103.4c102.4-103.4 28.1-156-65.8-169.9c-3.3-.4-6.7-.8-10-1.3c3.4 .4 6.7 .9 10 1.3c64.1 7.1 133.6-15.1 153.2-80.7C566.9 194 576 75 576 58.4s-3.3-44.7-21.6-52.9c-15.8-7.1-40-14.9-103.2 29.8C385.1 81.9 314.1 176.4 288 227.1z\"></path></svg>",
            buttonAction: "false",
            buttonLink: "https://unsplash.com/"
          }
      ];

      // main cta bg 2
      draft["style"]["background"]["type"] = 'solid';
      draft["style"]["background"]["color"] = '#2B3035';
      draft["style"]["background"]["gradient"] = 'linear-gradient(45deg, #FF0000, #00FF00)';
      draft["style"]["background"]["image"]["url"] = 'https://templates.bplugins.com/wp-content/uploads/2025/02/section-collection-plugin-bg-1.png';
      draft["style"]["background"]["position"] = 'center center';
      draft["style"]["background"]["attachment"] = 'initial';
      draft["style"]["background"]["repeat"] = 'no-repeat';
      draft["style"]["background"]["size"] = 'cover';
      draft["style"]["background"]["overlayColor"] = 'rgba(0, 0, 0, 0.1)';

      draft["style"]["padding"]["desktop"] = { top: '136px', right: '0px', bottom: '136px', left: '0px' };
      draft["style"]["padding"]["tablet"] = { top: '60px', right: '0px', bottom: '60px', left: '0px' };
      draft["style"]["padding"]["mobile"] = { top: '30px', right: '0px', bottom: '30px', left: '0px' };
      draft["style"]["radius"] = { top: '0px', right: '0px', bottom: '0px', left: '0px' };

      //cta bg2
      draft["style"]["ctaStyle"]["background"]["type"] = 'image';
      draft["style"]["ctaStyle"]["background"]["color"] = 'rgb(255, 0, 128)';
      draft["style"]["ctaStyle"]["background"]["gradient"] = 'linear-gradient(45deg,rgb(0, 255, 0),rgb(255, 0, 128))';
      draft["style"]["ctaStyle"]["background"]["image"]["url"] = 'https://templates.bplugins.com/wp-content/uploads/2025/04/ScreenShot-Tool-20250428123944.png';
      draft["style"]["ctaStyle"]["background"]["position"] = 'center center';
      draft["style"]["ctaStyle"]["background"]["attachment"] = 'initial';
      draft["style"]["ctaStyle"]["background"]["repeat"] = 'no-repeat';
      draft["style"]["ctaStyle"]["background"]["size"] = 'cover';
      draft["style"]["ctaStyle"]["background"]["overlayColor"] = 'rgba(0, 0, 0, 0.1)';

      draft["style"]["ctaStyle"]["borderColorTwo"] = "rgba(42, 15, 206, 1)";
      draft["style"]["ctaStyle"]["borderWidth"] = "1px";
      draft["style"]["ctaStyle"]["containerWidth"]["desktop"] = "1320px";
      draft["style"]["ctaStyle"]["containerWidth"]["tablet"] = "960px";
      draft["style"]["ctaStyle"]["containerWidth"]["mobile"] = "540px";

      draft["style"]["ctaStyle"]["padding"]["desktop"] = { top: '120px', right: '0px', bottom: '120px', left: '0px' };
      draft["style"]["ctaStyle"]["padding"]["tablet"] = { top: '60px', right: '0px', bottom: '60px', left: '0px' };
      draft["style"]["ctaStyle"]["padding"]["mobile"] = { top: '30px', right: '0px', bottom: '30px', left: '0px' };

      draft["style"]["ctaStyle"]["margin"]["desktop"] = { top: '0px', right: '-12px', bottom: '0px', left: '-12px' };
      draft["style"]["ctaStyle"]["margin"]["tablet"] = { top: '0px', right: '-12px', bottom: '0px', left: '-12px' };
      draft["style"]["ctaStyle"]["margin"]["mobile"] = { top: '0px', right: '-12px', bottom: '0px', left: '-12px' };

      draft["style"]["ctaStyle"]["radius"] = { top: '0px', right: '0px', bottom: '0px', left: '0px' };

      // theme 2 title
      draft["style"]["ctaStyle"]["title"]["color"] = "rgba(252, 252, 253, 1)";
      draft["style"]["ctaStyle"]["title"]["gradientTwo"] = {
        type: "linear",
        radialType: "ellipse",
        colors: [
          { color: "#fff", position: 0 },
          { color: "#6328ff", position: 100 }
        ],
        centerPositions: { x: 50, y: 50 }
      };

      draft["style"]["ctaStyle"]["title"]["typo"]["fontFamily"] = "Manrope";
      draft["style"]["ctaStyle"]["title"]["typo"]["fontCategory"] = "sans-serif";
      draft["style"]["ctaStyle"]["title"]["typo"]["fontStyle"] = "normal";
      draft["style"]["ctaStyle"]["title"]["typo"]["textTransform"] = "none";
      draft["style"]["ctaStyle"]["title"]["typo"]["textDecoration"] = "auto";
      draft["style"]["ctaStyle"]["title"]["typo"]["letterSpace"] = "0px";
      draft["style"]["ctaStyle"]["title"]["typo"]["fontWeight"] = 700;
      draft["style"]["ctaStyle"]["title"]["typo"]["lineHeight"] = "90px";
      draft["style"]["ctaStyle"]["title"]["typo"]["fontSize"]["desktop"] = 76;
      draft["style"]["ctaStyle"]["title"]["typo"]["fontSize"]["tablet"] = 39;
      draft["style"]["ctaStyle"]["title"]["typo"]["fontSize"]["mobile"] = 39;

      // theme 2 des
      draft["style"]["ctaStyle"]["des"]["color"] = "rgba(252, 252, 253, 1)";

      draft["style"]["ctaStyle"]["des"]["typo"]["fontFamily"] = "Manrope";
      draft["style"]["ctaStyle"]["des"]["typo"]["fontCategory"] = "sans-serif";
      draft["style"]["ctaStyle"]["des"]["typo"]["fontStyle"] = "normal";
      draft["style"]["ctaStyle"]["des"]["typo"]["textTransform"] = "none";
      draft["style"]["ctaStyle"]["des"]["typo"]["textDecoration"] = "auto";
      draft["style"]["ctaStyle"]["des"]["typo"]["letterSpace"] = "0px";
      draft["style"]["ctaStyle"]["des"]["typo"]["fontWeight"] = 500;
      draft["style"]["ctaStyle"]["des"]["typo"]["lineHeight"] = "45px";
      draft["style"]["ctaStyle"]["des"]["typo"]["fontSize"]["desktop"] = 17;
      draft["style"]["ctaStyle"]["des"]["typo"]["fontSize"]["tablet"] = 14;
      draft["style"]["ctaStyle"]["des"]["typo"]["fontSize"]["mobile"] = 14;

      // theme 2 button
      draft["style"]["ctaStyle"]["button"]["colorTwo"] ="rgba(252, 252, 253, 1)";

      draft["style"]["ctaStyle"]["button"]["typo"]["fontFamily"] = "Manrope";
      draft["style"]["ctaStyle"]["button"]["typo"]["fontCategory"] = "sans-serif";
      draft["style"]["ctaStyle"]["button"]["typo"]["fontStyle"] = "normal";
      draft["style"]["ctaStyle"]["button"]["typo"]["textTransform"] = "none";
      draft["style"]["ctaStyle"]["button"]["typo"]["textDecoration"] = "auto";
      draft["style"]["ctaStyle"]["button"]["typo"]["letterSpace"] = "0px";
      draft["style"]["ctaStyle"]["button"]["typo"]["fontWeight"] = 600;
      draft["style"]["ctaStyle"]["button"]["typo"]["lineHeight"] = "27px";
      draft["style"]["ctaStyle"]["button"]["typo"]["fontSize"]["desktop"] = 17;
      draft["style"]["ctaStyle"]["button"]["typo"]["fontSize"]["tablet"] = 16;
      draft["style"]["ctaStyle"]["button"]["typo"]["fontSize"]["mobile"] = 16;


      draft["style"]["ctaStyle"]["button"]["radius"] = { top: '6px', right: '6px', bottom: '6px', left: '6px' };

      draft["style"]["ctaStyle"]["button"]["padding"]["desktop"] = { top: '9px', right: '16px', bottom: '9px', left: '16px' };
      draft["style"]["ctaStyle"]["button"]["padding"]["tablet"] = { top: '9px', right: '16px', bottom: '9px', left: '16px' };
      draft["style"]["ctaStyle"]["button"]["padding"]["mobile"] = { top: '8px', right: '16px', bottom: '8px', left: '16px' };
      draft["style"]["ctaStyle"]["button"]["bgtwo"] = 'linear-gradient(90deg, rgba(136, 91, 253, 0.8) 0px, rgba(99, 40, 255, 0.8) 68.76%)';
      draft["style"]["ctaStyle"]["button"]["width"] = '19px';

      draft["style"]["ctaStyle"]["button"]["bgHoverColorTwo"] = 'rgba(99, 40, 255, 0.8)';

      break;
      
      // #Theme 3
    case 'theme-3':
      draft["layout"]["theme"] = "theme-3"
      draft["callToActions"] =
        [
          {
            title: "Start Your 30-Day Free Trial",
            description: "Write 10x faster, engage your audience, & never struggle",
            buttonName: "Generate Video",
            buttonLink: "https://www.unminify2.com/",
            icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" id=\"arrow-right\"><path fill-rule=\"evenodd\" d=\"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8\"></path></svg>"
          }
        ];
      // main cta bg 3
      draft["style"]["background"]["type"] = 'solid';
      draft["style"]["background"]["color"] = '#2B3035';
      draft["style"]["background"]["gradient"] = 'linear-gradient(45deg, #FF0000, #00FF00)';
      draft["style"]["background"]["image"]["url"] = 'https://templates.bplugins.com/wp-content/uploads/2025/02/section-collection-plugin-bg-1.png';
      draft["style"]["background"]["position"] = 'center center';
      draft["style"]["background"]["attachment"] = 'initial';
      draft["style"]["background"]["repeat"] = 'no-repeat';
      draft["style"]["background"]["size"] = 'cover';
      draft["style"]["background"]["overlayColor"] = 'rgba(0, 0, 0, 0.1)';

      draft["style"]["padding"]["desktop"] = { top: '136px', right: '0px', bottom: '136px', left: '0px' };
      draft["style"]["padding"]["tablet"] = { top: '60px', right: '0px', bottom: '60px', left: '0px' };
      draft["style"]["padding"]["mobile"] = { top: '30px', right: '0px', bottom: '30px', left: '0px' };
      draft["style"]["radiusThree"] = { top: '16px', right: '16px', bottom: '16px', left: '16px'};


      draft["style"]["ctaStyle"]["containerWidth"]["desktop"] = "1320px";
      draft["style"]["ctaStyle"]["containerWidth"]["tablet"] = "960px";
      draft["style"]["ctaStyle"]["containerWidth"]["mobile"] = "540px";

      //cta bg3
      draft["style"]["ctaStyle"]["background"]["type"] = 'image';
      draft["style"]["ctaStyle"]["background"]["color"] = 'rgb(255, 0, 128)';
      draft["style"]["ctaStyle"]["background"]["gradient"] = 'linear-gradient(45deg,rgb(0, 255, 0),rgb(255, 0, 128))';
      draft["style"]["ctaStyle"]["background"]["image"]["url"] = 'https://templates.bplugins.com/wp-content/uploads/2025/04/ScreenShot-Tool-20250428124335-1.png';
      draft["style"]["ctaStyle"]["background"]["position"] = 'center center';
      draft["style"]["ctaStyle"]["background"]["attachment"] = 'initial';
      draft["style"]["ctaStyle"]["background"]["repeat"] = 'no-repeat';
      draft["style"]["ctaStyle"]["background"]["size"] = 'cover';
      draft["style"]["ctaStyle"]["background"]["overlayColor"] = 'rgba(0, 0, 0, 0.1)';

      draft["style"]["ctaStyle"]["title"]["color"] = "rgba(252, 252, 253, 1)";

      // theme 3 title
      draft["style"]["ctaStyle"]["title"]["typo"]["fontFamily"] = "Manrope";
      draft["style"]["ctaStyle"]["title"]["typo"]["fontCategory"] = "sans-serif";
      draft["style"]["ctaStyle"]["title"]["typo"]["fontStyle"] = "normal";
      draft["style"]["ctaStyle"]["title"]["typo"]["textTransform"] = "none";
      draft["style"]["ctaStyle"]["title"]["typo"]["textDecoration"] = "auto";
      draft["style"]["ctaStyle"]["title"]["typo"]["letterSpace"] = "0px";
      draft["style"]["ctaStyle"]["title"]["typo"]["fontWeight"] = 700;
      draft["style"]["ctaStyle"]["title"]["typo"]["lineHeight"] = "65px";
      draft["style"]["ctaStyle"]["title"]["typo"]["fontSize"]["desktop"] = 64;
      draft["style"]["ctaStyle"]["title"]["typo"]["fontSize"]["tablet"] = 39;
      draft["style"]["ctaStyle"]["title"]["typo"]["fontSize"]["mobile"] = 39;

      // theme 3 des
      draft["style"]["ctaStyle"]["des"]["color"] = "rgba(252, 252, 253, 1)";

      draft["style"]["ctaStyle"]["des"]["typo"]["fontFamily"] = "Manrope";
      draft["style"]["ctaStyle"]["des"]["typo"]["fontCategory"] = "sans-serif";
      draft["style"]["ctaStyle"]["des"]["typo"]["fontStyle"] = "normal";
      draft["style"]["ctaStyle"]["des"]["typo"]["textTransform"] = "none";
      draft["style"]["ctaStyle"]["des"]["typo"]["textDecoration"] = "auto";
      draft["style"]["ctaStyle"]["des"]["typo"]["letterSpace"] = "0px";
      draft["style"]["ctaStyle"]["des"]["typo"]["fontWeight"] = 500;
      draft["style"]["ctaStyle"]["des"]["typo"]["lineHeight"] = "45px";
      draft["style"]["ctaStyle"]["des"]["typo"]["fontSize"]["desktop"] = 17;
      draft["style"]["ctaStyle"]["des"]["typo"]["fontSize"]["tablet"] = 14;
      draft["style"]["ctaStyle"]["des"]["typo"]["fontSize"]["mobile"] = 14;


      // theme 3 button
      draft["style"]["ctaStyle"]["button"]["colorTwo"] ="rgba(252, 252, 253, 1)";

      draft["style"]["ctaStyle"]["button"]["typo"]["fontFamily"] = "Manrope";
      draft["style"]["ctaStyle"]["button"]["typo"]["fontCategory"] = "sans-serif";
      draft["style"]["ctaStyle"]["button"]["typo"]["fontStyle"] = "normal";
      draft["style"]["ctaStyle"]["button"]["typo"]["textTransform"] = "none";
      draft["style"]["ctaStyle"]["button"]["typo"]["textDecoration"] = "auto";
      draft["style"]["ctaStyle"]["button"]["typo"]["letterSpace"] = "0px";
      draft["style"]["ctaStyle"]["button"]["typo"]["fontWeight"] = 600;
      draft["style"]["ctaStyle"]["button"]["typo"]["lineHeight"] = "27px";
      draft["style"]["ctaStyle"]["button"]["typo"]["fontSize"]["desktop"] = 17;
      draft["style"]["ctaStyle"]["button"]["typo"]["fontSize"]["tablet"] = 16;
      draft["style"]["ctaStyle"]["button"]["typo"]["fontSize"]["mobile"] = 16;


      draft["style"]["ctaStyle"]["button"]["radius"] = { top: '6px', right: '6px', bottom: '6px', left: '6px' };

      draft["style"]["ctaStyle"]["button"]["padding"]["desktop"] = { top: '9px', right: '16px', bottom: '9px', left: '16px' };
      draft["style"]["ctaStyle"]["button"]["padding"]["tablet"] = { top: '9px', right: '16px', bottom: '9px', left: '16px' };
      draft["style"]["ctaStyle"]["button"]["padding"]["mobile"] = { top: '8px', right: '16px', bottom: '8px', left: '16px' };
      draft["style"]["ctaStyle"]["button"]["bgThree"] = '#f65c34';
      draft["style"]["ctaStyle"]["button"]["width"] = '19px';

      draft["style"]["ctaStyle"]["button"]["bgHoverColorThree"] = '#D14E2C';
      break;
  }

});