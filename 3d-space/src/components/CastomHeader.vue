<template>
  <div class="header__wrap-height"></div>

  <div
    class="login-modal"
    @click.self="closeModal"
    v-if="isModalActive"
  >
    <LoginModal
      @modalEmit="closeModal"
    />
  </div>

  <div class="header__wrap">
    <nav class="header">
      <div
        v-if="isMenuActive"
        class="header__menu"
      >
        <p class="header__menu-text">
          <router-link class="header__menu-link" to="/MyProfile">
            Имя
          </router-link>
        </p>
        <hr class="header__hr">
        <p class="header__menu-text">
          <router-link class="header__menu-link" to="/MyProfile">
            Мой профиль
          </router-link>
        </p>
        <p class="header__menu-text">
          <router-link class="header__menu-link" to="/MyProfile">
            Мои работы
          </router-link>
        </p>
        <hr class="header__hr">
        <p class="header__menu-text">
          <router-link class="header__menu-link" to="/3DModels">
            Редактировать профиль
          </router-link>
        </p>
        <p class="header__menu-text">
          <router-link class="header__menu-link" to="/3DModels">
            Загрузить работу
          </router-link>
        </p>
        <hr class="header__hr">
        <p class="header__menu-text">
          <router-link class="header__menu-link" to="/3DModels">
            Выйти
          </router-link>
        </p>
      </div>

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
      <button v-if="!login"
        class="header__login"
        @click="openModal"
      >
        Войти
      </button>
      <button v-if="login"
        class="header__login"
        @click="openMenu"
      >
        <img class="header__avatar" src="../assets/image/person/avatarDefault.jpg">
      </button>
    </nav>
  </div>
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
      isMenuActive: false,
      login: true,
      isModalActive: false,
      sdf: 6,
    }
  },
  mounted () {
    window.addEventListener('scroll', this.amimationFomOpacity);
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.amimationFomOpacity);
    document.removeEventListener("click", this.closeManu);
  },
  methods: {
    amimationFomOpacity () {
      window.pageYOffset > 100 ? document.querySelector(".header__wrap").style.backgroundColor = "#fff" : document.querySelector(".header__wrap").style.backgroundColor = "";
    },
    closeModal () {
      this.isModalActive = false
      document.body.style.overflow = "";
    },
    openModal () {
      this.isModalActive = true 
      document.body.style.overflow = "hidden";
    },
    openMenu () {
      this.isMenuActive = true;
      setTimeout(() => {
        document.addEventListener("click", this.closeManu);
      }, 1);
    },
    closeManu (event) {
      // if (event.target.classList[0] !== "header__hr" || event.target.classList[0] != "header__menu" || event.target.classList[0] != "header__avatar") {
        // console.log(event.target.classList[0])
        this.isMenuActive = false;
        document.removeEventListener("click", this.closeManu);
      // }
    },
  }
};
</script>

<style scoped>
.header__wrap-height {
  height: 50px;
}
.header__hr {
  margin: 0;
  padding: 0;
  border: 0.5px solid #525252;
  margin: 5px 0;
}
.login-modal{
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, .5);
}
.header__wrap {
  position: fixed;
  top: 0;
  height: 50px;
  width: 100vw;
  transition: background-color 0.5s;
}
.header__menu {
  padding: 5px;
  color: #FFFFFF;
  position: absolute;
  left: auto;
  right: 0;
  top: 50px;
  margin: auto;
  width: 200px;
  background-color: #1E1E1E;
}
.header__menu-text {
  font-size: 14px;
  padding: 8px;
  cursor: pointer;
}
.header__menu-link {
  color: #FFFFFF;
}
.header {
  display: flex;
  flex-direction: row;
  width: 1280px;
  margin: auto;
  height: 50px;
  position: relative;
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
  background-color: rgb(0, 0, 0, .0);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  padding-left: 20px;
  cursor: pointer;
}
.header__avatar {
  width: 40px;
  border: 1px solid #000;

}
</style>
