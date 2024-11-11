import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  manifest: {
    name: "Proper for YouTube",
    description: "A browser extension that enhances YouTube with proper features and improvements",
    permissions: ['activeTab'],
    host_permissions: ['*://*.youtube.com/*', '*://*.google.com/*']
  },
  extensionApi: 'chrome',
  modules: ['@wxt-dev/module-react'],
});
