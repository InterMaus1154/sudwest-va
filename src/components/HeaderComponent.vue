<script setup>

import PlaneIcon from "@/components/icons/PlaneIcon.vue";
</script>

<template>
  <header class="shadow-sm p-4 bg-gray-50">
    <div class="grid grid-cols-3 gap-4 items-center">
      <!--header and logo-->
      <div class="flex gap-2 justify-self-start">
        <div
          class="p-4 flex justify-center items-center text-white font-bold bg-yellow-400 rounded-sm">
          <PlaneIcon size="32" color="black"/>
        </div>
        <div>
          <h1 class="text-3xl font-bold">Südwest Virtual Airlines</h1>
          <h2 class="text-yellow-400 font-bold">Wir sind Süden</h2>
        </div>
      </div>
      <!--main navigation-->
      <nav class="justify-self-center">
        <ul class="flex gap-4 items-center">
          <li>
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/about">About</RouterLink>
          </li>
          <li>
            <RouterLink to="/contact">Contact</RouterLink>
          </li>
        </ul>
      </nav>
      <!---->
      <div class="justify-self-end flex gap-2 header-cta-buttons">
        <button
          class="font-bold p-2 rounded-sm cursor-pointer border-2 border-gray-100 shadow-md">
          Login
        </button>
        <button
          class="font-bold p-2 rounded-sm cursor-pointer shadow-md bg-yellow-400 text-black hover:bg-yellow-300 transition-colors">
          Join our VA
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
@reference '../app.css';

nav ul a {
  @apply text-gray-600 hover:text-gray-800 transition-colors;
  position: relative;
}

nav ul a::after{
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  width: 100%;
  height: 3px;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 250ms ease-out;
  @apply bg-yellow-400;
}

nav ul a:hover::after{
  transform-origin: left;
  transform: scaleX(1);
  transition: transform 250ms ease-in;
}

.header-cta-buttons button{
  @apply hover:-translate-y-2 transition-transform duration-[250ms];
}

</style>
