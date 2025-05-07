import { registerBlockType } from "@wordpress/blocks";

import "./editor.scss";
import metadata from "./block.json";
import Edit from "./Components/Backend/Edit";
import { aboutUsIcon } from "./utils/icons";

registerBlockType(metadata, {
  icon: aboutUsIcon,
  edit: Edit,
});
