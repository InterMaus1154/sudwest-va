<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
</script>

<template>
  <div>
    <HeaderComponent/>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>
