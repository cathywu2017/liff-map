<script setup>
import { ref, onMounted } from 'vue';
import liff from '@line/liff';
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const data = ref({});
const mapContainer = ref(null);

const handleMap = (profileData, latitude, longitude) => {
  const map = L.map(mapContainer.value, {
    center: [23.611, 120.768],
    zoom: 8,
  });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

    // L.marker
  L.marker([latitude, longitude], {
    draggable: true,
  }).addTo(map);

  // 圖標上添加訊息
  // 1. 直接在圖標上使用bindPopup()設定要顯示的內容
  // marker.bindPopup("<b>Hello world!</b><br>I am a marker.").openPopup();

  // 2. 除了在圖標上顯示訊息，也可以在自己設定的經緯度顯示訊息
  L.popup()
    .setLatLng([latitude, longitude])
    .setContent(`
      <div class="popContent">
        <img class="head" src=${profileData.pictureUrl} />
        <span class="name">${profileData.displayName}</span>
      </div>
      <div>緯度：${latitude}<br />經度：${longitude}</div>
    `)
    .openOn(map);

  // 地圖監聽事件
  const popup = L.popup();
  map.on("click", (e) => {
    console.log(e.latlng);
    popup
      .setLatLng(e.latlng)
      .setContent("You clicked the map at " + e.latlng.toString())
      .openOn(map);
  });
}

onMounted(() => {
  let latitude = 0;
  let longitude = 0;

  navigator.geolocation.getCurrentPosition(function (data) {
    latitude = data.coords.latitude;
    longitude = data.coords.longitude;
    console.log('緯度：',latitude);
    console.log('經度：',longitude);
  });

  liff
    .init({ liffId: '2000380110-PLl97Bzj' })
    .then(() => {
      const os = liff.getOS();

      if (liff.isLoggedIn()) {
        liff
          .getProfile()
          .then((profile) => {
            data.value = {...profile, os};

            handleMap(profile, latitude, longitude);
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
  <div class="mapBlock">
    <div class="mapContainer" ref="mapContainer"></div>
  </div>
</template>

<style>
.mapContainer {
  width: 100%;
  height: 600px;
}

.popContent {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.head {
  width: 30px;
  margin-right: 10px;
}

.leaflet-popup-content {
  width: auto;
  min-width: 80px;
}

.leaflet-popup {
  bottom: 20px !important;
}
</style>
