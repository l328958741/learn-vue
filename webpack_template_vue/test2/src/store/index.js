import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true,
  state: {
    arr: [],
  },
  mutations: {
    setArr(state, arg){
        state.arr = arg;

        // arg.forEach(item => {
        //     state.arr.push(item);
        // });

        // console.log(state.arr);
    }
  },
  actions: {
    async loadArr({commit}, arg){
        let arr = await (await fetch('http://localhost:8081/list')).json();

        commit('setArr', arr);
    }
  },
  getters:{
    async arr(state){
        if(state.arr.length==0){
            store.dispatch('loadArr');
        }

        return state.arr;
        
    }
  }
});

export default store;

