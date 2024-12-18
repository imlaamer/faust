import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from 'vite-plugin-svgr';//-

export default defineConfig({
  plugins: [react(), svgr()],

  // build:{
  //   outDir: "../wwwroot/client",
  //   emptyOutDir: true
  // },

  resolve: {
    alias: {
      assets: '/src/assets',
      styles: '/src/styles',
      pages: '/src/pages',
      components: '/src/components',
      helpers: '/src/helpers',
      reduxState: '/src/reduxState',
      service: '/src/services',

      base: '/',
      build: {
        sourcemap: true,
        rollupOptions: {
          external: ['@chatscope/chat-ui-kit-styles'],
        },
      },
    },
  },

  
});