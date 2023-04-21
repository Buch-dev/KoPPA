import { createStore } from "vuex";

const useStore = createStore({
  state: {
    user: "",
    signedIn: false,
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    getSignedIn(state) {
      return state.signedIn;
    },
  },
  mutations: {
    addUser(state, payload) {
      state.signedIn = true;
      state.user = payload;

      console.log(state.signedIn);
    },
    signOut(state) {
      state.signedIn = false;
      localStorage.removeItem("koppa-token");
    },
  },
  actions: {
    addUser(context, payload) {
      context.commit("addUser", payload);
    },
    signOut(context) {
      context.commit("signOut");
    },
  },
  modules: {},
});

export default useStore;
