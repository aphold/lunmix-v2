import type { ThemeKey } from '../types';

export const themes: Record<ThemeKey, { name: string; vars: Record<string, string> }> = {
  midnight: {
    name: 'Midnight',
    vars: {
      '--bg': '#020617',
      '--panel': 'rgba(15, 23, 42, 0.92)',
      '--surface': 'rgba(30, 41, 59, 0.95)',
      '--accent': '#60a5fa',
      '--accent-strong': '#3b82f6',
      '--text': '#e2e8f0'
    }
  },
  aurora: {
    name: 'Aurora',
    vars: {
      '--bg': '#04111b',
      '--panel': 'rgba(8, 26, 42, 0.9)',
      '--surface': 'rgba(14, 36, 63, 0.88)',
      '--accent': '#7dd3fc',
      '--accent-strong': '#22d3ee',
      '--text': '#e0f2fe'
    }
  },
  sunrise: {
    name: 'Sunrise',
    vars: {
      '--bg': '#171117',
      '--panel': 'rgba(43, 26, 44, 0.92)',
      '--surface': 'rgba(58, 36, 61, 0.87)',
      '--accent': '#fb7185',
      '--accent-strong': '#f43f5e',
      '--text': '#f8fafc'
    }
  },
  forest: {
    name: 'Forest',
    vars: {
      '--bg': '#081509',
      '--panel': 'rgba(8, 25, 17, 0.92)',
      '--surface': 'rgba(12, 34, 22, 0.88)',
      '--accent': '#4ade80',
      '--accent-strong': '#22c55e',
      '--text': '#d9f99d'
    }
  },
  nebula: {
    name: 'Nebula',
    vars: {
      '--bg': '#09081a',
      '--panel': 'rgba(19, 16, 42, 0.92)',
      '--surface': 'rgba(28, 26, 58, 0.88)',
      '--accent': '#c084fc',
      '--accent-strong': '#a855f7',
      '--text': '#e9d5ff'
    }
  }
};

export const internalRoutes = ['lunmix://home', 'lunmix://apps', 'lunmix://games', 'lunmix://settings'];
