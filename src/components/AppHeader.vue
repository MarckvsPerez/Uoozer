<template>
  <header class="header">Hello ! {{ name }}</header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      name: 'marc',
    };
  },
  created() {
    console.log(this.name); // Accedemos a la variable "name" dentro del contexto de Vue
  },
};
</script>

<style lang="scss"></style>
