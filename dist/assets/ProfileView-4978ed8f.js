import{_ as c,r as d,o as r,l as o,a as _,c as u,b as e,t as i,p,d as f}from"./index-1fd2a748.js";const g=s=>(p("data-v-322205bb"),s=s(),f(),s),v={class:"profileBlock"},h=g(()=>e("p",null,"Hello! 以下是您的登入資訊：",-1)),I={class:"userInfo"},b=["src"],m={__name:"ProfileView",setup(s){const t=d({}),n=()=>{o.logout(),location.reload()};return r(()=>{o.init({liffId:"2000380110-PLl97Bzj"}).then(()=>{const l=o.getOS();o.isLoggedIn()&&o.getProfile().then(a=>{t.value={...a,os:l}}),o.isLoggedIn()||o.login({redirectUri:"https://cathywu2017.github.io/liff-map/dist"})}).catch(l=>{console.log(l)})}),(l,a)=>(_(),u("div",v,[h,e("div",I,[e("img",{src:t.value.pictureUrl},null,8,b),e("div",null,[e("p",null,"名稱："+i(t.value.displayName),1),e("p",null,"作業環境："+i(t.value.os),1),e("p",null,"使用者ID："+i(t.value.userId),1)])]),e("button",{class:"logoutBtn",onClick:a[0]||(a[0]=B=>n())},"登出")]))}},y=c(m,[["__scopeId","data-v-322205bb"]]);export{y as default};
