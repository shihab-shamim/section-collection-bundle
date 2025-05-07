import { createRoot } from 'react-dom/client';
import './style.scss';
import Style from './Components/Common/Style';
import Theme from './Components/Common/theme/Theme';

document.addEventListener('DOMContentLoaded', () => {
	const blockNameEls = document.querySelectorAll('.wp-block-b-blocks-call-to-actions');
	blockNameEls.forEach(blockNameEl => {
		const attributes = JSON.parse(blockNameEl.dataset.attributes);

		createRoot(blockNameEl).render(<>
			<Style attributes={attributes} id={blockNameEl.id} />
			<div className="bBlocksCallToActions">
				<Theme {...{ attributes }} />
			</div>
		</>);

		blockNameEl?.removeAttribute('data-attributes');
	});
});