<template>
  <div class="cover">
    <img :src="imgpath+infoDatil.comic_cover_large" v-if="infoDatil.comic_cover_large">
    <div class="datilcover">
      <h2 class="datil_title"><strong>{{infoDatil.comic_title}}</strong> <span>{{Number(infoDatil.rating).toFixed(2)}}</span></h2>
      <div class="datil_cover">
        <p class="auth" v-if="infoDatil.comic_cover_large">
          <img :src="imgpath+infoDatil.comic_cover_large">
          <span>{{infoDatil.comic_auth}}</span>
        </p>
        <p class="rading" @click="jixu" v-html="name"></p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import {mapMutations} from 'vuex'
  import {update} from '../../../common/update'
  import getTime from '../../../common/getTime'
  export default {
    props: {
      comicInfo: {
        type: Object
      },
      first:{
        type:String
      }
    },
    data () {
      return {
        name: '开始阅读',
        infoDatil: {},
        imgpath: 'https://cdn.comicool.cn/',
        eqids: '',
        time:'',
      }
    },
    mounted(){
      getTime().then((res) => {
        this.time = res
      })
    },
    methods: {
      ...mapMutations([
        'eqIdSave'
      ]),
      jixu () {
        if (this.name === '开始阅读') {
          this.$router.push({
            path: '/dateil',
            query: {
              comicid: this.$route.query.comitid,
              epid: 1,
            }
          })
          update(id,1,this.comicInfo.comic_auth,this.time,this.first,`${this.imgpath}${this.comicInfo.comic_cover_url}`).then(res => {
            this.eqIdSave(res)
          })
        } else {
          for (let i in this.eqId) {
            if (Number(this.eqId[i].id) === this.infoDatil.comic_id) {
              this.eqids = this.eqId[i].eqid
            }
          }
          this.$router.push({
            path: '/dateil',
            query: {
              comicid: this.$route.query.comitid,
              epid: this.eqids
            }
          })
        }
      }
    },
    watch: {
      comicInfo (val) {
        this.infoDatil = val
        for (let i in this.eqId) {
          if (Number(this.eqId[i].id) === this.infoDatil.comic_id) {
            this.name = '继续阅读'
          } else {
            this.name = '开始阅读'
          }
        }
      },
      deep: true
    },
    computed: {
      ...mapState([
        'eqId'
      ])
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .cover{
    position: relative;
    top: -2rem;
    width: 100%;
    max-width: 640px;
    &:before{
      background: #000;
      content: "\20";
      width: 100%;
      height: 100%;
      position: absolute;
      filter: alpha(opacity=30);
      -moz-opacity: .3;
      opacity: .3;
    }
    img{
      max-width: 100%;
      display: block;
    }
    .datilcover{
      position: absolute;
      width: 100%;
      top: 50%;
      padding: .6rem;
      .datil_title{
        color: #fff;
        strong{
          font-size: 1.2rem;
        }
        span{
          font-size: .5rem;
          border-radius: 100%;
          background: #de4c4a;
          filter: alpha(opacity=90);
          opacity: .9;
          margin-left: .3rem;
          padding: .2rem;
          position: absolute;
          width: 1rem;
          height: 1rem;
          text-align: center;
          line-height: 1rem;
          top: .8rem;
        }
      }
      .datil_cover{
        display: flex;
        .auth{
          margin-top: .4rem;
          display: flex;
          padding-right: 1rem;
          line-height: 1.6rem;
          border-radius: 84px 0 0 84px;
          background: #fff;
          filter: alpha(opacity=90);
          opacity: .9;
          border: #ededed .1rem solid;
          color: #5e5e5e;
          img{
            width: 1.6rem;
            margin-right: .5rem;
            border-radius: 84px 0 0 84px;
            height: 1.6rem;
          }
          span{
            flex: 1;
          }
        }
        .rading{
          position: absolute;
          z-index: 20;
          bottom: .6rem;
          width: 4rem;
          text-align: center;
          display: block;
          height: 1.6rem;
          line-height: 1.6rem;
          background: #4aadd5;
          border: #4aadd5 .1rem solid;
          color: #fff;
          border-radius: .1rem;
          filter: alpha(opacity=90);
          opacity: .9;
          right: 12%;
        }
      }

    }
  }
</style>
