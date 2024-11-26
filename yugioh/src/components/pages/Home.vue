<template>
  <div class="flex-1 bg-cover bg-center background">
    <p class="font-mono justify-items-center">Eu tenho que confiar no coração das cartas...</p>
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
