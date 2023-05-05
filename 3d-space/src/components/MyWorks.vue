<template>
  <div
    v-if="isActiovModalDetails"
    class="modal"
    @click.self="closeDetailsModel"
  >
    <div class="modal__data">
      <div class="modal__model-data">
        <div class="modal__model">
          <A3DModelDetail
            :name="activModel.model"
            :slice="activModel.scaleModel"
          />
        </div>
        <div class="modal__model-wrap1"></div>
        <div class="modal__model-wrap2"></div>
        <div class="modal__model-wrap3">
          <p class="modal__model-name">
            {{ activModel.name }}
          </p>
          <div class="modal__user">
            <div class="modal__model-avatar">
              <router-link to="/MyProfile">
                <img
                  @mouseenter="hoverClass='modal__model-link_active'"
                  @mouseleave="hoverClass=''"
                  class="modal__model-img"
                  :src="avatarModelLink"
                  alt=""
                >
              </router-link>
            </div>
            <router-link to="/MyProfile">
              <p
                @mouseenter="hoverClass='modal__model-link_active'"
                @mouseleave="hoverClass=''"
                :class="hoverClass"
                class="modal__model-user"
              >
              {{ $store.getters.personData.name }}
              </p>
            </router-link>
          </div>
          <p class="modal__model-description">
            {{ activModel.description }}
          </p>
          <p class="modal__model-date">
            {{ activModel.date }}
          </p>
        </div>
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
        <A3DModelCover
          :name="item.model"
          :slice="item.scaleModel"
        />
      </div>
      <div class="my-works__desc">
        <div>
          <img
            class="my-works__avatar"
            :src="avatarModelLink"
            alt=""
          >
        </div>
        <p>
          {{ item.name }}
        </p>
      </div>
    </button>
  </section>
</template>

<script>
import A3DModelCover from './UIKIt/A3DModelCover.vue';
import A3DModelDetail from './UIKIt/A3DModelDetail.vue';

export default {
  props: {
  },
  components: {
    A3DModelCover,
    A3DModelDetail,
  },
  data() {
    return {
      avatarModelLink: require('../assets/image/person/' + this.$store.getters.personData.avatar),
      isActiovModalDetails: false,
      activModel: {},
      hoverClass: "",
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
  height: 96vh;;
  background-color: #fff;
  overflow: auto;
  display: flex;
  flex-direction: row;
}
.modal__model-data {
  width: 900px;
}
.modal__model {
  position: absolute;
  top: -200px;
}
.modal__model-name {
  font-size: 20px;
  margin: 20px;
}
.modal__model-avatar {
  height: 40px;
  margin-right: 20px;
}
.modal__model-wrap1 {
  height: 500px;
}
.modal__model-wrap2 {
  height: 200px;
  width: 900px;
  position: absolute;
  background-color: #fff;
}
.modal__model-wrap3 {
  position: relative;
  z-index: 1;
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
  align-items: center;
}
.modal__model-img {
  width: 40px;
  height: 40px;
}
.modal__parameters {
  box-sizing: border-box;
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
  /* height: 250px; */
  border: 1px solid #000;
  box-shadow: 0px 0px 10px rgb(105, 105, 105);
  border-radius: 10px;
}
.my-works__canvas {
  height: 298px;
}
.my-works__desc {
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.my-works__avatar {
  margin: 0 14px;
  width: 30px;
  height: 30px;
  border: 1px solid #747474;
}
.modal__model-link_active {
  color: #1CAAD9;
}

</style>
