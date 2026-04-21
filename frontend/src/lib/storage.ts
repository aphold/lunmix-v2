import type { LunmixSettings } from '../types';

const STORAGE_KEY = 'lunmix-settings';
export const defaultSettings: LunmixSettings = {
  username: 'Lunmix User',
  theme: 'midnight',
  backgroundEnabled: true,
  engineSound: false
};

export function loadSettings(): LunmixSettings {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultSettings;
    return JSON.parse(raw) as LunmixSettings;
  } catch {
    return defaultSettings;
  }
}

export function saveSettings(settings: LunmixSettings) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
}
