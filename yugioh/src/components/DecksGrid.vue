<template>
  <div class="flex justify-center mt-10">
    <!-- Container centralizado -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-screen-xl">
      <div
        v-for="deck in decks"
        :key="deck.id"
        class="border rounded-lg p-4 bg-white/70 relative shadow-lg cursor-pointer"
        @click="goToDeckInfo(deck.id)"
      >
        <img :src="deck.image" :alt="deck.name" class="w-full h-48 object-cover" />
        <h3 class="text-xl font-bold mt-2">{{ deck.name }}</h3>
        <p class="text-gray-700">{{ deck.price }}</p>
        <p class="text-sm text-gray-600">{{ deck.description }}</p>

        <!-- Botões de edição e remoção (Apenas para Administrador) -->
        <div v-if="isAdmin" class="absolute top-2 right-2 flex space-x-2">
          <button @click.stop="$emit('edit', deck)" class="bg-blue-500 text-white px-2 py-1 rounded">
            Editar
          </button>
          <button @click.stop="$emit('remove', deck.id)" class="bg-red-500 text-white px-2 py-1 rounded">
            Remover
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    decks: Array,
    isAdmin: Boolean, // Controle do modo administrador
  },
  methods: {
    goToDeckInfo(deckId) {
      // Redireciona para a rota do deck específico
      this.$router.push(`/deck/${deckId}`);
    },
  },
};
</script>

<style scoped>
/* Adicione margens e centralize a grid */
.grid {
  margin: 0 auto; /* Centraliza horizontalmente */
}
</style>
