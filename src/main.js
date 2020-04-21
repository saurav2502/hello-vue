// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import Posts from './components/Posts'
import Contact from './components/Contact'
import Home from './components/Home'
import VueRouter from "vue-router"

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {
    path: '/post', component: Posts
  },
  {
    path: '/contact', component: Contact
  },
  {
    path: '/home', component: Home
  }
];
const router = new VueRouter({routes: routes})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  routes,
  components: {App},
  template: '<App/>'
})
