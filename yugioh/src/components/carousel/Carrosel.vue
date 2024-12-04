<template>
  <div class="carousel-container">
    <div class="carousel">
      <div class="carousel-inner">
        <CarouselItem v-for="(slide, index) in slides" :key="index" :slide="slide" :isActive="index === currentIndex"/>
      </div>

      <!-- Navegação -->
      <button @click="prevSlide" class="carousel-control-prev">Anterior</button>
      <button @click="nextSlide" class="carousel-control-next">Próximo</button>
    </div>
  </div>
</template>

<script>
import CarouselItem from './CarouselItem.vue';

export default {
  name: 'CarroselA',
  components: {
    CarouselItem
  },
  data() {
    return {
      slides: [
        "https://picsum.photos/id/1032/900/400",
        "https://picsum.photos/id/1033/900/400",
        "https://picsum.photos/id/1034/900/400",
        "https://picsum.photos/id/1035/900/400",
        "https://picsum.photos/id/1036/900/400",
        "https://picsum.photos/id/1037/900/400",
      ],
      currentIndex: 0
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    }
  }
};
</script>

<style scoped>
.carousel-container {
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Alinha o carrossel mais para cima */
  margin-top: 20px; /* Adiciona um pequeno espaço no topo */
  overflow: hidden; /* Evita que a tela fique rolável */
}

.carousel {
  position: relative;
  width: 70%; /* Ajusta a largura do carrossel para 70% */
  max-width: 700px; /* Limita a largura máxima para 700px */
  height: 400px; /* Ajusta a altura do carrossel */
  overflow: hidden;
}

.carousel-inner {
  display: flex;
  transition: transform 0.3s ease;
}

.carousel-control-prev,
.carousel-control-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
}

.carousel-control-prev {
  left: 10px;
}

.carousel-control-next {
  right: 10px;
}

.carousel-item {
  width: 100%;
  flex-shrink: 0;
  transition: opacity 0.3s ease;
}

.carousel-item img {
  width: 100%;
  height: auto;
  display: block;
}
</style>
