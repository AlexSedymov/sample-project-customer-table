import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    customers: [],
    newCustomer: [],
    newUserValidState: false
  },
  mutations: {
    newCustomer: state => state.newCustomer,

    customers(state, customers) {
      state.customers = customers;
    }
  },
  actions: {},
  modules: {}
});
