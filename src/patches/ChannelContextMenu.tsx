import { PluginInjectorUtils } from "../index";
import vcuMenuItem from "../Components/MenuItem";
import * as Types from "../types";
export const patchChannelContextMenu = (): void => {
  PluginInjectorUtils.addMenuItem(
    Types.DefaultTypes.ContextMenuTypes.ChannelContext,
    ({ channel }) => {
      return vcuMenuItem({ channel: channel as Types.Channel });
    },
    6,
  );
};
