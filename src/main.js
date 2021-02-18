import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import AOS from 'aos';
import App from './App.vue';
import router from './router';
import store from './store';
import 'aos/dist/aos.css';

// Custom SCSS with Bootstrap
import './assets/scss/style.scss';

Vue.config.productionTip = false;

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

new Vue({
  created() {
    AOS.init();
  },
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
