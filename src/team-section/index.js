import { registerBlockType } from "@wordpress/blocks";

import "./editor.scss";
import metadata from "./block.json";
import Edit from "./Components/Backend/Edit";
import { Icon, people } from "@wordpress/icons";

registerBlockType(metadata, {
  icon: <Icon icon={people} />,
  edit: Edit,
});
