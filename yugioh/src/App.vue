<template>
  
  <div class="relative h-screen flex">
    <BarraLateral /> <!-- Barra Lateral -->
    <Home /> <!-- Conteúdo Principal -->
    <TopCards /> <!-- Barra de cards mais vendidos -->
  </div>
  
</template>

<script>
import BarraLateral from './components/BarraLateral.vue'
import Home from './components/pages/Home.vue'
import TopCards from './components/TopCards.vue'

export default {
  name: 'App',
  components: {
    BarraLateral,
    Home,
    TopCards
  }
}
</script>

<style>

</style>
