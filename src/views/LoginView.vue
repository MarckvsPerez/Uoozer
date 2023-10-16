<template>
  <main class="page-login">

    <section class="box-auth">
      <img class="logo" alt="logo" src="@/assets/icon.svg">
      <h1 class="main-title">Iniciar sesión</h1>
      <p class="auth-intro">Inicia sesión en Uoozer para disfrutar de miles de canciones.</p>

      <form>
          <div class="form-group">
            <label class="form-label" for="username">Email</label>
            <input placeholder="Correo electrónico" type="email" id="email" class="form-control">
          </div>
          <div class="form-group">
            <label class="form-label" for="password">Contraseña</label>
            <input placeholder="Contraseña" type="password" id="password" class="form-control">
          </div>
          <button class="btn btn-primary btn-lg">Iniciar sesión</button>
      </form>

      <p class="auth-bottom">¿No tienes cuenta?   <span class="alink">Regístrate</span></p>
    </section>

  </main>
</template>

<script>
import firebase from 'firebase';
export default {
  name: 'login',
  data: function() {
    return {
		// Completar
    };
  },
  methods: {
    login: function(e) {
      firebase
        .auth()
        .signInWithEmailAndPassword("***completar***", "***completar***")
        .then(
			// completar
        );
      e.preventDefault();
    }
  }
};
</script>


<style lang="scss" >

    .page-login{

    }

</style>