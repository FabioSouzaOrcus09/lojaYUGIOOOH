import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/pages/Home.vue'; 
import Sobre from '../components/pages/Sobre.vue';
import Login from '../components/pages/Login.vue';
import Decks from '../components/pages/Decks.vue';
import Contatos from '../components/pages/Contatos.vue';
import Compras from '../components/pages/Compras.vue';
// Corrigir aqui: Importar o componente Produtos
import Produtos from '../components/pages/Produtos.vue';

const routes = [
  { path: '/', name: 'Login', component: Login }, 
  { path: '/home', name: 'Home', component: Home },
  { path: '/decks', name: 'Decks', component: Decks },
  { path: '/sobre', name: 'Sobre', component: Sobre },
  { path: '/produtos', name: 'Produtos', component: Produtos }, // Produto agora está correto
  { path: '/contatos', name: 'Contatos', component: Contatos },
  { path: '/compras', name: 'Compras', component: Compras },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
