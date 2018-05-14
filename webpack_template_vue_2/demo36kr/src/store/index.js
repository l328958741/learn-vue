import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    strict: true,
    state:{
        article_list: [],
        cur_page: 0
    },
    mutations: {
        appendArticle(state, arg){
            state.article_list = state.article_list.concat(arg);
        },
        addPage(state){
            state.cur_page++;
        }
    },
    actions: {
        async loadOneMorePage({state, commit}, arg){
            let dates = await (await fetch(`http://localhost:8090/list?page=${state.cur_page}`)).json();

            commit('appendArticle', dates);
            commit('addPage');
        }
    },
    getters: {
        getListData(state){
            if(state.cur_page == 0){
                store.dispatch('loadOneMorePage');
            }

            return state.article_list;
        }
    }
});

export default store;