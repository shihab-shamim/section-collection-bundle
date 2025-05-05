import {
  getBackgroundCSS,
  getBorderCSS,
  getBoxCSS,
  getColorsCSS,
  getTypoCSS,
} from "../../../../../bpl-tools/utils/getCSS";
import { generateCSS } from "../../../../../bpl-tools/Advanced/generateCSS";
import {
  mobileBreakpoint,
  tabBreakpoint,
} from "../../../../../bpl-tools/utils/data";  

const Style = ({ attributes, id }) => {
  const { styles, about, themeSl, advanced } = attributes || {};
  const { items, heading, item } = styles || {};
  const { bg } = about || {};
  const { button, layout, title, description } = heading || {};
  const { bgColor, border, borderRadius, icon, iconTextGap, padding, margin } =
    button || {};
  const { image, rowDirection } = layout || {};
  const { separator, title: itemTitle } = items || {};
  const { width: separatorWidth, color: separatorColor } = separator || {};

  const isBackend = false;
  const cssString = generateCSS(id, advanced, isBackend);

  // Theme one
  const mainSl = `#${id}`;
  const aboutOneSl = `${mainSl} .about-us.${themeSl}`;
  const aboutSl = `${aboutOneSl} .about-2`;
  const sectionSpaceBottomSl = `${aboutSl} .section-space-md-bottom`;
  const containerSl = `${sectionSpaceBottomSl} .container`;
  const rowSl = `${containerSl} .row`;
  const headingImageSl = `${rowSl} .heading-image`;
  const imgSizeSl = `${headingImageSl} .img-fluid`;
  const headingAboutTwoImageSl = `${headingImageSl} .about-2__img`;
  const aboutHeadingSl = `${rowSl} .about-heading`;
  const btnSl = `${aboutHeadingSl} .btn`;
  const btnTextSl = `${btnSl} .btn-text`;
  const btnFs20Sl = `${btnSl} .fs-20`;
  const btnIconSl = `${btnSl} .btn-icon`;
  const aboutTitleSl = `${aboutHeadingSl} .about-title`;
  const aboutBodySectionSl = `${aboutSl} .about-item-section`;
  const aboutWrapperSl = `${aboutBodySectionSl} .about-wrapper`;
  const aboutBodySl = `${aboutWrapperSl} .about-body`;
  const bodyIconsSl = `${aboutBodySl} .body-icons img`;
  const bodyContentSl = `${aboutBodySl} .body-content`;
  const bodyTitleSl = `${bodyContentSl} .body-title`;
  const bodyDescriptionSl = `${bodyContentSl} .body-description`;

  //Theme Two
  const aboutTwoSl = `${mainSl} .about-us.${themeSl}`;
  const aboutTwoBodySl = `${aboutTwoSl} .bg-body`;
  const aboutTwoRowSl = `${aboutTwoBodySl} .row`;
  const aboutTwoImgSl = `${aboutTwoRowSl} img`;
  const aboutTwoTextContentSl = `${aboutTwoRowSl} .col-lg-7`;
  const aboutTwoBadgeSl = `${aboutTwoTextContentSl} .badge`;
  const aboutTwoBadgeIconSl = `${aboutTwoBadgeSl} .badge-icon`;
  const aboutTwoBadgeTextSl = `${aboutTwoBadgeSl} .badge-text`;
  const aboutTwoTitleSl = `${aboutTwoTextContentSl} .about-title`;
  const aboutTwoItemsRowSl = `${aboutTwoTextContentSl} .row`;
  const aboutTwoItemsColSl = `${aboutTwoItemsRowSl} .col-sm-6`;
  const aboutTwoItemsIconSl = `${aboutTwoItemsColSl} .item-icon`;
  const aboutTwoItemsTitleSl = `${aboutTwoItemsColSl} .item-title`;
  const aboutTwoItemsDescriptionSl = `${aboutTwoItemsColSl} .item-description`;

  // Theme Three
  const aboutThreeSl = `${mainSl} .about-us.${themeSl}`;
  const aboutThreeBodySl = `${aboutThreeSl} .bg-body-tertiary`;
  const aboutThreeContainerSl = `${aboutThreeBodySl} .container`;
  const aboutThreeRowSl = `${aboutThreeContainerSl} .row`;
  const aboutThreeColSl = `${aboutThreeRowSl} .col-lg-6`;
  const aboutThreeBtnSl = `${aboutThreeColSl} .btn`;
  const aboutThreeBtnIconSl = `${aboutThreeBtnSl} .btn-icon`;
  const aboutThreeBtnTextSl = `${aboutThreeBtnSl} .btn-text`;
  const aboutThreeTitleSl = `${aboutThreeColSl} .heading-title`;
  const aboutThreeDescriptionSl = `${aboutThreeColSl} .heading-description`;
  const aboutThreeItemTitleSl = `${aboutThreeColSl} .item-title`;
  const aboutThreeItemDescriptionSl = `${aboutThreeColSl} .item-description`;
  const aboutThreeImgRowSl = `${aboutThreeColSl} .row`;
  // const aboutThreeImgGutterSl = `${aboutThreeColSl} .g-4`;
  const aboutThreeImgSl = `${aboutThreeImgRowSl} img`;

  // Theme Four
  const aboutFourSl = `${mainSl} .about-us.${themeSl}`;
  const aboutFourBodySl = `${aboutFourSl} .bg-body-tertiary`;
  const aboutFourContainerSl = `${aboutFourBodySl} .container`;
  const aboutFourRowSl = `${aboutFourContainerSl} .row`;
  const aboutFourColLg5Sl = `${aboutFourRowSl} .col-lg-5`;
  const aboutFourImgRowSl = `${aboutFourColLg5Sl} img`;
  const aboutFourColLg7Sl = `${aboutFourRowSl} .col-lg-7`;
  const aboutFourBtnSl = `${aboutFourColLg7Sl} .btn.btn-sm`;
  const aboutFourBtnIconSl = `${aboutFourBtnSl} .btn-icon`;
  const aboutFourBtnTextSl = `${aboutFourBtnSl} .btn-text`;
  const aboutFourTitleSl = `${aboutFourColLg7Sl} .heading-title`;
  const aboutFourDescriptionSl = `${aboutFourColLg7Sl} .heading-description`;
  const aboutFourColLg7RowSl = `${aboutFourColLg7Sl} .row`;
  const aboutFourColLg7Col6Sl = `${aboutFourColLg7RowSl} .col-md-6`;
  const aboutFourItemListSl = `${aboutFourColLg7Col6Sl} .list`;
  const aboutFourItemDFlexSl = `${aboutFourItemListSl} .d-flex`;
  const aboutFourItemBtnIconSl = `${aboutFourItemDFlexSl} .btn-icon`;
  const aboutFourItemIconSl = `${aboutFourItemBtnIconSl} .item-icon`;
  const aboutFourItemTitleSl = `${aboutFourItemDFlexSl} .item-title`;
  const aboutFourItemDescriptionSl = `${aboutFourItemDFlexSl} .item-description`;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
        
      ${getTypoCSS("", heading?.title?.typography)?.googleFontLink}
      ${getTypoCSS("", heading?.description?.typography)?.googleFontLink}
      ${getTypoCSS("", heading?.button?.typography)?.googleFontLink}

      ${getTypoCSS("", items?.title?.typography)?.googleFontLink}
      ${getTypoCSS("", items?.description?.typography)?.googleFontLink}
      ${getTypoCSS("", item?.title?.typography)?.googleFontLink}
      ${getTypoCSS("", item?.description?.typography)?.googleFontLink}

      
      ${getTypoCSS(aboutTitleSl, heading?.title.typography)?.styles}
      ${getTypoCSS(aboutTwoTitleSl, heading?.title.typography)?.styles}
      ${getTypoCSS(aboutThreeTitleSl, heading?.title.typography)?.styles}
      ${
        getTypoCSS(aboutThreeDescriptionSl, heading?.description?.typography)
          ?.styles
      }
      ${getTypoCSS(aboutFourTitleSl, heading?.title.typography)?.styles}
      ${
        getTypoCSS(aboutFourDescriptionSl, heading?.description?.typography)
          ?.styles
      }
      

      ${getTypoCSS(bodyTitleSl, items?.title?.typography)?.styles}
      ${getTypoCSS(aboutTwoItemsTitleSl, items?.title?.typography)?.styles}
      ${getTypoCSS(aboutFourItemTitleSl, items?.title?.typography)?.styles}
      ${getTypoCSS(aboutThreeItemTitleSl, item?.title?.typography)?.styles}


      ${getTypoCSS(bodyDescriptionSl, items?.description?.typography)?.styles}
      ${
        getTypoCSS(aboutTwoItemsDescriptionSl, items?.description?.typography)
          ?.styles
      }
      ${
        getTypoCSS(aboutFourItemDescriptionSl, items?.description?.typography)
          ?.styles
      }
      ${
        getTypoCSS(aboutThreeItemDescriptionSl, item?.description?.typography)
          ?.styles
      }


      ${getTypoCSS(btnTextSl, heading?.button?.typography)?.styles}
      ${getTypoCSS(aboutTwoBadgeTextSl, heading?.button?.typography)?.styles}
      ${getTypoCSS(aboutThreeBtnTextSl, heading?.button?.typography)?.styles}
      ${getTypoCSS(aboutFourBtnTextSl, heading?.button?.typography)?.styles}



      ${sectionSpaceBottomSl} {
       padding-bottom: ${heading?.layout?.sectionPadding?.desktop}px;
        
      }


      ${aboutFourItemIconSl} {
        color: ${items?.icon?.bgColor?.normal.color};
        fill: ${items?.icon?.bgColor?.normal.color};
        border-radius: ${items?.icon?.borderRadius?.top} ${
          items?.icon?.borderRadius?.right
        } ${items?.icon?.borderRadius?.bottom} ${
          items?.icon?.borderRadius?.left
        };
        padding: 50%;
      }

      ${aboutFourItemBtnIconSl}, ${aboutFourItemIconSl}:hover{
        color: ${items?.icon?.bgColor?.hover?.color || "inherit"};
        fill: ${items?.icon?.bgColor?.hover?.color || "inherit"};
      }

      ${aboutFourItemBtnIconSl}:hover {
        border-color: ${items?.icon?.border?.color};
        background-color: ${items?.icon?.bgColor?.hover?.bg || "transparent"};
        background-image: ${
          items?.icon?.bgColor?.hover?.bgType === "gradient"
            ? items?.icon?.bgColor?.hover?.gradient
            : "none"
        };
      }

      ${aboutFourItemBtnIconSl}{
        ${getBorderCSS(items?.icon?.border)}
        width: ${items?.icon?.iconBgSize?.desktop}px;
        height: ${items?.icon?.iconBgSize?.desktop}px;
        background-color: ${items?.icon?.bgColor?.normal?.bg};
        background-image: ${
          items?.icon?.bgColor?.normal?.bgType === "gradient"
            ? `${items?.icon?.bgColor?.normal?.gradient}`
            : "none"
        };
        border-radius: ${items?.icon?.borderRadius?.top} ${
          items?.icon?.borderRadius?.right
        } ${items?.icon?.borderRadius?.bottom} ${
          items?.icon?.borderRadius?.left
        };
      }

      ${aboutFourItemIconSl} svg{
        width: ${items?.icon?.size?.desktop}px;
        height: ${items?.icon?.size?.desktop}px;
        
      }

      ${aboutFourBtnIconSl} svg{
        width: ${icon?.size?.desktop}px;
        height: ${icon?.size?.desktop}px;
        color: ${icon?.color};
        fill: ${icon?.color};
        margin-right: ${iconTextGap?.desktop}px;
      }

      ${aboutFourBtnTextSl} {
        color: ${bgColor?.normal?.color};
      }

      ${aboutFourBtnSl}{
       color: ${bgColor?.normal?.color};
        background-color: ${bgColor?.normal.bg};
        background-image: ${
          bgColor?.normal?.bgType === "gradient"
            ? `${bgColor?.normal?.gradient}`
            : "none"
        };
        padding: ${padding?.top} ${padding?.right} ${padding?.bottom} ${
          padding?.left
        };
        margin: ${margin?.top} ${margin?.right} ${margin?.bottom} ${
          margin?.left
        };
        border: ${border?.width} ${border?.style} ${border?.color};
        border-radius: ${borderRadius?.top} ${borderRadius?.right} ${
          borderRadius?.bottom
        } ${borderRadius?.left};
      }

      ${aboutFourTitleSl}{
       ${getColorsCSS(title)} 
      }

      ${aboutFourDescriptionSl}{
       ${getColorsCSS(description)}
      }

      ${aboutFourItemTitleSl}{
        ${getColorsCSS(itemTitle)}
      }

      ${aboutFourItemDescriptionSl}{
        ${getColorsCSS(items?.description)}
      }

      ${aboutThreeBtnIconSl} svg {
        width: ${icon?.size?.desktop}px;
        height: ${icon?.size?.desktop}px;
        color: ${icon?.color};
        fill: ${icon?.color};
        margin-right: ${iconTextGap?.desktop}px;
      }

      ${aboutThreeBtnIconSl}{
        color: ${icon?.color}
      }

      ${aboutThreeBtnTextSl}{
        color: ${bgColor?.normal?.color};
      }

      ${aboutThreeBtnSl}{
        color: ${bgColor?.normal?.color};
        background-color: ${bgColor?.normal.bg};
        background-image: ${
          bgColor?.normal?.bgType === "gradient"
            ? `${bgColor?.normal?.gradient}`
            : "none"
        };
        padding: ${padding?.top} ${padding?.right} ${padding?.bottom} ${
          padding?.left
        };
        margin: ${margin?.top} ${margin?.right} ${margin?.bottom} ${
          margin?.left
        };
        border: ${border?.width} ${border?.style} ${border?.color};
        border-radius: ${borderRadius?.top} ${borderRadius?.right} ${
          borderRadius?.bottom
        } ${borderRadius?.left};
      }

      ${aboutThreeTitleSl} {
        ${getColorsCSS(title)}
      }

      ${aboutThreeDescriptionSl}{
        ${getColorsCSS(description)}
      }

      ${aboutThreeRowSl}{
        flex-direction: ${rowDirection ? "row-reverse" : "row"};
      }

      ${aboutThreeItemTitleSl}{
        ${getColorsCSS(item?.title)}
      }

      ${aboutThreeItemDescriptionSl} {
        ${getColorsCSS(item?.description)}
      }

      ${aboutThreeImgSl}{
        border-radius: ${image?.borderRadius?.top} ${
          image?.borderRadius?.right
        } ${image?.borderRadius?.bottom} ${image?.borderRadius?.left};
      }

      ${aboutThreeBodySl}{
       ${getBackgroundCSS(bg?.desktop)}
       border-radius: ${styles?.bg?.borderRadius?.top} ${
         styles?.bg?.borderRadius?.right
       } ${styles?.bg?.borderRadius?.bottom} ${styles?.bg?.borderRadius?.left};
       padding: ${getBoxCSS(styles?.bg?.padding?.desktop)};
       margin: ${getBoxCSS(styles?.bg?.margin?.desktop)};
      }   

      ${aboutSl}{
       ${getBackgroundCSS(bg?.desktop)}
       border-radius: ${styles?.bg?.borderRadius?.top} ${
         styles?.bg?.borderRadius?.right
       } ${styles?.bg?.borderRadius?.bottom} ${styles?.bg?.borderRadius?.left};
       padding: ${getBoxCSS(styles?.bg?.padding?.desktop)};
       margin: ${getBoxCSS(styles?.bg?.margin?.desktop)};
      }

      ${aboutTwoItemsTitleSl}{
        ${getColorsCSS(itemTitle)}
      }

      ${aboutTwoItemsDescriptionSl}{
        ${getColorsCSS(items?.description)}
      }

      ${aboutTwoBodySl} {
       ${getBackgroundCSS(bg?.desktop)}
       border-radius: ${styles?.bg?.borderRadius?.top} ${
         styles?.bg?.borderRadius?.right
       } ${styles?.bg?.borderRadius?.bottom} ${styles?.bg?.borderRadius?.left};
       padding: ${getBoxCSS(styles?.bg?.padding?.desktop)};
       margin: ${getBoxCSS(styles?.bg?.margin?.desktop)};
      }

      ${aboutFourBodySl}{
       border-radius: ${styles?.bg?.borderRadius?.top} ${
         styles?.bg?.borderRadius?.right
       } ${styles?.bg?.borderRadius?.bottom} ${styles?.bg?.borderRadius?.left};
       padding: ${getBoxCSS(styles?.bg?.padding?.desktop)};
       margin: ${getBoxCSS(styles?.bg?.margin?.desktop)};
      }

      ${aboutTwoImgSl}{
        border-radius: ${heading?.layout?.image?.borderRadius?.top} ${
          heading?.layout?.image?.borderRadius?.right
        } ${heading?.layout?.image?.borderRadius?.bottom} ${
          heading?.layout?.image?.borderRadius?.left
        };
      }

      ${aboutTwoRowSl} {
        flex-direction: ${rowDirection ? "row-reverse" : "row"};
      }

      ${aboutTwoItemsIconSl} svg {
        width: ${items?.icon?.size?.desktop}px;
        height: ${items?.icon?.size?.desktop}px;
        fill: ${items?.icon?.color};
      }

      ${aboutTwoItemsIconSl}{
       color: ${items?.icon?.color};
      }

      ${aboutTwoBadgeIconSl} svg {
        width: ${icon?.size?.desktop}px;
        height: ${icon?.size?.desktop}px;
        fill: ${icon?.color};
        margin-right: ${iconTextGap?.desktop}px;
      }

      ${aboutTwoBadgeIconSl}{
        color: ${icon?.color};
      }

      ${aboutTwoBadgeSl}{
        color: ${bgColor?.normal?.color};
        background-color: ${bgColor?.normal.bg};
        background-image: ${
          bgColor?.normal?.bgType === "gradient"
            ? `${bgColor?.normal?.gradient}`
            : "none"
        };
        padding: ${padding?.top} ${padding?.right} ${padding?.bottom} ${
          padding?.left
        };
        margin: ${margin?.top} ${margin?.right} ${margin?.bottom} ${
          margin?.left
        };
        border: ${border?.width} ${border?.style} ${border?.color};
        border-radius: ${borderRadius?.top} ${borderRadius?.right} ${
          borderRadius?.bottom
        } ${borderRadius?.left};
      
      }

      ${aboutTwoTitleSl} {
        color: ${title?.color};
      }

      ${imgSizeSl} {
        max-width: 100%;
        width: ${heading?.layout?.image?.desktop?.width}px;
        height: ${heading?.layout?.image?.desktop?.height}px;
      }

      ${aboutFourImgRowSl}{
        max-width: 100%;
        width: ${heading?.layout?.image?.desktop?.width}px;
        height: ${heading?.layout?.image?.desktop?.height}px;
      }

      ${aboutBodySectionSl}::before {
        width: ${separatorWidth}px;
        background-color: ${separatorColor};
      }

      ${aboutWrapperSl}::after {
        height: ${separatorWidth}px;
        background-color: ${separatorColor};
      }

      ${btnIconSl} {
        fill: ${icon?.color};
        display: flex;
        align-items: center;
        color: ${icon?.color};
        margin-right: ${iconTextGap?.desktop}px;
      }

      ${btnIconSl} svg{
       width: ${icon?.size?.desktop}px;
       height: ${icon?.size?.desktop}px;
      }

      ${btnFs20Sl} {
        font-size: ${icon?.size?.desktop}px !important;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      ${rowSl}{
        flex-direction: ${rowDirection ? "row-reverse" : "row"};
      }

      ${headingAboutTwoImageSl}{
        position: absolute;
        left: ${rowDirection ? "-50%" : "50%"};
        bottom: 0;
      }

      ${aboutHeadingSl}{
        text-align: ${rowDirection ? "right" : "left"};
      }

      ${btnSl} {
        color: ${bgColor?.normal?.color};
        background-color: ${bgColor?.normal.bg};
        background-image: ${
          bgColor?.normal?.bgType === "gradient"
            ? `${bgColor?.normal?.gradient}`
            : "none"
        };
        padding: ${padding?.top} ${padding?.right} ${padding?.bottom} ${
          padding?.left
        };
        margin: ${margin?.top} ${margin?.right} ${margin?.bottom} ${
          margin?.left
        };
        border: ${border?.width} ${border?.style} ${border?.color};
        border-radius: ${borderRadius?.top} ${borderRadius?.right} ${
          borderRadius?.bottom
        } ${borderRadius?.left};
      }

      ${btnTextSl}{
      color: ${bgColor?.normal?.color};
      }

      ${btnSl}:hover {
        color: ${bgColor?.hover?.color};
        background-color: ${bgColor?.hover?.bg};
        background-image: ${
          bgColor?.hover?.bgType === "gradient"
            ? `${bgColor?.hover?.gradient}`
            : "none"
        };
      
      }

      ${btnSl}:first-child:active{
        color: ${bgColor?.hover?.color};
        background-color: ${bgColor?.hover?.bg};
        background-image: ${
          bgColor?.hover?.bgType === "gradient"
            ? `${bgColor?.hover?.gradient}`
            : "none"
        };
      }

      ${aboutTitleSl}{
        color: ${title?.color};
      }

      ${bodyTitleSl}{
        color: ${itemTitle?.color};
      }

      ${bodyDescriptionSl}{
        color: ${items?.description?.color};
      }

      ${bodyIconsSl}{
        width: ${items?.icon?.size?.desktop}px;
        height: auto;
      }


      ${mobileBreakpoint} {
        ${bodyIconsSl}{
          height: auto;
          width: ${items?.icon?.size?.mobile}px;
        }

        ${btnIconSl} {
          margin-right: ${iconTextGap?.mobile}px;
        }

        ${btnIconSl} svg{
          width: ${icon?.size?.mobile}px;
          height: ${icon?.size?.mobile}px;
        }

        ${aboutThreeBtnIconSl} {
          width: ${icon?.size?.mobile}px;
          height: ${icon?.size?.mobile}px;
        }

        ${bodyIconsSl}{
          width: ${items?.icon?.size?.mobile}px;
          height: auto;
        }

        ${btnFs20Sl} {
          font-size: ${icon?.size?.mobile}px !important;
        }

        ${btnIconSl} svg{
          width: ${icon?.size?.mobile}px;
          height: ${icon?.size?.mobile}px;
        }

        ${btnIconSl} {
          margin-right: ${iconTextGap?.mobile}px;
        }

        ${imgSizeSl} {
          width: ${heading?.layout?.image?.mobile.width}px;
          height: ${heading?.layout?.image?.mobile.height}px;
        }

        ${aboutFourImgRowSl}{
          max-width: 100%;
          width: ${heading?.layout?.image?.mobile?.width}px;
          height: ${heading?.layout?.image?.mobile?.height}px;
        }

         ${aboutTwoBadgeIconSl} svg {
          width: ${icon?.size?.mobile}px;
          height: ${icon?.size?.mobile}px;
          margin-right: ${iconTextGap?.mobile}px;
        }

        ${aboutTwoItemsIconSl} svg {
          width: ${items?.icon?.size?.mobile}px;
          height: ${items?.icon?.size?.mobile}px;
        }

        ${aboutTwoBodySl} {
          ${getBackgroundCSS(bg?.mobile)}
        }

        ${aboutSl}{
          ${getBackgroundCSS(bg?.mobile)}
        }

        ${aboutThreeBodySl}{
          ${getBackgroundCSS(bg?.mobile)}
        }
          
        ${aboutThreeBtnIconSl} svg {
          width: ${icon?.size?.mobile}px;
          height: ${icon?.size?.mobile}px;
          margin-right: ${iconTextGap?.mobile}px;
        }

        ${aboutFourBtnIconSl} svg{
          width: ${icon?.size?.mobile}px;
          height: ${icon?.size?.mobile}px;
          margin-right: ${iconTextGap?.mobile}px;
        }

        ${aboutFourItemIconSl} svg{
          width: ${items?.icon?.size?.mobile}px;
          height: ${items?.icon?.size?.mobile}px;
        }

        ${aboutFourItemBtnIconSl}{
          width: ${items?.icon?.iconBgSize?.mobile}px;
          height: ${items?.icon?.iconBgSize?.mobile}px;
        }

        ${aboutSl}{
         padding: ${getBoxCSS(styles?.bg?.padding?.mobile)};
         margin: ${getBoxCSS(styles?.bg?.margin?.mobile)};
        }

        ${aboutTwoBodySl}{
         padding: ${getBoxCSS(styles?.bg?.padding?.mobile)};
         margin: ${getBoxCSS(styles?.bg?.margin?.mobile)};
        }

        ${aboutThreeBodySl}{
         padding: ${getBoxCSS(styles?.bg?.padding?.mobile)};
         margin: ${getBoxCSS(styles?.bg?.margin?.mobile)};
        }

        ${aboutFourBodySl}{
         padding: ${getBoxCSS(styles?.bg?.padding?.mobile)};
         margin: ${getBoxCSS(styles?.bg?.margin?.mobile)};
        }
      }


      ${tabBreakpoint}{
        ${bodyIconsSl}{
          height: auto;
          width: ${items?.icon?.size?.tablet}px;
        }

        ${aboutSl}{
         padding: ${getBoxCSS(styles?.bg?.padding?.tablet)};
         margin: ${getBoxCSS(styles?.bg?.margin?.tablet)};
        }

        ${aboutTwoBodySl}{
         padding: ${getBoxCSS(styles?.bg?.padding?.tablet)};
         margin: ${getBoxCSS(styles?.bg?.margin?.tablet)};
        }

        ${aboutThreeBodySl}{
         padding: ${getBoxCSS(styles?.bg?.padding?.tablet)};
         margin: ${getBoxCSS(styles?.bg?.margin?.tablet)};
        }

         ${aboutFourBodySl}{
         padding: ${getBoxCSS(styles?.bg?.padding?.tablet)};
         margin: ${getBoxCSS(styles?.bg?.margin?.tablet)};
        }

        ${btnFs20Sl} {
          font-size: ${items?.icon?.size?.tablet}px !important;
        }

        ${btnIconSl} svg{
          width: ${icon?.size?.tablet}px;
          height: ${icon?.size?.tablet}px;
        }

        ${btnIconSl} {
          margin-right: ${iconTextGap?.tablet}px;
        }

        ${bodyIconsSl}{
          width: ${items?.icon?.size?.tablet}px;
          height: auto;
        }

        ${btnFs20Sl} {
          font-size: ${icon?.size?.tablet}px !important;
        }

        ${btnIconSl} svg{
          width: ${icon?.size?.tablet}px;
          height: ${icon?.size?.tablet}px;
        }

        ${btnIconSl} {
          margin-right: ${iconTextGap?.tablet}px;
        }

        ${imgSizeSl} {
          width: ${heading?.layout?.image?.tablet.width}px;
          height: ${heading?.layout?.image?.tablet.height}px;
        }

        ${aboutFourImgRowSl}{
          max-width: 100%;
          width: ${heading?.layout?.image?.tablet?.width}px;
          height: ${heading?.layout?.image?.tablet?.height}px;
        }

        ${aboutTwoBadgeIconSl} svg {
          width: ${icon?.size?.tablet}px;
          height: ${icon?.size?.tablet}px;
          margin-right: ${iconTextGap?.tablet}px;
        }

        ${aboutTwoItemsIconSl} svg {
          width: ${items?.icon?.size?.tablet}px;
          height: ${items?.icon?.size?.tablet}px;
        }

        ${aboutTwoBodySl} {
          ${getBackgroundCSS(bg?.tablet)}
        }

        ${aboutSl}{
          ${getBackgroundCSS(bg?.tablet)}
        }

        ${aboutThreeBodySl}{
          ${getBackgroundCSS(bg?.tablet)}
        }
          
        ${aboutThreeBtnIconSl} svg {
          width: ${icon?.size?.tablet}px;
          height: ${icon?.size?.tablet}px;
          margin-right: ${iconTextGap?.tablet}px;
        }

        ${aboutFourBtnIconSl} svg{
          width: ${icon?.size?.tablet}px;
          height: ${icon?.size?.tablet}px;
          margin-right: ${iconTextGap?.tablet}px;
        }

        ${aboutFourItemIconSl} svg{
          width: ${items?.icon?.size?.tablet}px;
          height: ${items?.icon?.size?.tablet}px;
        }

        ${aboutFourItemBtnIconSl}{
          width: ${items?.icon?.iconBgSize?.tablet}px;
          height: ${items?.icon?.iconBgSize?.tablet}px;
        }
      }
      

    ${cssString}


	`,
      }}
    />
  );
};
export default Style;
