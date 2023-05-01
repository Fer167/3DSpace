import { createStore } from "vuex";

export default createStore({
  state: {
    login: true,
    activeProfileSection: "about_me",
    personData: {
      name: "Максим",
      short: "3D-визуализатор, профессионально занимаюсь созданием помещений, созданием реалистичных материалов, композиции кадра и освещением",
      link: "/maxim",
      login: "qwer",
      password: "qwer",
      avatar: "../assets/image/person/avatarDefault_example.jpg",
      privacy: "public",
      fullName: "Петров Максим Владиславович",
      address: "г. Москва",
      tel: "+7 (875) 555-75-75",
      proposedPosition: "3D-визуализатор, 3D-дизайнер, Архитектурный визуализатор",
      experience: "9 лет в сфере 3D-моделирования",
      schooling: "Чувашский государственный университет имени И.Н. Ульянова, 2014-2018 год",
      skills: "Профессионально занимаюсь созданием помещений, загрузками готовых моделей, созданием реалистичных материалов, композиции кадра и освещением",
      additional: "Я ответственный, общительный, стрессоустойчивый, коммуникабельный, честный",
    },
    models: [

    ],
  },
  getters: {
    login: state => {
      return state.login;
    },
    activeProfileSection: state => {
      return state.activeProfileSection;
    },
    personData: state => {
      return state.personData;
    },
  },
  mutations: {
    SET_login: (state, payload) => {
      state.login = payload;
    },
    SET_activeProfileSection: (state, payload) => {
      state.activeProfileSection = payload;
    },
    SET_personData: (state, payload) => {
      state.personData  = JSON.parse(JSON.stringify(payload));
    },
  },
  actions: {},
  modules: {},
});
