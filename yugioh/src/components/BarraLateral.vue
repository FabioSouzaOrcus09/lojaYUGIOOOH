<template>
  <div 
    id="sidebar" 
    class="absolute top-0 left-0 flex flex-col items-center gap-8 w-28 text-white p-4 bg-white/30 backdrop-blur h-full z-50"
  >
    <!-- Logo/Ícone -->
    <img src="@/assets/icon.png" alt="icon" class="w-16 h-16 mb-8"> 

    <!-- Lista de Botões -->
    <ul class="flex flex-row justify-center items-center gap-10 rotate-90">
      <li>
        <router-link 
          to="/home" 
          class="font-light hover:font-semibold transform -rotate-90">
          Home
        </router-link>
      </li>

      <li>
        <router-link 
          :to="decksLink" 
          class="font-light hover:font-semibold transform -rotate-90">
          Decks
        </router-link>
      </li>

      <li>
        <router-link 
          to="/contatos" 
          class="font-light hover:font-semibold transform -rotate-90">
          Contatos
        </router-link>
      </li>

      <li>
        <router-link 
          to="/sobre" 
          class="font-light hover:font-semibold transform -rotate-90">
          Sobre
        </router-link>
      </li>
    </ul>

    <!-- Botão de Logout -->
    <button 
      @click="logout" 
      class="absolute bottom-4 text-red-500 font-light hover:font-semibold transform">
      Sair
    </button>
  </div>
</template>

<script>
export default {
  name: 'BarraLateral',
  data() {
    return {
      isAdmin: false, // Controla se o usuário é admin ou não
    };
  },
  computed: {
    // Condiciona a rota de decks dependendo se o usuário é admin
    decksLink() {
      return this.isAdmin ? '/decks' : '/decks/cliente';
    },
  },
  created() {
    this.checkUserRole();
  },
  methods: {
    checkUserRole() {
      // Verifica o papel do usuário armazenado no localStorage
      const userRole = localStorage.getItem('userRole');
      this.isAdmin = userRole === 'admin';
    },
    logout() {
      // Limpa as informações do localStorage e redireciona para a página de login
      localStorage.clear();
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
/* Estilo adicional */
#sidebar {
  border-right: 1px solid rgba(255, 255, 255, 0.3);
  z-index: 50;
}

ul {
  list-style: none;
  padding: 0;
  margin: 115px;
  padding-left: 7rem;
}

li {
  text-align: center;
}

button {
  border: none;
  background: none;
  cursor: pointer;
}
</style>
