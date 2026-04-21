import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { Plugin } from 'vite';

const ignoreThirdPartyImports: Plugin = {
  name: 'ignore-third-party-imports',
  apply: 'serve',
  resolveId(id) {
    // External all imports thatdon't exist and are from third-party HTML files
    if (id === 'sounds.js' || 
        id === 'main.js' || 
        id === 'ease.js' ||
        id === 'bundle.js' ||
        id.startsWith('assets/') ||
        id.startsWith('scripts/') ||
        id.startsWith('bfdi/')) {
      return { id, external: true };
    }
  }
};

export default defineConfig({
  plugins: [ignoreThirdPartyImports, react()],
  server: {
    port: 5173,
    proxy: {
      '/api': 'http://localhost:3000',
      '/proxy': 'http://localhost:3000'
    },
    fs: {
      strict: false
    }
  },
  assetsInclude: ['**/*.html'],
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === 'UNRESOLVED_IMPORT') {
          return;
        }
        warn(warning);
      }
    }
  }
});
