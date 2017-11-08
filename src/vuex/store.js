import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    count: 1
}
const mutations = {
    add(state, n) {

        setTimeout(() => { state.count += n; }, 3000)
    },
    reduce(state) {
        state.count -= 1;
    }
}
const getters = {
    count: function (state) {
        return state.count += 100;
    }
}
const actions = {
    addAction(context, n) {
        setTimeout(() => { context.commit('add', n); }, 3000)

    },
    reduceAction({ commit }) {
        commit('reduce');
    }
}
export default new Vuex.Store({
    state, mutations, getters, actions
})