// vite.config.js

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vitePluginSingleSpa from "vite-plugin-single-spa";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    vue(),
    vitePluginSingleSpa({
      serverPort: 3005,
      spaEntryPoints: "src/main.tsx",
    }),
  ],
});
