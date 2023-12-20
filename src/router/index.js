import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SearchResultsView from '../views/SearchResultsView.vue';
import NotFoundView from '../views/NotFoundView.vue';
import Login from '../views/LoginView.vue';
import Register from '../views/RegisterView.vue';
import Playlist from '../views/PlaylistView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/search/:search?',
      name: 'search',
      component: SearchResultsView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/playlist/:name',
      name: 'playlist',
      component: Playlist,
    },
  ],
});

export default router;
