
<script>
  import { onDestroy, onMount } from "svelte";
  import Header from "../components/header.svelte";
// let picArray= ['https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/8cdcf1154323267.633fdd6b3efb6.jpg','/assets/home_pic_two.jpeg','/assets/home_pic_three.jpg'];
$: picCurrent = 'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/8cdcf1154323267.633fdd6b3efb6.jpg';
$: picCurrent1 = 'assets/home_pic_two.jpeg';
// let picLoop = ()=>{
//   for(let i = 0 ;i<=picArray.length - 1;i++){
//       if(picCurrent == picArray[i]){
//         if((i+1) == picArray.length){
//           picCurrent = picArray[0]  
//         }else{
//           picCurrent = picArray[i+1];
//         }
//         break;
//       }
//     }
// }
// let LoopInterval
// onMount(async()=>{
//   LoopInterval = setInterval(picLoop,700)
// })
// onDestroy(async()=>{
//   clearInterval(LoopInterval)
// })
</script>
<!-- <h1 class=" font-bold text-[150px] text-center border-b border-white">THE-大便怪</h1> -->
<div class="backImg text-white h-[75vh] flex justify-center items-center">
  <div class=" flex justify-center items-center text-end w-[300px] h-[300px] rounded-full bg-slate-600">
      <span class="font-bold">Hello</span>
      <br>
      <span>我是</span>
      <br>
      <span>XXX</span>
  </div>
</div>
<div class=" flex justify-between">
  <span>BASE IN TAOYUAN</span>
  <span class="text-center">BRANDS & PEOPLE <br>PHOTOGRAPHER</span>
  <span>2023 , ALL RIGHT RESERVED</span>
</div>
<section class="w-full">
  <div class="w-1/3 mx-auto overflow-hidden">
    <img src={picCurrent1} alt="homepic" class="w-full h-full">
  </div>
</section>
<style>
  .backImg{
    background-image: url("https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/7597b7157349551.63771db56d73a.jpg");
    background-position: center;
    background-size: cover;
  }
</style>