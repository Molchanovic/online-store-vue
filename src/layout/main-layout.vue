<template>
  <UiHeader/>
  <main class="main-block">
    <router-view/>
  </main>
</template>
<script>
 import UiHeader from '../components/UiHeader.vue'
 import SideBar from '../components/SideBar.vue'

export default ({
 components: {
  UiHeader,
  SideBar
 }
})
</script>
