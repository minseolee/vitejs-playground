import Vue from 'vue';
import App from './App.vue';


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
