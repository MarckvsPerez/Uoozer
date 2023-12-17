<script setup>
import {ref} from 'vue';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {useRouter} from 'vue-router';

const router = useRouter();
const email = ref('');
const password = ref('');

const auth = getAuth();

const back = () => {
  router.push('/');
};

const login = () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        back();
        console.log( 'Sessió iniciada correctament amb el correu: ' + userCredential.user.email);
      })
      .catch((error) => {
        console.error(error);
      });
};
</script>

<template>
  <main class="page-login">
    <section class="box-auth">
      <img class="logo" alt="logo" src="@/assets/uoozer_logo.svg">
      <h1 class="main-title">Iniciar sesión</h1>
      <p class="auth-intro">Inicia sesión en Uoozer para disfrutar de miles de canciones.</p>

      <form @submit.prevent="login">
        <div class="form-group">
          <label class="form-label" for="email">Email</label>
          <input v-model="email" placeholder="Correo electrónico" type="email" id="email" class="form-control">
        </div>
        <div class="form-group">
          <label class="form-label" for="password">Contraseña</label>
          <input v-model="password" placeholder="Contraseña" type="password" id="password" class="form-control">
        </div>
        <button type="submit" class="btn btn-primary btn-lg">Iniciar sesión</button>
      </form>

      <p class="auth-bottom">¿No tienes cuenta? <span class="alink">Regístrate</span></p>
    </section>
  </main>
</template>


<style lang="scss">
.page-login {
  // Your styles here
}
</style>
