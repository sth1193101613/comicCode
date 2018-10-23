<template>
  <header :class="[{transparent:headerBack === 1}]">
    <i class="fa pos bars" aria-hidden="true" @click="rightShow" :class="IconClass" :style="[{color:iconColor}]"></i>
    <i class="fa fa-search pos search" aria-hidden="true" @click="pushSearch" v-if="state" :style="[{color:iconColor}]"></i>
    <h2 v-if="!state">{{this.$route.name}}</h2>
    <v-rightSide :flag="this.$store.state.flag" v-if="backs"></v-rightSide>
  </header>
</template>

<script type="text/ecmascript-6">
  import {mapMutations} from 'vuex'
  import Bus from '../../common/bus.js'
  import rightSide from '../rightSide/rightSide.vue'
  export default {
    props:{
      state:{
        type: Boolean,
        default:false
      },
      IconClass:{
        type:String,
        default:null
      },
      headerBack:{
        type:Number,
        default:1
      },
      iconColor:{
        type:String,
        default:'#fff'
      },
      backs:{
        type:Number,
        default:true
      }//根据判断为滑动还是回到首页true:滑动:false首页
    },
    methods: {
      ...mapMutations([
        'toggleState'
      ]),
      rightShow () {
        if(this.backs){
          this.toggleState(true)
          Bus.$emit('click',this.$store.state.flag)
        }else{
          this.$router.go(-1)
        }
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
    transition: .3s;
    &.men{
      transform: translate3d(62%, 0, 0);
    }
    &.transparent{
      background: transparent;
      &:before{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: -webkit-linear-gradient(rgba(0, 0, 0, .5) 0, transparent 100%);
        content: "";
      }
    }
    .pos{
      position: absolute;
      top: 0;
      height: 2rem;
      width: 2rem;
      line-height: 2rem;
      font-size: .8rem;
    }
    .bars{
      left:0
    }
    .search{
      right: 0;
      margin-top: 0;
      padding: 0;
    }
    h2{
      color: #000;
      line-height: 2rem;
      font-size: .8rem;
    }
  }
</style>
