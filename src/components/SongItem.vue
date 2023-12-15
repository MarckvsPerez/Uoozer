<script setup>

defineProps({
  title: {
    type: String,
    default: '',
  },
  album: {
    type: Object,
    default: () => ({}),
  },
  artist: {
    type: Object,
    default: () => ({}),
  },
  duration: {
    type: Number,
    default: 0,
  },
});

</script>

<template>
  <div class="trackItem">
    <img :src="album.cover_small" alt="">
    {{ title }} {{ artist.name }} {{ album.title }} {{ duration }}
  </div>
</template>

<style>
.trackItem {
  img {
    width: 40px;
  }
}
</style>
