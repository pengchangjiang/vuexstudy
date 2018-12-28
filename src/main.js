// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import VueSocketio from 'vue-socket.io';
import io from 'socket.io-client';

const connection = io('http://172.16.106.241:7001/geoc', {
  path: '/geoc'
})

Vue.use(new VueSocketio({
  debug: true,
  connection: connection
}));

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
