<template>
    <div>
        <v-header></v-header>
        <div class="my" :class="[{men:this.$store.state.flag === true}]">
            <div class="personal-top">
                <div class="personal-t-ico">
                    <img src="//cwcdn.comicool.cn/images/image_people.png" alt="">
                </div>
                <div class="personal-t-info"><p>用户名:{{username}}</p><p>酷币：0</p></div>
                <div class="personal-t-login">
                    <img src="https://cwcdn.comicool.cn/m/images/wx/comi_login.jpg">
                </div>
            </div>
            <div class="loginout" @click="logout">
                退出
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import header from './header/header.vue'
  import {mapState} from 'vuex'
  import {mapMutations} from 'vuex'
  export default {
    components: {
      'v-header': header
    },
    computed: {
      ...mapState([
        'username'
      ])
    },
    methods: {
      ...mapMutations([
        'loginOut'
      ]),
      logout () {
        this.loginOut('')
        this.$router.push('/')
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
    .my{
        height: 100%;
        margin-top: 2rem;
        transition: .3s;
        transform: translate3d(0, 0, 0);
        position: absolute;
        padding: .2rem;
        left: 0;
        background: #f2f2f2;
        right: 0;
        &.men{
            transform: translate3d(62%, 0, 0);
        }
        .personal-top{
            display: flex;
            align-items: center;
            background-color: #fff;
            text-align: center;
            justify-content: center;
            img{
                max-width: 100%;
            }
            .personal-t-ico{
                width: 3.7rem;
                height: 3.7rem;
                border-radius: 50%;
                border: 1px solid #e5e5e5;
                overflow: hidden;
            }
            .personal-t-info{
                margin: 0 1rem;
            }
            .personal-t-login{
                width: 4rem;
                text-align: right;
                font-size: 0;
            }
        }
        .loginout{
            display: block;
            padding: 0.5rem 0;
            background-color: #fff;
            margin-top: 0.5rem;
            font-size: 0.6rem;
            text-align: center;
        }
    }
</style>