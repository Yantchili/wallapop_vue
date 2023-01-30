<template>
  <div class="home">
    <div class="container mt-5 px-5">
      <CarouSel01></CarouSel01>
      <CarouSel02></CarouSel02>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CarouSel01 from "@/components/CarouSel01.vue"
import CarouSel02 from "@/components/CarouSel02.vue"
export default defineComponent({
  name: 'HomeView',
  components: {
    CarouSel01, CarouSel02
  },
});
</script>
