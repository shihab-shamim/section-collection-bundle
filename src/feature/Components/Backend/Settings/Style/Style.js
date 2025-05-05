import { __ } from "@wordpress/i18n";
import { PanelBody, PanelRow, __experimentalSpacer as Spacer, ToggleControl, __experimentalUnitControl as UnitControl } from "@wordpress/components";
import { BoxControl, ColorControl, ShadowControl, SolidBackground, Typography, Background, Label, Device } from "../../../../../../../bpl-tools/Components";
import { borderDefaultVal, resetItem3Padding, resetItemOnePadding, resetItemPadding, resetMargin, resetPadding, resetRadius, resetValues } from './../../../../utils/options';
import { BorderControl } from "../../../../../../../bpl-tools/Components/Deprecated";


const Style = ({ attributes, setAttributes, device = "desktop" }) => {


  const { heading, style, layout, section } = attributes;
  const { theme } = layout;

  return (
    <>
      {/* Theme  */}
      {theme === "theme-1" && (
        <>
          <PanelBody
            className="bPlPanelBody"
            title={__("Features Background", "b-blocks")}
            initialOpen={false}
          >

            <Background
              label={__("Background", "b-blocks")}
              value={section?.background}
              onChange={(newBg) => {
                setAttributes({
                  section: {
                    ...section, background: newBg,
                  },
                });
              }}
            />

            <Spacer />
            <PanelRow>
              <Label className="">{__("Padding", "b-blocks")}</Label>
              <Device />
            </PanelRow>
            <BoxControl
              values={section?.padding[device]}
              resetValues={resetPadding}
              onChange={(newValue) => {
                setAttributes({
                  section: {
                    ...section,
                    padding: { ...section.padding, [device]: newValue }
                  }
                });
              }}
            />
            <Spacer />

            <PanelRow>
              <Label className="">{__("Margin", "b-blocks")}</Label>
              <Device />
            </PanelRow>
            <BoxControl
              values={section?.margin[device]}
              resetValues={resetValues}
              onChange={(newValue) => {
                setAttributes({
                  section: {
                    ...section,
                    margin: { ...section.margin, [device]: newValue }
                  }
                });
              }}
            />


          </PanelBody>

          <PanelBody
            className="bPlPanelBody"
            title={__("Heading Badge", "b-blocks")}
            initialOpen={false}
          >
            <Spacer />

            <ToggleControl
              label={__("Show Badge", "b-blocks")}
              checked={heading?.subTitle?.showSubTitle}
              onChange={() => {
                setAttributes({
                  heading: {
                    ...heading,
                    subTitle: {
                      ...heading.subTitle,
                      showSubTitle: !heading?.subTitle?.showSubTitle
                    }
                  }
                });
              }}
            />
            {
              heading?.subTitle?.showSubTitle
                ?
                <>
                  <Spacer />
                  <UnitControl
                    label={__("Icon Height", "b-blocks")}
                    value={heading?.subTitle?.height}
                    onChange={(newHeight) => { setAttributes({ heading: { ...heading, subTitle: { ...heading.subTitle, height: newHeight, } } }) }}
                  />

                  <Spacer />

                  <ColorControl
                    label={__("Icon Color", "b-blocks")}
                    defaultColor="#fff"
                    value={heading?.subTitle?.iconColor}
                    onChange={(newcolor) => {
                      setAttributes({
                        heading: { ...heading, subTitle: { ...heading.subTitle, iconColor: newcolor } },
                      });
                    }}
                  />

                  <Typography
                    label={__("Typography :", "b-blocks")}
                    value={heading?.subTitle?.typo}
                    defaults={{
                      fontSize: { desktop: 15, tablet: 12, mobile: 12 },
                    }}
                    onChange={(typog) => {
                      setAttributes({
                        heading: { ...heading, subTitle: { ...heading.subTitle, typo: typog } },
                      });
                    }}
                  />

                  <Spacer />

                  <ColorControl
                    label={__("Text Color", "b-blocks")}
                    defaultColor="#fff"
                    value={heading?.subTitle?.color}
                    onChange={(newcolor) => {
                      setAttributes({
                        heading: { ...heading, subTitle: { ...heading.subTitle, color: newcolor } },
                      });
                    }}
                  />

                  <Spacer />

                  <SolidBackground
                    label={__("Background Color", "b-blocks")}
                    value={heading?.subTitle?.bg}
                    onChange={(value) => {
                      setAttributes({
                        heading: { ...heading, subTitle: { ...heading.subTitle, bg: value } },
                      });
                    }}
                  />

                  <Spacer />

                  <BoxControl
                    label={__("Padding", "b-blocks")}
                    values={heading?.subTitle?.padding}
                    resetValues={resetItemOnePadding}
                    onChange={(newValue) => {
                      setAttributes({
                        heading: { ...heading, subTitle: { ...heading.subTitle, padding: newValue } },
                      });
                    }}
                  />
                  <Spacer />

                  <BoxControl
                    label={__("Radius", "b-blocks")}
                    values={heading?.subTitle?.radius}
                    resetValues={resetValues}
                    onChange={(redi) => {
                      setAttributes({
                        heading: { ...heading, subTitle: { ...heading.subTitle, radius: redi } },
                      });
                    }}
                  />
                </>
                : " "
            }
          </PanelBody>


          <PanelBody
            className="bPlPanelBody"
            title={__("Heading Title", "b-blocks")}
            initialOpen={false}
          >
            <Spacer />

            <ToggleControl
              label={__("Show/Off Title", "b-blocks")}
              checked={heading?.title?.showTitle}
              onChange={() => {
                setAttributes({
                  heading: {
                    ...heading,
                    title: {
                      ...heading.title,
                      showTitle: !heading?.title?.showTitle
                    }
                  }
                });
              }}
            />
            {
              heading?.title?.showTitle
                ?
                <>
                  <Spacer />

                  <Typography
                    label={__('Typography:', 'b-blocks')}
                    defaults={{
                      fontSize: { desktop: 55, tablet: 28, mobile: 28 },
                    }}
                    value={heading?.title?.typo}
                    onChange={val => {
                      setAttributes({
                        heading: { ...heading, title: { ...heading.title, typo: val } },
                      });
                    }}
                  />

                  <Spacer />

                  <ColorControl
                    label={__("Text Color", "b-blocks")}
                    defaultColor="#fff"
                    value={heading?.title?.color}
                    onChange={(newcolor) => {
                      setAttributes({
                        heading: { ...heading, title: { ...heading.title, color: newcolor } },
                      });
                    }}
                  />

                  <Spacer />

                  <BoxControl
                    label={__("Margin", "b-blocks")}
                    values={heading?.title?.margin}
                    resetValues={resetValues}
                    onChange={(newMargin) => {
                      setAttributes({
                        heading: { ...heading, title: { ...heading.title, margin: newMargin } },
                      });
                    }}
                  />
                  <Spacer />

                  <BoxControl
                    label={__("Padding", "b-blocks")}
                    values={heading?.title?.padding}
                    resetValues={resetValues}
                    onChange={(newPadding) => {
                      setAttributes({
                        heading: { ...heading, title: { ...heading.title, padding: newPadding } },
                      });
                    }}
                  />
                </>
                : ""
            }
          </PanelBody>


          <PanelBody
            className="bPlPanelBody"
            title={__("Feature Items", "b-blocks")}
            initialOpen={false}
          >
            <UnitControl
              label={__("Item Gap", "b-blocks")}
              value={style?.gap}
              onChange={(newValues) => {
                setAttributes({ style: { ...style, gap: newValues } });
              }}
            />

            <Spacer />

            <BoxControl
              label={__("Item Margin", "b-blocks")}
              values={style?.margin}
              resetValues={resetValues}
              onChange={(newValue) => {
                setAttributes({ style: { ...style, margin: newValue } });
              }}
            />
            <Spacer />

            <BoxControl
              label={__("Item Padding", "b-blocks")}
              values={style?.padding}
              resetValues={resetValues}
              onChange={(newValue) => {
                setAttributes({ style: { ...style, padding: newValue } });
              }}
            />

            <Spacer />

            <BoxControl
              label={__("Item Radius", "b-blocks")}
              values={style?.radius}
              resetValues={resetValues}
              onChange={(newValue) => {
                setAttributes({ style: { ...style, radius: newValue } });
              }}
            />

            <Spacer />

            <SolidBackground
              label={__("Item Background Color", "b-blocks")}
              value={style?.bg}
              onChange={(value) => {
                setAttributes({ style: { ...style, bg: value } })
              }}
            />

            <Spacer />

            <div >

              <div>
                <BoxControl
                  label={__("Item Padding", "b-blocks")}
                  values={style?.bgPadding}
                  resetValues={resetValues}
                  onChange={(newValue) => {
                    setAttributes({ style: { ...style, bgPadding: newValue } });
                  }}
                />
              </div>
            </div>

            <Spacer />

            <UnitControl
              label={__("Icon Height", "b-blocks")}
              value={style?.icon?.height}
              onChange={(newHeight) => { setAttributes({ style: { ...style, icon: { ...style.icon, height: newHeight } } }) }}
            />
            <Spacer />

            <ColorControl
              label={__("Icon Color", "b-blocks")}
              defaultColor="#fff"
              value={style?.icon?.color}
              onChange={(col) => { setAttributes({ style: { ...style, icon: { ...style.icon, color: col } } }) }}
            />

            <Spacer />

            <ColorControl
              label={__("Title Color", "b-blocks")}
              defaultColor="rgba(255, 255, 255, 0.9)"
              value={style?.title?.color}
              onChange={(col) => { setAttributes({ style: { ...style, title: { ...style.title, color: col } } }) }}
            />

            <Typography
              label={__('Title Typography:', 'b-blocks')}
              defaults={{
                fontSize: { desktop: 18, tablet: 18, mobile: 18 },
              }}
              value={style?.title?.typo}
              onChange={(typ) => { setAttributes({ style: { ...style, title: { ...style.title, typo: typ } } }) }}
            />

            <Spacer />

            <ColorControl
              label={__("Description Color", "b-blocks")}
              defaultColor="rgb(252 252 253 / 50%)"
              value={style?.des?.color}
              onChange={(col) => {
                setAttributes({
                  style: { ...style, des: { ...style.des, color: col } },
                });
              }}
            />
            <Typography
              label={__('Description Typography:', 'b-blocks')}
              defaults={{
                fontSize: { desktop: 14, tablet: 14, mobile: 14 },
              }}
              value={style?.des?.typo}
              onChange={(typ) => { setAttributes({ style: { ...style, des: { ...style.des, typo: typ } } }) }}
            />

          </PanelBody>
        </>
      )
      }


      {/* --------------- */}

      {theme === "theme-2" && (
        <>
          <PanelBody
            className="bPlPanelBody"
            title={__("Features Background", "b-blocks")}
            initialOpen={false}
          >

            <Background
              label={__("Background", "b-blocks")}
              value={section?.background}
              onChange={(newBg) => {
                setAttributes({
                  section: {
                    ...section, background: newBg,
                  },
                });
              }}
            />

            <Spacer />
            <PanelRow>
              <Label className="">{__("Padding", "b-blocks")}</Label>
              <Device />
            </PanelRow>
            <BoxControl
              values={section?.padding[device]}
              resetValues={resetPadding}
              onChange={(newValue) => {
                setAttributes({
                  section: {
                    ...section,
                    padding: { ...section.padding, [device]: newValue }
                  }
                });
              }}
            />
            <Spacer />
            <PanelRow>
              <Label className="">{__("Margin", "b-blocks")}</Label>
              <Device />
            </PanelRow>
            <BoxControl
              values={section?.margin[device]}
              resetValues={resetValues}
              onChange={(newValue) => {
                setAttributes({
                  section: {
                    ...section,
                    margin: { ...section.margin, [device]: newValue }
                  }
                });
              }}
            />
          </PanelBody>

          <PanelBody
            className="bPlPanelBody"
            title={__("Feature Items", "b-blocks")}
            initialOpen={false}
          >
            <UnitControl
              label={__("Items Gap", "b-blocks")}
              value={style?.itemGap}
              onChange={(newValues) => {
                setAttributes({ style: { ...style, itemGap: newValues } });
              }}
            />

            <Spacer />

            <SolidBackground
              label={__("Item Background Color", "b-blocks")}
              value={style?.bg}
              onChange={(value) => {
                setAttributes({ style: { ...style, bg: value } })
              }}
            />

            <Spacer />

            <ShadowControl
              label={__("Item Shodow", "b-blocks")}
              defaults={[{ color: 'rgba(145, 158, 171, 0.16)' }]}
              value={style?.shadow}
              onChange={(shado) => {
                setAttributes({ style: { ...style, shadow: shado } })
              }}
            />

            <Spacer />

            <BoxControl
              label={__("Item Radius", "b-blocks")}
              values={style?.radius}
              resetValues={resetRadius}
              onChange={(newValue) => {
                setAttributes({ style: { ...style, radius: newValue } });
              }}
            />
            <Spacer />

            <BoxControl
              label={__("Item Padding", "b-blocks")}
              values={style?.padding}
              resetValues={resetItemPadding}
              onChange={(newValue) => {
                setAttributes({ style: { ...style, padding: newValue } });
              }}
            />

            <Spacer />

            <UnitControl
              label={__("Item Gap", "b-blocks")}
              value={style?.gap}
              onChange={(newValues) => {
                setAttributes({ style: { ...style, gap: newValues } });
              }}
            />

            <Spacer />

            <UnitControl
              label={__("Icon Height", "b-blocks")}
              value={style?.icon?.height}
              onChange={(newHeight) => { setAttributes({ style: { ...style, icon: { ...style.icon, height: newHeight } } }) }}
            />
            <Spacer />

            <ColorControl
              label={__("Icon Color", "b-blocks")}
              defaultColor="#d4dce4"
              value={style?.icon?.color}
              onChange={(col) => { setAttributes({ style: { ...style, icon: { ...style.icon, color: col } } }) }}
            />

            <Spacer />

            <ColorControl
              label={__("Title Color", "b-blocks")}
              defaultColor="#fff"
              value={style?.title?.color}
              onChange={(col) => { setAttributes({ style: { ...style, title: { ...style.title, color: col } } }) }}
            />

            <Typography
              label={__('Title Typography:', 'b-blocks')}
              value={style?.title?.typo}
              defaults={{
                fontSize: { desktop: 18, tablet: 18, mobile: 18 },
              }}
              onChange={(typ) => { setAttributes({ style: { ...style, title: { ...style.title, typo: typ } } }) }}
            />

            <Spacer />

            <ColorControl
              label={__("Description Color", "b-blocks")}
              defaultColor="#DEE2E6"
              value={style?.des?.color}
              onChange={(col) => {
                setAttributes({
                  style: { ...style, des: { ...style.des, color: col } },
                });
              }}
            />
            <Spacer />
            <Typography
              label={__('Description Typography:', 'b-blocks')}
              defaults={{
                fontSize: { desktop: 16, tablet: 16, mobile: 16 },
              }}
              value={style?.des?.typo}
              onChange={(typ) => { setAttributes({ style: { ...style, des: { ...style.des, typo: typ } } }) }}
            />

          </PanelBody>
        </>
      )
      }

      {theme === "theme-3" && (
        <>

          <PanelBody
            className="bPlPanelBody"
            title={__("Features Background", "b-blocks")}
            initialOpen={false}
          >

            <Background
              label={__("Background", "b-blocks")}
              value={section?.background}
              onChange={(newBg) => {
                setAttributes({
                  section: {
                    ...section, background: newBg,
                  },
                });
              }}
            />

            <Spacer />
            <PanelRow>
              <Label className="">{__("Padding", "b-blocks")}</Label>
              <Device />
            </PanelRow>
            <BoxControl
              values={section?.padding[device]}
              resetValues={resetPadding}
              onChange={(newValue) => {
                setAttributes({
                  section: {
                    ...section,
                    padding: { ...section.padding, [device]: newValue }
                  }
                });
              }}
            />
            <Spacer />
            <PanelRow>
              <Label className="">{__("Margin", "b-blocks")}</Label>
              <Device />
            </PanelRow>
            <BoxControl
              values={section?.margin[device]}
              resetValues={resetValues}
              onChange={(newValue) => {
                setAttributes({
                  section: {
                    ...section,
                    margin: { ...section.margin, [device]: newValue }
                  }
                });
              }}
            />
          </PanelBody>

          <PanelBody
            className="bPlPanelBody"
            title={__("Features Items", "b-blocks")}
            initialOpen={false}
          >
            <SolidBackground
              label={__("Item Background Color", "b-blocks")}
              value={style?.bg}
              onChange={(value) => {
                setAttributes({ style: { ...style, bg: value } })
              }}
            />

            <Spacer />

            <BoxControl
              label={__("Item Radius", "b-blocks")}
              values={style?.radius}
              resetValues={resetRadius}
              onChange={(newValue) => {
                setAttributes({ style: { ...style, radius: newValue } });
              }}
            />

            <Spacer />

            <BoxControl
              label={__("Item Padding", "b-blocks")}
              values={style?.padding}
              resetValues={resetItem3Padding}
              onChange={(newValue) => {
                setAttributes({ style: { ...style, padding: newValue } });
              }}
            />
            <Spacer />

            <UnitControl
              label={__("Button Height", "b-blocks")}
              value={style?.iconButton?.height}
              onChange={(newHeight) => { setAttributes({ style: { ...style, iconButton: { ...style.iconButton, height: newHeight } } }) }}
            />
            <Spacer />
            <ColorControl
              label={__("Button Bg", "b-blocks")}
              defaultColor="rgba(18, 17, 17, 0.6)"
              value={style?.iconButton?.colorBg}
              onChange={(newcolor) => {
                setAttributes({
                  style: { ...style, iconButton: { ...style.iconButton, colorBg: newcolor } },
                });
              }}
            />
            <Spacer />
            <BorderControl
              label={__("Border Type", "b-blocks")}
              defaults={borderDefaultVal}
              value={style?.iconButton?.border}
              onChange={(newSize) => { setAttributes({ style: { ...style, iconButton: { ...style.iconButton, border: newSize } } }) }}
            />

            <Spacer />

            <UnitControl
              label={__("Icon Height", "b-blocks")}
              value={style?.icon?.height}
              onChange={(newHeight) => { setAttributes({ style: { ...style, icon: { ...style.icon, height: newHeight } } }) }}
            />
            <Spacer />

            <ColorControl
              label={__("Icon Color", "b-blocks")}
              defaultColor="rgba(252, 252, 253,1)"
              value={style?.icon?.color}
              onChange={(col) => { setAttributes({ style: { ...style, icon: { ...style.icon, color: col } } }) }}
            />

            <Spacer />

            <ColorControl
              label={__("Title Color", "b-blocks")}
              defaultColor="rgb(252, 252, 253)"
              value={style?.title?.color}
              onChange={(col) => { setAttributes({ style: { ...style, title: { ...style.title, color: col } } }) }}
            />

            <Typography
              label={__('Title Typography:', 'b-blocks')}
              value={style?.title?.typo}
              defaults={{
                fontSize: { desktop: 20, tablet: 16, mobile: 16 },
              }}
              onChange={(typ) => { setAttributes({ style: { ...style, title: { ...style.title, typo: typ } } }) }}
            />

            <Spacer />

            <ColorControl
              label={__("Description Color", "b-blocks")}
              defaultColor="rgba(252, 252, 253, 0.7)"
              value={style?.des?.color}
              onChange={(col) => {
                setAttributes({
                  style: { ...style, des: { ...style.des, color: col } },
                });
              }}
            />
            <Spacer />
            <Typography
              label={__('Description Typography:', 'b-blocks')}
              defaults={{
                fontSize: { desktop: 16, tablet: 14, mobile: 14 },
              }}
              value={style?.des?.typo}
              onChange={(typ) => { setAttributes({ style: { ...style, des: { ...style.des, typo: typ } } }) }}
            />

          </PanelBody>

          <PanelBody
            className="bPlPanelBody"
            title={__("Features Items Hover ", "b-blocks")}
            initialOpen={false}
          >
            <ColorControl
              label={__("Icon Color ", "b-blocks")}
              defaultColor="rgba(9, 10, 12, 1)"
              value={style?.icon?.hoverColor}
              onChange={(newcolor) => {
                setAttributes({
                  style: { ...style, icon: { ...style.icon, hoverColor: newcolor } },
                });
              }}
            />
            <Spacer />
            <ColorControl
              label={__("Button Bg", "b-blocks")}
              defaultColor="rgba(246, 92, 52,1)"
              value={style?.iconButton?.hoverBg}
              onChange={(newcolor) => {
                setAttributes({
                  style: { ...style, iconButton: { ...style.iconButton, hoverBg: newcolor } },
                });
              }}
            />

            <Spacer />
            <ColorControl
              label={__("Title Color", "b-blocks")}
              defaultColor="rgba(246, 92, 52, 1)"
              value={style?.title?.hoverColor}
              onChange={(newcolor) => {
                setAttributes({
                  style: { ...style, title: { ...style.title, hoverColor: newcolor } },
                });
              }}
            />


          </PanelBody>
        </>
      )
      }

      {theme === "theme-4" && (
        <>

          <PanelBody
            className="bPlPanelBody"
            title={__("Features Background", "b-blocks")}
            initialOpen={false}
          >

            <Background
              label={__("Background", "b-blocks")}
              value={section?.background}
              onChange={(newBg) => {
                setAttributes({
                  section: {
                    ...section, background: newBg,
                  },
                });
              }}
            />

            <Spacer />
            <PanelRow>
              <Label className="">{__("Padding", "b-blocks")}</Label>
              <Device />
            </PanelRow>
            <BoxControl
              values={section?.padding[device]}
              resetValues={resetPadding}
              onChange={(newValue) => {
                setAttributes({
                  section: {
                    ...section,
                    padding: { ...section.padding, [device]: newValue }
                  }
                });
              }}
            />
            <Spacer />
            <PanelRow>
              <Label className="">{__("Margin", "b-blocks")}</Label>
              <Device />
            </PanelRow>
            <BoxControl
              values={section?.margin[device]}
              resetValues={resetValues}
              onChange={(newValue) => {
                setAttributes({
                  section: {
                    ...section,
                    margin: { ...section.margin, [device]: newValue }
                  }
                });
              }}
            />
          </PanelBody>

          <PanelBody
            className="bPlPanelBody"
            title={__("Features Items", "b-blocks")}
            initialOpen={false}
          >

            <BoxControl
              label={__("Items margin", "b-blocks")}
              values={style?.margin}
              resetValues={resetMargin}
              onChange={(newValue) => {
                setAttributes({ style: { ...style, margin: newValue } });
              }}
            />
            <Spacer />

            <BoxControl
              label={__("Items padding", "b-blocks")}
              values={style?.featureFourPadding}
              resetValues={resetValues}
              onChange={(newValue) => {
                setAttributes({ style: { ...style, featureFourPadding: newValue } });
              }}
            />
            <Spacer />

            <SolidBackground
              label={__("Item Background Color", "b-blocks")}
              value={style?.bg}
              onChange={(value) => {
                setAttributes({ style: { ...style, bg: value } })
              }}
            />

            <ColorControl
              label={__("Item Border Color", "b-blocks")}
              defaultColor="rgb(247, 247, 247)"
              value={style?.borderColor}
              onChange={(value) => {
                setAttributes({ style: { ...style, borderColor: value } })
              }}
            />

            <Spacer />

            <BoxControl
              label={__("Item Radius", "b-blocks")}
              values={style?.radius}
              resetValues={resetRadius}
              onChange={(newValue) => {
                setAttributes({ style: { ...style, radius: newValue } });
              }}
            />

            <Spacer />

            <BoxControl
              label={__("Item Padding", "b-blocks")}
              values={style?.padding}
              resetValues={resetItem3Padding}
              onChange={(newValue) => {
                setAttributes({ style: { ...style, padding: newValue } });
              }}
            />

            <Spacer />

            <UnitControl
              label={__("Icon Container Height", "b-blocks")}
              value={style?.iconButton?.height}
              onChange={(newHeight) => { setAttributes({ style: { ...style, iconButton: { ...style.iconButton, height: newHeight } } }) }}
            />
            <Spacer />
            <ColorControl
              label={__("Icon Container  Bg", "b-blocks")}
              defaultColor="rgba(18, 17, 17, 0.6)"
              value={style?.iconButton?.colorBg}
              onChange={(newcolor) => {
                setAttributes({
                  style: { ...style, iconButton: { ...style.iconButton, colorBg: newcolor } },
                });
              }}
            />
            <Spacer />
            <BorderControl
              label={__("Border Type", "b-blocks")}
              defaults={borderDefaultVal}
              value={style?.iconButton?.border}
              onChange={(newSize) => { setAttributes({ style: { ...style, iconButton: { ...style.iconButton, border: newSize } } }) }}
            />

            <Spacer />


            <UnitControl
              label={__("Icon Height", "b-blocks")}
              value={style?.icon?.height}
              onChange={(newHeight) => { setAttributes({ style: { ...style, icon: { ...style.icon, height: newHeight } } }) }}
            />
            <Spacer />

            <ColorControl
              label={__("Icon Color", "b-blocks")}
              defaultColor="rgb(252, 252, 253)"
              value={style?.icon?.color}
              onChange={(col) => { setAttributes({ style: { ...style, icon: { ...style.icon, color: col } } }) }}
            />

            <Spacer />

            <ColorControl
              label={__("Title Color", "b-blocks")}
              defaultColor="rgba(252, 252, 253, 0.9)"
              value={style?.title?.color}
              onChange={(col) => { setAttributes({ style: { ...style, title: { ...style.title, color: col } } }) }}
            />
            <Spacer />
            <Typography
              label={__('Title Typography:', 'b-blocks')}
              value={style?.title?.typo}
              defaults={{
                fontSize: { desktop: 20, tablet: 16, mobile: 16 },
              }}
              onChange={(typ) => { setAttributes({ style: { ...style, title: { ...style.title, typo: typ } } }) }}
            />

            <Spacer />

            <ColorControl
              label={__("Description Color", "b-blocks")}
              defaultColor="rgba(252, 252, 253, 0.7)"
              value={style?.des?.color}
              onChange={(col) => {
                setAttributes({
                  style: { ...style, des: { ...style.des, color: col } },
                });
              }}
            />
            <Spacer />
            <Typography
              key={JSON.stringify(style?.des?.typo)}
              label={__('Description Typography:', 'b-blocks')}
              defaults={{
                fontSize: { desktop: 18, tablet: 14, mobile: 14 }
              }}
              value={style?.des?.typo}
              onChange={(typ) => { setAttributes({ style: { ...style, des: { ...style.des, typo: typ } } }) }}
            />

          </PanelBody>

          <PanelBody
            className="bPlPanelBody"
            title={__("Features Items Hover ", "b-blocks")}
            initialOpen={false}
          >
            <ColorControl
              label={__("Icon Color ", "b-blocks")}
              defaultColor="rgba(9, 10, 12, 1)"
              value={style?.icon?.hoverColor}
              onChange={(newcolor) => {
                setAttributes({
                  style: { ...style, icon: { ...style.icon, hoverColor: newcolor } },
                });
              }}
            />
            <Spacer />
            <ColorControl
              label={__("Button Bg", "b-blocks")}
              defaultColor="rgb(199, 247, 47)"
              value={style?.iconButton?.hoverBg}
              onChange={(newcolor) => {
                setAttributes({
                  style: { ...style, iconButton: { ...style.iconButton, hoverBg: newcolor } },
                });
              }}
            />

            <Spacer />
            <ColorControl
              label={__("Title Color", "b-blocks")}
              defaultColor="rgb(199, 247, 47)"
              value={style?.title?.hoverColor}
              onChange={(newcolor) => {
                setAttributes({
                  style: { ...style, title: { ...style.title, hoverColor: newcolor } },
                });
              }}
            />


          </PanelBody>
        </>
      )
      }
    </>
  );
};

export default Style;
