import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import wasm from "vite-plugin-wasm";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills(), wasm()],
  build: {
    target: "esnext", // Use 'esnext' to ensure support for the latest JavaScript features
  },
  esbuild: {
    target: "esnext", // Ensure that esbuild supports top-level await
  },
});
