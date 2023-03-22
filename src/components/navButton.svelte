<script>
  import { page } from "$app/stores";

  export let routeName = "無";
  export let href = "/";
</script>

<a
  class="  hover:italic transition-all leading-tight "
  class:active={$page.url.pathname == href}
  class:inactive={$page.url.pathname != href}
  {href}
  >{routeName}
</a>

<style>
  .active {
    font-style: italic;
    color: white;
    border-bottom: 1px solid white;
  }
  .inactive {
    color: #645a62;
  }
</style>
