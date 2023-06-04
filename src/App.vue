<template>
  <div class="wrapper">
    <component :is="getLayout">
      <router-view />
    </component>
  </div>
</template>
<script>
import EmptyLayout from "@/layout/EmptyLayout.vue";
import MainLayout from "@/layout/MainLayout.vue";
export default {
  components: {
    EmptyLayout,
    MainLayout,
  },
  computed: {
    getLayout() {
      return (this.$route.meta.layout || "empty") + "-layout";
    },
  },
};
</script>
<style lang="scss">
body {
  font-family: SourceSansPro;
  font-weight: 700;
}
</style>
