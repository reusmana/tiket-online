import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  // base: "/tiket-online/",
  plugins: [react()],
  server: {
    allowedHosts: ["93c6-182-253-58-149.ngrok-free.app"],
  },
});
