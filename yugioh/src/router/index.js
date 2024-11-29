import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', name: 'Login', component: ()=>import ('@/components/pages/Login') }, 
  { path: '/home', name: 'Home', component: ()=> import ('@/components/pages/Home') },
  { path: '/decks', name: 'Decks', component: ()=> import ('@/components/pages/Decks') },
  { path: '/sobre', name: 'Sobre', component: ()=> import ('@/components/pages/Sobre') },
  { path: '/contatos', name: 'Contatos', component: ()=> import ('@/components/pages/Contatos')},
  { path: '/compras', name: 'Compras', component: ()=> import ('@/components/pages/Compras')  },
  { path: '/albaz', name: 'albaz', component: ()=> import ('@/components/pages/Produtos/Albaz') }, 
  { path: '/sombrio', name: 'sombrio', component: ()=> import ('@/components/pages/Produtos/Sombrio') }, 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
