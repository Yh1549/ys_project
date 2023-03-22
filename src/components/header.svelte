<script>
  import NavButton from "./navButton.svelte";
  $: routeObj = [
    {
      routeName: "Home",
      path: "/",
    },
    {
      routeName: "Projects",
      path: "/projects",
    },
    { routeName: "About", path: "/about" },
  ];
</script>

<nav
  class="flex justify-between fixed items-center top-0 w-full py-5 px-10 z-50 text-white"
>
  <div class="flex backdrop-blur-sm">
    <a href="/" class="text-xl "
      ><span class=" w-full border-2 border-white font-bold p-2 ">
        YUSHU
      </span></a
    >
  </div>
  <ul class=" menu-horizontal px-1 gap-3">
    {#each routeObj as { routeName, path }, i}
      <NavButton {routeName} href={path} />
    {/each}
  </ul>
</nav>
