<template>
    <div class="flex-1 bg-cover bg-center backgroundS">
      <InfoProduct />
    </div>
  </template>
  
  <script>
import InfoProduct from '@/components/InfoProduct.vue';
  export default {
    name: 'SombrioS',
  
    components: {
       InfoProduct,

    }
  };
  </script>
  
  <style>
  .backgroundS {
    background-image: url('@/assets/Blueeyes.png');
  }</style>