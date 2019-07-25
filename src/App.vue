<template>
  <div id="wrap" class="max-container">
    <Spinner v-show="loading"/>
    <Cover/>
    <!-- <Guide/> -->
    <Header/>
    <Drawer/>
    <Main @setSpinner="setSpin"/>
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
import Spinner from '@/components/spinner/Spinner.vue'

import Vue from 'vue'

Vue.prototype.EventBus = new Vue();

export default {
  components:{
    Main,
    Header,
    Cover,
    Guide,
    Drawer,
    Footer,
    Spinner
  },
  data(){
    return{
      loading: true
    }
  },
  mounted(){
    var self = this;
    // this.EventBus.$on('setSpinner', function(){
    //     console.log("setSpinner2");
    //   });
    // this.$nextTick(function () {
    //   // 모든 화면이 렌더링된 후 실행합니다.
    //   self.EventBus.$on('setSpinner', function(){
    //     console.log("setSpinner");
    //   });
    //   // console.log("setSpinner");
    //   self.loading = !self.loading;
    // });
  },
  methods:{
    setSpin: function() {
      var self = this;
      console.log("setSpinner");
      this.$nextTick(function() {
        setTimeout(() => {
          self.loading = !self.loading;
        }, 1000);
      });
    }
  }


}
</script>


<style lang="scss">
@import "@/assets/common.scss";


</style>
