<template>
    <div class="menu" :class="[{men:flag ===true}]" :style="{height:fullHeight+'px'}">
        <aside class="aside-panel">
            <div class="aside-profile">
                <div class="aside-profile-l">
                    <a><img src="./member.png"></a>
                </div>
                <router-link to="/login" tag="div" class="aside-profile-r">
                    <i class="fa fa-user"></i>登陆
                </router-link>
            </div>
            <div class="aside-search">
                <input id="aside-input" name="keyword" type="text" placeholder="搜索" v-model="value">
                <i class="fa fa-search" @click="searchs"></i>
            </div>
            <nav class="aside-nav">
                <a @click="hide">
                    <i class="fa fa-home"></i>首页
                </a>
                <a @click="history">
                    <i class="fa fa-book"></i>最新阅读
                </a>
                <a @click="hides">
                    <i class="fa fa-user"></i>个人中心
                </a>
                <a @click="hides">
                    <i class="fa fa-diamond"></i>酷币充值
                </a>
            </nav>
        </aside>
    </div>
</template>

<script type="text/ecmascript-6">
  import {mapMutations} from 'vuex'
  import {searchCom} from '../../api/search'
  export default {
    data () {
      return {
        fullHeight: document.documentElement.clientHeight,
        value: ''
      }
    },
    mounted () {
      const that = this
      window.onresize = () => {
        return (() => {
          window.fullHeight = document.documentElement.clientHeight
          that.fullHeight = window.fullHeight
        })()
      }
    },
    watch: {
      fullHeight (val) {
        if (!this.timer) {
          this.fullHeight = val
          this.timer = true
          let that = this
          setTimeout(function () {
            that.timer = false
          }, 400)
        }
      }
    },
    props: {
      flag: {
        type: Boolean
      }
    },
    methods: {
      ...mapMutations([
        'toggleState',
        'comListFile'
      ]),
      history(){
        this.toggleState(false)
        this.$router.push({
          path:'/histroy'
        })
      },
      hide () {
        this.toggleState(false)
        this.$router.push({
          path: '/'
        })
      },
      hides () {
        this.$router.push({
          path: '/my'
        })
        this.toggleState(false)
      },
      searchs () {
        searchCom(this.value).then(res => {
          if (res.msg === 'success') {
            this.$router.push({
              path: '/classfily/searchlist',
              query: {
                value: this.value
              }
            })
            this.toggleState(false)
            this.comListFile(res.search_result_list)
          }
        })
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
    .menu{
        font-size: .8rem;
        position: fixed;
        top: 0;
        width: 62%;
        height: 100%;
        padding: 1em 0;
        background: #292929;
        box-sizing: border-box;
        transition: .5s;
        transform: translate3d(-100%, 0, 0);
        .aside-profile{
            padding: 0 .5rem;
            display: flex;
            align-items: center;
            .aside-profile-l{
                width: 2.6rem;
                height: 2.6rem;
                img{
                    max-width: 100%;
                    display: block;
                }
            }
            .aside-profile-r{
                font-size: .8rem;
                padding-left: .6rem;
            }
        }
        .aside-search{
            padding: 0 0.5rem;
            margin-top: 0.5rem;
            position: relative;
            input{
                display: block;
                width: 100%;
                height: 1.8rem;
                padding: 0 .5rem;
                color: #aeaeae;
                background: #333;
                border: 1px solid #555;
                border-radius: 5px;
                box-sizing: border-box;
                line-height: 1rem;
            }
            i{
                position: absolute;
                right: 10%;
                top: 30%;
                font-size: 0.8rem;
                color: #555;
            }
        }
        .aside-nav{
            text-align: left;
            a{
                font-size: .8rem;
                display: block;
                padding: 0 1em;
                color: #aeaeae;
                text-decoration: none;
                line-height: 3;
                text-align: left;
                i{
                    display: inline-block;
                    margin-right: .2rem;
                }
            }
        }
    }
</style>
