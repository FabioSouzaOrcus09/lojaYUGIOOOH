<template>
  <nav
    id="sidebar" 
    class="absolute top-0 right-0 flex flex-col items-center w-50
           text-white p-4 h-full gap-4"
  >
    <h2 class="font-semibold">TOP 10 CARDS</h2>

    <div class="flex-auto w-20 h-20 container space-y-6 relative">
      <!-- Linha Vertical à Esquerda -->
      <div class="absolute left-0 top-0 h-full w-1 bg-white/50"></div>

      <!-- Card 1 -->
      <div class="flex flex-col items-center">
        <img src="@/assets/card1.png" alt="card1" class="w-24 h-32 ml-5 object-contain">
        <p class="font-sans text-justify text-xs ml-5 mt-1">Card Name</p>
        <p class="border-b-2 border-white w-full mt-3"></p> <!-- Linha horizontal -->
      </div>

      <!-- Card 2 -->
      <div class="flex flex-col items-center">
        <img src="@/assets/card2.png" alt="card2" class="w-24 ml-5 h-32 object-contain">
        <p class="font-sans text-justify text-xs ml-5 mt-1">Card Name</p>
        <p class="border-b-2 border-white w-full mt-3"></p> <!-- Linha horizontal -->
      </div>
    </div>
  </nav>
</template>
