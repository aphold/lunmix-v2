export type ThemeKey = 'midnight' | 'aurora' | 'sunrise' | 'forest' | 'nebula';

export interface LunmixSettings {
  username: string;
  theme: ThemeKey;
  backgroundEnabled: boolean;
  engineSound: boolean;
}

export interface WindowDefinition {
  id: string;
  title: string;
  app: string;
  x: number;
  y: number;
  width: number;
  height: number;
  isOpen: boolean;
  minimized: boolean;
}
