
import BtnOne from '../Elements/BtnOne';
import Title from '../Elements/Title';

const Style4 = ({ attributes, titleArea, subTitleArea, btnOneTextArea, imgArea }) => {
    const { content, elements } = attributes;

    const { title, btnOneText, btnOneUrl } = content;
    const { isTitle, isBtnOne, isSubTitle, isImg } = elements;

    return <div className='mainArea'>
        <div className="contentArea">
            <Title title={title} isTitle={isTitle} titleArea={titleArea} />
            {isSubTitle && subTitleArea}
            <BtnOne btnOneText={btnOneText} btnOneUrl={btnOneUrl} isBtnOne={isBtnOne} btnOneTextArea={btnOneTextArea} />
        </div>
        {isImg && imgArea}
    </div>
}
export default Style4;