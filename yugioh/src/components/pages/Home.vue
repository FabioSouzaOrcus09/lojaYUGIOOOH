<template>
  <nav class="flex-1 bg-cover bg-center background flex flex-col items-center justify-center">
    <p class="font-light p-40 text-center text-white">
      Eu tenho que confiar no coração das cartas...
    </p>

    <!-- Carrossel Centralizado -->
    <div
      id="default-carousel"
      class="relative w-4/5 max-w-2xl h-64 overflow-hidden rounded-lg flex justify-center"
      data-carousel="slide"
    >
      <!-- Carousel wrapper -->
      <div class="relative w-full h-full">
        <!-- Item 1 -->
        <div class="absolute inset-0 hidden duration-700 ease-in-out" data-carousel-item>
          <img src="@/assets/home/Tapete1.png" class="block w-full h-full object-cover" alt="Imagem 1" />
        </div>
        <!-- Item 2 -->
        <div class="absolute inset-0 hidden duration-700 ease-in-out" data-carousel-item>
          <img src="@/assets/home/Tapete2.png" class="block w-full h-full object-cover" alt="Imagem 2" />
        </div>
        <!-- Adicione mais itens conforme necessário -->
      </div>

      <!-- Indicadores -->
      <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        <button
          type="button"
          class="w-3 h-3 bg-white rounded-full"
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
        ></button>
        <button
          type="button"
          class="w-3 h-3 bg-white rounded-full"
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
        ></button>
      </div>

      <!-- Botões de navegação -->
      <button
        type="button"
        class="absolute top-1/2 left-0 z-30 flex items-center justify-center w-8 h-8 bg-white rounded-full transform -translate-y-1/2 cursor-pointer"
        data-carousel-prev
      >
        &#8592;
      </button>
      <button
        type="button"
        class="absolute top-1/2 right-0 z-30 flex items-center justify-center w-8 h-8 bg-white rounded-full transform -translate-y-1/2 cursor-pointer"
        data-carousel-next
      >
        &#8594;
      </button>
    </div>

    <top-cards />
  </nav>
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
