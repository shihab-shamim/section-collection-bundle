import {
  deskBreakpoint,
  mobileBreakpoint,
  tabBreakpoint,
} from "../../../../../bpl-tools/utils/data";
import {
  getBorderCSS,
  getBoxCSS,
  getShadowCSS,
  getTypoCSS,
} from "../../../../../bpl-tools/utils/getCSS";
import { getGradientCSS } from "../../utils/functions";

const Style = ({ attributes, id }) => {
  const { styleSl, styles } = attributes;
  const { heading, items, container } = styles || {};
  const { badge, title, subTitle, description, highlightTitle } = heading || {};
  const { icon } = badge || {};
  const { name, role, linkArrowIcon, infoBox, socialLinks, image, cardBg } =
    items || {};
  const { shadow, hoverShadow } = cardBg || {};

  // Style Default
  const mainSl = `#${id}`;
  const teamDefaulStyletSl = `${mainSl} .team-section.${styleSl}`;
  const bgBodySl = `${teamDefaulStyletSl} .bg-body-tertiary`;
  const sectionSpaceSl = `${bgBodySl} .section-space-md-bottom`;
  const headingContainerSl = `${sectionSpaceSl} .container`;
  const headingRowSl = `${headingContainerSl} .row`;
  const headingColSl = `${headingRowSl} .col-lg-8`;
  const headingTextAlignSl = `${headingColSl} .text-center`;
  const headingBtnSl = `${headingTextAlignSl} .btn`;
  const headingBtnFSSl = `${headingBtnSl} .fs-20`;
  const headingBtnSubtitleSl = `${headingBtnSl} .subtitleText`;
  const headingTitleSl = `${headingTextAlignSl} .title`;
  const itemContainerSl = `${bgBodySl} .container`;
  const itemRowSl = `${itemContainerSl} .row`;
  const itemColSl = `${itemRowSl} .col-sm-6`;
  const itemTeamMemberSl = `${itemColSl} .team-member-1`;
  const itemTeamMemberRoundedSl = `${itemTeamMemberSl} .rounded`;
  const itemTeamMemberImgSl = `${itemTeamMemberRoundedSl} img`;
  const itemTeamMemberContentSl = `${itemTeamMemberSl} .team-member-1__content`;
  const itemTeamMemberContentBgSl = `${itemTeamMemberContentSl} .bg-light-subtle`;
  const itemTeamMemberContentFlexSl = `${itemTeamMemberContentBgSl} .flex-grow-1`;
  const itemTeamMemberNameSl = `${itemTeamMemberContentFlexSl} .name`;
  const itemTeamMemberRoleSl = `${itemTeamMemberContentFlexSl} .role`;
  const itemTeamMemberIconFlexSl = `${itemTeamMemberContentBgSl} .flex-shrink-0`;
  const itemTeamMemberIconSl = `${itemTeamMemberIconFlexSl} .btn`;
  const itemTeamMemberLinkIconSl = `${itemTeamMemberIconSl} .link-icon`;

  // Style One
  const teamOneStyletSl = `${mainSl} .team-section.${styleSl}`;
  const speakersSectionOneSl = `${teamOneStyletSl} .speakers-section-three`;
  const speakersSectionOneContainerSl = `${speakersSectionOneSl} .container`;
  const secTitleSl = `${speakersSectionOneContainerSl} .sec-title`;
  const secTitleTitleSl = `${secTitleSl} .title`;
  const secTitleTitleH2Sl = `${secTitleSl} h2`;
  const rowSl = `${speakersSectionOneContainerSl} .row`;
  const speakerBlockThreeSl = `${rowSl} .speaker-block-three`;
  const speakerInnerBoxSl = `${speakerBlockThreeSl} .inner-box`;
  const speakerImageBoxSl = `${speakerInnerBoxSl} .image-box`;
  const speakerImageBoxImgSl = `${speakerImageBoxSl} .image`;
  const speakerInfoBoxSl = `${speakerInnerBoxSl} .info-box`;
  const speakerInfoBoxNameSl = `${speakerInfoBoxSl} .name a`;
  const speakerInfoBoxDesignationSl = `${speakerInfoBoxSl} .designation`;
  const speakerInnerBoxSocialBoxSl = `${speakerInnerBoxSl} .social-box`;
  const speakerInnerBoxSocialLinksSl = `${speakerInnerBoxSocialBoxSl} .social-links`;
  // const speakerInnerBoxSocialLinksIconSl = `${speakerInnerBoxSocialLinksSl} .social-icon`;

  // Style Two
  const teamTwoStyletSl = `${mainSl} .team-section.${styleSl}`;
  const sectionTwoSl = `${teamTwoStyletSl} .section`;
  const sectionTwoContainerSl = `${sectionTwoSl} .container`;
  const sectionTitleSl = `${sectionTwoSl} h2`;
  const highlightSecondarySl = `${sectionTwoContainerSl} .highlight_secondary`;
  const descriptionSl = `${sectionTwoContainerSl} .team-description`;
  const rowTwoSl = `${sectionTwoContainerSl} .row`;
  // const colTwoSl = `${rowTwoSl} .col-md-4`;
  const teamSl = `${rowTwoSl} .team`;
  // const teamImgSl = `${teamSl} .team-image`;
  const teamContentSl = `${teamSl} .team-content`;
  const teamNameSl = `${teamContentSl} .team-name`;
  const teamRoleSl = `${teamContentSl} .team-role`;
  // const teamTwoRowSl = `${sectionTwoContainerSl} .row`;
  // const teamTwoColSl = `${teamTwoRowSl} .col-md-2`;
  // const teamTwoSl = `${teamTwoRowSl} .team`;
  // const teamTwoImgSl = `${teamTwoSl} .team-image`;
  // const teamTwoContentSl = `${teamTwoSl} .team-content`;
  const teamTwoNameTypoSl = `${teamNameSl} h5`;
  // const teamTwoRoleSl = `${teamRoleSl} .team-role`;

  const shadowValue =
    shadow?.map((s) => getShadowCSS(s, "box")).join(", ") || "none";

  const hoverShadowValue =
    hoverShadow?.map((s) => getShadowCSS(s, "box")).join(", ") || "none";

  const imageShadowValue =
    image?.shadow?.map((s) => getShadowCSS(s, "box")).join(", ") || "none";

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `

        ${getTypoCSS("", badge?.typography)?.googleFontLink}
        ${getTypoCSS("", title?.typography)?.googleFontLink}
        ${getTypoCSS("", name?.typography)?.googleFontLink}
        ${getTypoCSS("", role?.typography)?.googleFontLink}
        ${getTypoCSS("", subTitle?.typography)?.googleFontLink}
        ${getTypoCSS("", description?.typography)?.googleFontLink}
        
        ${getTypoCSS(headingBtnSubtitleSl, badge?.typography)?.styles}
        ${getTypoCSS(headingTitleSl, title?.typography)?.styles}
        ${getTypoCSS(itemTeamMemberNameSl, name?.typography)?.styles}
        ${getTypoCSS(itemTeamMemberRoleSl, role?.typography)?.styles}
        ${getTypoCSS(secTitleTitleSl, subTitle?.typography)?.styles}
        ${getTypoCSS(secTitleTitleH2Sl, title?.typography)?.styles}
        ${getTypoCSS(speakerInfoBoxNameSl, name?.typography)?.styles}
        ${getTypoCSS(speakerInfoBoxDesignationSl, role?.typography)?.styles}
        ${getTypoCSS(sectionTitleSl, title?.typography)?.styles}
        ${getTypoCSS(descriptionSl, description?.typography)?.styles}
        ${getTypoCSS(teamRoleSl, role?.typography)?.styles}
        ${getTypoCSS(teamTwoNameTypoSl, name?.typography)?.styles}

        ${speakerImageBoxImgSl}{
          box-shadow: ${imageShadowValue}
        }

        ${itemTeamMemberRoundedSl}{
         border-radius: ${getBoxCSS(image?.borderRadius)} 
        }

        ${itemTeamMemberContentSl} .rounded {
         border-radius :${getBoxCSS(infoBox?.borderRadius)} 
        }

        ${headingRowSl}{
          justify-content: ${items?.alignItems};
        }

        ${teamOneStyletSl} .row{
          justify-content: ${items?.alignItems};
        }

        ${teamNameSl} a h5:hover{
          text-decoration: ${name?.textDecoration};
          text-decoration-thickness: ${name?.underline?.width}px;
          color: ${name?.link?.hover?.color}
        }

        ${teamNameSl} h5{
          color: ${name?.color};
        }

         ${teamNameSl} a h5{
          color: ${name?.link?.normal?.color}
        }

        ${teamRoleSl}{
          color: ${role?.color}
        }

        ${teamTwoNameTypoSl}{
          margin: ${getBoxCSS(name?.margin)};
        }

        ${teamRoleSl}{
          margin: ${getBoxCSS(role?.margin)};
        }

        ${sectionTitleSl}{
          margin: ${getBoxCSS(title?.margin)};
          color: ${title?.color} !important;
        }

        ${highlightSecondarySl}{
          color: ${highlightTitle?.color};
        }

        ${descriptionSl}{
          color: ${description?.color};
          margin: ${getBoxCSS(description?.margin)};
        }

        ${speakerInnerBoxSl}:hover .image-box .image{
          border-radius: 0 !important;
        }

        ${speakerInnerBoxSl}{
          box-shadow: ${shadowValue}
        }

        ${speakerInnerBoxSl}:hover{
          box-shadow: ${hoverShadowValue}
        }

        ${sectionTwoSl}{
          background-color: ${container?.bgColor};
          margin: ${getBoxCSS(container?.margin)};
          padding: ${getBoxCSS(container?.padding)};
          border-radius: ${getBoxCSS(container?.borderRadius)};
        }

        ${speakersSectionOneSl}{
          background-color: ${container?.bgColor};
          margin: ${getBoxCSS(container?.margin)};
          padding: ${getBoxCSS(container?.padding)};
          border-radius: ${getBoxCSS(container?.borderRadius)};
        }

        ${secTitleTitleSl}{
          background: ${getGradientCSS(subTitle?.gradient)};
          -webkit-background-clip: text;
          background-clip: text;
          margin: ${getBoxCSS(subTitle?.margin)};
        }

        ${secTitleSl}{
          margin: ${getBoxCSS(title?.margin)};
        }

        ${secTitleTitleH2Sl}{
         color: ${title?.color} !important;
        }

        ${speakerInfoBoxNameSl}{
          color: ${name?.color} !important;
        }

        ${speakerInfoBoxSl} .name{
          margin: ${getBoxCSS(name?.margin)};
        }

        ${speakerInfoBoxDesignationSl}{
          color: ${role?.color} !important;
          margin: ${getBoxCSS(role?.margin)};
        }

        ${speakerInfoBoxSl}{
          background-color: ${infoBox?.bgColor};
        }

        ${speakerInfoBoxSl}:before{
          background-color: ${infoBox?.bgColor};
        } 

        ${speakerInnerBoxSocialLinksSl} li a svg{
          background-color: ${socialLinks?.normal?.bg};
          fill: ${socialLinks?.normal?.color};
        }

        ${speakerInnerBoxSocialLinksSl} li a:hover svg{
          background-color: ${socialLinks?.hover?.bg};
          fill: ${socialLinks?.hover?.color};
        }

        ${speakerImageBoxSl}:before{
          background-image: url(${cardBg?.shapeImage});
        }

        ${speakerInnerBoxSl}{
          background-color: ${cardBg?.color};
        }

        ${speakerImageBoxImgSl}{
          ${getBorderCSS(image?.border)}
          border-radius: 50%;
        }

        ${bgBodySl}{
          background-color: ${container?.bgColor};
          margin: ${getBoxCSS(container?.margin)};
          padding: ${getBoxCSS(container?.padding)};
          border-radius: ${getBoxCSS(container?.borderRadius)};
        }

        ${headingTitleSl}{
          color: ${title?.color};
          margin: ${getBoxCSS(title?.margin)} !important;
        }

        ${itemTeamMemberNameSl}{
          color: ${name?.textColor?.normal?.color} !important;
          margin: ${getBoxCSS(name?.margin)};
        }

        ${itemTeamMemberNameSl}:hover{
          color: ${name?.textColor?.hover?.color} !important;
        }

        ${itemTeamMemberRoleSl}{
          color: ${role?.color};
          margin: ${getBoxCSS(role?.margin)} !important;
        }

        ${headingBtnFSSl}{
          width: ${icon?.size?.desktop}px;
          height: ${icon?.size?.desktop}px;
          font-size: ${icon?.size?.desktop}px;
          color: ${icon?.color};
          fill: ${icon?.color};
          margin-right: ${badge?.badgeIconGap?.desktop}px;
        }

        ${itemTeamMemberIconSl}{
         ${getBorderCSS(linkArrowIcon?.border)}
          background-color: ${linkArrowIcon?.bgColor?.normal?.bg};
          width: ${linkArrowIcon?.iconContainerSize?.desktop}px;
          height: ${linkArrowIcon?.iconContainerSize?.desktop}px;
          border-radius: ${getBoxCSS(linkArrowIcon?.borderRadius)} !important; 
          margin: ${getBoxCSS(linkArrowIcon?.margin)};
        }

        ${itemTeamMemberIconSl}:hover .link-icon{
          color: ${linkArrowIcon?.bgColor?.hover?.color} !important;
          fill: ${linkArrowIcon?.bgColor?.hover?.color} !important;
        }

        ${itemTeamMemberLinkIconSl}{
          color: ${linkArrowIcon?.bgColor?.normal?.color} !important;
          fill: ${linkArrowIcon?.bgColor?.normal?.color} !important;
        }

        ${itemTeamMemberLinkIconSl}{
          width: ${linkArrowIcon?.size?.desktop}px;
          height: ${linkArrowIcon?.size?.desktop}px;
        }

        ${itemTeamMemberIconSl}:hover{
          background-color: ${linkArrowIcon?.bgColor?.hover?.bg} !important;
          border: ${linkArrowIcon?.bgColor?.hover?.bg} !important;
        }

        ${itemTeamMemberContentBgSl}{
          background-color: ${infoBox?.bgColor} !important;
        }

        ${headingBtnSl}{
          background-color: ${badge?.bgColor?.normal?.bg} !important;
          ${getBorderCSS(badge?.border)}
          color: ${badge?.bgColor?.normal?.color} !important;
          fill: ${badge?.bgColor?.normal?.color} !important;
          padding: ${getBoxCSS(badge?.padding)} !important;
          margin: ${getBoxCSS(badge?.margin)} !important;
          border-radius: ${getBoxCSS(badge?.borderRadius)} !important;
        }

        ${headingBtnSl}:hover{
          background-color: ${badge?.bgColor?.hover?.bg} !important;
          color: ${badge?.bgColor?.hover?.color} !important;
          fill: ${badge?.bgColor?.hover?.color} !important;
        }


        ${deskBreakpoint}{
          .small{
            max-width: 165px;
            min-height: 165px;
            object-fit: cover;
          }

          .large{
            max-width: 360px;
            min-height: 360px;
            object-fit: cover;
          }

           ${itemTeamMemberImgSl}{
            width: 100%;
            height: 368.77px;
          }
        }
        

        ${tabBreakpoint}{
          ${headingBtnFSSl}{
            width: ${icon?.size?.tablet}px;
            height: ${icon?.size?.tablet}px;
            font-size: ${icon?.size?.tablet}px;
            margin-right: ${badge?.badgeIconGap?.tablet}px;
          }

          ${itemTeamMemberIconSl} {
            width: ${linkArrowIcon?.iconContainerSize?.tablet}px;
            height: ${linkArrowIcon?.iconContainerSize?.tablet}px;
          }

          ${itemTeamMemberLinkIconSl}{
            width: ${linkArrowIcon?.size?.tablet}px;
            height: ${linkArrowIcon?.size?.tablet}px;
          }

          .small{
            max-width: 220px;
            min-height: 220px;
            object-fit: cover;
          }

          .large{
            max-width: 360px;
            min-height: 360px;
            object-fit: cover;
          }

          ${itemTeamMemberImgSl}{
            width: 100%;
            height: 368.77px;
          }
        }

        ${mobileBreakpoint}{
          ${headingBtnFSSl}{
            width: ${icon?.size?.mobile}px;
            height: ${icon?.size?.mobile}px;
            font-size: ${icon?.size?.mobile}px;
            margin-right: ${badge?.badgeIconGap?.mobile}px;
          }

          ${itemTeamMemberIconSl} {
            width: ${linkArrowIcon?.iconContainerSize?.mobile}px;
            height: ${linkArrowIcon?.iconContainerSize?.mobile}px;
          }

          ${itemTeamMemberLinkIconSl}{
            width: ${linkArrowIcon?.size?.mobile}px;
            height: ${linkArrowIcon?.size?.mobile}px;
          }

          .small{
            width: 120px;
            height: 120px;
            object-fit: cover;
          }

          .large{
            width: 290px;
            height: 290px;
            object-fit: cover;
          }

          ${itemTeamMemberImgSl}{
           width: 100%;
           height: 368.77px;
          }

          ${itemRowSl}{
           padding: 0px 30px 0px 30px;
          }
        }

	`,
      }}
    />
  );
};
export default Style;
