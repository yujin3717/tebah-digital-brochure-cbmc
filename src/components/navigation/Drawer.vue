<template>
  <div class="Drawer">
    <button id="toggle-table-of-pages" type="button" @click.prevent="handleNavi">
      <i class="cuscon-android-menu"></i>
    </button>
    <div id="table-of-pages" v-bind:class="[isActive? 'show' : '' ]">
      <div class="inner-wrap">
        <div class="quickmenu-block">
          <div class="quickmenu-block-inner" data-scrollbar>
            <ul class="parent">
              <tree-view-item v-for="(tree,i) in treeData" :key="i" :tree="tree"/>
            </ul>
          </div>
        </div>
        <!-- <div class="copyright-block">
          <a @click="handleModal" href="#publish-modal">ⓒPUBLISH</a>
        </div> -->
      </div>
      <div class="closebtn" @click.prevent="closeNavi">
        <i class="cuscon-ios-close-outline"></i>
      </div>
    </div>
    <transition name="fade" v-on:after-enter="afterEnter">
      <div
        id="table-of-pages-overlay"
        v-bind:style="{display: [flag? 'block' : 'none' ] }"
        v-if="flag"
        @click.prevent="closeNavi"
      ></div>
    </transition>
  </div>
</template>

<script>
import Vue from "vue";
import TreeViewItem from "./TreeViewItem";

Vue.prototype.EventBus = new Vue();

export default {
  components: {
    TreeViewItem
  },
  data() {
    return {
      flag: false,
      active: false,
      drawer: null,
      isActive: false,
      // Navi TreeMenu Array
      treeData: [
        {
          title: "청년초청집회",
          open: false,
          index: 1
        },
        {
          title: "강사 프로필",
          open: false,
          index: 2
        },
        {
          title: "콘셉트",
          open: false,
          index: 3
        },
        {
          title: "집회내용",
          open: false,
          subTree: [
            {
              title: "집회내용 PART 1",
              pagenum: "P.04",
              index: 4
            },
            {
              title: "집회내용 PART 2",
              pagenum: "P.05",
              index: 5
            }
          ]
        }
      ]
    };
  },
  mounted() {
    // 페이지 이동시 펼쳐진 Navi Close Event Bus
    const self = this;
    this.EventBus.$on("closeNavi", function() {
      self.flag = false;
      self.isActive = false;
    });
  },
  methods: {
    handleNavi() {
      this.flag = !this.flag;
    },
    afterEnter(el) {
      this.isActive = !this.isActive;
    },
    closeNavi() {
      this.flag = false;
      this.isActive = false;
    },
    handleModal() {
      // PublishModal EventBus
      event.preventDefault();
      this.EventBus.$emit("initModal");
    }
  }
};
</script>


<style lang="scss" scoped>
.v-list__tile .theme--light {
  padding-left: 0px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
