import { PluginInjectorUtils } from "../index";
import utilMenuItems from "../Components/MenuItem";
import Types from "../types";
export default (): void => {
  PluginInjectorUtils.addMenuItem(
    Types.DefaultTypes.ContextMenuTypes.ChannelContext,
    ({ channel }: { channel: Types.Channel }) => {
      return utilMenuItems({ channel });
    },
    6,
  );
};
