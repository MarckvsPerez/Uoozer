<script setup>
import {ref} from 'vue';

const search = ref('');
</script>

<template>
  <div class="navbar-brand">
    <div class="input-group">

      <router-link :to="search === '' ? '/' : `/search/${search}`" @click="loadData">
        <button class="btn" type="button" id="button-addon1">
          <fa-icon icon="search" />
        </button>
      </router-link>

      <input v-model="search" type="text" class="bg-transparent" id="search" name="search" placeholder="Cerca..." />
    </div>
  </div>
</template>

<style>
input {
  border: none;
}
</style>
