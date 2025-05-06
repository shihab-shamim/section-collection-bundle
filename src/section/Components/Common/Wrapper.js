import Style1 from './TemplateStyle/Style1';
import Style2 from './TemplateStyle/Style2';
import Style4 from './TemplateStyle/Style4';



const Wrapper = ({ attributes, titleArea, subTitleArea, btnOneTextArea, btnTwoTextArea, imgArea }) => {
    const { template } = attributes;

    const itemsProps = {
        attributes,
        titleArea,
        subTitleArea,
        btnOneTextArea,
        btnTwoTextArea,
        imgArea
    }
    return <div className={`layoutStyle ${template?.style}`}>
        {template?.style === "style1" && <Style1 {...itemsProps} />}

        {template?.style === "style2" && <Style2 {...itemsProps} />}
        {template?.style === "style3" && <Style2 {...itemsProps} />}
        {template?.style === "style4" && <Style4 {...itemsProps} />}

    </div>
}
export default Wrapper;