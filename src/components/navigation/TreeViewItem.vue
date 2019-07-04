<template>
    <li :class="{active:open}">
        <a href="" @click.prevent="toggle">
            {{ tree.title }}
            <i class="cuscon-ios-arrow-down" v-if="hasSubTree"></i>
            <span class="page-num" v-if="haspageNum">{{tree.pagenum}}</span>
        </a>
        <!-- 재귀호출을 이용한 서브메뉴 렌더링 -->
        <transition 
            name="expand"
        >
            <ul v-if="open" class="child" :style="{display: [open? 'block' : 'none' ] }">
            <li is="tree-view-item" v-for="(item,k) in tree.subTree" :key="k" :tree="item"/>
            </ul>
        </transition>
    </li>    
</template>

<script>
import Vue from 'vue';

Vue.prototype.EventBus = new Vue();

export default {
  name: 'TreeViewItem',
  props: {
    tree: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      open: false
    }
  },
  mounted() {
    this.open = this.tree.open;
  },
  computed: {
    displayOpenCloseIcon() {
      return this.open ? '▾' : '‣'
    },
    hasSubTree() {
      const subTree = this.tree.subTree;
      return subTree && subTree.length;
    },
    haspageNum(){
        const pageNum = this.tree.pagenum;
        return pageNum && pageNum.length;
    }
  },
  methods: {
    toggle() {
      const subTree = this.tree.subTree;
      const index = this.tree.index;
      // sub Menu가 있으면 Tree Open, 없을경우 페이지 이동(이동시 Navi 초기화)
      if(subTree !== undefined){
          this.open = !this.open;
      }else{
          //Navi Close Event Bus
          this.EventBus.$emit('closeNavi');
          //page이동 Event Bus
          this.EventBus.$emit("changePage",index);
      }
    },
  }
    
}
</script>
<style lang="scss">
.expand-enter-active,
.expand-leave-active {
  height: auto;
  max-height: 25em;
  transition: max-height 0.3s ease-in-out;
  overflow: hidden;
}

.expand-enter,
.expand-leave-to {
  max-height: 0;
}
</style>


