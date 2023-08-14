<script setup>
import liff from '@line/liff';
// import TheWelcome from '../components/TheWelcome.vue'

liff.init({
    liffId: '2000380110-PLl97Bzj'
}).then(() => {
    console.log('init', liff.isLoggedIn());  // 判斷開啟此網頁的 LINE 使用者是否為登入狀態

    if (!liff.isLoggedIn()) {
      console.log('ccc')
      liff.login({ redirectUri: 'https://cathywu2017.github.io/liff-map/dist/liff' });
    }
});


// https://access.line.me/oauth2/v2.1/authorize/consent?app_id=2000380110-PLl97Bzj&client_id=2000380110&scope=openid+profile&state=5EJj7tjio52f&response_type=code&code_challenge_method=S256&code_challenge=Hbkxv_EF0hb6b9pYOFHnj1xsDD0KMh3gvhGGcJg6aEE&liff_sdk_version=2.22.2&type=L&redirect_uri=https%3A%2F%2Fcathywu2017.github.io%2Fliff-map%2Fdist%2F&bot_prompt=normal
</script>

<template>
  <main>
  </main>
</template>
