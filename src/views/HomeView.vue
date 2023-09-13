<script setup>
import { onMounted } from 'vue';
import liff from '@line/liff';

onMounted(() => {
  liff.init({
    liffId: '2000380110-PLl97Bzj',
    withLoginOnExternalBrowser: true,
  }).then(() => {
    if (liff.isLoggedIn()) {
      window.location.replace('https://cathywu2017.github.io/liff-map/dist/profile');
    }

    if (!liff.isLoggedIn()) {
      liff.login({ redirectUri: 'https://cathywu2017.github.io/liff-map/dist/profile' });
    }
  }).catch((err) => {
    console.log(err);
  });
});
</script>

<template>
  <main>
  </main>
</template>
