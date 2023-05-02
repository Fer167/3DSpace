<template>
  <div class="all-models">
    <div class="all-models__title">
      3D Модели всех пользователей
    </div>
    <MyWorks></MyWorks> 
  </div>
</template>

<script>
import MyWorks from '@/components/MyWorks.vue';

export default {
  props: {
  },
  components: {
    MyWorks,
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
.all-models {
  width: 1280px;
  margin: auto;
}
.all-models__title {
  margin-top: 50px;
  margin-bottom: 10px;
  font-size: 20px;
}
</style>
