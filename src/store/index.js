import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    visGraph: null,
  },
  mutations: {
    setVisGraph(state, payload) {
      console.log(payload);
      console.log('new state:');
      state.visGraph = payload;
      console.log(state.visGraph);
    },
  },

});
