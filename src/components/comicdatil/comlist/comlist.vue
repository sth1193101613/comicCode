<template>
  <div class="datils">
    <div class="navtab">
      <mt-button size="small" @click.native.prevent="active = 'tab-container1'" :class="[{activeLive:active === 'tab-container1'}]">详情</mt-button>
      <mt-button size="small" @click.native.prevent="active = 'tab-container2'" :class="[{activeLive:active === 'tab-container2'}]">剧情</mt-button>
      <mt-button size="small" @click.native.prevent="active = 'tab-container3'" :class="[{activeLive:active === 'tab-container3'}]">评论({{post.post_count | cont}})</mt-button>
    </div>
    <div class="page-tab-container">
      <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
        <mt-tab-container-item id="tab-container1">
          <p class="tab-p">{{comicInfo.comic_desc}}</p>
          <ul class="tab-ul">
            <li v-for="(item,index) in comicInfo.ext_list" v-if="index == 0">
              {{item.desc}}
            </li>
          </ul>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2">
          <ul>
            <li v-for="(item,index) in epList" class="epList" @click="epinfo(item)">
              <div class="epList_img" v-if="false">
                <img :src="path+item.ep_poster">
              </div>
              <div class="epList_cont">
                <h2 class="eqh2"><span>{{item.ep_title}}</span> <span><b>#</b>{{index+1}}</span></h2>
                <p class="eqp"><span>{{item.update_date}}</span> <span><i class="fa fa-heart-o" aria-hidden="true"></i>{{item.ep_total_size}}</span></p>
              </div>
            </li>
          </ul>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container3">
          <ul>
            <div class="ji">精华帖{{post.extract_count}}</div>
            <li v-for="(list,index) in ping" class="common-list">
              <div class="conmm">
                <div class="common-left">
                  <div class="img">
                    <img :src="list.avt">
                  </div>
                  <span>{{list.name}}</span>
                </div>
                <div class="common-right">
                  <i class="fa fa-heart-o" aria-hidden="true"></i>
                  <span>{{list.love}}</span>
                </div>
              </div>
              <div class="cont">
                <h2> {{list.title}}</h2>
                <ul>
                  <li v-for="(item,index) in list.cont">
                    <p>{{item.text}}</p>
                  </li>
                </ul>
              </div>
              <div class="end">
                <span>{{list.updateTime | dataTime}}天更新</span>
                <span>更新{{list.up}}</span>
              </div>
            </li>
          </ul>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapMutations} from 'vuex'
  import getTime from '../../../common/getTime'
  import {update} from '../../../common/update'
  export default {
    data () {
      return {
        path: 'https://cdn.comicool.cn/',
        iconpath: 'https://uacdn.comicool.cn/',
        active: 'tab-container1',
        act: {},
        ping: [],
        info:{},
        time:''
      }
    },
    filters: {
      cont (value) {
        if (value >= 999) {
          return `999+`
        } else {
          return value
        }
      },
      dataTime (value) {
        return parseInt(value / (1000 * 60 * 60 * 24))
      }
    },
    props: {
      epList: {
        type: Array
      },
      comicInfo: {
        type: Object
      },
      post: {
        type: Object
      }
    },
    mounted () {
      getTime().then((res) => {
        this.time = res
      })
      this.postDetail()
    },
    methods: {
      ...mapMutations([
        'eqIdSave'
      ]),
      epinfo (item) {
        update(this.$route.query.comitid,item.ep_id,this.comicInfo.comic_auth,this.time,item.ep_title,`${this.path}${this.comicInfo.comic_cover_url}`).then((res) => {
          this.eqIdSave(res)
        })
        this.$router.push({
          path: '/dateil',
          query: {
            comicid: this.$route.query.comitid,
            epid: item.ep_id
          }
        })
      },
      postDetail () {
        setTimeout(res => {
          let ret = []
          for (let i in this.act.post_list) {
            for (let k in this.act.user_list) {
              if (this.act.post_list[i].ccid === this.act.user_list[k].ccid) {
                let post = this.act.post_list[i]
                let list = this.act.user_list[k]
                let msg = {
                  name: list.nickname,
                  title: post.post_title,
                  updateTime: post.update_time,
                  cont: post.post_rich,
                  up: post.reply_count,
                  love: post.praise_count,
                  avt: list.icon
                }
                ret.push(msg)
              }
            }
            this.ping=ret
          }

        }, 500)
      }
    },
    watch: {
      post (val) {
        this.act = val
      },
      comicInfo(val){
        this.info = val
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .datils{
    margin-top: -2rem;
    .navtab{
      width: 100%;
      background: #fff;
      display: flex;
      border-bottom: .3rem #f2f2f2 solid;
      button{
        flex: 1;
        background: #fff;
        border: 0;
        box-shadow: 0 0 0 #fff;
        width: 100%;
        line-height: 2;
        height: 2rem;
        border-radius: 0;
        &.activeLive{
          color: #e43c45;
          border-bottom: .15rem solid #e43c45;
        }
        label{
          font-size: .8rem;
        }
      }
    }
    .page-tab-container{
      .tab-p{
        min-height: 2rem;
        font-size: .65rem;
        border-bottom: 1px solid #e5e5e5;
        margin: 0;
        padding: .6rem;
        letter-spacing: -1px;
        background: #fff;
        line-height: 1rem;
      }
      .tab-ul{
        background: #fff;
        padding: 0.6rem;
      }
      .epList{
        padding: 0 .5rem;
        border-bottom: .5rem solid #f2f2f2;
        display: flex;
        align-items: center;
        .epList_img{
          width: 100px;
          img{
            max-width: 100%;
            display: inline-block;
          }
        }
        .epList_cont{
          padding-left: .5rem;
          flex: 1;
          .eqh2{
            display: flex;
            align-items: center;
            font-size: .6rem;
            font-weight: 400;
            span{
              flex: 1;
              font-size: 0.6rem;
              &:nth-of-type(2){
                text-align: right;
                color: #fff;
                border-radius: 0.5rem;
                background: #98daf5;
                padding: 0.2rem;
                font-size: 0.5rem;
                margin-top: 0.2rem;
                line-height: initial;
                width: 3rem;
                display: block;
                flex: 0.06;
              }
            }
          }
          .eqp{
            line-height: 3;
            display: flex;
            span{
              font-size: 0.5rem;
              color: grey;
              &:nth-of-type(2){
                flex: 1;
                text-align: right;
              }
            }
          }
        }
      }
      .ji{
        padding: 10px;
        background-color: #fff;
        margin: 0;
        border-bottom: 5px solid #f2f2f2;
      }
      .common-list{
        padding: .5rem .5rem;
        background: #fff;
        border-bottom: 1px solid #eee;
        .conmm{
          display: flex;
          align-items: center;
          .common-left{
            flex: 1;
            display: flex;
            align-items: center;
            .img{
              width: 1rem;
              height: 1rem;
              img{
                display: block;
                max-width: 100%;
                border-radius: 50%;
                border: 1px solid #f2f2f2;
              }
            }
            span{
              font-size: .6rem;
              margin-left: .4rem;
            }
          }
          .common-right{
            color: #a3afb8;
            span{
              font-size: .6rem;
            }
            i{
              font-size: .8rem;
            }
          }
        }
        .cont{
          padding-top: .5rem;
          h2{
            font-size: 0.6rem;
          }
        }
        .end{
          margin-top: .6rem;
          span{
            color: #aeaeae;
          }
        }
      }
    }
  }

</style>
