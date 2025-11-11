import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default ({ mode }: { mode: string }) => {
  // Load env file based on `mode` (development/production)
  // @ts-expect-error - allow using process.cwd() in this config without adding @types/node
  const env = loadEnv(mode, process.cwd(), '')

  // Vite exposes env variables prefixed with VITE_ via import.meta.env
  const portFromEnv = env.VITE_DEV_SERVER_PORT || env.VITE_PORT || '7777'

  return defineConfig({
    plugins: [react()],
    server: {
      port: Number(portFromEnv),
    },
  })
}
