import { __ } from "@wordpress/i18n";
import about from "../assets/about-us/style-one/about-2-img-mobile.png"
import icon1 from "../assets/about-us/style-one/about-2-icon-1.png"
import icon2 from "../assets/about-us/style-one/about-2-icon-2.png"
import icon3 from "../assets/about-us/style-one/about-2-icon-3.png"
import icon4 from "../assets/about-us/style-one/about-2-icon-4.png"
import about2img1 from "../assets/about-us/style-two/about-img-1.png"
import about2img2 from "../assets/about-us/style-two/about-img-2.png"
import about2img3 from "../assets/about-us/style-two/about-img-3.png"
import about3img1 from "../assets/about-us/style-three/mission-img-1.png"
import about3img2 from "../assets/about-us/style-three/mission-img-2.png"
import about3img3 from "../assets/about-us/style-three/mission-img-3.png"
import about3img4 from "../assets/about-us/style-three/mission-img-4.png"
import about4img1 from "../assets/about-us/style-four/values-img.png"

export const generalStyleTabs = [
  { name: "general", title: __("General", "textdomain") },
  { name: "style", title: __("Style", "textdomain") },
  { name: "advanced", title: __("Advanced", "textdomain") },
];

export const purposeTypeOptions = [
  { label: "Test", value: "test" },
  { label: "Final", value: "final" },
];

