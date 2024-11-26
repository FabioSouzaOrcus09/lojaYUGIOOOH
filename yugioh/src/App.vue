<template>
  
  <div class="relative h-screen flex">
    <BarraLateral /> <!-- Barra Lateral -->
    <router-view /> <!-- Conteúdo Principal -->
  </div>
  
</template>

<script>
import BarraLateral from './components/BarraLateral.vue'


export default {
  name: 'App',
  components: {
    BarraLateral
  }
}
</script>

<style>

</style>
