import Vue from 'vue'
import App from './App.vue'

import VueLazyload from 'vue-lazyload';

Vue.config.productionTip = false

Vue.use(VueLazyload, {
  preLoad: 2,
  lazyComponent: true,
  observer: true,
});

console.log("What's up! Welcome to the FightCamp Take Home Challenge.")

new Vue({
  render: h => h(App),
}).$mount('#app')
