<template>
  <transition name="fold">
    <div class="fixed" @click="scroll"  v-show="isShow">
      <i class="fa fa-chevron-up fa-2x" aria-hidden="true"></i>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {scrollTop} from '../../common/scrolltop'
  export default {
    data () {
      return {
        isShow: false,
        timer: ''
      }
    },
    created () {
      this.show()
    },
    methods: {
      show () {
        window.addEventListener('scroll', (ev) => {
          if (scrollTop().top > 40) {
            this.isShow = true
          } else {
            this.isShow = false
          }
        })
      },
      scroll () {
        clearInterval(this.timer)
        this.timer = setInterval(() => {
          let spd = Math.floor((-scrollTop().top) / 10)
          scrollTop().top = scrollTop().top + spd
          document.documentElement.scrollTop  = scrollTop().top + spd
          document.body.scrollTop = scrollTop().top + spd
          if (scrollTop().top === 0) {
            clearInterval(this.timer)
          }
        }, 10)
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .fixed{
    position: fixed;
    bottom: 2rem;
    opacity: 1;
    right: 1rem;
    z-index: 2;
    width: 1.5rem;
    height: 1.5rem;
    background: #f2f2f2;
    text-align: center;
    line-height: 1.7rem;
  }
  .fold-enter-active, .fold-leave-active {
    transition: all .5s;
  }
  .fold-enter, .fold-leave-active {
    opacity: 0;
    transform: translate3d(0, 0, 0);
  }
</style>
