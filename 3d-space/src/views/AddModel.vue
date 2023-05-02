<template>
  <section class="add-model">
    <form class="add-model__form">

    </form>
    <aside>
      <div class="add-model__prompt">
        <p class="add-model__prompt-title">
          Внимание!
        </p>
        <p>
          Присылайте только ваши модели. Чужие и библиотечные модели будут удаляться, а вам закроют доступ на сайт
        </p>
        <p>
          Поддерживаемые расширения: .gltf
        </p>
        <div class="add-model__wrap-submit">
          <button
            :class="true ? 'add-model__btn-submit' : 'add-model__submit-disabled'"
            type="button"
            @click="submitPersonData"
          >
            Отправить на модерацию
          </button>
        </div>
      </div>
    </aside>
  </section>
</template>

<script>
import AInput from '@/components/UIKIt/AInput.vue';
import ATextarea from '@/components/UIKIt/ATextarea.vue';

export default {
  props: {
  },
  components: {
    AInput,
    ATextarea,
  },
  data() {
    return {
    }
  },
  mounted () {
  },
  methods: {
    submitPersonData () {
      console.log(123)
    }
  }
};
</script>

<style scoped>
.add-model {
  width: 1280px;
  margin: auto;
  display: flex;
  flex-direction: row;
  margin-top: 50px;
}
.add-model__form {
  margin-right: 10px;
  width: 800px;
}
button {
  border: 1px solid #000;
  border-radius: 10px;
  width: 260px;
  height: 40px;
  margin-top: 10px;
}
.add-model__prompt {
  position: fixed;
  height: 400px;
  width: 480px;
  padding: 40px;
  color: #868686;
  box-sizing: border-box;
}
.add-model__prompt-title{
  font-size: 18px;
}
p {
  margin: 10px 0;
}
.add-model__wrap-submit {
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
}
.add-model__btn-submit {
  border: 3px solid #000;
  margin: auto;
}
.add-model__btn-submit:hover {
  border: 3px solid #35B7FF;
  color: #2b82b1;
}
.add-model__submit-disabled {
  cursor: auto;
  margin: auto;
  opacity: 0.3;
}
</style>
