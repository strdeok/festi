import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  server: {
    proxy: {
      "/v1": {
        target: "http://localhost:8080",
        secure: false,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/v1/, ""),

      },
    },
  },
});
