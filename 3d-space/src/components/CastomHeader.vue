<template>
  <div
    class="login-modal"
    @click.self="closeModal"
    v-if="isModalActive"
  >
    <LoginModal
      @modalEmit="closeModal"
    />
  </div>

  <div class="header__wrap"></div>
  <nav class="header">
    <router-link to="/">
      <img class="header__logo"
      src="../assets/image/logo/first.png"
      alt="Logo">
    </router-link>
    <router-link class="header__3d-models" to="/3DModels">
      3D-модели
    </router-link>
    <div class="header__search">
      <img class="header__search-icon" src="../assets/image/search.png">
      <p class="header__search-placeholder">
        Поиск
      </p>
    </div>
    <button
      class="header__login"
      @click="openModal"
    >
      Войти
    </button>
  </nav>
</template>

<script>
import LoginModal from "@/components/LoginModal.vue";

export default {
  name: "CastomHeader",
  components: {
    LoginModal,
  },
  data() {
    return {
      isModalActive: false,
    }
  },
  methods: {
    closeModal () {
      this.isModalActive = false
    },
    openModal () {
      this.isModalActive = true
    }
  }
};
</script>

<style scoped>
.login-modal{
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, .5);
}
.header__wrap {
  height: 50px;
}
.header {
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  width: 1280px;
  margin: auto;
  height: 50px;
}

.header__logo {
  height: 50px;
}

.header__3d-models {
  margin: 0 20px;
  /* padding: 0 20px; */
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 120px;
}

.header__search {
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  border: 2px solid #636363;
  border-radius: 8px;
  width: 100%;
  cursor: pointer;
}

.header__search-icon {
  height: 20px;
  margin: 3px 8px;
}

.header__search-placeholder {
  margin: 3px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #838383;
}

.header__login {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  padding-left: 20px;
  cursor: pointer;
}
</style>
