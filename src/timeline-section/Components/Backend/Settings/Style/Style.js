import { __ } from "@wordpress/i18n";
import { PanelBody } from "@wordpress/components";
import {
  Background,
  ColorControl,
  ColorsControl,
  Typography,
} from "../../../../../../../bpl-tools/Components";
import { updateData } from "../../../../utils/functions";

const Style = ({ attributes, setAttributes }) => {
  const { styles, selectedTheme } = attributes;

  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Styles", "b-blocks")}
        initialOpen={true}
      >
        <Background
          label={"Section Background"}
          value={styles.sectionBg}
          onChange={(value) =>
            setAttributes({ styles: updateData(styles, value, "sectionBg") })
          }
        />

        {selectedTheme === "theme1" && (
          <Background
            label={"Plugin Background"}
            value={styles.bodyBg}
            onChange={(value) =>
              setAttributes({ styles: updateData(styles, value, "bodyBg") })
            }
          />
        )}

        <ColorControl
          label={"Header Color"}
          value={styles.header.color}
          onChange={(value) =>
            setAttributes({
              styles: updateData(styles, value, "header", "color"),
            })
          }
        />
        <Typography
          label={"Header Typo"}
          value={styles.header.typo}
          onChange={(value) =>
            setAttributes({
              styles: updateData(styles, value, "header", "typo"),
            })
          }
        />

        {selectedTheme === "theme2" && (
          <>
            <ColorControl
              label={"Description Color"}
              value={styles.description.color}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "description", "color"),
                })
              }
            />
            <Typography
              label={"Description Typo"}
              value={styles.description.typo}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "description", "typo"),
                })
              }
            />
          </>
        )}

        <ColorControl
          label={"Timeline Title Color"}
          value={styles.timelines.title.color}
          onChange={(value) =>
            setAttributes({
              styles: updateData(styles, value, "timelines", "title", "color"),
            })
          }
        />
        <Typography
          label={"Timeline Title Typo"}
          value={styles.timelines.title.typo}
          onChange={(value) =>
            setAttributes({
              styles: updateData(styles, value, "timelines", "title", "typo"),
            })
          }
        />

        <ColorControl
          label={"Timeline Description Color"}
          value={styles.timelines.description.color}
          onChange={(value) =>
            setAttributes({
              styles: updateData(
                styles,
                value,
                "timelines",
                "description",
                "color"
              ),
            })
          }
        />
        <Typography
          label={"Timeline Description Typo"}
          value={styles.timelines.description.typo}
          onChange={(value) =>
            setAttributes({
              styles: updateData(
                styles,
                value,
                "timelines",
                "description",
                "typo"
              ),
            })
          }
        />

        {selectedTheme === "theme1" && (
          <>
            <ColorsControl
              label={"Card Colors"}
              value={styles.leftCard.colors}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "leftCard", "colors"),
                })
              }
            />

            <ColorControl
              label={"Card Title Color"}
              value={styles.leftCard.text.title.color}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    value,
                    "leftCard",
                    "text",
                    "title",
                    "color"
                  ),
                })
              }
            />
            <Typography
              label={"Card Title Typo"}
              value={styles.leftCard.text.title.typo}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    value,
                    "leftCard",
                    "text",
                    "title",
                    "typo"
                  ),
                })
              }
            />

            <ColorControl
              label={"Card Description Color"}
              value={styles.leftCard.text.description.color}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    value,
                    "leftCard",
                    "text",
                    "description",
                    "color"
                  ),
                })
              }
            />
            <Typography
              label={"Card Description Typo"}
              value={styles.leftCard.text.description.typo}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    value,
                    "leftCard",
                    "text",
                    "description",
                    "typo"
                  ),
                })
              }
            />

            <ColorsControl
              label={"Button Colors"}
              value={styles.button}
              onChange={(value) =>
                setAttributes({ styles: updateData(styles, value, "button") })
              }
            />
          </>
        )}

        <ColorControl
          label={"Indicator Color"}
          value={styles.timelines.indicator.color}
          onChange={(value) =>
            setAttributes({
              styles: updateData(
                styles,
                value,
                "timelines",
                "indicator",
                "color"
              ),
            })
          }
        />

        <ColorControl
          label={"Indicator BG Color"}
          value={styles.timelines.indicator.bg}
          onChange={(value) =>
            setAttributes({
              styles: updateData(styles, value, "timelines", "indicator", "bg"),
            })
          }
        />

        <ColorControl
          label={"Border Color"}
          value={styles.timelines.border}
          onChange={(value) =>
            setAttributes({
              styles: updateData(styles, value, "timelines", "border"),
            })
          }
        />
      </PanelBody>
    </>
  );
};

export default Style;
