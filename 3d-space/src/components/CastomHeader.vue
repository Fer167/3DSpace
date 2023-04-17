<template>
  
  <nav class="header">
    <a href="../views/MainPage.vue">
      <img class="header-logo"
      src="../assets/image/logo/first.png"
      alt="Logo">
    </a>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
</template>

<script>
export default {
  name: "CastomHeader",
};
</script>

<style scoped>

</style>
