<template>
  <div class="flex-1 bg-cover bg-center background01 p-6">
    <div class="size-80 bg-white/70 border rounded-lg mt-20 ml-52">
      <img :src="deck.image" alt="Deck Image" width="260" height="260" class="translate-y-[0px] translate-x-[26px]" />
      <p class="text-white text-3xl translate-y-[10px] translate-x-[100px]">{{ deck.price }}</p>
    </div>

    <div
      class="h-80 w-20 translate-y-[-320px] size-full bg-white/70 border rounded-lg px-60 ms-119 ml-auto absolute right-28"
    ></div>

    <div
      class="bg-white absolute rounded-lg px-44 h-36 w-29 scale-x-125 scale-y-150 -translate-y-[200px] translate-x-[710px]"
    ></div>

    <p class="absolute font-semibold text-black text-lg -translate-y-[310px] translate-x-[700px]">
      {{ deck.name }}
    </p>
    <p class="absolute font-semibold text-black text-base -translate-y-[270px] translate-x-[700px]">
      Informações do Produto:
    </p>
    <p class="absolute leading-tight text-black text-base -translate-y-[230px] translate-x-[700px]">
      {{ deck.description }}
    </p>

    <!-- Botão de Adicionar ao Carrinho -->
    <button 
      @click="addToCart" 
      class="absolute bg-blue-500 text-white font-bold py-2 px-6 rounded-md bottom-10 left-1/2 transform -translate-x-1/2">
      Adicionar ao Carrinho
    </button>
  </div>
</template>

<script>
export default {
  name: 'DeckInfo',
  props: ['id'], // Recebe o ID da rota como prop
  data() {
    return {
      deck: null,
    };
  },
  created() {
    this.loadDeck();
  },
  methods: {
    loadDeck() {
      const savedDecks = localStorage.getItem('decks');
      if (savedDecks) {
        const decks = JSON.parse(savedDecks);
        this.deck = decks.find((deck) => deck.id === parseInt(this.id, 10));
      }
    },
    addToCart() {
      try {
        const cart = localStorage.getItem('cart');  // Pega o carrinho do localStorage
        let cartItems = cart ? JSON.parse(cart) : [];  // Se o carrinho já tiver itens, carrega eles, senão cria um novo carrinho

        // Adiciona o deck ao carrinho
        cartItems.push({
          image: this.deck.image,
          name: this.deck.name,
          price: this.deck.price,
        });

        // Salva o carrinho atualizado no localStorage
        localStorage.setItem('cart', JSON.stringify(cartItems));

        alert('Deck adicionado ao carrinho!');
      } catch (error) {
        console.error('Erro ao adicionar ao carrinho', error);
      }
    },
  },
};
</script>

<style scoped>
.background01 {
  background-image: url('@/assets/Blueeyes.png');
}
</style>
