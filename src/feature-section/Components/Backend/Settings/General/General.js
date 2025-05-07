import { __ } from "@wordpress/i18n";
import { PanelBody, __experimentalInputControl as InputControl, __experimentalSpacer as Spacer, RangeControl, PanelRow, SelectControl } from "@wordpress/components";
import Features from "../Features/Features";
import { themeOptions } from "../../../../utils/options";
import { themeSwitch } from "../../../../utils/functions";
import { Device, IconLibrary, ItemsPanel, Label } from "../../../../../../../bpl-tools/Components";


const General = ({ attributes, setAttributes, device = "desktop" }) => {

  const { heading, style, layout, } = attributes;
  const { theme } = layout;


  return (
    <>
      {/* Theme SelectControl */}
      <PanelBody
        className="bPlPanelBody"
        title={__("Choose Theme ", "b-blocks")}
        initialOpen={false}
      >
        <SelectControl
          className="help"
          value={layout?.theme}
          onChange={(val) => setAttributes(themeSwitch(val, attributes, device))}
          options={themeOptions}
          help={(<>
            <span className="span">
              {__("Warning : ")}
            </span>
            <span className="text">{__("If you change and save settings for one theme, and then switch to another theme, the changes made to the first theme will be lost.")}</span>
          </>
          )}
        />
      </PanelBody>
      
      {/* theme-1 */}
      {theme === "theme-1" && (
        <>
          <PanelBody
            className="bPlPanelBody"
            title={__("Heading", "b-blocks")}
            initialOpen={false}
          >
            <InputControl
              label={__("Badge Text", "b-blocks")}
              placeholder="Enter Badge Text"
              value={heading?.subTitle?.text?.replace(/<\/?[^>]+(>|$)/g, "")}
              onChange={(newtext) => { setAttributes({ heading: { ...heading, subTitle: { ...heading.subTitle, text: newtext } } }) }}
            />

            <Spacer />

            <IconLibrary
              label={__("Select Badge Icon", "b-blocks")}
              value={heading?.subTitle?.icon}
              onChange={(ico) => { setAttributes({ heading: { ...heading, subTitle: { ...heading.subTitle, icon: ico } } }) }}
            />

            <Spacer />

            <InputControl
              label={__("title", "b-blocks")}
              placeholder="Enter Your Title"
              value={heading?.title?.text.replace(/<\/?[^>]+(>|$)/g, "")}
              onChange={(newtext) => { setAttributes({ heading: { ...heading, title: { ...heading.title, text: newtext } } }) }}
            />
          </PanelBody>


          <PanelBody
            className="bPlPanelBody"
            title={__("Features Items", "b-blocks")}
            initialOpen={false}
          >

            <ItemsPanel  {...{ attributes, setAttributes }}
              arrKey="features"
              newItem={{
                title: "New Feature...",
                description: " Generate the information structure of the website using a visual sitemap.",
                icon: "<svg xmlns=\"http://www.w3.org/2000/svg\"  viewBox=\"0 0 32 32\"><circle cx=\"9\" cy=\"7\" r=\"1\" fill=\"currentColor\"></circle><path fill=\"currentColor\" d=\"M27 22.14V18a2 2 0 0 0-2-2h-8v-4h9a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h9v4H7a2 2 0 0 0-2 2v4.14a4 4 0 1 0 2 0V18h8v4h-3v8h8v-8h-3v-4h8v4.14a4 4 0 1 0 2 0M8 26a2 2 0 1 1-2-2a2 2 0 0 1 2 2m10-2v4h-4v-4ZM6 10V4h20v6Zm20 18a2 2 0 1 1 2-2a2 2 0 0 1-2 2\"></path></svg>",
              }}
              ItemSettings={Features}
              itemLabel="Feature"
              design="sortable"
            />
          </PanelBody>


          <PanelBody
            className="bPlPanelBody"
            title={__("Features Responsive", "b-blocks")}
            initialOpen={false}
          >

            <PanelRow>
              <Label className="">{__('Columns', "b-blocks")}</Label>
              <Device />
            </PanelRow>

            <RangeControl
              value={style?.columns[device]}
              onChange={(value) => {
                setAttributes({
                  style: { ...style, columns: { ...style?.columns, [device]: value } }
                })
              }}
              min={1}
              max={6}
            />

            <PanelRow>
              <Label className="">{__('Span', "b-blocks")}</Label>
              <Device />
            </PanelRow>
            <RangeControl
              value={style?.columnsSpan[device]}
              onChange={(value) => {
                setAttributes({
                  style: {
                    ...style,
                    columnsSpan: {
                      ...style?.columnsSpan,
                      [device]: value
                    }
                  }
                })
              }}
              min={1}
              max={6}
            />

          </PanelBody>
        </>
      )}

      {/* theme-2 */}
      {theme === "theme-2" &&
        (
          <>

            <PanelBody
              className="bPlPanelBody"
              title={__("Features Items", "b-blocks")}
              initialOpen={false}
            >
              <ItemsPanel  {...{ attributes, setAttributes }}
                arrKey="features"
                newItem={{
                  title: "New Feature...",
                  description: " Audio Files",
                  icon: "<svg xmlns=\"http://www.w3.org/2000/svg\"  viewBox=\"0 0 32 32\"><circle cx=\"9\" cy=\"7\" r=\"1\" fill=\"currentColor\"></circle><path fill=\"currentColor\" d=\"M27 22.14V18a2 2 0 0 0-2-2h-8v-4h9a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h9v4H7a2 2 0 0 0-2 2v4.14a4 4 0 1 0 2 0V18h8v4h-3v8h8v-8h-3v-4h8v4.14a4 4 0 1 0 2 0M8 26a2 2 0 1 1-2-2a2 2 0 0 1 2 2m10-2v4h-4v-4ZM6 10V4h20v6Zm20 18a2 2 0 1 1 2-2a2 2 0 0 1-2 2\"></path></svg>",
                }}
                ItemSettings={Features}
                itemLabel="Feature"
                design="sortable"
              />
            </PanelBody>

          </>
        )
      }

      {/* theme-3 */}
      {theme === "theme-3" &&
        (
          <>

            <PanelBody
              className="bPlPanelBody"
              title={__("Features Items", "b-blocks")}
              initialOpen={false}
            >

              <ItemsPanel  {...{ attributes, setAttributes }}
                arrKey="features"
                newItem={{
                  title: "New Feature...",
                  description: "Create AI images that visualize a product or idea, draft a creative concept, or push the limits.",
                  link: "https://www.w3schools.com/css/css3_transitions.asp",
                  buttonNewTab: false,
                  icon: "<svg xmlns=\"http://www.w3.org/2000/svg\"  viewBox=\"0 0 32 32\"><circle cx=\"9\" cy=\"7\" r=\"1\" fill=\"currentColor\"></circle><path fill=\"currentColor\" d=\"M27 22.14V18a2 2 0 0 0-2-2h-8v-4h9a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h9v4H7a2 2 0 0 0-2 2v4.14a4 4 0 1 0 2 0V18h8v4h-3v8h8v-8h-3v-4h8v4.14a4 4 0 1 0 2 0M8 26a2 2 0 1 1-2-2a2 2 0 0 1 2 2m10-2v4h-4v-4ZM6 10V4h20v6Zm20 18a2 2 0 1 1 2-2a2 2 0 0 1-2 2\"></path></svg>",
                }}
                ItemSettings={Features}
                itemLabel="Feature"
                design="sortable"
              />
            </PanelBody>
          </>
        )
      }
      {/* theme-4 */}
      {theme === "theme-4" &&
        (
          <>
            <PanelBody
              className="bPlPanelBody"
              title={__("Features Items", "b-blocks")}
              initialOpen={false}
            >

              <ItemsPanel  {...{ attributes, setAttributes }}
                arrKey="features"
                newItem={{
                  title: "New Feature...",
                  description: "Create AI images that visualize a product or idea, draft a creative concept, or push the limits of what's possible.",
                  link: "https://www.w3schools.com/css/css3_transitions.asp",
                  buttonNewTab: false,
                  icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22A10 10 0 0 1 2 12A10 10 0 0 1 12 2c5.5 0 10 4 10 9a6 6 0 0 1-6 6h-1.8c-.3 0-.5.2-.5.5c0 .1.1.2.1.3c.4.5.6 1.1.6 1.7c.1 1.4-1 2.5-2.4 2.5m0-18a8 8 0 0 0-8 8a8 8 0 0 0 8 8c.3 0 .5-.2.5-.5c0-.2-.1-.3-.1-.4c-.4-.5-.6-1-.6-1.6c0-1.4 1.1-2.5 2.5-2.5H16a4 4 0 0 0 4-4c0-3.9-3.6-7-8-7m-5.5 6c.8 0 1.5.7 1.5 1.5S7.3 13 6.5 13S5 12.3 5 11.5S5.7 10 6.5 10m3-4c.8 0 1.5.7 1.5 1.5S10.3 9 9.5 9S8 8.3 8 7.5S8.7 6 9.5 6m5 0c.8 0 1.5.7 1.5 1.5S15.3 9 14.5 9S13 8.3 13 7.5S13.7 6 14.5 6m3 4c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5"></path></svg>',
                }}
                ItemSettings={Features}
                itemLabel="Feature"
                design="sortable"
              />
            </PanelBody>
          </>
        )
      }
    </>

  );
};

export default General;
