<template>
  <div>
    <div class="header">
      <i class="fa fa-bars pos" aria-hidden="true" @click="pushmian"></i>
      <h2>{{this.$route.query.name}}</h2>
    </div>
    <v-bs>
      <div class="listsa">
        <ul style="margin-top: 2rem">
          <li v-for="(item,index) in list" class="conts" @click="pushCont(item)">
            <div class="img">
              <img :src="path+item.content_poster">
            </div>
            <div class="cont">
              <h3 class="content_title">{{item.content_title}}</h3>
              <p>{{item.content_subtitle}}</p>
              <p class="ext">{{item.content_desc_lite2}}</p>
            </div>
          </li>
        </ul>
      </div>
    </v-bs>
  </div>
</template>

<script type="text/ecmascript-6">
  import {gecomfily} from '../../api/comclass'
  import bs from'../betterscroll/bscroll.vue'
  export default {
    data () {
      return {
        list: [],
        path: 'https://cdn.comicool.cn/'
      }
    },
    methods: {
      pushmian () {
        this.$router.go(-1)
      },
      _gecomfily () {
        gecomfily(this.$route.query.eqid).then(res => {
          this.list = res.content_list
        })
      },
      pushCont (item) {
        this.$router.push({
          path: '/comicdatil',
          query: {
            comitid: item.content_action
          }
        })
      }
    },
    created () {
      this._gecomfily()
    },
    components: {
      'v-bs':bs,
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .header {
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
    .pos {
      position: absolute;
      top: 0;
      height: 2rem;
      width: 2rem;
      line-height: 2rem;
      font-size: .8rem;
      left: 0
    }
    h2 {
      line-height: 2rem;
      font-size: .8rem;
    }
  }
  .listsa{
    margin-top: 2rem;
    padding: 0.5rem;
    .conts{
      display: flex;
      align-items: center;
      &:not(:last-child){
        border-bottom: solid .5rem #f2f2f2;
      }
      .img{
        width: 120px;
        img{
          max-width: 100%;
          display: block;
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
        }
        .content_title{
          font-size: .8rem;
        }
      }
    }
  }
</style>
