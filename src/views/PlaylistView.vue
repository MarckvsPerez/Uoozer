<script setup>
import {ref, onMounted} from 'vue';
import {getPlaylist} from '../api';
import {useRoute} from 'vue-router';
import TrackList from '@/components/TrackList.vue';
import LoadingItem from '../components/LoadingItem.vue';

const route = useRoute();
const playlistView = ref({});
const tracks = ref([]);
const isLoaded = ref(false);

onMounted(async () => {
  try {
    const res = await getPlaylist(route.params.name);
    playlistView.value = res;
    tracks.value = playlistView.value.tracks.data;
  } catch (error) {
    console.error('Error fetching playlists:', error);
  } finally {
    isLoaded.value = true;
  }
});
</script>

<template>
  <main class="container">
    <div v-if="isLoaded === true">

      <div class="playlist-title">
        <div class="p-2">
          <img class="card-img-top border" :src="playlistView.picture_big">
        </div>
        <div>
          <h1 class="main-title">{{ playlistView.title }}</h1>
          <p> {{ playlistView.description }}</p>
        </div>
      </div>
      <div class=" playlist-content">
        <TrackList :tracks="tracks" />
      </div>
    </div>
    <div class="h-100 loader" v-else>
      <LoadingItem />
    </div>
  </main>
</template>

<style>
.playlist-title {
  display: flex;
  align-items: center;

  img {
    width: 150px;
  }
}

.playlist-content {
  background-color: white;
}
</style>

