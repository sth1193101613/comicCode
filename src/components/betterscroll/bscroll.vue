<template>
  <div class="bigmain" ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Bscroll from 'better-scroll'
  export default {
    mounted() {
      setTimeout(() => {
        this._initScroll()
        this.pullingDownUp()
      }, 20)
    },
    data(){
      return{
        listenScroll:true
      }
    },
    methods:{
      pullingDownUp () {
        this.scroll.refresh() //重新计算元素高度
      },
      _initScroll() {
        this.scroll = new Bscroll(this.$refs.wrapper, {
          click: true,
        })
        if (this.listenScroll) {
          let me = this
          this.scroll.on('scroll', (pos) => {
            me.$emit('scroll', pos)
          })
        }
      },
    },
  }
</script>

<style lang="less" rel="stylesheet/less">
  .bigmain{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
  }
</style>
