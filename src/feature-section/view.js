import { createRoot } from 'react-dom/client';
import './style.scss';
import Style from './Components/Common/Style';
// import FeatureSection from './Components/Common/Theme/FeatureSection';
import Theme from './Components/Common/Theme/Theme';




document.addEventListener('DOMContentLoaded', () => {



	const blockNameEls = document.querySelectorAll('.wp-block-b-blocks-info-list');
	blockNameEls.forEach(blockNameEl => {

		const attributes = JSON.parse(blockNameEl.dataset.attributes);
	
		createRoot(blockNameEl).render(<>
			<Style attributes={attributes} id={blockNameEl.id} />
			{/* <FeatureSection attributes={attributes} /> */}
			<Theme {...{ attributes }}/>
		</>);

		blockNameEl?.removeAttribute('data-attributes');
	});
});