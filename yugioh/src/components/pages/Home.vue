<template>
  <div class="flex-1 bg-cover bg-center background">
    <p class="font-light  p-40 justify-items-center text-white">
      Eu tenho que confiar no coração das cartas...
    </p>
    <p class="font-light  p-40  justify-items-center text-white"></p>
    <top-cards />
  </div>
</template>

<script>
import TopCards from '../TopCards.vue';
export default {
  name: 'HomeaA',
  components:{
    TopCards,
  }
};
</script>

<style>
.background {
  background-image: url('@/assets/exodia.png'); 
}
</style>
