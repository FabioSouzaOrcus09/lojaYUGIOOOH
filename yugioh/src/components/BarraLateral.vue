<template>
  <div 
    id="sidebar" 
    class="absolute top-0 left-0 flex flex-col items-center gap-8 w-28 text-white p-4 bg-white/30 backdrop-blur h-full z-50"
  >
    <!-- Logo/Icone -->
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
      // Verifica se o usuário logado é administrador e retorna a URL correta
      return this.isAdmin ? '/decks' : '/decks/cliente';
    },
  },
  created() {
    this.checkUserRole(); // Verifica o papel do usuário ao carregar o componente
  },
  methods: {
    checkUserRole() {
      // Aqui buscamos a informação do tipo de usuário armazenada no localStorage
      const userRole = localStorage.getItem('userRole');
      
      if (userRole) {
        this.isAdmin = userRole === 'admin';
      } else {
        this.isAdmin = false; // Se não houver informação, assume-se que é cliente
      }
    },
  },
};
</script>

<style scoped>
/* Estilo adicional */
#sidebar {
  border-right: 1px solid rgba(255, 255, 255, 0.3); /* Opcional: borda para destacar o sidebar */
  z-index: 50; /* Certifica-se de que o sidebar fique acima dos outros elementos */
}

ul {
  list-style: none;
  padding: 0;
  margin: 115px; /* Ajuste da margem, se necessário */
  padding-left: 7rem; /* Adiciona padding esquerdo para dar espaço ao sidebar */
}

li {
  text-align: center; /* Centraliza os itens */
}
</style>
