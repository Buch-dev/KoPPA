import { createStore } from "vuex";

const useStore = createStore({
  state: {
    user: "",
  },
  getters: {
    getUser(state) {
      return state.user;
    },
  },
  mutations: {
    addUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    addUser(context, payload) {
      context.commit("addUser", payload);
    },
  },
  modules: {},
});

export default useStore;
