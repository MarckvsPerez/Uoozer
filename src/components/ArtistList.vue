<script setup>
import ArtistItem from '@/components/ArtistItem.vue';

defineProps({
  artists: {
    type: Array,
    default: () => [],
  },
});

</script>

<template>
    <section class="tab-content artistslist">

      <h2 class="">{{ artists.length }} artistas </h2>
        <ul class="list-group list-group-flush artists-list">
            <li class="list-group-item px-0 artist" v-for="artist in artists" :key="artist.id">
                <ArtistItem v-bind="artist" />
            </li>
        </ul>

    </section>
</template>

<style>
.artistslist {
  h2 {
    font-weight: 900;
    font-size: 20px;
  }

  .artists-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 5px;
  }
}
</style>
