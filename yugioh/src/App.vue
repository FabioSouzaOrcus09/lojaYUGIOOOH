<template>
  <div class="relative h-screen flex">
    <BarraLateral /> <!-- Barra Lateral -->
    <Home /> <!-- Conteúdo Principal -->
  </div>
</template>

<script>
import BarraLateral from './components/BarraLateral.vue'
import Home from './components/pages/Home.vue'

export default {
  name: 'App',
  components: {
    BarraLateral,
    Home
  }
}
</script>

<style>
/* Estilos globais (se necessário) */
</style>
