<template>
  <div class="relative h-screen flex">
    <!-- Condicional para exibir a Barra Lateral -->
    <BarraLateral v-if="showComponents" /> 

    <!-- Conteúdo Principal -->
    <router-view /> 

    <!-- Condicional para exibir o Cart -->
    <Cart v-if="showComponents" />
  </div>
</template>

<script>
import BarraLateral from './components/BarraLateral.vue';
import Cart from './components/Cart.vue';

export default {
  name: 'App',
  components: {
    BarraLateral,
    Cart,
  },
  computed: {
    showComponents() {
      // Exibe os componentes apenas se a rota não for "/"
      return this.$route.path !== '/';
    },
  },
};
</script>

<style>
</style>
