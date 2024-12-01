<template>
  <div class="flex-1 bg-cover bg-center backgroundA">
    <InfoAlbaz />
  </div>

</template>

<script>
import InfoAlbaz from '@/components/ComponentsDecks/InfoAlbaz.vue';



export default {
  name: 'AlbazZ',

  components: {
    InfoAlbaz

  }
};
</script>

<style>
.backgroundA {
  background-image: url('@/assets/Blueeyes.png');

}
</style>