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

const formatedTime = (number) => {
  const segundos = parseInt(number, 10);

  const minutos = Math.floor(segundos / 60);
  const segundosRestantes = segundos % 60;

  const minutosFormateados = minutos < 10 ? '0' + minutos : minutos;
  const segundosFormateados = segundosRestantes < 10 ? '0' + segundosRestantes : segundosRestantes;

  return minutosFormateados + ':' + segundosFormateados;
};

</script>

<template>
  <div class="trackItem">
    <img :src="album.cover_small" alt="">
    <span>
      {{ title }}
    </span>
    <span>
      {{ artist.name }}
    </span>
    <span>
      {{ album.title }}
    </span>
    <span>
      {{ formatedTime(duration) }}
    </span>
  </div>
</template>

<style scoped lang="scss">
.trackItem {
  display: grid;
  grid-template-columns: 50px 2fr 0.5fr 2fr 50px;
  grid-gap: 10px;

  padding: 0%;
  font-size: 12px;
  align-items: center;

  img {
    width: 40px;
    border-radius: 5px;
  }

  span:last-child {
    color: $grey-medium;
    text-align: right;
  }
}
</style>
