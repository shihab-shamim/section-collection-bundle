import {
  getBackgroundCSS,
  getBoxCSS,
  getColorsCSS,
  getTypoCSS,
} from "../../../../../bpl-tools/utils/getCSS";

const Style = ({ attributes, id }) => {
  const { layout, styles } = attributes;

  const mainSl = `#${id}`;
  const maincontSl = `${mainSl} .main-cont`;
  const pluginContSl = `${maincontSl} .plugin-cont`;
  const pluginSl = `${pluginContSl} .plugin`;
  const textContSl = `${pluginSl} .text-cont`;
  const leftPartSl = `${textContSl} .left-part`;
  const btnSl = `${leftPartSl} .btn`;
  const leftCardCont = `${leftPartSl} .left-cards-cont`;
  const leftCard = `${leftCardCont} .left-card`;
  const ballSvg = `${leftCardCont} .ball-svg`;
  const leftCardText = `${leftCard} .card-text-cont`;
  const cardTitle = `${leftCardText} .card-title`;
  const cardDescription = `${leftCardText} p`;

  const headerSl = `${leftPartSl} .header`;
  const rightPartSl = `${textContSl} .right-part`;
  const dashedLineSl = `${rightPartSl} .dashed-line li::before`;
  const listsContSl = `${rightPartSl} .lists-cont`;
  const listSl = `${listsContSl} .list`;
  const serialSl = `${listSl} .timeline-serial`;
  const timelineTextSl = `${listSl} .timeline-text`;
  const timelineTitleSl = `${timelineTextSl} .title`;
  const timelineDescriptionSl = `${timelineTextSl} .description`;

  // ======================= theme 2 ======================= //

  const maincontSl2 = `${mainSl} .main-cont2`;

  function getBackground(styleObj) {
    if (styleObj.bgType === "solid") {
      return styleObj.bg;
    } else if (styleObj.bgType === "gradient") {
      return styleObj.gradient;
    }
    return "";
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `


		${getTypoCSS("", styles.header.typo)?.googleFontLink}
		${getTypoCSS("", styles.leftCard.text.title.typo)?.googleFontLink}
		${getTypoCSS("", styles.leftCard.text.description.typo)?.googleFontLink}
		${getTypoCSS("", styles.timelines.title.typo)?.googleFontLink}
		${getTypoCSS("", styles.timelines.description.typo)?.googleFontLink}
		

    ${getTypoCSS(headerSl, styles.header.typo)?.styles}
    ${getTypoCSS(cardTitle, styles.leftCard.text.title.typo)?.styles}
    ${getTypoCSS(cardDescription, styles.leftCard.text.description.typo)?.styles}
    ${getTypoCSS(timelineTitleSl, styles.timelines.title.typo)?.styles}
    ${getTypoCSS(timelineDescriptionSl, styles.timelines.description.typo)?.styles}


		${maincontSl} {
			${getBackgroundCSS(styles.sectionBg)}
			margin:${getBoxCSS(layout.section.margin.desktop)};
			padding:${getBoxCSS(layout.section.padding.desktop)};

		}

		${maincontSl2} {
			${getBackgroundCSS(styles.sectionBg)}
			margin:${getBoxCSS(layout.section.margin.desktop)};
			padding:${getBoxCSS(layout.section.padding.desktop)};

		}

		${pluginSl}{
			${getBackgroundCSS(styles.bodyBg)}
			width:${layout.body?.width?.desktop};
			min-height:${layout.body?.height?.desktop};
			border-radius:${getBoxCSS(layout.section.borderRadius)};
			margin:${getBoxCSS(layout.body.margin.desktop)};
			padding:${getBoxCSS(layout.body.padding.desktop)};
		}


		${headerSl}{
			color:${styles.header.color};

		}

		${leftCard}{
		background:${getBackground(styles.leftCard.colors)};
		}

		${cardTitle}{
		color:${styles.leftCard.text.title.color};
		}
		${cardDescription}{
		color:${styles.leftCard.text.description.color};
		}


		${ballSvg}{
		fill:${styles.leftCard.colors.color};
		}


		${timelineTitleSl}{
			color:${styles.timelines.title.color};
		}
		${timelineDescriptionSl}{
			color:${styles.timelines.description.color};
		}

		${btnSl}{
		${getColorsCSS(styles.button)}
		}
    
    ${serialSl}{
    background-color:${styles.timelines.indicator.bg};
    color:${styles.timelines.indicator.color};
    }

    ${dashedLineSl}{
    border-left:1px dashed ${styles.timelines.border};
    }

    @media  (min-width:641px) and (max-width: 1024px){
        ${pluginSl}{ 
			width:${layout.body?.width?.tablet};
			min-height:${layout.body?.height?.tablet};
      
			padding:${getBoxCSS(layout.body.padding.tablet)};
      }


    }

    @media (max-width: 480px){
    
			 ${pluginSl}{ 
			width:${layout.body?.width?.mobile};
			min-height:${layout.body?.height?.mobile};
			padding:${getBoxCSS(layout.body.padding.mobile)};
      }

    }

	`,
      }}
    />
  );
};
export default Style;
