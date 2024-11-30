<template>
    <div class="flex-1 bg-cover bg-center backgroundS">
      <InfoSombrio />
    </div>
    
  </template>
  
  <script>
import InfoSombrio from '@/components/ComponentsDecks/InfoSombrio.vue';

  export default {
    name: 'SombrioS',
  
    components: {
       InfoSombrio,

    }
  };
  </script>
  
  <style>
  .backgroundS {
    background-image: url('@/assets/Blueeyes.png');
  }</style>