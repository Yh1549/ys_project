<script>
  import NavButton from "./navButton.svelte";
  $:routeObj = [{
    routeName:'Home',
    path:'/',
  },{
    routeName:'Projects',path:'/projects',},
    {routeName:'About',path:'/about',}];
  
</script>
  <nav class="border-b-[1px] px-5 border-white flex flex-wrap justify-between">
    {#each routeObj as {routeName,path},i }
    
    <NavButton {routeName} href={path} ></NavButton>
    
    {/each}
  </nav>
