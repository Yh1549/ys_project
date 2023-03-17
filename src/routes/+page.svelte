
<script>
  import { onDestroy, onMount } from "svelte";

 let pic_src = '/assets/home_pic_one.jpeg'

let toggle = ()=>{
  pic_src = '/assets/home_pic_two.jpeg'
}

let picArray= ['/assets/home_pic_one.jpeg','/assets/home_pic_two.jpeg','/assets/home_pic_three.jpg'];
$: picCurrent = '/assets/home_pic_one.jpeg';
let picLoop = ()=>{
  for(let i = 0 ;i<=picArray.length - 1;i++){
      if(picCurrent == picArray[i]){
        if((i+1) == picArray.length){
          picCurrent = picArray[0]  
        }else{
          picCurrent = picArray[i+1];
        }
        break;
      }
    }
}
let LoopInterval
onMount(async()=>{
  LoopInterval = setInterval(picLoop,700)
})
onDestroy(async()=>{
  clearInterval(LoopInterval)
})
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