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
  <div class="card border-0 album-item">
    <img class="card-img-top border" :src="cover_medium" alt="">
    <div class="card-body">
      <span>{{ title }}</span>
      <br>
      <span>{{ artist.name }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.album-item{
  width: 180px;
  border: none;
  text-align: left;
}

span {
    font-size: 12px;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 150px;
  }
  span:first-child {
    font-weight: 900;
  }
</style>
