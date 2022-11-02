import Vue from 'vue';

import App from './App.vue';

/** ********** SET VUE PLUGINS ************** */

Vue.config.productionTip = import.meta.env.DEV;

/** ********** INITIALIZE ************** */
(async () => {
    new Vue({
        el: '#app',
        components: {
            App,
        },
        template: '<App/>',
    });
})();

console.log('Vite Attached');
console.log('env: ', import.meta.env);
console.log('ver: ', import.meta.env.VITE_APP_VER);
console.log('main.ts process.env: ', process.env);
