<template>
  <div class="cart-page">
    <div class="cart-content bg-white p-6">
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
      
      <!-- Este botão será escondido na rota "/cart" -->
      <button v-if="showComponents" @click="checkout" class="mt-4 bg-blue-500 text-white font-bold py-2 px-6 rounded-md">
        Finalizar Compra
      </button>
    </div>
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
  computed: {
    // A variável computada para esconder os componentes na rota "/cart"
    showComponents() {
      // A lógica aqui irá ocultar o botão na rota "/cart"
      return this.$route.path !== '/cart';
    }
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
/* O background vai cobrir toda a tela */
.cart-page {
  width: 100%;
  height: 100vh;
  background: url('https://preview.redd.it/yu-gi-oh-protagonists-wallpaper-1080p-full-hd-updated-v0-jxzd3vxsrhka1.jpg?width=1080&crop=smart&auto=webp&s=4c0404d99075a1703f2ce3730c7fd50fb92091f7') no-repeat center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Adiciona um fundo branco transparente para o conteúdo do carrinho */
.cart-content {
  max-width: 600px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.7); /* Fundo branco com transparência */
  border-radius: 8px;
}

/* Estilos para os itens do carrinho */
.cart-item {
  display: flex;
  align-items: center;
}

.cart-item img {
  margin-right: 10px;
}
</style>
