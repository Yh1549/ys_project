<script> import "../app.css"
import Header from "../components/header.svelte";
import Footer from "../components/footer.svelte";
export const prerender = true;
  </script>

  <Header />
    <main/>
    <slot/>
   <Footer />