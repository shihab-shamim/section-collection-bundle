import { createRoot } from 'react-dom/client';

import './style.scss';
import Layout from './Wrapper';
import Style from './Style';

document.addEventListener('DOMContentLoaded', () => {
	const blockEls = document.querySelectorAll('.wp-block-bpsc-section-collection');
	blockEls.forEach(blockEl => {
		const attributes = JSON.parse(blockEl.dataset.attributes);
		const { content } = attributes;
		const { title, subTitle, btnOneText, btnTwoText, img, btnOneUrl, btnTwoUrl } = content;

		const titleArea = <h2 className='title' dangerouslySetInnerHTML={{ __html: title }} />
		const subTitleArea = <h4 className='subTitle' dangerouslySetInnerHTML={{ __html: subTitle }} />
		const btnOneTextArea = <a href={btnOneUrl?.url} className='btn' dangerouslySetInnerHTML={{ __html: btnOneText }} />
		const btnTwoTextArea = <a href={btnTwoUrl?.url} className='btn' dangerouslySetInnerHTML={{ __html: btnTwoText }} />
		const imgArea = <div className="imgArea"><div className="img"><img src={img.url} alt="" /></div></div>

		const itemsProps = {
			titleArea,
			subTitleArea,
			btnOneTextArea,
			btnTwoTextArea,
			imgArea
		}

		createRoot(blockEl).render(<>
			<Style attributes={attributes} id={blockEl.id} />
			<div className={`bpscSectionCollection`}>
				<Layout attributes={attributes} {...itemsProps} />
			</div>
		</>);

		blockEl?.removeAttribute('data-attributes');
	});
});



