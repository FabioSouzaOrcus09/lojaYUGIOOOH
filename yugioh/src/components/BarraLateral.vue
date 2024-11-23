<template>
  <div 
    id="sidebar" 
    class="absolute top-0 left-0 flex flex-col items-center gap-8 w-28
     text-white p-4 bg-white/30 backdrop-blur h-full"
  >
    <!-- Logo/Icone -->
    <img src="@/assets/icon.png" alt="icon" class="w-16 h-16 mb-8"> 

    <!-- Lista de Botões -->
    <ul class="flex flex-row justify-center items-center gap-10 rotate-90  ">
      <li>
        <router-link 
          to="/home" 
          class="font-light hover:font-semibold transform -rotate-90">
          Home
        </router-link>
      </li>
      <li>
        <router-link 
          to="/deck" 
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
};
</script>

<style scoped>
/* Estilo adicional */
#sidebar {
  border-right: 1px solid rgba(255, 255, 255, 0.3); /* Opcional: borda para destacar o sidebar */
}

ul {
  list-style: none;
  padding: 0;
  margin: 115px;
}

li {
  text-align: center; /* Centraliza os itens */
}

a {
  display: block; /* Garante que os links ocupem o espaço total do item */
}
</style>
