<template>
  <div class="page">
    <div>
      <v-header :class="[{men:this.$store.state.flag === true}]" :state="true" :IconClass="icon" :headerBack="1" :backs="1"></v-header>
      <div class="main-container" :class="[{men:this.$store.state.flag === true}]">
        <v-scroll :scrollList="scrollList"></v-scroll>
        <v-list :mainList="mainList"></v-list>
      </div>
      <v-top></v-top>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from '../header/header.vue'
  import scroll from './scroll/scroll.vue'
  import list from './mainlist/list.vue'
  import {mainList} from '../../api/main.js'
  import top from '../scrolltop/scroll.vue'
  export default {
    data () {
      return {
        scrollList: {},
        mainList: [],
        icon:"fa-bars"
      }
    },
    created () {
      this._mainList()
    },
    methods: {
      _mainList () {
        mainList().then(res => {
          let ret = []
          this.scrollList = res.area_list[0]
          ret = res.area_list
          ret.splice(0, 1)
          this.mainList = ret
        })
      }
    },
    components: {
      'v-header': header,
      'v-scroll': scroll,
      'v-list': list,
      'v-top': top
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .page{
    .main-container{
      transition: .3s;
      transform: translate3d(0, 0, 0);
      position: relative;
      z-index: 1;
      min-height: 100%;
      background: #f2f2f2;
      box-sizing: border-box;
      margin-top: -2rem;
      &.men{
        transform: translate3d(62%, 0, 0);
      }
    }
  }
</style>
