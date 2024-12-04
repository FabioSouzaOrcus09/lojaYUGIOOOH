<template>
  <div class="flex-1 bg-cover bg-center background">
    <p class="font-light p-40 justify-items-center text-white">
      Eu tenho que confiar no coração das cartas...
    </p>
    <top-cards />
    <!-- Aqui você pode adicionar uma margem ou padding no carrossel, se necessário -->
    <div class="carousel-container-wrapper">
      <Carrosel />
    </div>
  </div>
</template>

<script>
import TopCards from '../TopCards.vue';
import Carrosel from '../carousel/Carrosel.vue';
export default {
  name: 'HomeaA',
  components:{
    TopCards,
    Carrosel
  }
};
</script>

<style>
.background {
  background-image: url('@/assets/exodia.png');
  background-size: cover; /* Para garantir que a imagem de fundo cubra a tela */
}

.carousel-container-wrapper {
  display: flex;
  justify-content: center;
  margin-top: -80px; /* Distância entre os outros elementos e o carrossel */
}
</style>
