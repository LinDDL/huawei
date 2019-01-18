import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "../static/libs/font-awesome-4.7.0/css/font-awesome.css";
import "../static/css/base.css";
import compontes from "./plugins/compontes"
import axios from "./plugins/axios/index"
import "../node_modules/swiper/dist/css/swiper.css"
import "../static/js/data.js"


import {formatDate} from "../static/js/data.js"

Vue.config.productionTip = false
Vue.use(compontes)
Vue.filter("ht",function(value){
  return value = "https://res.vmallres.com/pimages/".concat(value)
})

Vue.filter("formatDate",function(time){
  var date = new Date(time);
  return formatDate(date, 'yyyy-MM-dd hh:mm');
})
Vue.use(axios);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
