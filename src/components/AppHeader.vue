<script setup>
import {ref} from 'vue';
import {RouterLink, useRouter} from 'vue-router';
import SearchBar from '@/components/SearchBar.vue';
import {getAuth, signOut} from 'firebase/auth';

const isLoggedIn = ref(false);
const auth = getAuth();
const router = useRouter();

const user = ref(null);

auth.onAuthStateChanged((firebaseUser) => {
  user.value = firebaseUser;
  if (user.value ) {
    isLoggedIn.value = true;
  } else {
    isLoggedIn.value = false;
  }
});

const back = () => {
  router.push('/');
};
const logout = async () => {
  try {
    await signOut(auth);
    back();
  } catch (error) {
    console.error('Error during logout:', error);
  }
};
</script>

<template>
  <header>
    <nav class="navbar fixed-top navbar-light bg-light">

      <div>


        <RouterLink to="/"><img class="navbar-brand" src="@/assets/uoozer_logo.svg" width="150" height="40"
            alt="uoozer logo">
        </RouterLink>
        <SearchBar />


      </div>

      <div class="navbar-brand" v-if="isLoggedIn">
        <span class="p-2">{{ user.email }}</span>
        <span class="user-image"> <fa-icon icon="user" /></span>
        <button v-on:click="logout" class="btn-icon"><fa-icon icon="sign-out-alt" class="sign-out" /></button>
      </div>

      <div class="navbar-brand" v-else>
        <RouterLink to="/login"> <span>Iniciar sesión</span></RouterLink>
        <span class="mx-2">|</span>
        <RouterLink to="/register"> <span>Registrar</span></RouterLink>


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

  a {
    text-decoration: none;
    color: $text-color;
    font-weight: bolder;
    font-size: 16px;
  }

  a:hover {
    color: $grey;
  }

  span {
    font-size: 14px;
  }
}
</style>
