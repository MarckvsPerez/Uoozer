<script setup>
import ArtistItem from '@/components/ArtistItem.vue';
import TrackItem from '@/components/TrackItem.vue';
import AlbumItem from '@/components/AlbumItem.vue';

defineProps({
  tracks: {
    type: Array,
    default: () => [],
  },
  artists: {
    type: Array,
    default: () => [],
  },
  albums: {
    type: Array,
    default: () => [],
  },
});

</script>

<template>
    <section class="tab-content">

        <ul class="list-group list-group-flush">
            <li class="list-group-item px-0 ">
                <button class="btn d-block">Canciones <fa-icon icon="chevron-right" /></button>
            </li>
            <li class="list-group-item px-0 " v-for="track in tracks" :key="track.id">
                <TrackItem v-bind="track" />
            </li>
        </ul>

        <button class="btn d-block">Álbumes <fa-icon icon="chevron-right" /></button>
        <div class=" d-inline-flex">
            <AlbumItem class="p-2" v-for="album in albums" v-bind="album" :key="album.id" />
        </div>

        <button class="btn d-block">Artistas <fa-icon icon="chevron-right" /></button>
        <div class=" d-inline-flex">
            <ArtistItem class="p-2" v-for="artist in artists" v-bind="artist" :key="artist.id" />
        </div>


    </section>
</template>
