<script setup>
import TrackItem from '@/components/TrackItem.vue';

defineProps({
  tracks: {
    type: Array,
    default: () => [],
  },
});

</script>

<template>
    <section class="tab-content tracklist">

      <h2 class="">{{ tracks.length }} canciones </h2>
        <ul class="list-group list-group-flush">
            <li class="list-group-item px-0 " v-for="track in tracks" :key="track.id">
                <TrackItem v-bind="track" />
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
