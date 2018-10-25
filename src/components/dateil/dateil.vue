<template>
  <div>
    <transition name="slide-fade">
      <header :class="[{flex:this.$route.path ==='/dateil'}]" v-if="fade">
        <i class="fa fa-home pos bars" aria-hidden="true" @click="pushmian"></i>
        <i class="fa fa-share-square-o pos searchs" aria-hidden="true"></i>
      </header>
    </transition>
    <div ref="wrapper" class="hua">
      <ul @click="show">
        <li v-for="(item, index) in conmlist">
          <img :src="path+item.frame_url" :style="{width:imgWidth+'px'}">
        </li>
        <li v-for="(item ,index) in conmlist" v-if="totol !== 1">
          <img :src="path+item.frame_url" :style="{width:imgWidth+'px'}">
        </li>
        <div class="foot" v-if="conmlist.length !== 0">
          <span class="btn" @click="next"> </span>
          <span class="btn" @click="pre" v-if="epid !== 1"></span>
        </div>
      </ul>
    </div>
    <v-top></v-top>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapMutations} from 'vuex'
  import {getComicMain} from '../../api/comicdatial'
  import top from '../scrolltop/scroll.vue'
  import Bscroll from 'better-scroll'
  import {update} from '../../common/update'
  import getTime from '../../common/getTime'
  export default {
    data () {
      return {
        comicid: this.$route.query.comicid,
        epid: this.$route.query.epid,
        conmlist: [],
        path: 'https://cdn.comicool.cn/',
        imgWidth: null,
        fade: true,
        time:''
      }
    },
    created () {
      this._getComicMain(this.comicid, this.epid)
      this.clinWidth()
      getTime().then((res) => {
        this.time = res
      })
    },
    methods: {
      ...mapMutations([
        'eqIdSave'
      ]),
      show () {
        this.fade = !this.fade
      },
      clinWidth () {
        let k = document.documentElement.clientWidth || document.body.clientWidth
        this.imgWidth = k
      },
      pushmian () {
        this.$router.go(-1)
      },
      _getComicMain (comicid, epid) {
        this.conmlist = []
        getComicMain(comicid, epid).then(res => {
          this.conmlist = res.frame_list
          this.totol = res.extend_info.ep_total_size
          update(this.$route.query.comicid,this.epid,'',this.time,res.extend_info.ep_title,res.h5_share_link).then(res => {
            this.eqIdSave(res)
          })
        })
      },
      next () {
        this.epid++
        this._getComicMain(this.comicid, this.epid)
      },
      pre () {
        this.epid--
        this._getComicMain(this.comicid, this.epid)
      }
    },
    components: {
      'v-top': top,
    },
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .slide-fade-enter-active {
    transition: all .5s ease;
  }
  .slide-fade-leave-active {
    transition: all .5s ease;
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateY(-2rem);
    opacity: 0;
  }
  .flex{
    position: fixed;
  }
  img{
    display: block;
  }
  header{
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
      background: -webkit-linear-gradient(rgba(0, 0, 0, .5) 0, transparent 100%);
    }
    .pos{
      position: absolute;
      top: 0;
      height: 2rem;
      width: 2rem;
      line-height: 2rem;
      font-size: .8rem;
      right: 0;
    }
    .bars{
      left:0
    }

  }
  .foot{
    position: relative;
    font-size: .7rem;
    text-align: center;
    margin: auto;
    padding: .8rem 0;
    background: #f4f4f4;
    border-top: 1px solid #e5e5e5;
    .btn{
      display: inline-block;
      height: 1.7rem;
      background-size: 200% 200%;
      width: 6.5rem;
      margin: 0 auto;
      background-repeat: no-repeat;
      background-image: url(https://cwcdn.comicool.cn/m/images/fanye-btn.png);
      &:nth-of-type(1){
        background-position: -6.5rem 0;
      }
    }
  }

</style>
