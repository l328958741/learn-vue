// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'

Vue.config.productionTip = false

//这里注册后可全局使用axios,用法是this.axios而不是axios了
Vue.prototype.axios = axios;

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true,
  state: {
    count: 0
  },
  mutations: {
    addOne(state, arg){
      state.count+=arg;
    },
    minOne(state, arg){
      state.count-=arg;
    }
  },
  actions: {
    actaddOne({commit}, arg){
      commit('addOne', 12);
    },
    actminOne({commit}, arg){
      commit('minOne', 2);
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  store,
  components: { App },
  template: '<App/>'
})
