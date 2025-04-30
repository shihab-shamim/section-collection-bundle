import { createRoot } from "react-dom/client";
import "./style.scss";
import Style from "./Components/Common/Style";
import Timeline1 from "./Components/Common/Timeline1";
import Timeline2 from "./Components/Common/Timeline2";

document.addEventListener("DOMContentLoaded", () => {
  const blockNameEls = document.querySelectorAll(
    ".wp-block-b-blocks-timeline-wpblock"
  );
  blockNameEls.forEach((blockNameEl) => {
    const attributes = JSON.parse(blockNameEl.dataset.attributes);
    const { selectedTheme } = attributes || {};

    createRoot(blockNameEl).render(
      <>
        <Style attributes={attributes} id={blockNameEl.id} />

        {selectedTheme === "theme1" ? (
          <Timeline1 attributes={attributes} />
        ) : (
          <Timeline2 attributes={attributes} />
        )}
      </>
    );

    blockNameEl?.removeAttribute("data-attributes");
  });
});
