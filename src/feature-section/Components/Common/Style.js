import { mobileBreakpoint, tabBreakpoint } from '../../../../../bpl-tools/utils/data';
import {  getBackgroundCSS, getBoxCSS, getTypoCSS, isValidCSS } from '../../../../../bpl-tools/utils/getCSS';
// import {generateCSS} from '../../../../bpl-tools/Advanced/generateCSS';
import { getBorderStyles } from '../../utils/functions';

const Style = ({ attributes, id , device="desktop"}) => {
   // advanced
    const { alignment, section, heading, style, } = attributes;

    // const isBackend = false;
    // const cssString = generateCSS(id, advanced, isBackend);

    const mainSl = `#${id}`;

	//feature 1
    const usageSection1 = `${mainSl} .usage-section-1`;
    const sectionSpace = `${usageSection1} .section-space`;

    const headingMain = `${sectionSpace} .heading-main`;

    const badges = `${headingMain} .badge`;
    const badgeIconWrapper = `${badges} .badge-icon-wrapper`;

    const titles = `${headingMain} .title`;

    const container = `${usageSection1} .container`;
    const row = `${container} .row`;
    const firstCol = `${row} .first-col`;


    const bgDark = `${firstCol} .bg-dark`;
    const icon = `${bgDark} .icon`;
    const titleText = `${bgDark} .title-text`;
    const decText = `${bgDark} .dec-text`;

    // featrure 2 

    const mainSection = `${mainSl} .main-section`;
    const mainContainer = `${mainSection} .main-container`;
    const rowContainer = `${mainContainer} .row-container`;
    const colSection = `${rowContainer} .col-section`;
    const listSection = `${colSection} .list-section`;
    const dFlex = `${listSection} .d-flex`;
    const itemIcon = `${dFlex} .icon`;
    const textSection = `${dFlex} .text-section`;
    const textHeading = `${textSection} .text-heading`;
    const textDec = `${textSection} .text-dec`;

    //feature 3
    const mainContainerThree = `${mainSl} .main-container-three`;
    const subContainer = `${mainContainerThree} .sub-container`;
    const rowSection = `${subContainer} .row-section`;
    const colSections = `${rowSection} .col-sections`;
    const bgBack = `${colSections} .bg-back`;
    const sectionRow = `${colSections} .section-row`;
    const mainTextSection = `${sectionRow} .main-text-section`;
    const iconButton = `${mainTextSection} .icon-button `;
    const iconSvg = `${iconButton} .icon-svg`;
    const headingText = `${mainTextSection} .heading-text`;
    const linkText = `${headingText} .link-text`;
    const decsTextThree = `${mainTextSection} .decs-text-three`;

    // feature 4
    const sectionWrapper = `${mainSl} .section-wrapper`;
    const featureContainer = `${sectionWrapper} .feature-container`;
    const featureRow = `${featureContainer} .feature-row`;
    const featureColumn = `${featureRow} .feature-column`;
    const featureBox = `${featureColumn} .feature-box`;
    const featureBoxRow = `${featureBox} .feature-box-row`;
    const featureItem = `${featureBoxRow} .feature-item`;
    const iconWrapper = `${featureItem} .icon-wrapper`;

    const badgeIcon = `${iconWrapper} .badge-icon`;

    const featureTitle = `${featureItem} .feature-title`;
    const featureLink = `${featureTitle} .feature-link `;

    const featureDescription = `${featureItem} .feature-description`;
    // ${cssString}

    const firstColStyles = `

    ${mainSl} .usage-section-1 .row .first-col.last-feature {
      grid-column: span ${style?.columnsSpan.desktop || 2}; 
    }
  
    ${tabBreakpoint}{
        ${mainSl} .usage-section-1 .row .first-col.last-feature{
          grid-column: span ${style?.columnsSpan.tablet} !important;
        }
    }
  
    ${mobileBreakpoint} {
      ${mainSl} .usage-section-1 .row .first-col.last-feature {
        grid-column: span ${style?.columnsSpan.mobile} !important; 
      }
    }
  `;


    return <style dangerouslySetInnerHTML={{
        __html: `
       ${getTypoCSS('', heading?.subTitle?.typo)?.googleFontLink}
       ${getTypoCSS('', heading?.title?.typo)?.googleFontLink}
       ${getTypoCSS('', style?.title?.typo)?.googleFontLink}
       ${getTypoCSS('', style?.des?.typo)?.googleFontLink}


       
       ${getTypoCSS(badges, heading?.subTitle?.typo)?.styles}
       ${getTypoCSS(titles, heading?.title?.typo)?.styles}

       ${getTypoCSS(titleText, style?.title?.typo)?.styles}
       ${getTypoCSS(decText, style?.des?.typo)?.styles}

       ${getTypoCSS(textHeading, style?.title?.typo)?.styles}
       ${getTypoCSS(textDec, style?.des?.typo)?.styles}

       ${getTypoCSS(linkText, style?.title?.typo)?.styles}
       ${getTypoCSS(decsTextThree, style?.des?.typo)?.styles}

       ${getTypoCSS(featureLink, style?.title?.typo)?.styles}
       ${getTypoCSS(featureDescription, style?.des?.typo)?.styles}



        ${usageSection1}{
          ${getBackgroundCSS(section?.background)}
           ${isValidCSS("padding",getBoxCSS(section?.padding?.desktop))}
           ${isValidCSS("margin",getBoxCSS(section?.margin?.desktop))}
        }

        ${badgeIconWrapper} svg {
          width: ${heading?.subTitle?.height} !important;
          height: ${heading?.subTitle?.height} !important;
          color:${heading?.subTitle?.iconColor}!important;
        }
        ${badges}{
           ${isValidCSS("padding",getBoxCSS(heading?.subTitle?.padding))}
           ${isValidCSS("border-radius",getBoxCSS(heading?.subTitle?.radius))}
            color: ${heading?.subTitle?.color} !important;
            background: ${heading?.subTitle?.bg?.includes('gradient') ? heading?.subTitle?.bg : `${heading?.subTitle?.bg}`}; 
        }
        ${titles}{

           ${isValidCSS("padding",getBoxCSS(heading?.title?.padding))}
           ${isValidCSS("margin",getBoxCSS(heading?.title?.margin))}

            color: ${heading?.title?.color} !important;
        }
        ${row}{
           grid-template-columns: repeat(${style?.columns[device]}, 1fr);
           gap: ${style?.gap};
           ${isValidCSS("padding",getBoxCSS(style?.padding))}
           ${isValidCSS("margin",getBoxCSS(style?.margin))}
           text-align: ${alignment};
           
        }

        ${firstColStyles}

        ${bgDark}{
           ${isValidCSS("padding",getBoxCSS(style?.bgPadding))}
           ${isValidCSS("border-radius",getBoxCSS(style?.radius))}
           background: ${style?.bg?.includes('gradient') ? style?.bg : `${style?.bg}`}!important; 

           
        }
        ${icon}{
           color: ${style?.icon?.color};

        }
        ${icon} svg{
           width: ${style?.icon?.height};
           height: ${style?.icon?.height};
           fill:${style?.icon?.color};
        }
        ${titleText}{
           color:${style?.title?.color};
        }
        ${decText}{
           color:${style?.des?.color};
        }




        ${mainSection}{
          ${getBackgroundCSS(section?.background)}
                    
           ${isValidCSS("padding",getBoxCSS(section?.padding?.desktop))}
           ${isValidCSS("margin",getBoxCSS(section?.margin?.desktop))}

        }

        ${listSection}{
         gap: ${style?.itemGap};
        }
        ${dFlex}{
          background: ${style?.bg?.includes('gradient') ? style?.bg : `${style?.bg}`}!important;
          ${isValidCSS("padding",getBoxCSS(style?.padding))}!important;
          ${isValidCSS("border-radius",getBoxCSS(style?.radius))}!important;
          gap: ${style?.gap};
          box-shadow: ${style?.shadow?.map(shadow =>
                `${shadow.hOffset} ${shadow.vOffset} ${shadow.blur} ${shadow.spreed} ${shadow.color} ${shadow.isInset ? 'inset' : ''}`
            ).join(', ')};

        }
        ${itemIcon} {
           color:${style?.icon?.color};
        }
        ${itemIcon} svg{
           fill:${style?.icon?.color};
           width: ${style?.icon?.height};
           height: ${style?.icon?.height};
        }
        ${textHeading}{
           color:${style?.title?.color};
        }
        ${textDec}{
           color:${style?.des?.color};
        }




        ${mainContainerThree}{
          ${getBackgroundCSS(section?.background)}
          ${isValidCSS("padding",getBoxCSS(section?.padding?.desktop))}
          ${isValidCSS("margin",getBoxCSS(section?.margin?.desktop))}
 
        }

        ${bgBack}{
          background: ${style?.bg?.includes('gradient') ? style?.bg : `${style?.bg}`};
          ${isValidCSS("border-radius", getBoxCSS(style?.radius))}
        }
        ${mainTextSection}{
          ${isValidCSS("padding", getBoxCSS(style?.padding))}
        }
        ${linkText}{
          color:${style?.title?.color};
        }

        ${decsTextThree}{
          color:${style?.des?.color};
        }

        ${mainTextSection}:hover .link-text{
          color: ${style?.title?.hoverColor} !important;
        }
        ${mainTextSection}:hover .icon-button{
         background-color: ${style?.iconButton?.hoverBg} !important;
        }
        ${mainTextSection}:hover .icon-button .icon-svg svg{
          color: ${style?.icon?.hoverColor};
          fill: ${style?.icon?.hoverColor};
        }

       ${iconButton}{
          width: ${style?.iconButton?.height};
          height: ${style?.iconButton?.height};
          ${isValidCSS("border-radius", getBoxCSS(style?.iconButton?.border?.radius))}
          background-color: ${style?.iconButton?.colorBg}; 

         ${getBorderStyles(style?.iconButton?.border)};

        }

        ${iconSvg}
        {
          color:${style?.icon?.color};
        }
        ${iconSvg} svg{
           width: ${style?.icon?.height};
           height: ${style?.icon?.height};
           fill:${style?.icon?.color};
        }



        ${sectionWrapper}{
          ${getBackgroundCSS(section?.background)}
          ${isValidCSS("padding",getBoxCSS(section?.padding?.desktop))}
          ${isValidCSS("margin",getBoxCSS(section?.margin?.desktop))}
        }

        ${featureRow}{
          ${isValidCSS("padding",getBoxCSS(style?.featureFourPadding))}
          ${isValidCSS("margin",getBoxCSS(style?.margin))}
        }
        ${featureBox}{
           background: ${style?.bg?.includes('gradient') ? style?.bg : `${style?.bg}`}!important;
           ${isValidCSS("border-radius",getBoxCSS(style?.radius))}
        }

        ${featureItem}{
          ${isValidCSS("padding",getBoxCSS(style?.padding))}
          border-image: linear-gradient(45deg, transparent, ${style?.borderColor}, ${style?.borderColor}, transparent) 1;
          
        }
        ${featureItem}:hover .feature-link{
          color: ${style?.title?.hoverColor} !important;
        }

        ${featureItem}:hover .icon-wrapper{
         background-color: ${style?.iconButton?.hoverBg} !important;
        }

        ${featureItem}:hover .icon-wrapper .badge-icon  svg{
          color: ${style?.icon?.hoverColor};
          fill: ${style?.icon?.hoverColor};
        }

        ${iconWrapper}{
          width: ${style?.iconButton?.height};
          height: ${style?.iconButton?.height};
          ${isValidCSS("border-radius",getBoxCSS(style?.iconButton?.border?.radius))}!important;
          background-color: ${style?.iconButton?.colorBg};
          ${getBorderStyles(style?.iconButton?.border)}!important; 
        }
        ${badgeIcon} svg{
           width: ${style?.icon?.height};
           height: ${style?.icon?.height};
           fill:${style?.icon?.color};
           color:${style?.icon?.color};
        }
        
        ${featureTitle}{
         color:${style?.title?.color};
        }
         
        ${featureLink}{
         color:${style?.title?.color} ;
        }

        ${featureDescription}{
         color:${style?.des?.color};
    
        }
   

        @media only screen and (min-width: 641px) and (max-width: 1024px) {

            ${usageSection1}{

              ${isValidCSS("padding",getBoxCSS(section?.padding?.tablet))}
              ${isValidCSS("margin",getBoxCSS(section?.margin?.tablet))}

            }
            ${mainSection}{
              ${isValidCSS("padding",getBoxCSS(section?.padding?.tablet))}
              ${isValidCSS("margin",getBoxCSS(section?.margin?.tablet))}
            }
            ${mainContainerThree}{
              ${isValidCSS("padding",getBoxCSS(section?.padding?.tablet))}
              ${isValidCSS("margin",getBoxCSS(section?.margin?.tablet))}
            }
            ${sectionWrapper}{
              ${isValidCSS("padding",getBoxCSS(section?.padding?.tablet))}
              ${isValidCSS("margin",getBoxCSS(section?.margin?.tablet))}
            }

            ${badges} {
                font-size: ${heading?.subTitle?.typo?.fontSize.tablet}px;
            }
            ${titles} {
              font-size: ${heading?.title?.typo?.fontSize.tablet}px;
              
            }
            ${titleText} {
              font-size: ${style?.title?.typo?.fontSize.tablet}px;
            }
            ${decText} {
              font-size: ${style?.des?.typo?.fontSize.tablet}px;
            }
            ${row}  {
             grid-template-columns: repeat(${style?.columns.tablet}, 1fr);
            }
        }

        @media only screen and (max-width: 641px) {

            ${usageSection1}{
              ${isValidCSS("padding",getBoxCSS(section?.padding?.mobile))}
              ${isValidCSS("margin",getBoxCSS(section?.margin?.mobile))}
            }

            ${mainSection}{
              ${isValidCSS("padding",getBoxCSS(section?.padding?.mobile))}
              ${isValidCSS("margin",getBoxCSS(section?.margin?.mobile))}
            }
            ${mainContainerThree}{
              ${isValidCSS("padding",getBoxCSS(section?.padding?.mobile))}
              ${isValidCSS("margin",getBoxCSS(section?.margin?.mobile))}

            }
            ${sectionWrapper}{
              ${isValidCSS("padding",getBoxCSS(section?.padding?.mobile))}
              ${isValidCSS("margin",getBoxCSS(section?.margin?.mobile))}

            }

            ${badges}{
               font-size: ${heading?.subTitle?.typo?.fontSize.mobile}px;
            }
               
            ${titles}{
               font-size: ${heading?.title?.typo?.fontSize.mobile}px;
               
            }
            ${titleText} {
                font-size: ${style?.title?.typo?.fontSize.mobile}px;
            }
            ${decText} {
                font-size: ${style?.des?.typo?.fontSize.mobile}px;
            }
            ${row}  {
              grid-template-columns: repeat(${style?.columns.mobile}, 1fr);
            }
            
        }
        


    `}} />;
}
export default Style;