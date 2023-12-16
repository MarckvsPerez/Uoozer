<script setup>
import AlbumItem from '@/components/AlbumItem.vue';

defineProps({
  albums: {
    type: Array,
    default: () => [],
  },
});

</script>

<template>
  <section class="tab-content tracklist">

    <h2 class="">{{ albums.length }} álbumes </h2>

    <ul class="list-group list-group-flush albums-list">
      <li class="list-group-item px-0 " v-for="album in albums" :key="album.id">
        <AlbumItem v-bind="album" />
      </li>
    </ul>

  </section>
</template>

<style>
.tracklist {
  h2 {
    font-weight: 900;
    font-size: 20px;
  }

  .albums-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 5px;
  }
}
</style>
