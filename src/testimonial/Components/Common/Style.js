import {
  getBackgroundCSS,
  getBoxCSS,
  getColorsCSS,
  getMultiShadowCSS,
  getTypoCSS,
} from "../../../../../bpl-tools/utils/getCSS";

const Style = ({ attributes, id }) => {
  const { options, layout, styles, alignment, selectedTheme } = attributes;
  const { sectionBody, testimonialBody, badge, testimonialBody3rdTheme } =
    layout || {};
  const { margin, padding, colGap, rowGap, width, height, borderRadius } =
    sectionBody || {};
  const { testiBorderRadius, shadow, border } = testimonialBody || {};
  const { section, testimonial } = styles || {};
  const { scroll, fogEffect, tagsAlignment } = options || {};

  const mainSl = `#${id}`;
  const mainContSl = `${mainSl} .mainCont`;
  const blockSl = `${mainContSl} .testimonial-plugin`;
  const sectionTitleSl = `${blockSl} .section-title`;
  const titleSl = `${sectionTitleSl} .title`;
  const badgeSl = `${sectionTitleSl} .badge`;
  const subTitleSl = `${sectionTitleSl} .sub-title`;
  const sectionBodySl = `${blockSl} .section-body`;
  const testimonialRowsSl = `${sectionBodySl} .testimonial-rows`;
  const testimonialSlider1Sl = `${sectionBodySl} .testimonial-slider-1`;
  //   const testimonialSlider2Sl = `${sectionBodySl} .testimonial-slider-2`;
  const columnSl = `${testimonialRowsSl} .column`;
  const theme1Ani = `${testimonialRowsSl} .theme1Ani`;
  const listsSl = `${testimonialRowsSl} .lists`;
  const theme3ListsSl = `${testimonialRowsSl} .lists-3rd`;
  const listSl = `${listsSl} .list`;
  const theme2ListSl = `${listsSl} .theme2List`;
  const nameSl = `${testimonialRowsSl} .name`;
  const designationSl = `${testimonialRowsSl} .designation`;
  const contentSl = `${testimonialRowsSl} .content`;
  const tagsSl = `${testimonialRowsSl} .tags`;
  const imageContSl = `${testimonialRowsSl} .image-cont`;

  const animationConfig = scroll.stopOnHover
    ? `animation: scrollY var(--_animation-duration, ${scroll.speed}s)
                  var(--_animation-direction, forwards) linear infinite;
                &:hover {
                  animation-play-state: paused;
                }`
    : `animation: scrollY var(--_animation-duration, ${scroll.speed}s)
                  var(--_animation-direction, forwards) linear infinite;`;

  const fogEffectConfig = fogEffect
    ? selectedTheme === "theme1"
      ? `
    -webkit-mask: linear-gradient(transparent, #fff 20%, #fff 80%, transparent);
mask: linear-gradient(transparent, #fff 20%, #fff 80%, transparent);

  `
      : selectedTheme === "theme2"
      ? `
    -webkit-mask: linear-gradient(90deg, transparent, #fff 20%, #fff 80%, transparent);
mask: linear-gradient(90deg, transparent, #fff 20%, #fff 80%, transparent);

  `
      : ""
    : "";

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
		${getTypoCSS("", section.title.typo)?.googleFontLink}
		${getTypoCSS("", section.subtitle.typo)?.googleFontLink}
		${getTypoCSS("", testimonial.name.typo)?.googleFontLink}
		${getTypoCSS("", testimonial.designation.typo)?.googleFontLink}
		${getTypoCSS("", testimonial.content.typo)?.googleFontLink}
		${getTypoCSS("", testimonial.tags.typo)?.googleFontLink}

        ${getTypoCSS(titleSl, section.title.typo)?.styles}
        ${getTypoCSS(subTitleSl, section.subtitle.typo)?.styles}
        ${getTypoCSS(nameSl, testimonial.name.typo)?.styles}
        ${getTypoCSS(designationSl, testimonial.designation.typo)?.styles}
        ${getTypoCSS(contentSl, testimonial.content.typo)?.styles}
        ${getTypoCSS(tagsSl, testimonial.tags.typo)?.styles}

		${mainContSl}{
		    justify-content: ${alignment};
		}

		${badgeSl}{
		${getColorsCSS(badge.colors)}
		}

		${blockSl}{
		${getBackgroundCSS(section.background)}
		width:${width};
		margin:${getBoxCSS(margin)};
		padding:${getBoxCSS(padding)};
		border-radius:${getBoxCSS(borderRadius)};
		}
		${sectionBodySl}{
		height: ${height};
		}
		${columnSl}{
		padding:${colGap};
		}
		${listsSl}{
		gap:${rowGap}
		}
		${listSl}{
		${getBackgroundCSS(testimonial.bg)}
		border: ${border.width} ${border.style} ${border.color};
		box-shadow: ${getMultiShadowCSS(shadow)};
		overflow: hidden;
		border-radius:${getBoxCSS(testiBorderRadius)};
		padding:${getBoxCSS(testimonialBody.padding)} !important;
		}

		${titleSl}{
		color:${section.title.color};
		}
		${subTitleSl}{
		color:${section.subtitle.color};
		}

		${nameSl}{
		color:${testimonial.name.color};
		}
		${designationSl}{
		color:${testimonial.designation.color};
		}
		${contentSl}{
		color:${testimonial.content.color};
		}
		${tagsSl}{
		color:${testimonial.tags.color};
		justify-content:${tagsAlignment};
		}

		${imageContSl}{
		height:${testimonial.image.height};
		width:${testimonial.image.width};
		border:${testimonial.image.border.width} ${testimonial.image.border.style} ${
      testimonial.image.border.color
    };
		border-radius:${getBoxCSS(testimonial.image.BorderRadius)};
		}

		${sectionBodySl}{
			${fogEffectConfig}
		}

		${theme1Ani}{
			${animationConfig}
		  }
		
		  @keyframes scrollY {
			to {
			  transform: translateY(calc(-50% - 0.5rem));
			}
		  }


	${theme2ListSl}{
		width: ${testimonialBody.width};
        height: ${testimonialBody.height};
	}
	${theme3ListsSl}{
		width: ${testimonialBody3rdTheme.width};
        height: ${testimonialBody3rdTheme.height};
	}

	${testimonialSlider1Sl} .swiper-wrapper{
	padding-bottom:${sectionBody.colGap};
	}




	
	`,
      }}
    />
  );
};
export default Style;
