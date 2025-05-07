import { createRoot } from "react-dom/client";
import "./style.scss";
import Style from "./Components/Common/Style";
import AboutUs from "./Components/AboutUs/AboutUs";
import AboutUsTwo from "./Components/AboutUs/AboutUsTwo";
import AboutUsThree from "./Components/AboutUs/AboutUsThree";
import AboutUsFour from "./Components/AboutUs/AboutUsFour";

document.addEventListener("DOMContentLoaded", () => {
  const blockNameEls = document.querySelectorAll(".wp-block-b-blocks-about-us");
  blockNameEls.forEach((blockNameEl) => {
    const attributes = JSON.parse(blockNameEl.dataset.attributes);

    const { themeSl } = attributes;
    createRoot(blockNameEl).render(
      <>
        <Style attributes={attributes} id={blockNameEl.id} />

        {themeSl === "themeOne" && <AboutUs attributes={attributes} />}
        {themeSl === "themeTwo" && <AboutUsTwo attributes={attributes} />}
        {themeSl === "themeThree" && <AboutUsThree attributes={attributes} />}
        {themeSl === "themeFour" && <AboutUsFour attributes={attributes} />}
      </>
    );

    blockNameEl?.removeAttribute("data-attributes");
  });
});
