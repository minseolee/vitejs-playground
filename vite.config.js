import path from 'path';

import vuePlugin from '@vitejs/plugin-vue2';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ command, mode }) => {
    const env = {...process.env, ...loadEnv(mode, process.cwd())};
    const meta = import.meta.env;

    console.log('env', env);
    console.log('meta', meta);

    return {
        plugins: [
            vuePlugin(),
        ],
        resolve: {
            alias: {
                vue: path.resolve(__dirname, './node_modules/vue/dist/vue.js'),
            },
        },
        define: {
            VITE_PROCESS: JSON.stringify(env),
            VITE_META: JSON.stringify(meta),
            VITE_SOME_KEY: '123'
        },
    };
});
