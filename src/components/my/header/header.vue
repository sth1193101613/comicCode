<template>
    <div class="headers" :class="[{men:this.$store.state.flag === true}]">
        <i class="fa fa-bars pos" aria-hidden="true" @click="rightShow"></i>
        <h2>个人中心</h2>
        <v-rightSide :flag="this.$store.state.flag"></v-rightSide>
    </div>
</template>

<script type="text/ecmascript-6">
  import {mapMutations} from 'vuex'
  import rightSide from '../../rightSide/rightSide.vue'
  export default {
    data () {
      return {

      }
    },
    methods: {
      ...mapMutations([
        'toggleState'
      ]),
      rightShow () {
        this.toggleState(true)
      },
      pushSearch () {
        this.$router.push({
          path: '/classfily'
        })
      }
    },
    components: {
      'v-rightSide': rightSide
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
    .headers{
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 2;
        color: #525252;
        background: rgba(255, 255, 255, .9);
        border-bottom: 1px solid #e5e5e5;
        height: 2rem;
        text-align: center;
        box-sizing: border-box;
        transition: .3s;
        &.men{
            transform: translate3d(62%, 0, 0);
        }
        &:before{
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            content: "";
        }
        .pos{
            position: absolute;
            top: 0;
            height: 2rem;
            width: 2rem;
            line-height: 2rem;
            left: 0;
            font-size: .8rem;
        }
        h2{
            line-height: 2rem;
            font-size: .8rem;
        }
    }
</style>