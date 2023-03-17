
<a class="text-[60px] hover:italic transition-all leading-tight" class:active={$page.url.pathname == href} class:inactive={$page.url.pathname != href} {href}>{routeName}
</a>
<script>
import { page } from '$app/stores';

  export let routeName = '無'
  export let href ="/"
</script>
<style>
  .active{
    font-style: italic;
    color: ghostwhite;
  }
  .inactive{
    color: gray;

  }
</style>
