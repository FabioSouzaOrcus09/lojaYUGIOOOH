<template>
  <div 
    id="sidebar" 
    class="absolute top-0 left-0 flex flex-col items-center gap-16 w-20
     text-white p-4 bg-white/30 backdrop-blur-' h-full "
  >
    <img src="@/assets/icon.png" alt="icon" class=" flex w-32 h-10 "> 
    <p class="font-light hover:font-semibold -rotate-90">Home</p>
    <p class="font-light hover:font-semibold -rotate-90">Decks</p>
    <p class="font-light hover:font-semibold -rotate-90">Sobre</p>
    <p class="font-light hover:font-semibold -rotate-90">Shop</p>
  </div>
</template>

<script>
export default {
  name: 'BarraLateral',
};
</script>

<style>

</style>
