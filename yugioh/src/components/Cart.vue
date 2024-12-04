<template>
  <div class="flex items-center justify-center h-screen">
    <!-- Ícone do carrinho que, quando clicado, redireciona para a tela de informações do carrinho -->
    <img 
      src="@/assets/cart.png" 
      class="flex-1 w-16 h-auto absolute -translate-y-[240px] -translate-x-[200px]"
      @click="goToCartPage"  
    >
  </div>
</template>

<script>
export default {
  name: 'CartShop',
  methods: {
    // Função que navega para a página de informações do carrinho
    goToCartPage() {
      this.$router.push({ name: 'cartPage' });  // Altere 'cartPage' para o nome correto da sua rota
    }
  }
};
</script>

<style scoped>
/* Aqui pode-se adicionar estilo adicional para o carrinho se necessário */
</style>
