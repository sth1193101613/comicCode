<template>
    <div class="login-page">
        <div class="log">
            <div class="login-logo">
                <img src="https://cwcdn.comicool.cn/images/h-logo-img.png">
                <h1>可米酷漫画</h1>
                <strong class="slogan">从此漫画就这么看</strong>
            </div>
            <div class="form">
                <mt-field placeholder="请输入用户名" v-model="form.username" :state="user" @input="logi(1)"></mt-field>
                <mt-field placeholder="请输入密码" v-model="form.password" :state="pass" @input="logi(0)"></mt-field>
                <mt-button plain size="large" @click="login">登陆</mt-button>
            </div>
            <p class="login-legal">登录后意味着你同意可米酷漫画的<a>《使用协议》</a></p>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import { MessageBox } from 'mint-ui'
import {mapMutations} from 'vuex'
  export default {
    data () {
      return {
        form: {
          username: '',
          password: ''
        },
        user: null,
        pass: null
      }
    },
    methods: {
      ...mapMutations([
        'saveUserName',
        'toggleState'
      ]),
      logi (way) {
        if (way >= 1) {
          if (this.form.username !== '') {
            this.user = 'success'
          } else {
            this.user = 'error'
          }
        } else {
          if (this.form.password !== '') {
            this.pass = 'success'
          } else {
            this.pass = 'error'
          }
        }
      },
      login () {
        if (this.user === 'error' || this.pass === 'error' || this.form.username === '' || this.form.password === '') {
          MessageBox('提示', '用户名面密码不对')
        } else {
          this.$router.push({
            path: '/'
          })
          this.saveUserName(this.form.username)
        }
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
    .login-page {
        background: #292929;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        overflow: hidden;
        .log{
            width: 100%;
            height: 100%;
            .login-logo{
                margin-top: 2rem;
                img{
                    display: block;
                    margin: 0 auto;
                }
                h1{
                    font-size: 1rem;
                    font-weight: 400;
                    margin: .3em 0;
                    text-align: center;
                    color: #fff;
                }
                .slogan{
                    display: block;
                    height: 1.5rem;
                    text-indent: -999em;
                    overflow: hidden;
                    background: url(https://m.comicool.cn/images/slogan.png) center no-repeat;
                    background-size: auto 100%;
                }
            }
            .form{
                margin: 1rem .5rem .5rem;
                .mint-field{
                    margin-bottom: .5rem;
                    border-radius: 5px;
                }
            }
            .login-legal{
                padding-top: .5em;
                margin: 0;
                font-size: .5rem;
                text-align: center;
                color: #888;
                a{
                    color: #e62c32;
                }
            }
        }
    }


</style>