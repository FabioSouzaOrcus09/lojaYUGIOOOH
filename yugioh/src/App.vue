<template>
  
  <div class="relative h-screen flex">
    <BarraLateral /> <!-- Barra Lateral -->
    <router-view /> <!-- Conteúdo Principal -->
    <Cart />
  </div>
  
</template>

<script>
import BarraLateral from './components/BarraLateral.vue'
import Cart from './components/Cart.vue'


export default {
  name: 'App',
  components: {
    BarraLateral,
    Cart
    
  }
}
</script>

<style>

</style>
