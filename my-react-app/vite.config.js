import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // This allows external access (any host)
    port: 5173, // Ensure it runs on the desired port
    strictPort: true, // Make sure the port is fixed
  },
});
