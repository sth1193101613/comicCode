<template>
    <header>
        <i class="fa fa-home pos bars" aria-hidden="true" @click="pushmian"></i>
        <i class="fa fa-share-square-o pos searchs" aria-hidden="true"></i>
    </header>
</template>

<script type="text/ecmascript-6">
  import {mapMutations} from 'vuex'
  export default {
    data () {
      return {

      }
    },
    methods: {
      ...mapMutations([
        'toggleState'
      ]),
      pushmian () {
        this.$router.go(-1)
      },
      pushSearch () {
        this.$router.push({
          path: '/classfily'
        })
      }
    }

  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
    header{
        position: relative;
        z-index: 2;
        left: 0;
        top: 0;
        width: 100%;
        height: 2rem;
        text-align: center;
        color: #fff;
        box-sizing: border-box;
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
            right: 0;
            font-size: .8rem;
        }
        .bars{
            left:0
        }
        .search{
            right: 0;
            margin-top: 0;
        }
    }
</style>