export interface WebShortcut {
  id: string;
  label: string;
  description?: string;
  url: string;
  icon?: string;
}

export const webShortcuts: WebShortcut[] = [
  { id: 'discord', label: 'Discord', description: 'Chat and communities', url: 'https://discord.com/app', icon: '💬' },
  { id: 'youtube', label: 'YouTube', description: 'Video platform', url: 'https://youtube.com', icon: '📺' },
  { id: 'amazon', label: 'Amazon', description: 'Shopping', url: 'https://amazon.com', icon: '🛒' },
  { id: 'github', label: 'GitHub', description: 'Code hosting', url: 'https://github.com', icon: '💻' },
  { id: 'gmail', label: 'Gmail', description: 'Email', url: 'https://mail.google.com', icon: '📧' },
  { id: 'spotify', label: 'Spotify', description: 'Music', url: 'https://open.spotify.com', icon: '🎵' }
];