import path from 'path';

import vuePlugin from '@vitejs/plugin-vue2';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ command, mode }) => {
    process.env = {...process.env, ...loadEnv(mode, process.cwd())};

    return {
        plugins: [
            vuePlugin(),
        ],
        resolve: {
            alias: {
                vue: path.resolve(__dirname, './node_modules/vue/dist/vue.js'),
                'env': path.resolve(__dirname, './node_modules/dotenv/')
            },
        },
        define: {
            VITE_APP_VER: JSON.stringify(process.env.npm_package_version),
            VITE_SOME_KEY: '123'
        },
    };
});
