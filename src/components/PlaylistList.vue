<script setup>
import Playlist from '@/components/PlaylistItem.vue';

defineProps({
  playlists: {
    type: Array,
    default: () => [],
  },
});

</script>

<template>
  <section>

    <div class="px-2" v-if="playlists !== null && playlists !== undefined">
      <h2 >{{ playlists.length }} Listas de reproducción </h2>

      <div class="content playlist">
        <ul class="list-group list-group-flush playlist-list">
          <li class="list-group-item px-0 artist" v-for="playlist in playlists" :key="playlist.id">
            <Playlist v-bind="playlist" />
          </li>
        </ul>
      </div>

    </div>

    <div v-else>
      Cargando...
    </div>

  </section>
</template>

<style>
.playlist {
  background-color: white;

  h2 {
    font-weight: 900;
    font-size: 20px;
  }

  .playlist-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 5px;
  }

  li {
    border: none;
    display: flex;
    justify-content: center;
  }
}
</style>

<style></style>
