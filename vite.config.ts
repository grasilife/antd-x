import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
export default defineConfig({
  plugins: [vue(), dts({ tsconfigPath: "./tsconfig.app.json" })],
});
