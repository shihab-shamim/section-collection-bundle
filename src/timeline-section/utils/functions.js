import { produce } from "immer";

export const updateData = (attr, value, ...props) => {
  if (props.length === 0) {
    return value;
  }
  const [currentProp, ...remainingProps] = props;
  if (remainingProps.length === 0) {
    return produce(attr, (draft) => {
      draft[currentProp] = value;
    });
  }
  return produce(attr, (draft) => {
    if (!Object.prototype.hasOwnProperty.call(draft, currentProp)) {
      draft[currentProp] = {};
    }
    draft[currentProp] = updateData(
      draft[currentProp],
      value,
      ...remainingProps
    );
  });
};

export const themeChange = (theme = "theme1", attributes) =>
  produce(attributes, (draft) => {
    draft["selectedTheme"] = theme;

    switch (theme) {
      //======================= case for theme 1 ========================//
      case "theme1":
        draft["styles"]["sectionBg"] = {
          type: "solid",
          color: "#FF000000",
          size: "cover",
          repeat: "no-repeat",
        };
        //   draft["layout"]["sectionBody"]["colGap"] = "12px";
        //   draft["layout"]["sectionBody"]["rowGap"] = "16px";
        //   draft["layout"]["testimonialBody"]["testiBorderRadius"] = {
        //     top: "8px",
        //     right: "8px",
        //     bottom: "8px",
        //     left: "8px",
        //   };
        //   draft["styles"]["testimonial"]["image"]["height"] = "3rem";
        //   draft["styles"]["testimonial"]["image"]["width"] = "3rem";
        //   draft["styles"]["testimonial"]["image"]["border"]["width"] = "0px";
        //   draft["styles"]["testimonial"]["bg"]["color"] = "#212529";
        //   draft["styles"]["testimonial"]["bg"]["type"] = "solid";
        //   draft["styles"]["testimonial"]["image"]["BorderRadius"] = {
        //     top: "50%",
        //     right: "50%",
        //     bottom: "50%",
        //     left: "50%",
        //   };
        //   draft["styles"]["testimonial"]["name"]["typo"] = {
        //     fontCategory: "sans-serif",
        //     fontFamily: "Default",
        //     fontSize: {
        //       desktop: 16,
        //       mobile: 16,
        //       tablet: 18,
        //     },
        //     fontVariant: 400,
        //     fontWeight: 700,
        //     isUploadFont: true,
        //     lineHeight: 0,
        //     textDecoration: "",
        //     textTransform: "none",
        //   };
        //   draft["styles"]["testimonial"]["designation"]["typo"] = {
        //     fontCategory: "sans-serif",
        //     fontFamily: "Default",
        //     fontSize: {
        //       desktop: 14,
        //       mobile: 14,
        //       tablet: 14,
        //     },
        //     fontVariant: 400,
        //     fontWeight: 400,
        //     isUploadFont: true,
        //     lineHeight: 0,
        //     textDecoration: "",
        //     textTransform: "none",
        //   };
        //   draft["styles"]["testimonial"]["designation"]["color"] = "#FFFFFF";
        //   draft["styles"]["testimonial"]["content"]["typo"] = {
        //     fontCategory: "sans-serif",
        //     fontFamily: "Default",
        //     fontSize: {
        //       desktop: 16,
        //       mobile: 14,
        //       tablet: 16,
        //     },
        //     fontVariant: 400,
        //     fontWeight: 600,
        //     isUploadFont: true,
        //     lineHeight: 0,
        //     textDecoration: "",
        //     textTransform: "none",
        //   };
        //   draft["layout"]["testimonialBody"]["padding"] = {
        //     top: "24px",
        //     right: "24px",
        //     bottom: "24px",
        //     left: "24px",
        //   };
        //   draft["layout"]["sectionHeader"]["status"] = true;

        break;

      //====================== case for theme 2 ===============================//

      case "theme2":
        draft["styles"]["sectionBg"] = {
          type: "image",
          image: {
            url: "https://templates.bplugins.com/wp-content/uploads/2025/04/Screenshot-2025-04-23-141152.png",
          },
          size: "cover",
          repeat: "no-repeat",
        };
        //   draft["layout"]["sectionBody"]["height"] = "45rem";
        //   draft["layout"]["sectionBody"]["colGap"] = "32px";
        //   draft["layout"]["sectionBody"]["rowGap"] = "28px";
        //   draft["layout"]["testimonialBody"]["testiBorderRadius"] = {
        //     top: "24px",
        //     right: "24px",
        //     bottom: "24px",
        //     left: "24px",
        //   };
        //   draft["styles"]["testimonial"]["image"]["height"] = "4.5rem";
        //   draft["styles"]["testimonial"]["image"]["width"] = "4rem";
        //   draft["styles"]["testimonial"]["image"]["border"]["width"] = "2px";
        //   draft["styles"]["testimonial"]["bg"]["color"] = "#31373C";
        //   draft["styles"]["testimonial"]["bg"]["type"] = "solid";
        //   draft["styles"]["testimonial"]["image"]["BorderRadius"] = {
        //     top: "8px",
        //     right: "8px",
        //     bottom: "8px",
        //     left: "8px",
        //   };
        //   draft["styles"]["testimonial"]["name"]["typo"] = {
        //     fontCategory: "sans-serif",
        //     fontFamily: "Default",
        //     fontSize: {
        //       desktop: 16,
        //       mobile: 16,
        //       tablet: 18,
        //     },
        //     fontVariant: 400,
        //     fontWeight: 700,
        //     isUploadFont: true,
        //     lineHeight: 0,
        //     textDecoration: "",
        //     textTransform: "none",
        //   };
        //   draft["styles"]["testimonial"]["designation"]["typo"] = {
        //     fontCategory: "sans-serif",
        //     fontFamily: "Default",
        //     fontSize: {
        //       desktop: 14,
        //       mobile: 14,
        //       tablet: 14,
        //     },
        //     fontVariant: 400,
        //     fontWeight: 400,
        //     isUploadFont: true,
        //     lineHeight: 0,
        //     textDecoration: "",
        //     textTransform: "none",
        //   };
        //   draft["styles"]["testimonial"]["designation"]["color"] = "#FFFFFF";
        //   draft["styles"]["testimonial"]["content"]["typo"] = {
        //     fontCategory: "sans-serif",
        //     fontFamily: "Default",
        //     fontSize: {
        //       desktop: 16,
        //       mobile: 14,
        //       tablet: 16,
        //     },
        //     fontVariant: 400,
        //     fontWeight: 400,
        //     isUploadFont: true,
        //     lineHeight: 0,
        //     textDecoration: "",
        //     textTransform: "none",
        //   };
        //   draft["layout"]["testimonialBody"]["padding"] = {
        //     top: "32px",
        //     right: "32px",
        //     bottom: "32px",
        //     left: "32px",
        //   };
        //   draft["layout"]["sectionHeader"]["status"] = true;
        //   draft["options"]["slidingSpeed"] = 5000;

        break;

      //====================== case for theme 3 =================================//

      // case "theme3":
      //   draft["layout"]["sectionBody"]["height"] = "41rem";
      //   draft["styles"]["testimonial"]["image"]["height"] = "4rem";
      //   draft["styles"]["testimonial"]["image"]["width"] = "4rem";
      //   draft["styles"]["testimonial"]["image"]["border"]["width"] = "3px";
      //   draft["styles"]["testimonial"]["bg"]["type"] = "image";
      //   draft["styles"]["testimonial"]["image"]["BorderRadius"] = {
      //     top: "50%",
      //     right: "50%",
      //     bottom: "50%",
      //     left: "50%",
      //   };
      //   draft["layout"]["testimonialBody"]["testiBorderRadius"] = {
      //     top: "0px",
      //     right: "0px",
      //     bottom: "0px",
      //     left: "0px",
      //   };
      //   draft["styles"]["testimonial"]["name"]["typo"] = {
      //     fontCategory: "sans-serif",
      //     fontFamily: "Default",
      //     fontSize: {
      //       desktop: 22,
      //       mobile: 16,
      //       tablet: 18,
      //     },
      //     fontVariant: 400,
      //     fontWeight: 700,
      //     isUploadFont: true,
      //     lineHeight: 0,
      //     textDecoration: "",
      //     textTransform: "none",
      //   };
      //   draft["styles"]["testimonial"]["designation"]["typo"] = {
      //     fontCategory: "sans-serif",
      //     fontFamily: "Default",
      //     fontSize: {
      //       desktop: 16,
      //       mobile: 14,
      //       tablet: 14,
      //     },
      //     fontVariant: 400,
      //     fontWeight: 400,
      //     isUploadFont: true,
      //     lineHeight: 0,
      //     textDecoration: "",
      //     textTransform: "none",
      //   };
      //   draft["styles"]["testimonial"]["designation"]["color"] = "#FFFFFFB0";
      //   draft["styles"]["testimonial"]["content"]["typo"] = {
      //     fontCategory: "sans-serif",
      //     fontFamily: "Default",
      //     fontSize: {
      //       desktop: 36,
      //       mobile: 14,
      //       tablet: 16,
      //     },
      //     fontVariant: 400,
      //     fontWeight: 500,
      //     isUploadFont: true,
      //     lineHeight: 0,
      //     textDecoration: "",
      //     textTransform: "none",
      //   };
      //   draft["layout"]["testimonialBody"]["padding"] = {
      //     top: "80px",
      //     right: "80px",
      //     bottom: "80px",
      //     left: "80px",
      //   };
      //   draft["layout"]["sectionHeader"]["status"] = false;
      //   draft["options"]["slidingSpeed"] = 3000;

      //   break;

      default:
        break;
    }
  });
