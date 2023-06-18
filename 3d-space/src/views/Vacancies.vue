<template>
  <div class="vacancies">
    <div class="vacancies__title">
      Список вакансий
    </div>
    <div class="vacancies__data">
      <router-link
        class="vacancies__item"
        v-for="(item, name, index) of vacanciesLocal"
        :key="index"
        @click="activeVacancies(item)"
        to="/VacanciesDetail"
      >
        <p  class="vacancies__name">
          {{ item.name }}
        </p>
        <p  class="vacancies__adres">
          {{ item.adres }}
        </p>
        <p  class="vacancies__position">
          {{ item.position }}
        </p>
        <p  class="vacancies__description">
          {{ item.description }}
        </p>
        <p  class="vacancies__date">
          {{ item.date }}
        </p>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  props: {
  },
  components: {
  },
  data() {
    return {
      vacanciesLocal: [],
    }
  },
  mounted () {
    this.vacanciesLocal = this.$store.getters.vacanciesData
  },
  methods: {
    activeVacancies (val) {
      this.$store.commit('SET_activeVacancies', val);
    }
  }
};
</script>

<style scoped>
.vacancies {
  width: 1280px;
  margin: auto;
}
.vacancies__title {
  margin-top: 50px;
  margin-bottom: 10px;
  font-size: 20px;
}
.vacancies__data {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 -10px;
}
.vacancies__item {
  width: 411px;
  height: 200px;
  border: 1px solid #999999;
  margin: 10px;
  border-radius: 10px;
  cursor: pointer;
  background-color: #f7f7f7;
  position: relative;
}
.vacancies__item:hover {
  box-shadow: 0px 0px 10px rgb(105, 105, 105);
}
.vacancies__name {
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 20px;

}
.vacancies__adres {
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  color: #696969;
  font-size: 14px;
}
.vacancies__position {
  padding-left: 20px;
  padding-right: 20px;
  font-size: 18px;
  font-weight: bold;
  padding-bottom: 5px;
}
.vacancies__description {
  padding-left: 20px;
  padding-right: 20px;
  font-size: 14px;
}
.vacancies__date {
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: #696969;
  font-size: 14px;
}
</style>
