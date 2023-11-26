<script setup>

defineProps({
  name: {
    type: String,
    default: '',
  },
  picture_medium: {
    type: String,
    default: '',
  },
  nb_fan: {
    type: Number,
    default: 0,
  },
});

const formatedFansn = (number) => {
  return new Intl.NumberFormat().format(number);
};
</script>

<template>
  <div class="card border-0 artist-item">
    <img class="card-img-top border" :src="picture_medium" alt="">
    <div class="card-body">
      <span>{{ name }}</span>
      <br>
      <span>{{ formatedFansn(nb_fan) }} fans</span>
    </div>
  </div>
</template>

<style>
.artist-item {
  width: 180px;
  border: none;
  text-align: center;

  img {
    border-radius: 50%;
  }

  span {
    font-size: 12px;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 150px;
  }

  span:nth-child(1) {
    font-weight: bold;
  }

}
</style>
