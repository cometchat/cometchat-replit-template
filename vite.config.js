import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// host: "0.0.0.0" is required for Replit's preview proxy to reach the dev server.
// port 5000 matches Replit's default Run convention for Node projects, so the
// .replit [[ports]] mapping (5000 → 80) works on first Run without manual config.
// allowedHosts covers the *.replit.dev preview domain Replit assigns to each Repl.
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 5000,
    strictPort: true,
    allowedHosts: [".replit.dev", ".repl.co"],
  },
  preview: {
    host: "0.0.0.0",
    port: 5000,
    allowedHosts: [".replit.dev", ".repl.co"],
  },
});
