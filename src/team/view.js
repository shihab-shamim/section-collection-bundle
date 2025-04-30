import { createRoot } from "react-dom/client";
import "./style.scss";
import Style from "./Components/Common/Style";
import TeamSectionDefault from "./Components/TeamSection/TeamSectionDefault";
import TeamSectionOne from "./Components/TeamSection/TeamSectionOne";
import TeamSectionTwo from "./Components/TeamSection/TeamSectionTwo";

document.addEventListener("DOMContentLoaded", () => {
  const blockNameEls = document.querySelectorAll(
    ".wp-block-b-blocks-team-section"
  );
  blockNameEls.forEach((blockNameEl) => {
    const attributes = JSON.parse(blockNameEl.dataset.attributes);
    const { styleSl } = attributes;

    createRoot(blockNameEl).render(
      <>
        <Style attributes={attributes} id={blockNameEl.id} />

        {styleSl === "styleDefault" && (
          <TeamSectionDefault attributes={attributes} />
        )}
        {styleSl === "styleOne" && <TeamSectionOne attributes={attributes} />}
        {styleSl === "styleTwo" && <TeamSectionTwo attributes={attributes} />}
      </>
    );

    blockNameEl?.removeAttribute("data-attributes");
  });
});
