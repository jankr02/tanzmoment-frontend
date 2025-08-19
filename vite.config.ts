import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,  // Standardport für den Entwicklungsserver
    open: true   // Öffnet den Browser beim Starten des Servers
  },
  build: {
    outDir: 'dist',  // Der Ordner für den Build-Ausgabe
    sourcemap: true, // Fügt Sourcemaps hinzu für Debugging
  },
  resolve: {
    alias: {
      '@': '/src'  // Alias für den src-Ordner
    }
  }
});