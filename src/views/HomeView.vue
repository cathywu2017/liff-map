<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import liff from '@line/liff';

const router = useRouter();

onMounted(() => {
  liff.init({
    liffId: '2000380110-PLl97Bzj',
    withLoginOnExternalBrowser: true,
  }).then(() => {
    if (liff.isLoggedIn()) {
      router.push({ path: '/liff-map/dist/profile' })
    }

    if (!liff.isLoggedIn()) {
      liff.login({ redirectUri: 'https://cathywu2017.github.io/liff-map/dist' });
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
