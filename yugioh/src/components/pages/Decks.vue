<template>
  <div class="flex-1 bg-cover bg-center backgroundD">
    <p class="font-mono justify-items-center">Eu tenho que confiar no coração das cartas...</p>
    <top-cards />
  </div>
</template>

<script>
export default {
  name: 'DecksB', // Nome composto para evitar erros do ESLint
};
</script>

<style scoped>
.backgroundD {
  background-image: url('@/assets/obelisco.jpeg');
}
</style>
