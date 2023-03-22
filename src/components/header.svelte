<script>
  import NavButton from "./navButton.svelte";
  $:routeObj = [{
    routeName:'Home',
    path:'/',
  },{
    routeName:'Projects',path:'/projects',},
    {routeName:'About',path:'/about',}];
  
</script>
  <nav class="flex fixed top-0 w-full px-10">
    <div class="flex-1">
      <a href="/" class="btn btn-ghost normal-case text-xl">YUSHU</a>
    </div>
      <ul class=" menu-horizontal px-1">
       <li>
         {#each routeObj as {routeName,path},i }
         <NavButton {routeName} href={path} ></NavButton>
         {/each}
        </li>
      </ul>
  </nav>