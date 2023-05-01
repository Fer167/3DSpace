<template>
  <div
    v-if="isActiovModalDetails"
    class="modal"
    @click.self="closeDetailsModel"
  >
    <div class="modal__data">
      <div class="modal__model-data">
        <div class="modal__model">

        </div>
        <p class="modal__model-name">
          {{ activModel.name }}
        </p>
        <div class="modal__user">
          <div class="modal__model-avatar">
            <img src="" alt="">
          </div>
          <p class="modal__model-user">
          {{ activModel.user }}
          </p>
        </div>
        <p class="modal__model-description">
          {{ activModel.description }}
        </p>
        <p class="modal__model-date">
          {{ activModel.date }}
        </p>
      </div>
      <div class="modal__parameters">
        <p>
          Параметры
        </p>
      </div>
    </div>
  </div>

  <section class="my-works">
    <button
      v-for="(item, name, index) of this.$store.getters.models"
      :key="index"
      class="my-works__models"
      @click="openDetailsModel(item)"
    >
      <div class="my-works__canvas">
        
      </div>
      <div class="my-works__desc">
        <div>
          <img src="" alt="">
        </div>
        <p>
          {{ item.name }}
        </p>
      </div>
    </button>
  </section>
</template>

<script>
export default {
  props: {
  },
  data() {
    return {
      isActiovModalDetails: false,
      activModel: {},
    }
  },
  methods: {
    openDetailsModel (item) {
      this.activModel  = JSON.parse(JSON.stringify(item));
      this.isActiovModalDetails = true
      document.body.style.overflow = "hidden";
    },
    closeDetailsModel () {
      this.isActiovModalDetails = false
      document.body.style.overflow = "";
    },
  }
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgb(0, 0, 0, 0.4);
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal__data {
  width: 1200px;
  height: 90vh;;
  background-color: #fff;
  overflow: auto;
  display: flex;
  flex-direction: row;
}
.modal__model-data {
  width: 100%;
}
.modal__model {

}
.modal__model-name {
  font-size: 20px;
  margin: 20px;
}
.modal__model-avatar {

}
.modal__model-user {
  font-size: 20px;
}
.modal__model-description {
  margin: 20px;
}
.modal__model-date {
  margin: 20px;
}
.modal__user {
  display: flex;
  flex-direction: row;
  margin: 20px;
}
.modal__parameters {
  width: 300px;
  background-color: #f3f3f3;
  padding: 20px;
}
.my-works {
  width: 1320px;
  margin: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: relative;
  left: -20px;
}
.my-works__models {
  margin: 20px;
  min-width: 400px;
  height: 250px;
  border: 1px solid #000;
  box-shadow: 0px 0px 10px rgb(105, 105, 105);
  border-radius: 10px;
}
.my-works__canvas {
  height: 200px;
}
.works__desc {
  height: 50px;
  display: flex;
  flex-direction: row;

}
</style>
