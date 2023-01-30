<template>
  <NavBar />
  <router-view />
</template>
<script lang="ts">
import NavBar from './components/NavBar.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  name: "AppComponent",
  components: {
    NavBar,
  }
})
</script>
<style>

</style>
