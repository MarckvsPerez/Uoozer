<script setup>

defineProps({
  title: {
    type: String,
    default: '',
  },
  artist: {
    type: Object,
    default: () => ({}),
  },
  cover_medium: {
    type: Number,
    default: 0,
  },
});

</script>

<template>
  <div class="AlbumItem">
    <img class="card-img-top border" :src="cover_medium" alt="">

{{ title }}
{{ artist.name }}
  </div>
</template>

<style scoped lang="scss">

</style>
