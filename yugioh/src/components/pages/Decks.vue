<template>

  <div class="flex-1 bg-cover bg-center backgroundD">
    <p class="flex font-light border-l justify-center text-white flex-1 w-0.9 border-white mt-5 text-3xl"> Decks Disponíveis </p>
    <DecksGrid />
  </div>

</template>

<script>
import DecksGrid from '../DecksGrid.vue';
export default {
  name: 'DecksB', // Nome composto para evitar erros do ESLint
  components: {
    DecksGrid,

  }
};
</script>

<style scoped>
.backgroundD {
  background-image: url('@/assets/obelisco.jpeg');
}


</style>
