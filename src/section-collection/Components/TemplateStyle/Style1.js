
import BtnOne from '../Elements/BtnOne';
import SubTitle from '../Elements/SubTitle';
import Title from '../Elements/Title';

const Style1 = ({ attributes, titleArea, subTitleArea, btnOneTextArea }) => {
    const { content, elements } = attributes;
    const { title, subTitle, btnOneText, btnOneUrl } = content;
    const { isTitle, isSubTitle, isBtnOne } = elements;

    return <div className='mainArea'>
        <Title title={title} isTitle={isTitle} titleArea={titleArea} />
        <SubTitle subTitle={subTitle} isSubTitle={isSubTitle} subTitleArea={subTitleArea} />
        <BtnOne btnOneText={btnOneText} btnOneUrl={btnOneUrl} isBtnOne={isBtnOne} btnOneTextArea={btnOneTextArea} />
    </div>
}
export default Style1;