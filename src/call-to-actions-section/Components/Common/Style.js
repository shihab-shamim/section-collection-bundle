import { generateCSS } from '../../../../../bpl-tools/Advanced/generateCSS';
import { getBackgroundCSS, getBoxCSS, getTypoCSS, isValidCSS } from '../../../../../bpl-tools/utils/getCSS';
const Style = ({ attributes, id, }) => {
	

	const { advanced, style } = attributes;

	const isBackend = false;
	const cssString = generateCSS(id, advanced, isBackend);

	//Dynamic  Class Name 
	const mainSl = `#${id}`;
	const bBlocksCallToActions = `${mainSl} .bBlocksCallToActions`;
	const ctaMainContainer = `${bBlocksCallToActions} .cta-main-container`;
	const ctaSubContainer = `${ctaMainContainer} .cta-sub-container`;
	const ctaContainerRow = `${ctaSubContainer} .cta-container-row`;
	const ctaCol = `${ctaContainerRow} .cta-col`;
	const ctaSection = `${ctaCol} .cta-section`;
	const ctaRowSection = `${ctaSection} .cta-row-section`;
	const ctaHeroSection = `${ctaRowSection} .cta-hero-section`;

	const ctaTitle = `${ctaHeroSection} .cta-title`;
	const ctaHighlightText = `${ctaTitle} .cta-highlight-text`;

	const ctaSubTitle = `${ctaHeroSection} .cta-sub-title`;

	const ctaButton = `${ctaHeroSection} .cta-button`;
	const ctaButtonText = `${ctaButton} .cta-button-text`;
	const ctaButtonIcon = `${ctaButton} .cta-button-icon`;

	// two theme 
	const ctaHighlightTextTwo = `${ctaTitle} .cta-highlight-text-two`;
	const ctaSectiontwo = `${ctaCol} .cta-section-two`;
	const ctaButtonTextTwo = `${ctaButton} .cta-button-text-two`;
	const ctaButtonTwoBg = `${ctaHeroSection} .cta-button-two`;

	// three theme
	const ctaSectionThree = `${ctaCol} .cta-section-three`;
	const ctaButtonThree = `${ctaHeroSection} .cta-button-three`;
	

	// Highlight Text Color
	const gradientObject = style?.ctaStyle?.title?.gradient;
	const gradientString = gradientObject
		? gradientObject.type === 'linear'
			? `linear-gradient(to bottom,  ${gradientObject.colors?.map(c => `${c.color} ${c.position}%`).join(', ')})`
			: `${gradientObject.type}-gradient(${gradientObject.radialType || 'ellipse'} at ${gradientObject.centerPositions?.x}% ${gradientObject.centerPositions?.y}%,${gradientObject.colors?.map(c => `${c.color} ${c.position}%`).join(', ')})`
		: '';

	const gradientObjectTwo = style?.ctaStyle?.title?.gradientTwo;
	const gradientStringTwo = gradientObjectTwo
		? gradientObjectTwo.type === 'linear'
			? `-webkit-linear-gradient(0deg,  ${gradientObjectTwo.colors?.map(c => `${c.color} ${c.position}%`).join(', ')})`
			: `${gradientObjectTwo.type}-gradient(${gradientObjectTwo.radialType || 'ellipse'} at ${gradientObjectTwo.centerPositions?.x}% ${gradientObjectTwo.centerPositions?.y}%,${gradientObjectTwo.colors?.map(c => `${c.color} ${c.position}%`).join(', ')})`
		: '';

	return <style dangerouslySetInnerHTML={{
		__html: `
		
		${getTypoCSS('', style?.ctaStyle?.title?.typo)?.googleFontLink}
		${getTypoCSS('', style?.ctaStyle?.des?.typo)?.googleFontLink}
		${getTypoCSS('', style?.ctaStyle?.button?.typo)?.googleFontLink}

		${getTypoCSS(ctaTitle, style?.ctaStyle?.title?.typo)?.styles}
		${getTypoCSS(ctaSubTitle, style?.ctaStyle?.des?.typo)?.styles}
		${getTypoCSS(ctaButtonText, style?.ctaStyle?.button?.typo)?.styles}


		${ctaMainContainer}{
			${getBackgroundCSS(style?.background)}
			${isValidCSS("padding", getBoxCSS(style?.padding?.desktop))}
			${isValidCSS("margin", getBoxCSS(style?.margin?.desktop))}
			${isValidCSS("border-radius", getBoxCSS(style?.radius))}
		}
		${ctaSubContainer}{
			max-width: ${style?.ctaStyle?.containerWidth?.desktop};
		}
		${ctaContainerRow}{
		  ${isValidCSS("margin", getBoxCSS(style?.ctaStyle?.margin?.desktop))}
		}
		${ctaSection} {
			${getBackgroundCSS(style?.ctaStyle?.background)}
			${isValidCSS("padding", getBoxCSS(style?.ctaStyle?.padding?.desktop))}
			${isValidCSS("border-radius", getBoxCSS(style?.ctaStyle?.radius))}
			border-top: ${style?.ctaStyle?.borderWidth} solid ${style?.ctaStyle?.borderColor};
			border-bottom: ${style?.ctaStyle?.borderWidth} solid ${style?.ctaStyle?.borderColor};
		}
		${ctaSectionThree}{
			${isValidCSS("border-radius", getBoxCSS(style?.ctaStyle?.radiusThree))}
		}
	    ${ctaSectiontwo}{
		   border-top: ${style?.ctaStyle?.borderWidth} solid ${style?.ctaStyle?.borderColorTwo};
		   border-left: ${style?.ctaStyle?.borderWidth} solid ${style?.ctaStyle?.borderColorTwo};
		   border-right: ${style?.ctaStyle?.borderWidth} solid ${style?.ctaStyle?.borderColorTwo};
		   ${isValidCSS("border-radius", getBoxCSS(style?.ctaStyle?.radius))};
	    }
		  
		${ctaTitle} .textCta{
		    color: ${style?.ctaStyle?.title?.color} !important;
		}
		${ctaHighlightText}{
		    background: ${gradientString};
		}
		${ctaHighlightTextTwo}{
		    background: ${gradientStringTwo};
		}

		${ctaSubTitle}{
		    color: ${style?.ctaStyle?.des?.color} !important;
		}
		${ctaButton}{
			${isValidCSS("padding", getBoxCSS(style?.ctaStyle?.button?.padding?.desktop))}
			${isValidCSS("border-radius", getBoxCSS(style?.ctaStyle?.button?.radius))}
			background: ${style?.ctaStyle?.button?.bg?.includes('gradient') ? style?.ctaStyle?.button?.bg : `${style?.ctaStyle?.button?.bg}`};
		}
		${ctaButtonTwoBg}{
		    background: ${style?.ctaStyle?.button?.bgtwo?.includes('gradient') ? style?.ctaStyle?.button?.bgtwo : `${style?.ctaStyle?.button?.bgtwo}`};
		}
		${ctaButtonThree}{
		    background: ${style?.ctaStyle?.button?.bgThree?.includes('gradient') ? style?.ctaStyle?.button?.bgThree : `${style?.ctaStyle?.button?.bgThree}`};
		}
		${ctaButton}:hover{
		    background-color:${style?.ctaStyle?.button?.bgHoverColor};
		}
		${ctaButtonTwoBg}:hover{
		    background-color:${style?.ctaStyle?.button?.bgHoverColorTwo};
		}
		${ctaButtonThree}:hover{
		    background-color:${style?.ctaStyle?.button?.bgHoverColorThree};
		}
		${ctaButtonText}{
		    color: ${style?.ctaStyle?.button?.color} !important;
		}
		${ctaButtonTextTwo}{
		    color: ${style?.ctaStyle?.button?.colorTwo} !important;
		}
		${ctaButtonIcon}{
		    width:  ${style?.ctaStyle?.button?.width};
            height: ${style?.ctaStyle?.button?.width};
		}

        @media only screen and (min-width: 641px) and (max-width: 1024px) {
            ${ctaMainContainer}{
		      ${isValidCSS("padding", getBoxCSS(style?.padding?.tablet))}
		      ${isValidCSS("margin", getBoxCSS(style?.margin?.tablet))}
		    }
			${ctaSubContainer}{
			  max-width: ${style?.ctaStyle?.containerWidth?.tablet};
		    }
			${ctaContainerRow}{
		      ${isValidCSS("margin", getBoxCSS(style?.ctaStyle?.margin?.tablet))}
		    }
            ${ctaSection} {
	          ${isValidCSS("padding", getBoxCSS(style?.ctaStyle?.padding?.tablet))}
            }
            ${ctaButton} {
	          ${isValidCSS("padding", getBoxCSS(style?.ctaStyle?.button?.padding?.tablet))}
            }
		}

		@media only screen and (max-width: 641px) {
            ${ctaMainContainer}{
              ${isValidCSS("padding", getBoxCSS(style?.padding?.mobile))}
              ${isValidCSS("margin", getBoxCSS(style?.margin?.mobile))}
            }
			${ctaSubContainer}{
			  max-width: ${style?.ctaStyle?.containerWidth?.mobile};
		    }
			${ctaContainerRow}{
		      ${isValidCSS("margin", getBoxCSS(style?.ctaStyle?.margin?.mobile))}
		    }
			${ctaSection} {
	          ${isValidCSS("padding", getBoxCSS(style?.ctaStyle?.padding?.mobile))}
            }
			${ctaButton} {
	          ${isValidCSS("padding", getBoxCSS(style?.ctaStyle?.button?.padding?.mobile))}
            }
	    }
		${cssString}

	`}} />;
}
export default Style;




