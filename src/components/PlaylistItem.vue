<script setup>
import {RouterLink} from 'vue-router';

defineProps({
  title: {
    type: String,
    default: '',
  },
  user: {
    type: Object,
    default: () => ({}),
  },
  picture_big: {
    type: String,
    default: '',
  },
  id: {
    type: Number,
    default: 0,
  },
});

</script>

<template>
  <div class="card border-0 album-item">
    <router-link :to="`/playlist/${id}`">
    <img class="card-img-top border" :src="picture_big" alt="">
    <div class="card-body">
      <span>{{ title }}</span>
      <br>
      <span>{{ user.name }}</span>
    </div>
  </router-link>
  </div>
</template>

<style scoped lang="scss">
.album-item{
  width: 180px;
  border: none;
  text-align: left;
  background-color: $grey-light;
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
