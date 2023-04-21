<template>
  <section class="person">
    <div class="person__img-wrap">
      <img class="person__img" src="../assets/image/person/avatarDefault.jpg">
    </div>
    <div>
      <p class="person__name">
        Имя
      </p>
      <p>
        3D-визуализатор, профессионально занимаюсь созданием помещений, загрузками готовых моделей, созданием реалистичных материалов, композиции кадра и освещением
      </p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
  },
  data() {
    return {

    }
  },
  methods: {

  }
};
</script>

<style scoped>
.person{
  width: 1280px;
  margin: 50px auto;
  display: flex;
  flex-direction: row;
}
.person__img-wrap {
  width: 200px;
  height: 200px;
  margin-right: 50px;
}
.person__img {
  width: 200px;
  height: 200px;
  border-radius: 50px;
  border: 1px solid #000;
}
.person__name {
  font-size: 24px;
  margin-bottom: 20px;
}
</style>
