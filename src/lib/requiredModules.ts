import { webpack } from "replugged";
import Types from "../types";

export const Modules: Types.Modules = {};

Modules.loadModules = async (): Promise<void> => {
  Modules.DiscordConstantsModule = await webpack
    .waitForModule<Types.GenericModule>(webpack.filters.bySource(".MFA_WARNING="), {
      timeout: 10000,
    })
    .catch(() => {
      throw new Error("Failed To Find DiscordConstants Module");
    });

  Modules.DiscordConstants = {
    Permissions: webpack.getExportsForProps(Modules.DiscordConstantsModule, [
      "ADMINISTRATOR",
      "MANAGE_GUILD",
    ]),
    ChannelTypes: webpack.getExportsForProps(Modules.DiscordConstantsModule, [
      "GUILD_TEXT",
      "GUILD_VOICE",
    ]),
    Endpoints: webpack.getExportsForProps(Modules.DiscordConstantsModule, [
      "AUTH_SESSIONS",
      "AUTH_SESSIONS_LOGOUT",
    ]),
  };

  Modules.PermissionStore ??= webpack.getByStoreName<Types.PermissionStore>("PermissionStore");
  Modules.SortedVoiceStateStore ??=
    webpack.getByStoreName<Types.SortedVoiceStateStore>("SortedVoiceStateStore");
  Modules.GuildChannelStore ??=
    webpack.getByStoreName<Types.GuildChannelStore>("GuildChannelStore");
};

export default Modules;
