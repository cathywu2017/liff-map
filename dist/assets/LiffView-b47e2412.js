import{l as o,o as r,c}from"./index-b25cfc31.js";const s={__name:"LiffView",setup(t){return o.isLoggedIn()&&o.getProfile().then(e=>{console.log("profile",e)}).catch(e=>{console.log("error",e)}),(e,l)=>(r(),c("div"))}};export{s as default};