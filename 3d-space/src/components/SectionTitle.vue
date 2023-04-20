<template>
  <div class="title__fon"></div>
  <section class="title">
    <aside class="title__information">
      <div class="title__wrap-description">
        <div class="title__black-box"></div>
        <p class="title__text">
          3D Space - это веб-приложение по размещению своего портфолио на тему 3D-моделирования для работодателей
        </p>
      </div>
      <div>
        <p>
          {{ sliderData[0] }}
        </p>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </aside>
    <div>

    </div>
  </section>
</template>

<script>
export default {
  props: {
  },
  data() {
    return {
      sliderData: [
        "Храните свои работы",
        "Просматривайте в 3D-проекции",
        "Делитесь своими работами с другими",
        "Создайте резюме с портфолио, которое заинтересует компании",
        "Ищите работников для своей компании",
      ]
    }
  },
  computed: {

  },
  methods: {

  }
};
</script>

<style scoped>
.title__fon {

}
.title {
  width: 1280px;
  margin: auto;
  display: flex;
  flex-direction: row;
  margin-top: 100px;
}
.title__information {
  width: 50%;
}
.title__wrap-description {
  display: flex;
  flex-direction: row;

}
.title__black-box {
  width: 10px;
  height: 200px;
  background-color: #000;
}
.title__text {
  font-size: 18px;
  margin: auto 30px;
  width: 630px;
}
</style>
