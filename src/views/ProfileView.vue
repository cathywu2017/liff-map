<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import liff from '@line/liff';

const router = useRouter();
const data = ref({});

const handleLogout = () => {
  liff.logout();

  router.push({ path: '/liff-map/dist/profile' })
}

onMounted(() => {
  liff
    .init({ liffId: '2000380110-PLl97Bzj' })
    .then(() => {
      const os = liff.getOS();

      if (liff.isLoggedIn()) {
        liff
          .getProfile()
          .then((profile) => {
            data.value = {...profile, os};
          })
      }

      if (!liff.isLoggedIn()) {
        liff.login({ redirectUri: 'https://cathywu2017.github.io/liff-map/dist' });
      }
    })
    .catch((err) => {
      console.log(err);
    })
});
</script>

<template>
  <div class="profileBlock">
    <p>Hello! 以下是您的登入資訊：</p>
    <div class="userInfo">
      <img :src="data.pictureUrl" />
      <div>
        <p>名稱：{{ data.displayName }}</p>
        <p>作業環境：{{ data.os }}</p>
        <p>使用者ID：{{ data.userId }}</p>
      </div>
    </div>
    <button class="logoutBtn" @click="handleLogout()">登出</button>
  </div>
</template>

<style scoped>
.profileBlock {
  width: 90%;
  margin: 2rem auto 0;
  text-align: center;
}

.userInfo {
  margin: 2rem auto 0;
  display: flex;
  flex-flow: wrap;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 0;
  border: 1px solid transparent;
  border-radius: .5rem;
  box-shadow: 0px 0px 10px 5px rgb(184 184 184 / 30%);
}

.userInfo > img {
  width: 20%;
  min-width: 100px;
  margin-bottom: 1rem;
  margin-right: 1rem;
}

.userInfo > div {
  padding: 0 1.2rem;
  margin-bottom: 1rem;
  text-align: left;
  word-break: break-all;
}

.logoutBtn {
  margin: 1.3rem 0;
  background: hsl(160, 100%, 37%);
  border: 0;
  border-radius: 10px;
  color: #fff;
  padding: .2rem 1rem;
}

.logoutBtn:hover {
  background: hsla(160, 100%, 37%, 0.3);
  cursor: pointer;
}

@media (min-width: 1024px) {
  .profileBlock {
    width: 45%;
  }
}
</style>
