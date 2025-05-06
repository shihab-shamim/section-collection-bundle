import BtnOne from '../Elements/BtnOne';
import BtnTwo from '../Elements/BtnTwo';
import Title from '../Elements/Title';

const Style2 = ({ attributes, titleArea, subTitleArea, btnOneTextArea, btnTwoTextArea }) => {
    const { content, elements, template } = attributes;

    const { title, btnOneText, btnOneUrl, btnTwoUrl, btnTwoText } = content;
    const { isTitle, isBtnOne, isBtnTwo, isSubTitle } = elements;

    return <div className='mainArea'>
        <div className="contentArea">
            <Title title={title} isTitle={isTitle} titleArea={titleArea} />
            {(template.style === "style3" && isSubTitle) && subTitleArea}
        </div>

        <div className="buttonArea">
            <BtnOne btnOneText={btnOneText} btnOneUrl={btnOneUrl} isBtnOne={isBtnOne} btnOneTextArea={btnOneTextArea} />
            <BtnTwo btnTwoText={btnTwoText} btnTwoUrl={btnTwoUrl} isBtnTwo={isBtnTwo} btnTwoTextArea={btnTwoTextArea} />
        </div>
    </div>
}
export default Style2;