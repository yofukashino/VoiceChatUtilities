import { webpack } from "replugged";
import Types from "../types";

export const Modules: Types.Modules = {};

Modules.loadModules = async (): Promise<void> => {
  Modules.DiscordConstants ??= await webpack.waitForProps<Types.DiscordConstants>(
    "Permissions",
    "ChannelTypes",
  );
  Modules.APIRequestUtils ??= await webpack.waitForProps<Types.APIRequestUtils>(
    "getAPIBaseURL",
    "HTTP",
  );
  Modules.PermissionStore ??= webpack.getByStoreName<Types.PermissionStore>("PermissionStore");
  Modules.SortedVoiceStateStore ??=
    webpack.getByStoreName<Types.SortedVoiceStateStore>("SortedVoiceStateStore");
  Modules.GuildChannelStore ??=
    webpack.getByStoreName<Types.GuildChannelStore>("GuildChannelStore");
};

export default Modules;
