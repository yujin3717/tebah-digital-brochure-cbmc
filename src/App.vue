<template>
  <div id="wrap" class="max-container">
    <Cover/>
    <Guide/>
    <Header/>
    <Drawer/>
    <Main/>
    <Footer/>
  </div>
</template>

<script>
import Main from '@/components/main/Main.vue'
import Header from '@/components/header/Header.vue'
import Cover from '@/components/cover/Cover.vue'
import Guide from '@/components/guide/Guide.vue'
import Drawer from '@/components/navigation/Drawer.vue'
import Footer from '@/components/footer/Footer.vue'

export default {

  components:{
    Main,
    Header,
    Cover,
    Guide,
    Drawer,
    Footer
  }
  
}
</script>


<style lang="scss">

</style>