export const themes = {
  themeOne: {
    about: {
      heading: {
        image: {
          desktop: about,
          mobile: about,
          tablet: about,
        },
        title: "Our Mission is to Make Work Meaningful",
        button: {
          text: "About Us",
          url: "https://",
          target: true,
        },
      },
      items: [
        {
          id: 1,
          image: {
            url: icon1,
          },
          title: "Business Plans Auth for all",
          description:
            "Progressively onboard every potential user with just one library.",
        },
        {
          id: 2,
          image: {
            url: icon2,
          },
          title: "Business Plans Auth for all",
          description:
            "Progressively onboard every potential user with just one library.",
        },
        {
          id: 3,
          image: {
            url: icon3,
          },
          title: "Business Plans Auth for all",
          description:
            "Progressively onboard every potential user with just one library.",
        },
        {
          id: 4,
          image: {
            url: icon4,
          },
          title: "Business Plans Auth for all",
          description:
            "Progressively onboard every potential user with just one library.",
        },
      ],
      isOpenLinkInNewTab: {},
      bg: {
        desktop: {
          type: "image",
          color: "#ff0000",
          gradient: "linear-gradient(184deg, #2b3035 0%, #343a40 25.55%)",
          image: {
            url: "https://i.ibb.co.com/cSZwRzPC/Screenshot-2025-05-05-153010-Photoroom-min.png",
          },
          position: "center center",
          repeat: "no-repeat",
          size: "cover",
          overlayColor: "#00000080",
        },
        mobile: {
          type: "gradient",
          color: "#ff0000",
          gradient: "linear-gradient(184deg, #2b3035 0%, #343a40 25.55%)",
          image: {
            url: "https://i.ibb.co.com/cSZwRzPC/Screenshot-2025-05-05-153010-Photoroom-min.png",
          },
          position: "center center",
          repeat: "no-repeat",
          size: "cover",
          overlayColor: "#00000080",
        },
        tablet: {
          type: "gradient",
          color: "#ff0000",
          gradient: "linear-gradient(184deg, #2b3035 0%, #343a40 25.55%)",
          image: {
            url: "https://i.ibb.co.com/cSZwRzPC/Screenshot-2025-05-05-153010-Photoroom-min.png",
          },
          position: "center center",
          repeat: "no-repeat",
          size: "cover",
          overlayColor: "#00000080",
        },
      },
    },

    styles: {
      heading: {
        layout: {
          rowDirection: false,
          image: {
            desktop: { height: "100%", width: "100%" },
            tablet: { height: "100%", width: "100%" },
            mobile: { height: "100%", width: "100%" },
          },
          sectionPadding: {
            desktop: 60,
            tablet: 60,
            mobile: 60,
          },
        },
        title: {
          typography: {
            fontSize: {
              desktop: 48,
              tablet: 28.8,
              mobile: 28.8,
            },
            fontWeight: 700,
            lineHeight: "1.20",
          },
          color: "#dee2e6",
        },
        button: {
          typography: {
            fontSize: {
              desktop: 14,
              tablet: 14,
              mobile: 14,
            },
            lineHeight: "1.715",
          },
          bgColor: {
            normal: { color: "#fff", bg: "#6328FF" },
            hover: { color: "#fff", bg: "#5422D9" },
          },
          border: {
            color: "#5422D9",
            width: "1px",
            style: "solid",
          },
          borderRadius: {
            top: "0.25rem",
            right: "0.25rem",
            bottom: "0.25rem",
            left: "0.25rem",
          },
          margin: {
            top: "0rem",
            right: "0rem",
            bottom: "1rem",
            left: "0rem",
          },
          padding: {
            top: "0.25rem",
            right: "1rem",
            bottom: "0.25rem",
            left: "1rem",
          },
          icon: {
            svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M10.313 16.094a1 1 0 0 1-.708-.293l-2.812-2.813a1 1 0 0 1 1.414-1.414l2.105 2.106l5.481-5.48a1 1 0 0 1 1.414 1.413l-6.188 6.188a1 1 0 0 1-.707.293Z" opacity=".99"></path><path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2m5.207 7.613l-6.188 6.188a1 1 0 0 1-1.414 0l-2.812-2.813a1 1 0 0 1 1.414-1.414l2.105 2.106l5.481-5.48a1 1 0 0 1 1.414 1.413" opacity=".5"></path></svg>',
            size: {
              desktop: 20,
              tablet: 16.06,
              mobile: 16,
            },
            color: "#fff",
          },
          iconTextGap: {
            desktop: 0,
            tablet: 0,
            mobile: 0,
          },
        },
      },
      items: {
        title: {
          typography: {
            fontSize: {
              desktop: 24,
              tablet: 20,
              mobile: 20,
            },
            fontWeight: 700,
            lineHeight: "1.2",
            alignment: "center",
          },
          color: "#dee2e6",
        },
        description: {
          typography: {
            fontWeight: "400",
            fontSize: {
              desktop: 16,
              tablet: 14.4666,
              mobile: 14,
            },

            lineHeight: "1.5",
          },
          color: "#dee2e6",
        },
        icon: {
          size: {
            desktop: 119,
            tablet: 119,
            mobile: 119,
          },
        },
        separator: {
          color: "#495057",
          width: 1,
        },
      },
      bg: {
        borderRadius: {
          top: "0rem",
          right: "0rem",
          bottom: "0rem",
          left: "0rem",
        },
        margin: {
          desktop: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
          tablet: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
          mobile: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
        },
        padding: {
          desktop: {
            top: "120px",
            right: 0,
            bottom: "120px",
            left: 0,
          },
          tablet: {
            top: "66.7px",
            right: 0,
            bottom: "66.7px",
            left: 0,
          },
          mobile: {
            top: "60px",
            right: "30px",
            bottom: "60px",
            left: "30px",
          },
        },
      },
    },
  },
  themeTwo: {
    about: {
      heading: {
        images: {
          desktop: [
            {
              url: about2img1,
              alt: "About Us",
              width: "300",
              height: "225",
              borderRadius: {
                top: "0.25rem",
                right: "0.25rem",
                bottom: "0.25rem",
                left: "0.25rem",
              },
              imageGap: 15,
            },
            {
              url: about2img2,
              alt: "About Us",
              width: "300",
              height: "225",
              borderRadius: {
                top: "0.25rem",
                right: "0.25rem",
                bottom: "0.25rem",
                left: "0.25rem",
              },
              imageGap: 15,
            },
            {
              url: about2img3,
              alt: "About Us",
              width: "300",
              height: "225",
              borderRadius: {
                top: "0.25rem",
                right: "0.25rem",
                bottom: "0.25rem",
                left: "0.25rem",
              },
              imageGap: 15,
            },
          ],
          tablet: [
            {
              url: about2img1,
              alt: "About Us",
              width: "300",
              height: "225",
              borderRadius: {
                top: "0.25rem",
                right: "0.25rem",
                bottom: "0.25rem",
                left: "0.25rem",
              },
              imageGap: 15,
            },
            {
              url: about2img2,
              alt: "About Us",
              width: "300",
              height: "225",
              borderRadius: {
                top: "0.25rem",
                right: "0.25rem",
                bottom: "0.25rem",
                left: "0.25rem",
              },
              imageGap: 15,
            },
            {
              url: about2img3,
              alt: "About Us",
              width: "300",
              height: "225",
              borderRadius: {
                top: "0.25rem",
                right: "0.25rem",
                bottom: "0.25rem",
                left: "0.25rem",
              },
              imageGap: 15,
            },
          ],
          mobile: [
            {
              url: about2img1,
              alt: "About Us",
              width: "300",
              height: "225",
              borderRadius: {
                top: "0.25rem",
                right: "0.25rem",
                bottom: "0.25rem",
                left: "0.25rem",
              },
              imageGap: 15,
            },
            {
              url: about2img2,
              alt: "About Us",
              width: "300",
              height: "225",
              borderRadius: {
                top: "0.25rem",
                right: "0.25rem",
                bottom: "0.25rem",
                left: "0.25rem",
              },
              imageGap: 15,
            },
            {
              url: about2img3,
              alt: "About Us",
              width: "300",
              height: "225",
              borderRadius: {
                top: "0.25rem",
                right: "0.25rem",
                bottom: "0.25rem",
                left: "0.25rem",
              },
              imageGap: 15,
            },
          ],
        },
        title: "AI-Powered Coding Transform Your Development Workflow",
        button: {
          text: "AI Code",
          url: "https://",
          target: true,
        },
      },
      items: [
        {
          id: 1,
          image: {
            url: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="m15.226 1.353l-.348-1.07a.423.423 0 0 0-.799 0l-.348 1.07a2.2 2.2 0 0 1-1.377 1.397l-1.071.348a.423.423 0 0 0 0 .798l1.071.348a2.2 2.2 0 0 1 1.399 1.403l.348 1.07a.423.423 0 0 0 .798 0l.349-1.07a2.2 2.2 0 0 1 1.398-1.397l1.072-.348a.423.423 0 0 0 0-.798l-.022-.006l-1.072-.348a2.2 2.2 0 0 1-1.398-1.397m3.791 6.612l.766.248l.015.004a.303.303 0 0 1 0 .57l-.765.248a1.58 1.58 0 0 0-1 .999l-.248.764a.302.302 0 0 1-.57 0l-.249-.764a1.58 1.58 0 0 0-.999-1.002l-.765-.249a.303.303 0 0 1 0-.57l.765-.248a1.58 1.58 0 0 0 .984-.999l.249-.764a.302.302 0 0 1 .57 0l.249.764a1.58 1.58 0 0 0 .999.999M14 8.5a1.3 1.3 0 0 1 0-.43v-.214a1.3 1.3 0 0 1-.39-.196a1.5 1.5 0 0 1-.46-.66L13 6.486V16H6a2 2 0 0 1-2-2V5a1 1 0 0 1 1-1h5.097A1.4 1.4 0 0 1 10 3.5a1.4 1.4 0 0 1 .105-.5H5a2 2 0 0 0-2 2v9a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-1.5a.5.5 0 0 0-.5-.5H14zm0 4.5h2v1a2 2 0 0 1-2 2zM6 6.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"></path></svg>',
          },
          title: "Brief",
          description:
            "Create a future project brief directly in Flowmap to use for creating.",
        },
        {
          id: 2,
          image: {
            url: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M9 3h5v5h-2v4h5a3 3 0 0 1 3 3v2h2v5h-5v-5h2v-2a2 2 0 0 0-2-2h-5v4h2v5H9v-5h2v-4H6a2 2 0 0 0-2 2v2h2v5H1v-5h2v-2a3 3 0 0 1 3-3h5V8H9zm4 4V4h-3v3zM5 21v-3H2v3zm8 0v-3h-3v3zm8 0v-3h-3v3z"></path></svg>',
          },
          title: "Sitemap creation",
          description:
            "Interactive visual sitemap with a page editor, AI generator tools",
        },
        {
          id: 3,
          image: {
            url: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><g fill="currentColor"><path d="m230.08 78.26l-31.84 26.88l9.76 40.19a5.46 5.46 0 0 1-8.19 5.86L164 129.66l-35.78 21.53a5.46 5.46 0 0 1-8.19-5.86l9.73-40.19l-31.84-26.88a5.38 5.38 0 0 1 3.13-9.48l41.79-3.31l16.1-38.14a5.51 5.51 0 0 1 10.12 0l16.1 38.14L227 68.78a5.38 5.38 0 0 1 3.08 9.48" opacity=".2"></path><path d="M239.35 70.08a13.41 13.41 0 0 0-11.77-9.28l-36.94-2.92l-14.21-33.66a13.51 13.51 0 0 0-24.86 0l-14.21 33.66l-36.94 2.92a13.39 13.39 0 0 0-7.66 23.58l28.06 23.68l-8.56 35.39a13.32 13.32 0 0 0 5.1 13.91a13.51 13.51 0 0 0 15 .69L164 139l31.65 19.06a13.54 13.54 0 0 0 15-.69a13.34 13.34 0 0 0 5.09-13.91l-8.56-35.39l28.06-23.68a13.32 13.32 0 0 0 4.11-14.31M193.08 99a8 8 0 0 0-2.61 8l8.28 34.21l-30.62-18.41a8 8 0 0 0-8.25 0l-30.62 18.43l8.28-34.23a8 8 0 0 0-2.62-8L108 76.26l35.52-2.81a8 8 0 0 0 6.74-4.87L164 35.91l13.79 32.67a8 8 0 0 0 6.74 4.87l35.53 2.81Zm-105 24.18l-58.42 58.48a8 8 0 0 1-11.32-11.32l58.45-58.45a8 8 0 0 1 11.32 11.32Zm10.81 49.87a8 8 0 0 1 0 11.31l-53.23 53.3a8 8 0 0 1-11.32-11.32l53.27-53.26a8 8 0 0 1 11.31 0Zm73-1a8 8 0 0 1 0 11.32l-54.28 54.28a8 8 0 0 1-11.32-11.32l54.29-54.28a8 8 0 0 1 11.36.01Z"></path></g></svg>',
          },
          title: "AI-Powered generator",
          description:
            "We've created tools for generating and wireframes to quickly set up.",
        },
        {
          id: 4,
          image: {
            url: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M21 8h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2m0 4h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2" opacity=".5"></path><rect width="8" height="8" x="2" y="4" fill="currentColor" rx="1"></rect><path fill="currentColor" d="M21 16H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2m-8 4H3a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2" opacity=".5"></path></svg>',
          },
          title: "Website structure",
          description:
            "Interactive visual sitemap with a page editor, AI generator tools",
        },
      ],
      isOpenLinkInNewTab: {},
      bg: {
        desktop: {
          type: "solid",
          color: "rgba(33,37,41, 1) !important",
          gradient: "linear-gradient(184deg, #2b3035 0%, #343a40 25.55%)",
          image: {
            url: "https://plus.unsplash.com/premium_photo-1672116453118-5971acb7b93b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          position: "center center",
          repeat: "no-repeat",
          size: "cover",
          overlayColor: "#00000080",
        },
        mobile: {
          type: "solid",
          color: "rgba(33,37,41, 1) !important",
          gradient: "linear-gradient(184deg, #2b3035 0%, #343a40 25.55%)",
          image: {
            url: "https://plus.unsplash.com/premium_photo-1672116453118-5971acb7b93b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          position: "center center",
          repeat: "no-repeat",
          size: "cover",
          overlayColor: "#00000080",
        },
        tablet: {
          type: "solid",
          color: "rgba(33,37,41, 1) !important",
          gradient: "linear-gradient(184deg, #2b3035 0%, #343a40 25.55%)",
          image: {
            url: "https://plus.unsplash.com/premium_photo-1672116453118-5971acb7b93b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          position: "center center",
          repeat: "no-repeat",
          size: "cover",
          overlayColor: "#00000080",
        },
      },
    },

    styles: {
      heading: {
        layout: {
          rowDirection: false,
          image: {
            desktop: { height: "100%", width: "100%" },
            tablet: { height: "100%", width: "100%" },
            mobile: { height: "100%", width: "100%" },
            borderRadius: {
              top: "0.25rem",
              right: "0.25rem",
              bottom: "0.25rem",
              left: "0.25rem",
            },
            imageGap: {
              desktop: 0,
              tablet: 0,
              mobile: 0,
            },
          },
        },
        title: {
          typography: {
            fontSize: {
              desktop: 36,
              tablet: 22.5459,
              mobile: 21.6,
            },
            fontWeight: 700,
            lineHeight: 1.2,
          },
          color: "#dee2e6",
        },
        button: {
          typography: {
            fontWeight: 500,
            fontSize: {
              desktop: 12,
              tablet: 10.8499,
              mobile: 10.5,
            },
            lineHeight: "1",
          },
          bgColor: {
            normal: { color: "#fff", bg: "#6328FF" },
            hover: { color: "#fff", bg: "#6328FF" },
          },
          border: {
            color: "#6328ff",
            width: "1px",
            style: "solid",
          },
          borderRadius: {
            top: "0.15rem",
            right: "0.15rem",
            bottom: "0.15rem",
            left: "0.15rem",
          },
          margin: {
            top: "0px",
            right: "0px",
            bottom: "0px",
            left: "0px",
          },
          padding: {
            top: "3px",
            right: "8px",
            bottom: "3px",
            left: "8px",
          },
          icon: {
            svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z" clip-rule="evenodd"></path></svg>',
            size: {
              desktop: 16,
              tablet: 16,
              mobile: 16,
            },
            color: "#fff",
          },
          iconTextGap: {
            desktop: 0,
            tablet: 0,
            mobile: 0,
          },
        },
      },
      items: {
        title: {
          typography: {
            fontSize: {
              desktop: 20,
              tablet: 16.064,
              mobile: 16,
            },
            fontWeight: 700,
            lineHeight: "1.2",
            alignment: "center",
          },
          color: "#dee2e6",
        },
        description: {
          typography: {
            fontWeight: "400",
            fontSize: {
              desktop: 14,
              tablet: 14,
              mobile: 14,
            },

            lineHeight: "1.5",
          },
          color: "#dee2e6",
        },
        icon: {
          size: {
            desktop: 32,
            tablet: 32,
            mobile: 32,
          },
          color: "#ffffff",
        },
      },
      bg: {
        borderRadius: {
          top: "1rem",
          right: "1rem",
          bottom: "1rem",
          left: "1rem",
        },
        margin: {
          desktop: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
          tablet: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
          mobile: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
        },
        padding: {
          desktop: {
            top: "48px",
            right: "48px",
            bottom: "48px",
            left: "48px",
          },
          tablet: {
            top: "48px",
            right: "48px",
            bottom: "48px",
            left: "48px",
          },
          mobile: {
            top: "16px",
            right: "40px",
            bottom: "16px",
            left: "40px",
          },
        },
      },
    },
  },
  themeThree: {
    about: {
      heading: {
        images: {
          desktop: [
            {
              url: about3img1,
              alt: "About Us",
              width: "300",
              height: "225",
              borderRadius: {
                top: "0.25rem",
                right: "0.25rem",
                bottom: "0.25rem",
                left: "0.25rem",
              },
              imageGap: 15,
            },

            {
              url: about3img2,
              alt: "About Us",
              width: "300",
              height: "225",
              borderRadius: {
                top: "0.25rem",
                right: "0.25rem",
                bottom: "0.25rem",
                left: "0.25rem",
              },
              imageGap: 15,
            },
            {
              url: about3img3,
              alt: "About Us",
              width: "300",
              height: "225",
              borderRadius: {
                top: "0.25rem",
                right: "0.25rem",
                bottom: "0.25rem",
                left: "0.25rem",
              },
              imageGap: 15,
            },
            {
              url: about3img4,
              alt: "About Us",
              width: "300",
              height: "225",
              borderRadius: {
                top: "0.25rem",
                right: "0.25rem",
                bottom: "0.25rem",
                left: "0.25rem",
              },
              imageGap: 15,
            },
          ],
          tablet: [
            {
              url: about3img1,
              alt: "About Us",
              width: "300",
              height: "225",
              borderRadius: {
                top: "0.25rem",
                right: "0.25rem",
                bottom: "0.25rem",
                left: "0.25rem",
              },
              imageGap: 15,
            },

            {
              url: about3img2,
              alt: "About Us",
              width: "300",
              height: "225",
              borderRadius: {
                top: "0.25rem",
                right: "0.25rem",
                bottom: "0.25rem",
                left: "0.25rem",
              },
              imageGap: 15,
            },
            {
              url: about3img3,
              alt: "About Us",
              width: "300",
              height: "225",
              borderRadius: {
                top: "0.25rem",
                right: "0.25rem",
                bottom: "0.25rem",
                left: "0.25rem",
              },
              imageGap: 15,
            },
            {
              url: about3img4,
              alt: "About Us",
              width: "300",
              height: "225",
              borderRadius: {
                top: "0.25rem",
                right: "0.25rem",
                bottom: "0.25rem",
                left: "0.25rem",
              },
              imageGap: 15,
            },
          ],
          mobile: [
            {
              url: about3img1,
              alt: "About Us",
              width: "300",
              height: "225",
              borderRadius: {
                top: "0.25rem",
                right: "0.25rem",
                bottom: "0.25rem",
                left: "0.25rem",
              },
              imageGap: 15,
            },

            {
              url: about3img2,
              alt: "About Us",
              width: "300",
              height: "225",
              borderRadius: {
                top: "0.25rem",
                right: "0.25rem",
                bottom: "0.25rem",
                left: "0.25rem",
              },
              imageGap: 15,
            },
            {
              url: about3img3,
              alt: "About Us",
              width: "300",
              height: "225",
              borderRadius: {
                top: "0.25rem",
                right: "0.25rem",
                bottom: "0.25rem",
                left: "0.25rem",
              },
              imageGap: 15,
            },
            {
              url: about3img4,
              alt: "About Us",
              width: "300",
              height: "225",
              borderRadius: {
                top: "0.25rem",
                right: "0.25rem",
                bottom: "0.25rem",
                left: "0.25rem",
              },
              imageGap: 15,
            },
          ],
        },
        title: "Our Mission",
        description:
          "We are building a digital-first company that recognizes how, when, and where our teams do their best work and we like to have some fun along the way.",
        button: {
          text: "Mission",
          url: "https://",
          target: true,
        },
      },
      item: {
        title: "Digital first",
        description:
          "We are building a digital-first company that recognizes how, when, and where our teams do their best work and we like to have some fun along the way.",
      },

      isOpenLinkInNewTab: {},
      bg: {
        desktop: {
          type: "solid",
          color: "#2B3035 !important",
          gradient: "linear-gradient(184deg, #2b3035 0%, #343a40 25.55%)",
          image: {
            url: "https://plus.unsplash.com/premium_photo-1672116453118-5971acb7b93b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          position: "center center",
          repeat: "no-repeat",
          size: "cover",
          overlayColor: "#00000080",
        },
        mobile: {
          type: "solid",
          color: "#2B3035 !important",
          gradient: "linear-gradient(184deg, #2b3035 0%, #343a40 25.55%)",
          image: {
            url: "https://plus.unsplash.com/premium_photo-1672116453118-5971acb7b93b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          position: "center center",
          repeat: "no-repeat",
          size: "cover",
          overlayColor: "#00000080",
        },
        tablet: {
          type: "solid",
          color: "#2B3035 !important",
          gradient: "linear-gradient(184deg, #2b3035 0%, #343a40 25.55%)",
          image: {
            url: "https://plus.unsplash.com/premium_photo-1672116453118-5971acb7b93b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          position: "center center",
          repeat: "no-repeat",
          size: "cover",
          overlayColor: "#00000080",
        },
      },
    },

    styles: {
      heading: {
        layout: {
          rowDirection: false,
          image: {
            desktop: { height: "100%", width: "100%" },
            tablet: { height: "100%", width: "100%" },
            mobile: { height: "100%", width: "100%" },
            borderRadius: {
              top: "0.25rem",
              right: "0.25rem",
              bottom: "0.25rem",
              left: "0.25rem",
            },
            imageGap: {
              desktop: 0,
              tablet: 0,
              mobile: 0,
            },
          },
        },
        title: {
          typography: {
            fontSize: {
              desktop: 48,
              tablet: 28.8,
              mobile: 28.8,
            },
            fontWeight: 700,
            lineHeight: 1.2,
          },
          color: "#dee2e6",
        },
        description: {
          typography: {
            fontSize: {
              desktop: 16,
              tablet: 14.4666,
              mobile: 14,
            },

            lineHeight: 1.5,
          },
          color: "#dee2e6",
        },
        button: {
          typography: {
            fontSize: {
              desktop: 14,
              tablet: 14,
              mobile: 14,
            },
            lineHeight: 1.715,
            fontWeight: 500,
          },
          bgColor: {
            normal: { color: "#140833", bg: "#a17eff" },
            hover: { color: "#140833", bg: "#a17eff" },
          },
          border: {
            color: "#A17EFF",
            width: "1px",
            style: "solid",
          },
          borderRadius: {
            top: "0.25rem",
            right: "0.25rem",
            bottom: "0.25rem",
            left: "0.25rem",
          },
          margin: {
            top: "0rem",
            right: "0rem",
            bottom: "1rem",
            left: "0rem",
          },
          padding: {
            top: "4px",
            right: "16px",
            bottom: "4px",
            left: "16px",
          },
          icon: {
            svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M10.313 16.094a1 1 0 0 1-.708-.293l-2.812-2.813a1 1 0 0 1 1.414-1.414l2.105 2.106l5.481-5.48a1 1 0 0 1 1.414 1.413l-6.188 6.188a1 1 0 0 1-.707.293Z" opacity=".99"></path><path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2m5.207 7.613l-6.188 6.188a1 1 0 0 1-1.414 0l-2.812-2.813a1 1 0 0 1 1.414-1.414l2.105 2.106l5.481-5.48a1 1 0 0 1 1.414 1.413" opacity=".5"></path></svg>',
            size: {
              desktop: 20,
              tablet: 16.06,
              mobile: 16,
            },
            color: "#140833",
          },
          iconTextGap: {
            desktop: 0,
            tablet: 0,
            mobile: 0,
          },
        },
      },
      item: {
        title: {
          typography: {
            fontSize: {
              desktop: 24,
              tablet: 20,
              mobile: 20,
            },
            fontWeight: 700,
            lineHeight: 1.5,
          },
          color: "#dee2e6",
        },
        description: {
          typography: {
            fontWeight: "400",
            fontSize: {
              desktop: 16,
              tablet: 14.4666,
              mobile: 14,
            },

            lineHeight: 1.5,
          },
          color: "#dee2e6",
        },
      },
      bg: {
        borderRadius: {
          top: "0rem",
          right: "0rem",
          bottom: "0rem",
          left: "0rem",
        },
        margin: {
          desktop: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
          tablet: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
          mobile: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
        },
        padding: {
          desktop: {
            top: "120px",
            right: 0,
            bottom: "120px",
            left: 0,
          },
          tablet: {
            top: "66.7px",
            right: 0,
            bottom: "66.7px",
            left: 0,
          },
          mobile: {
            top: "60px",
            right: "30px",
            bottom: "60px",
            left: "30px",
          },
        },
      },
    },
  },
  themeFour: {
    about: {
      heading: {
        image: {
          desktop: about4img1,
          tablet: about4img1,
          mobile: about4img1,
        },
        title: "We Value Everyone That is Part of Our Company",
        description:
          "We are building a digital-first company that recognizes how, when, and where our teams do their best work and we like to have some fun along the way.",
        button: {
          text: "Our Values",
          url: "https://",
          target: true,
        },
      },
      items: [
        {
          id: 1,
          image: {
            url: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M13.72 27.69L3.29 17.27a1 1 0 0 1 1.41-1.41l9 9L31.29 7.29A1 1 0 0 1 32.7 8.7Z" class="clr-i-outline clr-i-outline-path-1"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>',
          },
          title: "95%",
          description: "Responsive Management",
        },
        {
          id: 2,
          image: {
            url: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M13.72 27.69L3.29 17.27a1 1 0 0 1 1.41-1.41l9 9L31.29 7.29A1 1 0 0 1 32.7 8.7Z" class="clr-i-outline clr-i-outline-path-1"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>',
          },
          title: "99%",
          description: "Brand Loyalty",
        },
        {
          id: 3,
          image: {
            url: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M13.72 27.69L3.29 17.27a1 1 0 0 1 1.41-1.41l9 9L31.29 7.29A1 1 0 0 1 32.7 8.7Z" class="clr-i-outline clr-i-outline-path-1"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>',
          },
          title: "65%",
          description: "Career Development",
        },
        {
          id: 4,
          image: {
            url: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M13.72 27.69L3.29 17.27a1 1 0 0 1 1.41-1.41l9 9L31.29 7.29A1 1 0 0 1 32.7 8.7Z" class="clr-i-outline clr-i-outline-path-1"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>',
          },
          title: " 92%",
          description: "Team Spirit &amp; Financial",
        },
      ],

      isOpenLinkInNewTab: {},
      bg: {
        desktop: {
          type: "solid",
          color: "#2B3035 !important",
          gradient: "linear-gradient(184deg, #2b3035 0%, #343a40 25.55%)",
          image: {
            url: "https://plus.unsplash.com/premium_photo-1672116453118-5971acb7b93b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          position: "center center",
          repeat: "no-repeat",
          size: "cover",
          overlayColor: "#00000080",
        },
        mobile: {
          type: "solid",
          color: "#2B3035 !important",
          gradient: "linear-gradient(184deg, #2b3035 0%, #343a40 25.55%)",
          image: {
            url: "https://plus.unsplash.com/premium_photo-1672116453118-5971acb7b93b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          position: "center center",
          repeat: "no-repeat",
          size: "cover",
          overlayColor: "#00000080",
        },
        tablet: {
          type: "solid",
          color: "#2B3035 !important",
          gradient: "linear-gradient(184deg, #2b3035 0%, #343a40 25.55%)",
          image: {
            url: "https://plus.unsplash.com/premium_photo-1672116453118-5971acb7b93b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          position: "center center",
          repeat: "no-repeat",
          size: "cover",
          overlayColor: "#00000080",
        },
      },
    },

    styles: {
      heading: {
        layout: {
          rowDirection: false,
          image: {
            desktop: { height: "100%", width: "100%" },
            tablet: { height: "100%", width: "100%" },
            mobile: { height: "100%", width: "100%" },
            borderRadius: {
              top: "0.25rem",
              right: "0.25rem",
              bottom: "0.25rem",
              left: "0.25rem",
            },
          },
        },
        title: {
          typography: {
            fontSize: {
              desktop: 48,
              tablet: 28.8,
              mobile: 28.8,
            },
            fontWeight: 700,
            lineHeight: 1.2,
          },
          color: "#dee2e6",
        },
        description: {
          typography: {
            fontSize: {
              desktop: 16,
              tablet: 14.4666,
              mobile: 14,
            },

            lineHeight: 1.5,
          },
          color: "#dee2e6",
        },
        button: {
          typography: {
            fontSize: {
              desktop: 14,
              tablet: 14,
              mobile: 14,
            },
            lineHeight: 1.715,
            fontWeight: 500,
          },
          bgColor: {
            normal: { color: "#140833", bg: "#a17eff" },
            hover: { color: "#140833", bg: "#a17eff" },
          },
          border: {
            color: "#A17EFF",
            width: "1px",
            style: "solid",
          },
          borderRadius: {
            top: "0.25rem",
            right: "0.25rem",
            bottom: "0.25rem",
            left: "0.25rem",
          },
          margin: {
            top: "0rem",
            right: "0rem",
            bottom: "1rem",
            left: "0rem",
          },
          padding: {
            top: "4px",
            right: "16px",
            bottom: "4px",
            left: "16px",
          },
          icon: {
            svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M10.313 16.094a1 1 0 0 1-.708-.293l-2.812-2.813a1 1 0 0 1 1.414-1.414l2.105 2.106l5.481-5.48a1 1 0 0 1 1.414 1.413l-6.188 6.188a1 1 0 0 1-.707.293Z" opacity=".99"></path><path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2m5.207 7.613l-6.188 6.188a1 1 0 0 1-1.414 0l-2.812-2.813a1 1 0 0 1 1.414-1.414l2.105 2.106l5.481-5.48a1 1 0 0 1 1.414 1.413" opacity=".5"></path></svg>',
            size: {
              desktop: 20,
              tablet: 16.06,
              mobile: 16,
            },
            color: "#140833",
          },
          iconTextGap: {
            desktop: 0,
            tablet: 0,
            mobile: 0,
          },
        },
      },
      items: {
        icon: {
          bgColor: {
            normal: { color: "#a17eff", bg: "#140833" },
            hover: { color: "#fff", bg: "#6328FF" },
          },
          size: {
            desktop: 12,
            tablet: 12,
            mobile: 12,
          },
          border: {
            color: "#3b1899",
            width: "1px",
            style: "solid",
          },
          borderRadius: {
            top: "50%",
            right: "50%",
            bottom: "50%",
            left: "50%",
          },
          iconBgSize: {
            desktop: 24,
            tablet: 24,
            mobile: 24,
          },
          iconTextGap: {
            desktop: 0,
            tablet: 0,
            mobile: 0,
          },
        },
        title: {
          typography: {
            fontSize: {
              desktop: 24,
              tablet: 20,
              mobile: 20,
            },
            fontWeight: 700,
            lineHeight: 1.2,
          },
          color: "#dee2e6",
        },
        description: {
          typography: {
            fontWeight: 400,
            fontSize: {
              desktop: 16,
              tablet: 16,
              mobile: 16,
            },

            lineHeight: 1.2,
          },
          color: "#dee2e6",
        },
      },
      bg: {
        borderRadius: {
          top: "0rem",
          right: "0rem",
          bottom: "0rem",
          left: "0rem",
        },
        margin: {
          desktop: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
          tablet: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
          mobile: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
        },
        padding: {
          desktop: {
            top: "120px",
            right: 0,
            bottom: "120px",
            left: 0,
          },
          tablet: {
            top: "66.7px",
            right: 0,
            bottom: "66.7px",
            left: 0,
          },
          mobile: {
            top: "60px",
            right: "30px",
            bottom: "60px",
            left: "30px",
          },
        },
      },
    },
  },
  themeFive: {
    about: {
      heading: {
        images: {
          desktop: [
            {
              url: "https://pixellyo.com/nextai/html/assets/img/mission-img-1.png",
              alt: "About Us",
              width: "300",
              height: "225",
              borderRadius: {
                top: "0.25rem",
                right: "0.25rem",
                bottom: "0.25rem",
                left: "0.25rem",
              },
              imageGap: 15,
            },

            {
              url: "https://pixellyo.com/nextai/html/assets/img/mission-img-2.png",
              alt: "About Us",
              width: "300",
              height: "225",
              borderRadius: {
                top: "0.25rem",
                right: "0.25rem",
                bottom: "0.25rem",
                left: "0.25rem",
              },
              imageGap: 15,
            },
            {
              url: "https://pixellyo.com/nextai/html/assets/img/mission-img-3.png",
              alt: "About Us",
              width: "300",
              height: "225",
              borderRadius: {
                top: "0.25rem",
                right: "0.25rem",
                bottom: "0.25rem",
                left: "0.25rem",
              },
              imageGap: 15,
            },
            {
              url: "https://pixellyo.com/nextai/html/assets/img/mission-img-4.png",
              alt: "About Us",
              width: "300",
              height: "225",
              borderRadius: {
                top: "0.25rem",
                right: "0.25rem",
                bottom: "0.25rem",
                left: "0.25rem",
              },
              imageGap: 15,
            },
          ],
          tablet: [
            {
              url: "https://pixellyo.com/nextai/html/assets/img/mission-img-1.png",
              alt: "About Us",
              width: "300",
              height: "225",
              borderRadius: {
                top: "0.25rem",
                right: "0.25rem",
                bottom: "0.25rem",
                left: "0.25rem",
              },
              imageGap: 15,
            },

            {
              url: "https://pixellyo.com/nextai/html/assets/img/mission-img-2.png",
              alt: "About Us",
              width: "300",
              height: "225",
              borderRadius: {
                top: "0.25rem",
                right: "0.25rem",
                bottom: "0.25rem",
                left: "0.25rem",
              },
              imageGap: 15,
            },
            {
              url: "https://pixellyo.com/nextai/html/assets/img/mission-img-3.png",
              alt: "About Us",
              width: "300",
              height: "225",
              borderRadius: {
                top: "0.25rem",
                right: "0.25rem",
                bottom: "0.25rem",
                left: "0.25rem",
              },
              imageGap: 15,
            },
            {
              url: "https://pixellyo.com/nextai/html/assets/img/mission-img-4.png",
              alt: "About Us",
              width: "300",
              height: "225",
              borderRadius: {
                top: "0.25rem",
                right: "0.25rem",
                bottom: "0.25rem",
                left: "0.25rem",
              },
              imageGap: 15,
            },
          ],
          mobile: [
            {
              url: "https://pixellyo.com/nextai/html/assets/img/mission-img-1.png",
              alt: "About Us",
              width: "300",
              height: "225",
              borderRadius: {
                top: "0.25rem",
                right: "0.25rem",
                bottom: "0.25rem",
                left: "0.25rem",
              },
              imageGap: 15,
            },

            {
              url: "https://pixellyo.com/nextai/html/assets/img/mission-img-2.png",
              alt: "About Us",
              width: "300",
              height: "225",
              borderRadius: {
                top: "0.25rem",
                right: "0.25rem",
                bottom: "0.25rem",
                left: "0.25rem",
              },
              imageGap: 15,
            },
            {
              url: "https://pixellyo.com/nextai/html/assets/img/mission-img-3.png",
              alt: "About Us",
              width: "300",
              height: "225",
              borderRadius: {
                top: "0.25rem",
                right: "0.25rem",
                bottom: "0.25rem",
                left: "0.25rem",
              },
              imageGap: 15,
            },
            {
              url: "https://pixellyo.com/nextai/html/assets/img/mission-img-4.png",
              alt: "About Us",
              width: "300",
              height: "225",
              borderRadius: {
                top: "0.25rem",
                right: "0.25rem",
                bottom: "0.25rem",
                left: "0.25rem",
              },
              imageGap: 15,
            },
          ],
        },
        title: "Working Progress",
        description:
          "We are building a digital-first company that recognizes how, when, and where our teams do their best work and we like to have some fun along the way.",
        button: {
          text: "Mission",
          url: "https://",
          target: true,
        },
      },
      items: [
        {
          description:
            "We analyze your outreach history, database quality, email templates, and follow-up tactics to identify areas for improvement.",
        },
        {
          description:
            "Our tech specialists assess your domain reputation and determine affecting factors. They analyze domain zone risks and recommend an alternative domain if needed.",
        },
        {
          description:
            "Finally, we set up DNS, create mailboxes, and send emails in small batches to prepare for mass campaigns.",
        },
      ],
      isOpenLinkInNewTab: {},
      bg: {
        desktop: {
          type: "solid",
          color: "rgba(33,37,41, 1) !important",
          gradient: "linear-gradient(184deg, #2b3035 0%, #343a40 25.55%)",
          image: {
            url: "https://plus.unsplash.com/premium_photo-1672116453118-5971acb7b93b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          position: "center center",
          repeat: "no-repeat",
          size: "cover",
          overlayColor: "#00000080",
        },
        mobile: {
          type: "solid",
          color: "rgba(33,37,41, 1) !important",
          gradient: "linear-gradient(184deg, #2b3035 0%, #343a40 25.55%)",
          image: {
            url: "https://plus.unsplash.com/premium_photo-1672116453118-5971acb7b93b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          position: "center center",
          repeat: "no-repeat",
          size: "cover",
          overlayColor: "#00000080",
        },
        tablet: {
          type: "solid",
          color: "rgba(33,37,41, 1) !important",
          gradient: "linear-gradient(184deg, #2b3035 0%, #343a40 25.55%)",
          image: {
            url: "https://plus.unsplash.com/premium_photo-1672116453118-5971acb7b93b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          position: "center center",
          repeat: "no-repeat",
          size: "cover",
          overlayColor: "#00000080",
        },
      },
    },

    styles: {
      heading: {
        layout: {
          rowDirection: false,
          image: {
            desktop: { height: "100%", width: "100%" },
            tablet: { height: "100%", width: "100%" },
            mobile: { height: "100%", width: "100%" },
            borderRadius: {
              top: "0.25rem",
              right: "0.25rem",
              bottom: "0.25rem",
              left: "0.25rem",
            },
            imageGap: {
              desktop: 0,
              tablet: 0,
              mobile: 0,
            },
          },
        },
        title: {
          typography: {
            fontSize: {
              desktop: 48,
              tablet: 28.8,
              mobile: 28.8,
            },
            fontWeight: 700,
            lineHeight: 1.2,
          },
          color: "#dee2e6",
        },
        description: {
          typography: {
            fontSize: {
              desktop: 16,
              tablet: 14.4666,
              mobile: 14,
            },

            lineHeight: 1.5,
          },
          color: "#dee2e6",
        },
        button: {
          typography: {
            fontSize: {
              desktop: 14,
              tablet: 14,
              mobile: 14,
            },
            lineHeight: 1.715,
            fontWeight: 500,
          },
          bgColor: {
            normal: { color: "#140833", bg: "#a17eff" },
            hover: { color: "#140833", bg: "#a17eff" },
          },
          border: {
            color: "#A17EFF",
            width: "1px",
            style: "solid",
          },
          borderRadius: {
            top: "0.25rem",
            right: "0.25rem",
            bottom: "0.25rem",
            left: "0.25rem",
          },
          margin: {
            top: "0px",
            right: "0px",
            bottom: "0px",
            left: "0px",
          },
          padding: {
            top: "4px",
            right: "16px",
            bottom: "4px",
            left: "16px",
          },
          icon: {
            svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M10.313 16.094a1 1 0 0 1-.708-.293l-2.812-2.813a1 1 0 0 1 1.414-1.414l2.105 2.106l5.481-5.48a1 1 0 0 1 1.414 1.413l-6.188 6.188a1 1 0 0 1-.707.293Z" opacity=".99"></path><path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2m5.207 7.613l-6.188 6.188a1 1 0 0 1-1.414 0l-2.812-2.813a1 1 0 0 1 1.414-1.414l2.105 2.106l5.481-5.48a1 1 0 0 1 1.414 1.413" opacity=".5"></path></svg>',
            size: {
              desktop: 20,
              tablet: 16.06,
              mobile: 16,
            },
            color: "#140833",
          },
          iconTextGap: {
            desktop: 0,
            tablet: 0,
            mobile: 0,
          },
        },
      },
      item: {
        title: {
          typography: {
            fontSize: {
              desktop: 24,
              tablet: 20,
              mobile: 20,
            },
            fontWeight: 700,
            lineHeight: 1.5,
          },
          color: "#dee2e6",
        },
        description: {
          typography: {
            fontWeight: "400",
            fontSize: {
              desktop: 16,
              tablet: 14.4666,
              mobile: 14,
            },

            lineHeight: 1.5,
          },
          color: "#dee2e6",
        },
      },
      bg: {
        borderRadius: {
          top: "0.25rem",
          right: "0.25rem",
          bottom: "0.25rem",
          left: "0.25rem",
        },
      },
    },
  },
};

export const toolTipPresets = [
  {
    label: "Default",
    value: "themeOne",
    img: "https://i.ibb.co.com/jZL999tw/default-Theme.png",
    height: "auto",
    width: "160px",
  },
  {
    label: "Style One",
    value: "themeTwo",
    img: "https://i.ibb.co.com/wZ56Jkjm/themeTwo.png",
    height: "auto",
    width: "160px",
  },
  {
    label: "Style Two",
    value: "themeThree",
    img: "https://i.ibb.co.com/mMq9Zn6/theme-Three.png",
    height: "auto",
    width: "160px",
  },
  {
    label: "Style Three",
    value: "themeFour",
    img: "https://i.ibb.co.com/Xc3LDNC/theme-Four.png",
    height: "auto",
    width: "160px",
  },
];
