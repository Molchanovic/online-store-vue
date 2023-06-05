<template>
  <UiHeader />
  <SideBar />
  <main class="main-block">
    <router-view />
  </main>
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
