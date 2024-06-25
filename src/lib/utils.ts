import { channels as UltimateChannelStore, api as APIRequestUtils } from "replugged/common";
import { util } from "replugged";
import { SettingValues } from "../index";
import { defaultSettings } from "./consts";
import Modules from "./requiredModules";
import Types from "../types";

export const getVoiceUserIds = (channel: Types.Channel): string[] => {
  return (
    Modules.SortedVoiceStateStore.getVoiceStatesForChannel(channel) as Types.VoiceState[]
  ).map((m) => m.user.id);
};
export const getVoiceChannelMembers = (channel: Types.Channel): string[] => {
  return getVoiceUserIds(channel);
};

export const getVoiceChannel = (): {
  channel: Types.Channel;
  members: string[];
} => {
  const channel = UltimateChannelStore.getChannel(UltimateChannelStore.getVoiceChannelId());
  if (!channel) return;
  return {
    channel,
    members: getVoiceChannelMembers(channel),
  };
};
export const voiceMassActions = async ({
  type,
  channelMembers,
  exceptSelf,
  user,
  channel,
}: {
  type: string;
  channelMembers?: string[];
  exceptSelf?: boolean;
  user?: Types.User;
  channel?: Types.Channel;
}): Promise<void> => {
  const { DiscordConstants } = Modules;
  switch (type) {
    case "copy": {
      DiscordNative.clipboard.copy(
        SettingValues.get("voicechatcopymentions", defaultSettings.voicechatcopymentions)
          ? `<@${channelMembers.join("> <@")}>`
          : channelMembers.join(",\n"),
      );
      break;
    }
    case "move": {
      for (const member of channelMembers) {
        if (exceptSelf && member === user?.id) continue;
        await APIRequestUtils.HTTP.patch({
          url: DiscordConstants.Endpoints.GUILD_MEMBER(channel.guild_id, member) as string,
          body: {
            channel_id: channel.id,
          },
        });
        if (SettingValues.get("BulkActionsdelay", defaultSettings.BulkActionsdelay) !== 0)
          await util.sleep(SettingValues.get("BulkActionsdelay", defaultSettings.BulkActionsdelay));
      }
      break;
    }
    case "disconnect": {
      for (const member of channelMembers) {
        if (exceptSelf && member === user?.id) continue;
        await APIRequestUtils.HTTP.patch({
          url: DiscordConstants.Endpoints.GUILD_MEMBER(channel.guild_id, member) as string,
          body: {
            channel_id: null,
          },
        });
        if (SettingValues.get("BulkActionsdelay", defaultSettings.BulkActionsdelay) !== 0)
          await util.sleep(SettingValues.get("BulkActionsdelay", defaultSettings.BulkActionsdelay));
      }
      break;
    }
    case "mute": {
      for (const member of channelMembers) {
        if (exceptSelf && member === user?.id) continue;
        await APIRequestUtils.HTTP.patch({
          url: DiscordConstants.Endpoints.GUILD_MEMBER(channel.guild_id, member) as string,
          body: {
            mute: true,
          },
        });
        if (SettingValues.get("BulkActionsdelay", defaultSettings.BulkActionsdelay) !== 0)
          await util.sleep(SettingValues.get("BulkActionsdelay", defaultSettings.BulkActionsdelay));
      }
      break;
    }
    case "unmute": {
      for (const member of channelMembers) {
        if (exceptSelf && member === user?.id) continue;
        await APIRequestUtils.HTTP.patch({
          url: DiscordConstants.Endpoints.GUILD_MEMBER(channel.guild_id, member) as string,
          body: {
            mute: false,
          },
        });
        if (SettingValues.get("BulkActionsdelay", defaultSettings.BulkActionsdelay) !== 0)
          await util.sleep(SettingValues.get("BulkActionsdelay", defaultSettings.BulkActionsdelay));
      }
      break;
    }
    case "deaf": {
      for (const member of channelMembers) {
        if (exceptSelf && member === user?.id) continue;
        await APIRequestUtils.HTTP.patch({
          url: DiscordConstants.Endpoints.GUILD_MEMBER(channel.guild_id, member) as string,
          body: {
            deaf: true,
          },
        });
        if (SettingValues.get("BulkActionsdelay", defaultSettings.BulkActionsdelay) !== 0)
          await util.sleep(SettingValues.get("BulkActionsdelay", defaultSettings.BulkActionsdelay));
      }
      break;
    }
    case "undeaf": {
      for (const member of channelMembers) {
        if (exceptSelf && member === user?.id) continue;
        await APIRequestUtils.HTTP.patch({
          url: DiscordConstants.Endpoints.GUILD_MEMBER(channel.guild_id, member) as string,
          body: {
            deaf: false,
          },
        });
        if (SettingValues.get("BulkActionsdelay", defaultSettings.BulkActionsdelay) !== 0)
          await util.sleep(SettingValues.get("BulkActionsdelay", defaultSettings.BulkActionsdelay));
      }
      break;
    }
  }
};

export default {
  ...util,
  getVoiceUserIds,
  getVoiceChannelMembers,
  getVoiceChannel,
  voiceMassActions,
};
