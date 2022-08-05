import { addons, types } from "@storybook/addons";

import { ADDON_ID, PANEL_ID } from "../constants";
import { Panel } from "../Panel";

addons.register(ADDON_ID, async () => {
    addons.add(PANEL_ID, {
        type: types.PANEL,
        title: "Kombai",
        match: ({ viewMode }) => viewMode === "story",
        render: Panel,
    });
    addons.setConfig({
        sidebar: {
            showRoots: true,
            collapsedRoots: [],
        }
    })
});