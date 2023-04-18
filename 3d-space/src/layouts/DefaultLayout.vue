<template>
  <CastomHeader></CastomHeader>
  <div>
    <router-view />
  </div>
  <CastomFooter></CastomFooter>
</template>

<script>
import CastomHeader from '@/components/CastomHeader.vue';
import CastomFooter from '@/components/CastomFooter.vue';

export default {
  name: "DefaultLayout",
  components: {
    CastomHeader,
    CastomFooter,
  },
};
</script>