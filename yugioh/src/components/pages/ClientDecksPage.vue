<template>
  <div class="flex-1 bg-cover bg-center backgroundD p-6">
    <p class="flex font-light border-l justify-center text-white flex-1 w-0.9 border-white mt-5 text-3xl">
      Decks Disponíveis
    </p>

    <!-- Grid de decks -->
    <DecksGrid
      :decks="decks"
      :is-admin="isAdmin"
    />
  </div>
</template>

<script>
import DecksGrid from "../DecksGrid.vue";

export default {
  name: 'DecksPageCliente',
  components: {
    DecksGrid,
  },
  data() {
    return {
      decks: [], // Lista de decks
      isAdmin: false, // Controla se o usuário é admin
    };
  },
  created() {
    this.loadDecks();
    this.checkUserRole(); // Verifica se o usuário é admin ou não ao carregar a página
  },
  methods: {
    // Carregar os decks do localStorage
    loadDecks() {
      const savedDecks = localStorage.getItem('decks');
      if (savedDecks) {
        this.decks = JSON.parse(savedDecks);
      }
    },
    // Verifica se o usuário é admin (simulação)
    checkUserRole() {
      // Suponha que a verificação seja feita aqui (pode ser via API ou outra lógica)
      this.isAdmin = false; // Defina como `true` ou `false` dependendo da lógica real
    }
  },
};
</script>

<style scoped>
.backgroundD {
  background-image: url('@/assets/obelisco.jpeg');
  padding: 20px;
}
</style>
