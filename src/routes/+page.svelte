<script>
  import { onDestroy, onMount } from "svelte";

  let pic = [
    {
      src: [
        {
          source:
            "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/582380157349551.63771db5691cb.jpg",
        },
        {
          source:
            "	https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/949a23157349551.63771db577781.jpg",
        },

        {
          source:
            "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/1981cc154323267.63c7a0b25ffad.jpg",
        },
        {
          source:
            "https://mir-s3-cdn-cf.behance.net/project_modules/fs/d3a47f157477349.6379e79cd13f9.jpg",
        },
      ],
    },
    {
      src: [
        {
          source:
            "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/b2f1bd157349551.63771db573676.jpg",
        },
        {
          source:
            "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/ad7cba157349551.63771db56ee5b.jpg",
        },
        {
          source:
            "https://mir-s3-cdn-cf.behance.net/project_modules/fs/8cdcf1154323267.633fdd6b3efb6.jpg",
        },
        {
          source:
            "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/af3923157477349.63e4938bf2cb9.jpg",
        },
      ],
    },
    {
      src: [
        {
          source:
            "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/58abb5157477349.63e4938c00244.jpg",
        },
        {
          source:
            "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/f4a3bd165576629.6409d22828207.jpg",
        },
        {
          source:
            "https://mir-s3-cdn-cf.behance.net/project_modules/fs/6ead17165576629.6409c8740acbb.jpg",
        },

        {
          source:
            "https://mir-s3-cdn-cf.behance.net/project_modules/fs/6d9c66122301201.632ad3f48f2be.jpg",
        },
      ],
    },
    {
      src: [
        {
          source:
            "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/4c11aa157349551.63771db56aab6.jpg",
        },
        {
          source:
            "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/ad7cba157349551.63771db56ee5b.jpg",
        },

        {
          source:
            "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/17d87d157349551.63771db56bf4e.jpg",
        },
      ],
    },
  ];
  $: picCurrent1 = "assets/home_pic_two.jpeg";
</script>

<!-- 645A62 -->
<div class="w-full backImgreverse rotate-180 z-10">
  <div class="w-full h-full py-10">
    <div class="w-1/2 relative mx-auto text-white h-[50vh] flex rotate-180">
      <div
        class="flex flex-col justify-between font-bold backdrop-blur-2xl w-full h-full rounded p-2"
      >
        <div>
          <div class="backImg top-0 right-0 rounded-full absolute w-32 h-32" />
          <span class=" text-[25px]">Hello!</span>
          <br />
          <span class=" text-[50px] text-[#A9A4A8]">I AM YUSHU</span>
          <br />
          <span class="text-lg">LOCAL PHOTOGRAPHER.</span>
          <br />
          <div class="my-2">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ab
              rerum natus assumenda, ratione animi amet quia aperiam, eum
              praesentium alias harum vero minus eaque adipisci recusandae nulla
              quae iure!</span
            >
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ab
              rerum natus assumenda, ratione animi amet quia aperiam, eum
              praesentium alias harum vero minus eaque adipisci recusandae nulla
              quae iure!</span
            >
          </div>
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
    <button class="btn">landscape</button>
    <button class="btn">people</button>
    <button class="btn">wedding</button>
  </div>
  <div class=" mx-auto flex flex-wrap justify-center">
    {#each pic as { src }, i}
      <div class=" max-w-[25%]">
        {#each src as { source }, i}
          <img class="w-[100%] align-middle p-1" src={source} alt="homepic" />
        {/each}
      </div>
    {/each}
  </div>
  <div
    class="flex flex-col w-full justify-center items-center gap-4 py-2 font-bold"
  >
    <span class="">Interested in Working with me?</span>
    <button class="btn">CONTACT ME</button>
  </div>
</section>

<style>
  .backImg {
    background-image: url("https://mir-s3-cdn-cf.behance.net/project_modules/fs/8640bf154323267.633fdd6b3d3f5.jpg");
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
