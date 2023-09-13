<script setup>
import { RouterLink, RouterView } from 'vue-router'

const path = import.meta.env.VITE_BASE_PATH;
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink :to="{ path: `${path}profile` }">profile</RouterLink>
        <RouterLink :to="{ path: `${path}map` }">map</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />

  <footer>Copyright © 2023 Cathy. All rights reserved.</footer>
</template>

<style scoped>
header {
  background-color: #f0f0f0;
  line-height: 1.5;
  width: 100%;
}

nav {
  width: 100%;
  text-align: center;
  padding: 1rem 2rem;
  font-size: 1rem;
}

nav a.router-link-exact-active {
  color: hsl(160, 100%, 37%);
}

nav a {
  display: inline-block;
  padding: 0 1rem;
}

footer {
  text-align: center;
  color: #ccc;
  margin-top: 2rem;
}
</style>
