<script setup>
import {ref} from 'vue';
import SearchBar from '@/components/SearchBar.vue';

const isLoggedIn = ref(true);
const currentUser = ref('Marc');
</script>

<template>
  <header>
    <nav class="navbar fixed-top navbar-light bg-light">

      <div>

        <img class="navbar-brand" src="@/assets/uoozer_logo.svg" width="150" height="40" alt="uoozer logo">

        <SearchBar />

      </div>

      <div class="navbar-brand" v-if="isLoggedIn">
        <span class="p-2">{{ currentUser }}</span>
        <span class="user-image"> <fa-icon icon="user" /></span>
      </div>

      <div class="navbar-brand" v-else>
        <span>Iniciar sesión</span>
        <span>Registrar</span>
      </div>

    </nav>

  </header>
</template>

<style lang="scss">
nav {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  div {
    display: flex;
    align-items: center;
  }

  .user-image {
    background-color: $grey-label;
    height: 35px;
    width: 35px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
