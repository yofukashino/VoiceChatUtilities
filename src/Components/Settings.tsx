import { components, util } from "replugged";
import { PluginLogger, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import * as Types from "../types";
const { SliderItem, SwitchItem } = components;
export const registerSettings = (): void => {
  for (const key in defaultSettings) {
    if (SettingValues.has(key as keyof Types.Settings)) return;
    PluginLogger.log(`Adding new setting ${key} with value ${defaultSettings[key]}.`);
    SettingValues.set(key as keyof Types.Settings, defaultSettings[key]);
  }
};

export const Settings = () => {
  return (
    <div>
      <SliderItem
        {...{
          note: "Making it 0 makes all of the actions happen simultaneously. It might be cool, but can get you banned due to selfbotting. Higher value means lower risk of getting banned.",
          minValue: 0,
          maxValue: 1,
          onValueRender: (value) => {
            value *= 60000;
            const seconds = value / 1000;
            const minutes = value / 1000 / 60;
            return value < 60000 ? `${seconds.toFixed(0)} secs` : `${minutes.toFixed(0)} min`;
          },
          ...util.useSetting(SettingValues, "BulkActionsdelay", defaultSettings.BulkActionsdelay),
        }}>
        Bulk actions delay
      </SliderItem>
      <SwitchItem
        {...{
          note: "Whether or not to show the button to copy the user IDs of all participants.",
          ...util.useSetting(SettingValues, "voicechatcopyids", defaultSettings.voicechatcopyids),
        }}>
        Show option to copy all user IDs
      </SwitchItem>
      <SwitchItem
        {...{
          note: "Whether to make the copied IDs directly mentions by default.",
          ...util.useSetting(
            SettingValues,
            "voicechatcopymentions",
            defaultSettings.voicechatcopymentions,
          ),
        }}>
        Copy all user IDs as mentions
      </SwitchItem>
      <SwitchItem
        {...{
          note: "Whether or not to show an array of options that allow you to execute a task on everyone in the voice channel except yourself.",
          ...util.useSetting(SettingValues, "exceptSelf", defaultSettings.exceptSelf),
        }}>
        Except Self
      </SwitchItem>
      <SwitchItem
        {...{
          note: "Whether or not to show an option to move to the selected voice channel from your current voice channel.",
          ...util.useSetting(SettingValues, "fastMove", defaultSettings.fastMove),
        }}>
        Fast Move
      </SwitchItem>
    </div>
  );
};
