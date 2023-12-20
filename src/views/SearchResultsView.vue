<script setup>
import {ref, onMounted, watch} from 'vue';
import {useRoute} from 'vue-router';
import {getTracks, getAlbums, getArtists} from '../api';

import AllList from '@/components/AllList.vue';
import TrackList from '@/components/TrackList.vue';
import ArtistList from '@/components/ArtistList.vue';
import AlbumList from '@/components/AlbumList.vue';
import LoadingItem from '@/components/LoadingItem.vue';


const route = useRoute();

const tracks = ref([]);
const tracksShort = ref([]);
const albums = ref([]);
const albumsShort = ref([]);
const artists = ref([]);
const artistsShort = ref([]);


const busqueda = ref('');
const activeTab = ref('todo');
const isLoaded = ref(false);

const changeTab = (tab) => {
  activeTab.value = tab;
};

onMounted(async () => {
  try {
    busqueda.value = route.params.search;

    const resTracks = await getTracks(busqueda.value);
    tracks.value = resTracks.data;
    tracksShort.value = tracks.value.slice(0, 6);

    const resArtists = await getArtists(busqueda.value);
    artists.value = resArtists.data;
    artistsShort.value = artists.value.slice(0, 6);

    const resAlbums = await getAlbums(busqueda.value);
    albums.value = resAlbums.data;
    albumsShort.value = albums.value.slice(0, 6);
  } catch (error) {
    console.error('Error fetching playlists:', error);
  } finally {
    isLoaded.value = true;
  }
});

watch(() => route.params, () => {
  busqueda.value = route.params.search || '';
});
</script>

<template>
  <main class="container">
    <h1 class="main-title" v-if="busqueda != ' ' " >Resultados de <span>{{ busqueda }}</span></h1>
    <h1 class="main-title" v-else >Todos los resultados</h1>

    <div v-if="isLoaded === true" >
      <ul class="nav nav-tabs">
        <li class="nav-item" @click="changeTab('todo')" :class="{ 'active': activeTab === 'todo' }">
          <a class="nav-link" :class="{ 'active': activeTab === 'todo' }" aria-current="page" href="#">Todo</a>
        </li>
        <li class="nav-item" @click="changeTab('canciones')" :class="{ 'active': activeTab === 'canciones' }">
          <a class="nav-link" :class="{ 'active': activeTab === 'canciones' }" href="#">Canciones</a>
        </li>
        <li class="nav-item" @click="changeTab('albumes')" :class="{ 'active': activeTab === 'albumes' }">
          <a class="nav-link" :class="{ 'active': activeTab === 'albumes' }" href="#">Álbumes</a>
        </li>
        <li class="nav-item" @click="changeTab('artistas')" :class="{ 'active': activeTab === 'artistas' }">
          <a class="nav-link"  :class="{ 'active': activeTab === 'artistas' }" href="#">Artistas</a>
        </li>
      </ul>

      <!-- Renderiza AllList según la pestaña activa -->
      <AllList v-if="activeTab === 'todo'" :artists="artistsShort" :tracks="tracksShort" :albums="albumsShort" :changeTab="changeTab"/>
      <TrackList v-else-if="activeTab === 'canciones'" :tracks="tracks"/>
      <AlbumList v-else-if="activeTab === 'albumes'" :albums="albums" />
      <ArtistList v-else-if="activeTab === 'artistas'" :artists="artists" />
    </div>

    <div class="h-100 loader" v-else>
      <LoadingItem/>
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
