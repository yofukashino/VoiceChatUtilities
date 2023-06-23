import { Injector, Logger, settings } from "replugged";
import { defaultSettings } from "./lib/consts";
import { registerSettings } from "./Components/Settings";
export const PluginInjector = new Injector();
export const { utils: PluginInjectorUtils } = PluginInjector;
export const PluginLogger = Logger.plugin("VoiceChatUtilities");
export const SettingValues = await settings.init("dev.tharki.VoiceChatUtilities", defaultSettings);
import { applyInjections } from "./patches/index";

export const start = (): void => {
  registerSettings();
  applyInjections();
};

export const stop = (): void => {
  PluginInjector.uninjectAll();
};


export { Settings } from "./Components/Settings";
