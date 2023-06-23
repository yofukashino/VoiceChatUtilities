import { common, webpack } from "replugged";
import * as Types from "../types";
export const {
  api: APIRequestUtils,
  channels: UltimateChannelStore,
  users: UltimateUserStore,
} = common;
export const DiscordConstantsModule =
  webpack.getBySource<Types.DefaultTypes.ObjectExports>(/command:"giphy"/);
export const DiscordConstants = {
  Permissions: webpack.getExportsForProps<Types.Permissions>(DiscordConstantsModule, [
    "ADMINISTRATOR",
    "MANAGE_GUILD",
  ]),
  ChanneTypes: webpack.getExportsForProps<Types.ChannelTypes>(DiscordConstantsModule, [
    "GUILD_TEXT",
    "GUILD_VOICE",
  ]),
  URL: webpack.getExportsForProps<Types.URL>(DiscordConstantsModule, [
    "GUILD_MEMBER",
    "USER",
    "GUILD_ROLE",
  ]),
};
export const PermissionStore = webpack.getByProps<Types.PermissionStore>("getChannelPermissions");
export const SortedVoiceStateStore = webpack.getByProps<Types.SortedVoiceStateStore>([
  "getVoiceStatesForChannelAlt",
  "getVoiceStatesForChannel",
  "getVoiceStates",
]);
export const GuildChannelStore = webpack.getByProps<Types.GuildChannelStore>([
  "getChannels",
  "getVocalChannelIds",
  "getSelectableChannels",
]);
export const DiscordNative = webpack.getByProps<Types.DiscordNative>("clipboard", "process");
