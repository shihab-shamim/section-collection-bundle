import { getBoxValue } from '../../../../../bpl-tools/utils/functions';
import { getBackgroundCSS, getBorderCSS, getColorsCSS, getTypoCSS } from '../../../../../bpl-tools/utils/getCSS';

const Style = ({ attributes, id }) => {
	const { wrapper, title, subTitle, button } = attributes;
	const { background, border, padding } = wrapper;
	const { desktop: dPadding, tablet: tPadding, mobile: mPadding } = padding;

	const mainSl = `#${id}`;
	const layoutArea = `${mainSl} .layoutStyle`;
	return <style dangerouslySetInnerHTML={{
		__html: `
		${getTypoCSS('', title?.typo)?.googleFontLink}
		${getTypoCSS('', subTitle?.typo)?.googleFontLink}
		${getTypoCSS('', button?.typo)?.googleFontLink}
		${getTypoCSS(`${layoutArea} .mainArea .title`, title?.typo)?.styles}
		${getTypoCSS(`${layoutArea} .mainArea .subTitle`, subTitle?.typo)?.styles}
		${getTypoCSS(`${layoutArea} .mainArea .btn`, button?.typo)?.styles}
		 
		${layoutArea} .mainArea {
		 	${getBackgroundCSS(background)};
			padding: ${getBoxValue(dPadding)};
			${getBorderCSS(border)};
		}

		@media (max-width: 768px) {
			${layoutArea} .mainArea {
				padding: ${getBoxValue(tPadding)};
			}
		}

		@media (max-width: 576px) {
			${layoutArea} .mainArea { 
				padding: ${getBoxValue(mPadding)};
			}
		}

		${layoutArea} .mainArea .title {
			color:${title?.color};
		} 

		${layoutArea} .mainArea .subTitle {
			color:${subTitle?.color};
		}
		
		${layoutArea} .mainArea .btn {
			${getColorsCSS(button?.colors)};
			padding:${getBoxValue(button?.padding?.desktop)};
			${getBorderCSS(button.border)};
		}

		@media (max-width: 768px) {
			${layoutArea} .mainArea .btn {
				padding:${getBoxValue(button?.padding?.tablet)};
			}
		}

		@media (max-width: 576px) { 
			${layoutArea} .mainArea .btn {
				padding:${getBoxValue(button?.padding?.mobile)};
			}
		}

		${layoutArea} .mainArea .btn:hover {
			${getColorsCSS(button?.hoverColors)}
		} 
	`}} />;
}
export default Style;