<template>
  <div class="toplist">
    <div class="header" :class="[{men:this.$store.state.flag === true}]">
      <i class="fa fa-bars pos" aria-hidden="true" @click="rightShow"></i>
      <h2>排行榜</h2>
      <v-rightSide :flag="this.$store.state.flag"></v-rightSide>
    </div>
    <v-bs>
      <div class="main" :class="[{men:this.$store.state.flag === true}]">
        <ul style="margin-top: 2rem">
          <li v-for="(list,index) in list" class="topli">
            <div class="img">
              <img :src="imgPath+list.content_poster">
            </div>
            <div class="cont">
              <h2 class="content_title">{{list.content_title}}</h2>
              <p class="content_subtitle">{{list.content_subtitle}}</p>
              <p class="ext">{{list.content_desc_lite2}}</p>
            </div>
            <small>{{index + 1}}</small>
          </li>
        </ul>
      </div>
    </v-bs>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapMutations} from 'vuex'
  import rightSide from '../rightSide/rightSide.vue'
  import {topList} from '../../api/toplist'
  import bs from '../betterscroll/bscroll.vue'
  export default {
    data () {
      return {
        list: [],
        imgPath: 'https://cdn.comicool.cn/'
      }
    },
    methods: {
      ...mapMutations([
        'toggleState'
      ]),
      _topList () {
        topList().then(res => {
          this.list = res.content_list
        })
      },
      rightShow () {
        this.toggleState(true)
      }
    },
    created () {
      this._topList()
    },
    components: {
      'v-rightSide': rightSide,
      'v-bs':bs
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .toplist{
    background: #f2f2f2;;
    .header{
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
      .pos{
        position: absolute;
        top: 0;
        height: 2rem;
        width: 2rem;
        line-height: 2rem;
        font-size: .8rem;
        left:0
      }
      &.men{
        transform: translate3d(62%, 0, 0);
      }
      h2{
        line-height: 2rem;
        font-size: .8rem;
      }
    }
    .main{
      transition: .3s;
      transform: translate3d(0, 0, 0);
      position: relative;
      margin-top: 2rem;
      padding: .5rem;
      .topli{
        position: relative;
        display: flex;
        background: #fff;
        margin-bottom: .5rem;
        align-items:center;
        justify-content: center;
        .img{
          width: 120px;
          img{
            display: block;
            max-width: 100%;
          }
        }
        .cont{
          flex: 1;
          margin-left: .5rem;
          *{
            margin: .3rem 0;
          }
          .ext{
            text-overflow: ellipsis;
            overflow: hidden;
            font-size: 0.5rem;
            line-height: .7rem;
            height: .7rem;
          }
          .content_title{
            font-size: .8rem;
          }
        }
        small{
          font-style: oblique;
          position: absolute;
          right: 1rem;
          font-size: .8rem;
          top: .5rem;
        }
      }
      &.men{
        transform: translate3d(62%, 0, 0);
      }
    }
  }
</style>
