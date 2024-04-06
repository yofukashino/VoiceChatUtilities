import patchChannelContextMenu from "./ChannelContextMenu";
export const applyInjections = (): void => {
  patchChannelContextMenu();
};

export default { applyInjections };
