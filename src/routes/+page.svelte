<script>
  import { onDestroy, onMount } from "svelte";
  import Header from "../components/header.svelte";
  // let picArray= ['https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/8cdcf1154323267.633fdd6b3efb6.jpg','/assets/home_pic_two.jpeg','/assets/home_pic_three.jpg'];
  $: picCurrent =
    "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/8cdcf1154323267.633fdd6b3efb6.jpg";
  $: picCurrent1 = "assets/home_pic_two.jpeg";
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

<!-- 645A62 -->
<!-- <h1 class=" font-bold text-[100px] text-center border-b border-white">PHOTO</h1> -->
<div class="w-full backImgreverse  rotate-180 z-10">
  <div class="w-full h-full py-10">
    <div class="backImg w-1/2 mx-auto text-white h-[50vh] flex rotate-180">
      <div
        class="flex flex-col justify-between font-bold backdrop-blur-2xl w-full h-full rounded p-2"
      >
        <div>
          <span class=" text-[25px]">Hello!</span>
          <br />
          <span class=" text-[50px] text-[#A9A4A8]">I AM YUSHU</span>
          <br />
          <span>LOCAL PHOTOGRAPHER.</span>
        </div>
        <div>
          <span class="block text-end text-[12px]"
            >BASE IN TAOYUAN, 2023 , ALL RIGHT RESERVED</span
          >
        </div>
      </div>
    </div>
  </div>
</div>

<section class="w-full px-10">
  <h1 class="font-bold py-2 text-lg">LATEST WORK</h1>
  <div class="flex w-full justify-center gap-4 py-2">
    <button class="">landscape</button>
    <button>people</button>
    <button>wedding</button>
  </div>
  <div class="w-1/3 mx-auto overflow-hidden">
    <img src={picCurrent1} alt="homepic" class="w-full h-full" />
  </div>
  <div
    class="flex flex-col w-full justify-center items-center gap-4 py-2 font-bold"
  >
    <span class="">Interested in Working with me?</span>
    <button class="btn ">CONTACT ME</button>
  </div>
</section>
<!-- https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/28d56f154323267.633fdd6b4aae0.jpg -->

<!-- https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/0eb5d3154323267.63ba98ac4b330.jpg -->

<!-- https://mir-s3-cdn-cf.behance.net/project_modules/fs/8640bf154323267.633fdd6b3d3f5.jpg -->

<!-- https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/966731161277057.63df9745b4b39.jpg -->
<style>
  .backImg {
    background-image: url("");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .backImgreverse {
    background-image: url(" https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/28d56f154323267.633fdd6b4aae0.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-blend-mode: darken;
    background-color: tomato;
  }
</style>
