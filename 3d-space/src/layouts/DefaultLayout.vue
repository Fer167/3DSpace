<template>
  <CastomHeader></CastomHeader>
  <div>
    <router-view />
  </div>
  <CastomFooter></CastomFooter>
</template>

<script>
import CastomHeader from '@/components/CastomHeader.vue';

export default {
  name: "DefaultLayout",
  components: {
    CastomHeader,
  },
};
</script>