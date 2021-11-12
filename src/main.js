import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-theme-dark';
import App from './App.vue'

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
