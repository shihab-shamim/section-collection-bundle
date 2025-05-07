import { createRoot } from "react-dom/client";
import "./style.scss";
import Style from "./Components/Common/Style";
import Testimonial from "./Components/Common/Testimonial";
import Testimonial2nd from "./Components/Common/Testimonial2nd";
import Testimonial3rd from "./Components/Common/Testimonial3rd";

document.addEventListener("DOMContentLoaded", () => {
  const blockNameEls = document.querySelectorAll(
    ".wp-block-b-blocks-testimonials-pro"
  );
  blockNameEls.forEach((blockNameEl) => {
    const attributes = JSON.parse(blockNameEl.dataset.attributes);

    createRoot(blockNameEl).render(
      <>
        <Style attributes={attributes} id={blockNameEl.id} />

        {
          attributes.selectedTheme === "theme1" ? <Testimonial attributes={attributes} />: attributes.selectedTheme === "theme2"? <Testimonial2nd attributes={attributes}/>: attributes.selectedTheme === "theme3"?<Testimonial3rd attributes={attributes}/>:""
        }
      </>
    );

    blockNameEl?.removeAttribute("data-attributes");
  });
});
