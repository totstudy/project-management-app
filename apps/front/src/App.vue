<script lang="ts" setup>
import { RouterView } from 'vue-router'

</script>

<template>
  <main class="container">
    <RouterView />
  </main>
</template>

<style scoped>
.container {
  /* display: flex;
  justify-content: center; */
  max-height: 100%;
  text-align: center;
}

.container > div {
  padding: 2rem;
}
</style>
