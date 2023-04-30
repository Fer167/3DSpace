import { createStore } from "vuex";

export default createStore({
  state: {
    activeProfileSection: "about_me",
  },
  getters: {
    activeProfileSection: state => {
      return state.activeProfileSection;
    },
  },
  mutations: {
    SET_activeProfileSection: (state, payload) => {
      state.activeProfileSection = payload;
    },
  },
  actions: {},
  modules: {},
});
