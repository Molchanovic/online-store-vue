<template>
  <div class="sidebar">
    <nav class="sidebar-nav">
      <router-link class="sidebar-link" v-for="link of links" :key="link.name" :to="link.href">{{link.name}}</router-link>
    </nav>
  </div>
</template>
<script setup>
import {ref} from 'vue'

const links = ref([
  {name: 'Button', href: '/button'},
  {name: 'Select', href: '/select'},
])
</script>
<style src="./style.scss" scoped lang="scss"></style>