<template>
  <div class="carousel-container">
    <div class="carousel">
      <div 
        class="carousel-inner" 
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div 
          class="carousel-item" 
          v-for="(slide, index) in slides" 
          :key="index"
        >
          <img :src="slide" :alt="'Slide ' + (index + 1)" />
        </div>
      </div>

      <!-- Navegação -->
      <button @click="prevSlide" class="carousel-control-prev">
        &#8249;
      </button>
      <button @click="nextSlide" class="carousel-control-next">
        &#8250;
      </button>

      <!-- Indicadores (dots) -->
      <div class="carousel-dots">
        <span 
          v-for="(slide, index) in slides" 
          :key="'dot-' + index"
          :class="{ active: index === currentIndex }"
          @click="goToSlide(index)"
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarroselA',
  data() {
    return {
      slides: [
        require('@/assets/Slide1.png'),
        require('@/assets/Slide2.png'),
        require('@/assets/Slide3.png'),
      ],
      currentIndex: 0,
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    },
    goToSlide(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style scoped>
/* Container principal */
.carousel-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  position: relative;
  width: 100%;
  max-width: 600px; /* Reduz largura máxima */
  overflow: hidden;
  border-radius: 10px; /* Bordas mais suaves */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); /* Reduz intensidade da sombra */
}

/* Área do carrossel */
.carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
}

/* Slides */
.carousel-inner {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-item {
  width: 100%;
  flex-shrink: 0;
}

.carousel-item img {
  width: 100%;
  height: auto;
  border-radius: 10px; /* Ajusta para bordas arredondadas menores */
  object-fit: cover;
}

/* Botões de navegação */
.carousel-control-prev,
.carousel-control-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.6); /* Mais transparente */
  color: white;
  font-size: 20px; /* Botões menores */
  padding: 8px 12px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  z-index: 10;
  transition: transform 0.2s ease;
}

.carousel-control-prev:hover,
.carousel-control-next:hover {
  transform: translateY(-50%) scale(1.1);
}

.carousel-control-prev {
  left: 10px;
}

.carousel-control-next {
  right: 10px;
}

/* Indicadores (dots) */
.carousel-dots {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
}

.carousel-dots span {
  width: 8px; /* Indicadores menores */
  height: 8px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s;
}

.carousel-dots span.active {
  background-color: rgba(255, 255, 255, 1);
}

.carousel-dots span:hover {
  background-color: rgba(255, 255, 255, 0.8);
}
</style>
