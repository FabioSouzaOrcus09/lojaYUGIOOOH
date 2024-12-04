<template>
  <div class="cart-page bg-white p-6">
    <h1 class="text-2xl font-bold">Carrinho de Compras</h1>
    <div v-if="cartItems.length === 0" class="mt-4">
      <p>Seu carrinho está vazio.</p>
    </div>
    <div v-else>
      <div v-for="(item, index) in cartItems" :key="index" class="cart-item mb-4">
        <img :src="item.image" alt="Deck Image" width="100" height="100">
        <div>
          <p>{{ item.name }}</p>
          <p>{{ item.price }}</p>
        </div>
      </div>
    </div>
    <button @click="checkout" class="mt-4 bg-blue-500 text-white font-bold py-2 px-6 rounded-md">
      Finalizar Compra
    </button>
  </div>
</template>

<script>
export default {
  name: 'CartPage',
  data() {
    return {
      cartItems: [],
    };
  },
  created() {
    this.loadCart();
  },
  methods: {
    loadCart() {
      try {
        // Usando localStorage no lugar de AsyncStorage
        const cart = localStorage.getItem('cart');
        if (cart) {
          this.cartItems = JSON.parse(cart);
        }
      } catch (error) {
        console.error('Erro ao carregar o carrinho', error);
      }
    },
    checkout() {
      alert('Compra finalizada!');

      // Limpa o carrinho após o checkout
      localStorage.removeItem('cart');
      this.cartItems = [];
    },
  },
};
</script>

<style scoped>
.cart-page {
  max-width: 600px;
  margin: auto;
  padding: 20px;
}
.cart-item {
  display: flex;
  align-items: center;
}
.cart-item img {
  margin-right: 10px;
}
</style>
