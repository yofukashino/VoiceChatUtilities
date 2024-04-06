import { channels as UltimateChannelStore, users as UltimateUserStore } from "replugged/common";
import { ContextMenu } from "replugged/components";
import { SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import { DiscordConstants, GuildChannelStore, PermissionStore } from "../lib/requiredModules";
import Icons from "./Icons";
import Utils from "../lib/utils";
import Types from "../types";
const { MenuItem, MenuGroup } = ContextMenu;
export const getMoveableChannels = ({
  channel,
  voiceChannels,
  channelMembers,
  user,
  exceptSelf,
}): React.ReactElement[] => {
  voiceChannels = voiceChannels.filter(
    (vc) => vc.id !== channel.id && PermissionStore.can(DiscordConstants.Permissions.CONNECT, vc),
  );
  if (!voiceChannels.length)
    return [
      <MenuItem
        label="No VC Available"
        id="no-vc"
        icon={() => <Icons.noVC height="18" width="18" />}
      />,
    ];
  return voiceChannels.map((channel) => {
    return (
      <MenuItem
        label={channel.name}
        id={channel.id}
        icon={() => <Icons.vc height="18" width="18" />}
        action={() =>
          Utils.voiceMassActions({ type: "move", exceptSelf, channelMembers, channel, user })
        }
      />
    );
  });
};
export const fastMove = ({ channel }: { channel: Types.Channel }): React.ReactElement | null => {
  const user = UltimateUserStore.getCurrentUser();
  const currentChannel = Utils.getVoiceChannel();
  const channelMembers = currentChannel?.members;
  if (
    !currentChannel ||
    !SettingValues.get("fastMove", defaultSettings.fastMove) ||
    channel.type !== 2 ||
    currentChannel.channel.guild_id !== channel.guild_id ||
    channelMembers?.length <= 1 ||
    currentChannel.channel.id === channel.id ||
    !PermissionStore.can(DiscordConstants.Permissions.MOVE_MEMBERS, channel) ||
    !PermissionStore.can(DiscordConstants.Permissions.CONNECT, channel)
  )
    return null;
  return (
    <MenuItem
      label="Fast Move"
      id="fast-move"
      icon={() => <Icons.fastMove height="18" width="18" />}
      action={() =>
        Utils.voiceMassActions({
          type: "move",
          exceptSelf: false,
          channelMembers,
          channel,
          user,
        })
      }
    />
  );
};
export const massUtils = ({ channel }: { channel: Types.Channel }): React.ReactElement | null => {
  if (channel.type !== 2) return null;
  const SubMenuItems: React.ReactElement[] = [];
  const user = UltimateUserStore.getCurrentUser();
  const currentChannel = Utils.getVoiceChannel();
  const channelMembers =
    currentChannel?.channel.id === channel.id
      ? currentChannel?.members
      : Utils.getVoiceChannelMembers(channel);
  const guildChannels = GuildChannelStore.getChannels(channel?.guild_id) as Types.GuildChannels;
  const voiceChannels = guildChannels.VOCAL.map(({ channel }) => channel);
  if (channelMembers?.length <= 1) return null;
  const exceptSelf =
    SettingValues.get("exceptSelf", defaultSettings.exceptSelf) &&
    UltimateChannelStore.getVoiceChannelId() === channel.id;
  if (SettingValues.get("voicechatcopyids", defaultSettings.voicechatcopyids))
    SubMenuItems.push(
      <MenuItem
        id="copy-all-vc-members"
        label={
          SettingValues.get("voicechatcopymentions", defaultSettings.voicechatcopymentions)
            ? "Copy All User Mentions"
            : "Copy All User IDs"
        }
        icon={() => <Icons.massCopy height="18" width="18" />}
        action={() =>
          Utils.voiceMassActions({
            type: "copy",
            exceptSelf: false,
            channelMembers,
            channel,
            user,
          })
        }
      />,
    );
  if (PermissionStore.can(DiscordConstants.Permissions.MOVE_MEMBERS, channel)) {
    SubMenuItems.push(
      <MenuItem
        id="disconnect-all-vc"
        label="Disconnect All"
        icon={() => <Icons.disconnect height="18" width="18" />}
        action={() =>
          Utils.voiceMassActions({
            type: "disconnect",
            exceptSelf: false,
            channelMembers,
            channel,
            user,
          })
        }
      />,
    );
    if (exceptSelf)
      SubMenuItems.push(
        <MenuItem
          id="disconnect-all-vc-except-self"
          label="Disconnect All Except Self"
          icon={() => <Icons.disconnect height="18" width="18" />}
          action={() =>
            Utils.voiceMassActions({
              type: "disconnect",
              exceptSelf: true,
              channelMembers,
              channel,
              user,
            })
          }
        />,
      );
    SubMenuItems.push(
      <MenuItem id="move-all-vc" label="Move All">
        {...getMoveableChannels({
          channel,
          voiceChannels,
          channelMembers,
          user,
          exceptSelf: false,
        })}
      </MenuItem>,
    );
    if (exceptSelf)
      SubMenuItems.push(
        <MenuItem id="move-all-vc-except-self" label="Move All Except Self">
          {...getMoveableChannels({
            channel,
            voiceChannels,
            channelMembers,
            user,
            exceptSelf: true,
          })}
        </MenuItem>,
      );
  }
  if (PermissionStore.can(DiscordConstants.Permissions.MUTE_MEMBERS, channel)) {
    SubMenuItems.push(
      <MenuItem
        id="mute-all-vc"
        label="Mute All"
        icon={() => <Icons.mute height="18" width="18" />}
        action={() =>
          Utils.voiceMassActions({
            type: "mute",
            exceptSelf: false,
            channelMembers,
            channel,
            user,
          })
        }
      />,
    );
    if (exceptSelf)
      SubMenuItems.push(
        <MenuItem
          id="mute-all-vc-except-self"
          label="Mute All Except Self"
          icon={() => <Icons.mute height="18" width="18" />}
          action={() =>
            Utils.voiceMassActions({
              type: "mute",
              exceptSelf: true,
              channelMembers,
              channel,
              user,
            })
          }
        />,
      );
    SubMenuItems.push(
      <MenuItem
        id="unmute-all-vc"
        label="Unmute All"
        icon={() => <Icons.unmute height="18" width="18" />}
        action={() =>
          Utils.voiceMassActions({
            type: "unmute",
            exceptSelf: false,
            channelMembers,
            channel,
            user,
          })
        }
      />,
    );
    if (exceptSelf)
      SubMenuItems.push(
        <MenuItem
          id="unmute-all-vc-except-self"
          label="Unmute All Except Self"
          icon={() => <Icons.unmute height="18" width="18" />}
          action={() =>
            Utils.voiceMassActions({
              type: "unmute",
              exceptSelf: true,
              channelMembers,
              channel,
              user,
            })
          }
        />,
      );
  }
  if (PermissionStore.can(DiscordConstants.Permissions.DEAFEN_MEMBERS, channel)) {
    SubMenuItems.push(
      <MenuItem
        id="defen-all-vc"
        label="Deafen All"
        icon={() => <Icons.deaf height="18" width="18" />}
        action={() =>
          Utils.voiceMassActions({
            type: "deaf",
            exceptSelf: false,
            channelMembers,
            channel,
            user,
          })
        }
      />,
    );

    if (exceptSelf)
      SubMenuItems.push(
        <MenuItem
          id="deafen-all-vc-except-self"
          label="Deafen All Except Self"
          icon={() => <Icons.deaf height="18" width="18" />}
          action={() =>
            Utils.voiceMassActions({
              type: "deaf",
              exceptSelf: true,
              channelMembers,
              channel,
              user,
            })
          }
        />,
      );
    SubMenuItems.push(
      <MenuItem
        id="undeafen-all-vc"
        label="Undeafen All"
        icon={() => <Icons.undeaf height="18" width="18" />}
        action={() =>
          Utils.voiceMassActions({
            type: "undeaf",
            exceptSelf: false,
            channelMembers,
            channel,
            user,
          })
        }
      />,
    );
    if (exceptSelf)
      SubMenuItems.push(
        <MenuItem
          id="undeafen-all-vc-except-self"
          label="Undeafen All Except Self"
          icon={() => <Icons.undeaf height="18" width="18" />}
          action={() =>
            Utils.voiceMassActions({
              type: "undeaf",
              exceptSelf: true,
              channelMembers,
              channel,
              user,
            })
          }
        />,
      );
  }
  if (!SubMenuItems?.length) return null;
  return (
    <MenuItem label="Mass VC Utilities" id="mass-vc-utilities">
      {SubMenuItems}
    </MenuItem>
  );
};

export default ({ channel }: { channel: Types.Channel }): React.ReactElement => {
  return (
    <MenuGroup className="voice-chat-utilities">
      {fastMove({ channel })}
      {massUtils({ channel })}
    </MenuGroup>
  );
};
