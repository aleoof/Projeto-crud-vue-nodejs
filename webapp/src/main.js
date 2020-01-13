import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import routes from './routes/routes'

import './../node_modules/bulma/css/bulma.css';

Vue.config.productionTip = false
Vue.use(VueRouter)

var router = new VueRouter({
  routes: routes
})

router.beforeEach((to, from, next) => {

if(!localStorage.getItem('userId') && to.name !== 'login'){
  next({name: 'login'})
}else{
  next()
}


})

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
