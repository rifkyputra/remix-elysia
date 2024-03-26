import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

import {remixDevTools} from "remix-development-tools"
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    remixDevTools(),
    remix({ ssr: false }), 
    tsconfigPaths(),
    VitePWA({ registerType: 'autoUpdate' })
  
  ],
});
