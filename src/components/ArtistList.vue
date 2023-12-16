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
    <section class="tab-content tracklist">

        <ul class="list-group list-group-flush">
          <li class="list-group-item px-0 ">
                <h2 class="">{{ artists.length }} canciones </h2>
            </li>
            <li class="list-group-item px-0 " v-for="artist in artists" :key="artist.id">
                <ArtistItem v-bind="artist" />
            </li>
        </ul>

    </section>
</template>

<style>
.tracklist {
  h2{
    font-weight: 900;
    font-size: 20px;
  }
}
</style>
