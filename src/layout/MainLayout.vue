<template>
  <UiHeader />
  <div class="main-wrapper">
    <SideBar />
    <main class="main-block">
      <router-view />
    </main>
  </div>
</template>
<script>
import UiHeader from "../components/header/UiHeader.vue";
import SideBar from "../components/SideBar/SideBar.vue";

export default {
  components: {
    UiHeader,
    SideBar,
  },
  methods: {
    
  }
};
</script>
<style scoped lang="scss">
  .main-wrapper {
    display: flex;
    justify-content: space-between;
    height: 100vh;

    main {
      flex: 1 1 auto;
      padding: 20px;
    }
  }
</style>
