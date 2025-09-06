import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  const port = Number(env.VITE_PORT) || 3000
  const open = env.VITE_OPEN ? env.VITE_OPEN === 'true' : true
  const splitChunks = env.VITE_SPLIT_CHUNKS === 'true'

  const rollupOptions = splitChunks
    ? {
        output: {
          manualChunks: {
            vendor: ['vue'],
          },
        },
      }
    : {}

  return {
    plugins: [vue()],
    server: {
      port,
      open,
    },
    build: {
      outDir: 'dist',
      sourcemap: true,
      ...rollupOptions,
    },
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  }
})
