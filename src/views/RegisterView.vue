<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';

const email = ref('');
const password = ref('');
const auth = getAuth();
const router = useRouter();

const back = () => {
  router.push('/');
};

const register = () => {
  createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        back();
        console.log('Nou usuari creat amb el correu: ' + userCredential.user.email);
      })
      .catch((error) => {
        console.error(error);
      });
};
</script>

<template>
  <main class="page-register">
    <section class="box-auth">
      <img class="logo" alt="logo" src="@/assets/uoozer_logo.svg">
      <h1 class="main-title">Registro</h1>
      <p class="auth-intro">Regístrate en Uoozer para disfrutar de miles de canciones.</p>

      <form @submit.prevent="register">
        <div class="form-group">
          <label class="form-label" for="email">Email</label>
          <input v-model="email" placeholder="Correo electrónico" type="email" id="email" class="form-control">
        </div>
        <div class="form-group">
          <label class="form-label" for="password">Contraseña</label>
          <input v-model="password" placeholder="Contraseña" type="password" id="password" class="form-control">
        </div>
        <button type="submit" class="btn btn-primary btn-lg">Registrar</button>
      </form>

      <p class="auth-bottom">¿Ya tienes cuenta? <span class="alink">Inicia sesión</span></p>
    </section>
  </main>
</template>


<style lang="scss">
.page-register {
  display: flex;
  flex-direction: column;
  height: 100%;

  .main-title {
    margin-bottom: 20px;
  }
}
</style>
