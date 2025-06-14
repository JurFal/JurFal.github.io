import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({

    base: '/index/',
    build: {
      outDir: 'docs'
    },
    plugins: [
        vue(),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    server: {
        // /** 设置 host: true 才可以使用 Network 的形式，以 IP 访问项目 */
        host: true, // host: "0.0.0.0"
        // /** 端口号 */
        // port: 3333,
        // /** 是否自动打开浏览器 */
        open: true,
        /** 跨域设置允许 */
        cors: true,
        /** 端口被占用时，是否直接退出 */
        strictPort: false,
        /** 接口代理 */
        /** proxy: {
            "/api/": {
                target: "http://127.0.0.1:8000",
                ws: true,
                // 是否允许跨域 
                changeOrigin: true,  // 是否改变域
                rewrite: (path) => path.replace(/^\/api/, ''),
            }
        },*/
    }
})