import { webpack } from "replugged";
import Types from "../types";

export const DiscordConstants = webpack.getByProps<Types.DiscordConstants>(
  "Permissions",
  "ChannelTypes",
);
export const PermissionStore = webpack.getByStoreName<Types.PermissionStore>("PermissionStore");
export const SortedVoiceStateStore =
  webpack.getByStoreName<Types.SortedVoiceStateStore>("SortedVoiceStateStore");
export const GuildChannelStore =
  webpack.getByStoreName<Types.GuildChannelStore>("GuildChannelStore");
export const APIRequestUtils = webpack.getByProps<Types.APIRequestUtils>("getAPIBaseURL", "HTTP");
