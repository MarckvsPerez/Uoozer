<script setup>
import {ref, onMounted} from 'vue';
import {getPlaylists} from '../api';
import PlaylistList from '@/components/PlaylistList.vue';

const playlists = ref(null);

onMounted(async () => {
  try {
    const res = await getPlaylists();
    playlists.value = res.data;
  } catch (error) {
    console.error('Error fetching playlists:', error);
  }
});
</script>

<template>
    <main class="container">
            <PlaylistList :playlists="playlists" />
    </main>
</template>


