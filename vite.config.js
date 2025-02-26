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
        changeOrigin: true, // CORS 문제 해결을 위한 설정
        rewrite: (path) => path.replace(/^\/api/, ""), // `/api`를 제거해서 실제 엔드포인트로 보냄
      },
    },
  },
});
