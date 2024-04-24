import Modules from "../lib/requiredModules";
import injectChannelContextMenu from "./ChannelContextMenu";
export const applyInjections = async (): Promise<void> => {
  await Modules.loadModules();
  injectChannelContextMenu();
};

export default { applyInjections };
