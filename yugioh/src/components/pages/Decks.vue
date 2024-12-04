<template>
  <div class="flex-1 bg-cover bg-center backgroundD p-6">
    <p class="flex font-light border-l justify-center text-white flex-1 w-0.9 border-white mt-5 text-3xl">
      Decks Disponíveis
    </p>

    <!-- Botão para adicionar novo deck, visível apenas para admins -->
    <div v-if="isAdmin" class="mb-4 flex justify-center">
      <button @click="showAddForm = true" class="bg-blue-500 text-white px-4 py-2 rounded">
        Adicionar Novo Deck
      </button>
    </div>

    <!-- Grid de decks -->
    <DecksGrid
      :decks="decks"
      :is-admin="isAdmin"
      @edit="editDeck"
      @remove="removeDeck"
    />

    <!-- Modal para adicionar/editar deck -->
    <div
      v-if="showAddForm"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
        <h3 class="text-xl font-bold mb-4">
          {{ editMode ? 'Editar Deck' : 'Adicionar Novo Deck' }}
        </h3>
        <form @submit.prevent="editMode ? updateDeck() : addDeck()">
          <input
            v-model="form.name"
            type="text"
            placeholder="Nome do Deck"
            required
            class="w-full mb-4 p-2 border rounded"
          />
          <input
            v-model="form.price"
            type="text"
            placeholder="Preço"
            required
            class="w-full mb-4 p-2 border rounded"
          />
          <input
            v-model="form.image"
            type="text"
            placeholder="URL da Imagem"
            required
            class="w-full mb-4 p-2 border rounded"
          />
          <textarea
            v-model="form.description"
            placeholder="Descrição"
            required
            class="w-full mb-4 p-2 border rounded"
          ></textarea>
          <div class="flex justify-end">
            <button
              type="button"
              @click="cancelForm"
              class="bg-red-500 text-white px-4 py-2 rounded mr-2"
            >
              Cancelar
            </button>
            <button type="submit" class="bg-green-500 text-white px-4 py-2 rounded">
              {{ editMode ? 'Salvar Alterações' : 'Adicionar Deck' }}
            </button>
          </div>
        </form>

        <!-- Botão para fechar o modal -->
        <button
          @click="cancelForm"
          class="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✖
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import DecksGrid from "../DecksGrid.vue";

export default {
  name: 'DecksPage',
  components: {
    DecksGrid,
  },
  data() {
    return {
      decks: [], // Lista de decks
      showAddForm: false, // Controla a exibição do modal
      editMode: false, // Define se o modal está no modo de edição
      form: {
        id: null,
        name: "",
        price: "",
        image: "",
        description: "",
      },
      isAdmin: this.checkIfAdmin(), // Chama função para verificar se o usuário é admin
    };
  },
  created() {
    this.loadDecks();
  },
  methods: {
    // Verifica se o usuário é administrador
    checkIfAdmin() {
      // Simulação de verificação, pode ser substituída por lógica de autenticação real
      return localStorage.getItem('userRole') === 'admin'; // Exemplo simples
    },

    // Carregar os decks do localStorage
    loadDecks() {
      const savedDecks = localStorage.getItem('decks');
      console.log('Carregando decks do localStorage:', savedDecks); // Verifica se os dados estão sendo carregados
      if (savedDecks) {
        this.decks = JSON.parse(savedDecks);
        console.log('Decks carregados:', this.decks); // Verifica o conteúdo dos decks carregados
      } else {
        console.log('Nenhum deck salvo no localStorage.');
      }
    },
    
    // Salvar os decks no localStorage
    saveDecks() {
      console.log('Salvando decks no localStorage:', this.decks); // Verifica se os decks estão sendo salvos corretamente
      localStorage.setItem('decks', JSON.stringify(this.decks));
    },

    addDeck() {
      this.decks.push({ ...this.form, id: Date.now() });
      this.saveDecks();  // Salva os decks sempre que um novo deck é adicionado
      this.resetForm();
    },

    editDeck(deck) {
      this.form = { ...deck };
      this.editMode = true;
      this.showAddForm = true;
    },

    updateDeck() {
      const index = this.decks.findIndex((d) => d.id === this.form.id);
      if (index !== -1) {
        this.decks[index] = { ...this.form };
        this.saveDecks(); // Salva os decks após a atualização
      }
      this.resetForm();
    },

    removeDeck(id) {
      this.decks = this.decks.filter((deck) => deck.id !== id);
      this.saveDecks();  // Salva os decks após remoção
    },

    cancelForm() {
      this.resetForm();
    },

    resetForm() {
      this.showAddForm = false;
      this.editMode = false;
      this.form = {
        id: null,
        name: "",
        price: "",
        image: "",
        description: "",
      };
    },
  },
};
</script>

<style scoped>
.backgroundD {
  background-image: url('@/assets/obelisco.jpeg');
  padding: 20px;
}

/* Estilização para o modal */
.modal {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
