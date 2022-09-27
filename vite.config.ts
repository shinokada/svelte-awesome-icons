import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
  plugins: [sveltekit()],
  server: {
    port: 8001,
    strictPort: false
  },
  preview: {
    port: 9002,
    strictPort: false
  }
};

export default config;
