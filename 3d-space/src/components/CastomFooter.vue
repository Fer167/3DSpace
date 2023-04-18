<template>
  <!-- <div class="footer__wrap"></div> -->
  <footer class="footer">
    <div class="footer__data">
      <p class="footer__copyright">
        © 3D Space, 2023
      </p>
      <p class="footer__copyright">
        Форма обратной связи
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "CastomFooter",
};
</script>

<style scoped>
/* .footer__wrap{
  height: 50px;
  background-color: rgb(0, 0, 0,0);
} */
.footer {
  display: flex;
  flex-direction: row;
  height: 50px;
  width: 100%;
  background-color: #242424;
}
.footer__data {
  width: 1280px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.footer__copyright {
  font-size: 12px;
  color: #dddddd;
  margin: 0;
  display: flex;
  align-items: center;
  height: 100%;
}
</style>
