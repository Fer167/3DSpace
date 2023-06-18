<template>
  <div class="vacancies">
    <div class="vacancies__title">
      {{ activeVacanciesLocal.position }}
    </div>
    <p class="vacancies__name-company">
      {{ activeVacanciesLocal.name }} <span class="vacancies__adres"> - {{ activeVacanciesLocal.adres }}</span>
    </p>
    <hr class="vacancies__hr">
    <div class="vacancies__wrap">
      <div class="vacancies__data-desc">
        <div
          class="vacancies__desc"
          v-for="(item, name, index) of vacanciesText"
          :key="index"
        >
          {{ item }}
        </div>
      </div>
      <div>
        <div class="vacancies__param">
          <p class="vacancies__param-title">
            ТИП ВАКАНСИИ
          </p>
          <p class="vacancies__param-data">
            {{ activeVacanciesLocal.typeWork }}
          </p>
          <p class="vacancies__param-title">
            РАСПОЛОЖЕНИЕ ВАКАНСИИ
          </p>
          <p class="vacancies__param-data">
            {{ activeVacanciesLocal.adres }}
          </p>
          <p class="vacancies__param-title">
            ТРЕБУЕМЫЙ ОПЫТ РАБОТЫ
          </p>
          <p class="vacancies__param-data">
            {{ activeVacanciesLocal.experience }}
          </p>
          <p class="vacancies__param-title">
            ДАТА ПУБЛИКАЦИИ
          </p>
          <p class="vacancies__param-data">
            {{ activeVacanciesLocal.date }}
          </p>
        </div>
        <button
          class="add-model__btn-submit"
          type="button"
          @click="activeVacancies"
        >
          <span v-if="isActive">Откликнуться</span>
          <span v-else>Вы откликнулись на заявку</span>
        </button>
      </div>
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
      activeVacanciesLocal: {},
      vacanciesText: [],
      isActive: true,
    }
  },
  mounted () {
    this.activeVacanciesLocal = this.$store.getters.activeVacancies
    this.vacanciesText = this.activeVacanciesLocal.fullDesc.split('\n')
  },
  methods: {
    activeVacancies () {
      this.isActive = false
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
  font-size: 40px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 100px;
}
.vacancies__name-company {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 50px;
}
.vacancies__adres {
  margin-left: 6px;
  color: #949494;
}
.vacancies__wrap {
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  width: 100%;
}
.vacancies__param {
  border: 1px solid #cacaca;
  border-radius: 5px;
  width: 98%;
  margin: 1%;
}
.vacancies__param-title {
  color: #696969;
  font-size: 12px;
  margin: 10px;
  font-weight: bold;
}
.vacancies__param-data {
  margin-left: 10px;
  font-weight: bold;
  margin-bottom: 30px;

}
.vacancies__hr {
  border: 1px solid #ebebeb;
}
.vacancies__data-desc {
  width: 70%;
  padding-right: 30px;
}
.vacancies__desc {
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
}
.add-model__btn-submit {
  border-radius: 10px;
  width: 260px;
  height: 40px;
  border: 3px solid #000;
  margin: auto;
  margin-top: 50px;
}
.add-model__btn-submit:hover {
  border: 3px solid #35B7FF;
  color: #2b82b1;
}
</style>
