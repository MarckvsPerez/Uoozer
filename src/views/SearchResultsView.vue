<script setup>
import {ref} from 'vue';

import {data as artistsData} from '@/json/artists.json';
import {data as tracksData} from '@/json/tracks.json';
import {data as albumData} from '@/json/albums.json';

import AllList from '@/components/AllList.vue';
import TrackList from '@/components/TrackList.vue';


const artists = artistsData.slice(0, 6);
const tracks = tracksData.slice(0, 6);
const albums = albumData.slice(0, 6);

const busqueda = ref('Tets');
const activeTab = ref('todo');

const changeTab = (tab) => {
  activeTab.value = tab;
};
</script>

<template>
  <main class="container">
    <h1 class="main-title">Resultados de <span>{{ busqueda }}</span></h1>

    <div>
      <ul class="nav nav-tabs">
        <li class="nav-item" @click="changeTab('todo')" :class="{ 'active': activeTab === 'todo' }">
          <a class="nav-link" :class="{ 'active': activeTab === 'todo' }" aria-current="page" href="#">Todo</a>
        </li>
        <li class="nav-item" @click="changeTab('canciones')" :class="{ 'active': activeTab === 'canciones' }">
          <a class="nav-link" :class="{ 'active': activeTab === 'canciones' }" href="#">Canciones</a>
        </li>
        <li class="nav-item" @click="changeTab('albumes')" :class="{ 'active': activeTab === 'albumes' }">
          <a class="nav-link" :class="{ 'active': activeTab === 'albumes' }" href="#">Albumes</a>
        </li>
        <li class="nav-item" @click="changeTab('artistas')" :class="{ 'active': activeTab === 'artistas' }">
          <a class="nav-link"  :class="{ 'active': activeTab === 'artistas' }" href="#">Artistas</a>
        </li>
      </ul>

      <!-- Renderiza AllList según la pestaña activa -->
      <AllList v-if="activeTab === 'todo'" :artists="artists" :tracks="tracks" :albums="albums" />
      <TrackList v-else-if="activeTab === 'canciones'" :artists="[]" :tracks="tracks" :albums="[]" />
      <AllList v-else-if="activeTab === 'albumes'" :artists="[]" :tracks="[]" :albums="albums" />
      <AllList v-else-if="activeTab === 'artistas'" :artists="artists" :tracks="[]" :albums="[]" />
    </div>
  </main>
</template>

<style scoped lang="scss">
div {
  background-color: white;
}

.main-title {
  span {
    color: $grey-label;
  }

}
</style>
