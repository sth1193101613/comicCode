<template>
  <div id="app">
    <router-view></router-view>
    <div class="backPage" v-if="this.flag"></div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Bus from '../src/common/bus.js'
  export default {
    name: 'vue-ele',
    computed: {
      ...mapState([
        'flag'
      ])
    },
    mounted(){
      this.$nextTick((res) => {
        let body = document.getElementsByTagName('body')[0]
        Bus.$on('click', (e) => {
          if(e){
            body.className = 'add_bg'
          }else{
            body.className = ''
          }
        })
      })
    }
  }
</script>

<style>
  .add_bg{
    overflow: hidden!important;
  }
  .backPage{
    position: fixed;
    z-index: 1;
    background: rgba(0,0,0,.4);
    left: 0;
    bottom: 0;
    top: 0;
    right: 0;
    overflow-x: hidden;
  }
</style>
