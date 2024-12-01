import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', name: 'Login', component: () => import('@/components/pages/Login') },
  { path: '/home', name: 'Home', component: () => import('@/components/pages/Home') },
  { path: '/decks', name: 'Decks', component: () => import('@/components/pages/Decks') },
  { path: '/sobre', name: 'Sobre', component: () => import('@/components/pages/Sobre') },
  { path: '/contatos', name: 'Contatos', component: () => import('@/components/pages/Contatos') },
  { path: '/compras', name: 'Compras', component: () => import('@/components/pages/Compras') },


  { path: '/albaz', name: 'albaz', component: () => import('@/components/pages/Produtos/Albaz') },
  { path: '/sombrio', name: 'sombrio', component: () => import('@/components/pages/Produtos/Sombrio') },
  { path: '/glaciais', name: 'glaciais', component: () => import('@/components/pages/Produtos/Glaciais') },
  { path: '/cyber', name: 'cyber', component: () => import('@/components/pages/Produtos/Cyber') },
  { path: '/engrenagens', name: 'engrenagens', component: () => import('@/components/pages/Produtos/Engrenagens') },
  { path: '/faíscas', name: 'faíscas', component: ()=> import ('@/components/pages/Produtos/Faíscas') }, 
  { path: '/fireking', name: 'fireking', component: ()=> import ('@/components/pages/Produtos/FireKing') }, 
  { path: '/dinos', name: 'dinos', component: ()=> import ('@/components/pages/Produtos/Dinos') },
  { path: '/imperador', name: 'imperador', component: ()=> import ('@/components/pages/Produtos/Imperador') },
  { path: '/investida', name: 'investida', component: ()=> import ('@/components/pages/Produtos/Investida') },
  { path: '/ciberso', name: 'ciberso', component: ()=> import ('@/components/pages/Produtos/Ciberso') },
  { path: '/zombie', name: 'zombie', component: ()=> import ('@/components/pages/Produtos/Zombie') },
  



];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
