import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  fullyParallel: true,
  webServer: {
    command: 'npm run build && npm run preview',
    timeout: 600 * 1000,
    port: 4173
  },
  testDir: 'tests',
  testMatch: /(.+\.)?(test|spec)\.[jt]s/
};

export default config;
