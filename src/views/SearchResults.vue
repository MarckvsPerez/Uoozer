<script setup>
import {ref} from 'vue';
import ArtistItem from '@/components/ArtistItem.vue';
import SongItem from '@/components/SongItem.vue';
import {data as artistsData} from '@/json/artists.json';
import {data as tracksData} from '@/json/tracks.json';

const artists = artistsData.slice(0, 10);
const tracks = tracksData.slice(0, 10);
const busqueda = ref('Tets');

</script>

<template>
  <main class="container">
    <h1 class="main-title">Resultados de <span>{{ busqueda }}</span></h1>

    <div>
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Todo</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Canciones</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Albumes</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Artistas</a>
        </li>
      </ul>

      <section class="tab-content">
        <button class="btn d-block">Artistas <fa-icon icon="chevron-right" /></button>
        <div class=" d-inline-flex">
          <ArtistItem class="p-2" v-for="artist in artists" v-bind="artist" :key="artist.id" />
        </div>

        <button class="btn d-block">Canciones <fa-icon icon="chevron-right" /></button>
        <ul class="list-group list-group-flush" >
          <li class="list-group-item" v-for="track in tracks" :key="track.id">
            <SongItem class="p-2" v-bind="track" />
          </li>
        </ul>


      </section>

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
