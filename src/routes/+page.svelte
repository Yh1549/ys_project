
<script>
  import { onDestroy, onMount } from "svelte";

// let picArray= ['https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/8cdcf1154323267.633fdd6b3efb6.jpg','/assets/home_pic_two.jpeg','/assets/home_pic_three.jpg'];
$: picCurrent = 'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/8cdcf1154323267.633fdd6b3efb6.jpg';
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
<h1 class=" font-bold text-[150px] text-center border-b border-white">YU-SHU</h1>
<div class=" flex justify-between">
  <span>BASE IN TAOYUAN</span>
  <span class="text-center">BRANDS & PEOPLE <br>PHOTOGRAPHER</span>
  <span>2023 , ALL RIGHT RESERVED</span>
</div>
<section class="w-full">
  <div class="w-1/3 mx-auto overflow-hidden">
    <img src={picCurrent} alt="homepic" class="w-full h-full">
  </div>
</section>