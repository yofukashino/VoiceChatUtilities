import { Injector, Logger, settings } from "replugged";
import { defaultSettings } from "./lib/consts";

export const PluginInjector = new Injector();
export const { utils: PluginInjectorUtils } = PluginInjector;
export const PluginLogger = Logger.plugin("VoiceChatUtilities");
export const SettingValues = await settings.init("dev.tharki.VoiceChatUtilities", defaultSettings);

import Settings from "./Components/Settings";
import Injections from "./patches/index";

export const start = (): void => {
  Settings.registerSettings();
  Injections.applyInjections();
};

export const stop = (): void => {
  PluginInjector.uninjectAll();
};

export { Settings } from "./Components/Settings";
