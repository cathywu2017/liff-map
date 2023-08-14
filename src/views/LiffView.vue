<script setup>
// import { ref, onMounted } from 'vue';
import liff from '@line/liff';

if(liff.isLoggedIn()) {

  liff
  .getProfile()
  .then((profile) => {
    console.log('profile', profile);
  })
  .catch((err) => {
    console.log("error", err);
  });
}

// liff.login({
//   // 使用者登入後要去到哪個頁面
//   redirectUri: 'http://localhost:5173/map'
// });


</script>

<template>
  <div></div>
</template>
