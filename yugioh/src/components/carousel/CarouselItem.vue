<template>
    <div 
      class="carousel-item" 
      :class="{ active: isActive }"
    >
      <img :src="slide" :alt="'Image ' + slide" />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      slide: String,
      isActive: Boolean
    }
  };
  </script>
  
  <style scoped>
  .carousel-item {
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .carousel-item.active {
    opacity: 1;
  }
  </style>
  