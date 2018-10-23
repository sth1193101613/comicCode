<template>
    <div class="mains">
        <v-header></v-header>
        <div class="previous" @click="flagtoggle" v-if="flag">
            <img src="https://cwcdn.comicool.cn/m/act/201707/weekend-common/images/review.jpg">
        </div>
        <ul class="ul" :class="[{burl:flag === false}]">
            <li><img src="https://cwcdn.comicool.cn/m/act/201709/weekend19/images/weekend_01.jpg" alt="周末的丰满♂"></li>
            <li><img src="https://cwcdn.comicool.cn/m/act/201709/weekend19/images/weekend_02.jpg" alt="周末的丰满♂"></li>
            <li><img src="https://cwcdn.comicool.cn/m/act/201709/weekend19/images/weekend_03.jpg" alt="周末的丰满♂"></li>
            <li><img src="https://cwcdn.comicool.cn/m/act/201709/weekend19/images/weekend_04.jpg" alt="周末的丰满♂"></li>
        </ul>
        <div class="show" v-if="!flag">
            <div class="top">
                <img src="https://cwcdn.comicool.cn/m/act/201707/weekend-common/images/top.png">
                <span class="close" @click="flagtoggle">✖</span>
            </div>
            <div class="dvs">
                <ul>
                    <li v-for="(list,index) in imgList">
                        <img :src="list.path">
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import header from './header/header.vue'
  export default {
    data () {
      return {
        imgList: [],
        flag: true
      }
    },
    methods: {
      flagtoggle () {
        this.flag = !this.flag
      },
      imgpath () {
        for (let i = 1; i <= 15; i++) {
          let msg = {
            path: `https://cwcdn.comicool.cn/m/act/201707/weekend-common/images/${i}.jpg`
          }
          this.imgList.push(msg)
        }
      }
    },
    created () {
      this.imgpath()
    },
    components: {
      'v-header': header
    },
    watch: {
      '$route': function (to, from) {
        document.body.scrollTop = 0
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
    .mains{
        display: block;
        top: 0;
        .previous{
            position: fixed;
            z-index: 9999;
            border-radius: 50%;
            text-align: center;
            font-size: .7rem;
            color: #fff;
            left: 0;
            top: 3rem;
        }
        .ul{
            position: absolute;
            top: 0;
            img{
                max-width: 100%;
            }
            &.burl{
                filter: blur(20px);
            }
        }
        .show{
            position: fixed;
            .dvs{
                position: fixed;
                height: 65%;
                overflow: scroll;
                border: 4px solid #c4c7e5;
                background: #8c92e7;
                width: 90%;
                left: 5%;
                top: 25%;
                z-index: -1;
                li{
                    margin: .5rem .2rem;
                    img{
                        max-width: 100%;
                    }
                }
            }
            .top{
                position: fixed;
                width: 100%;
                top: 17%;
                img{
                    width: 55%;
                    margin: 0 auto;
                }
                .close{
                    position: absolute;
                    text-align: center;
                    border-radius: 50%;
                    padding: .2rem;
                    color: #7f7f7f;
                    bottom: 0;
                    box-shadow: 1px 1px 2px #656461;
                    background: #fff;
                    right: 0;
                    width: 1rem;
                    height: 1rem;
                    font-size: .8rem;
                }
            }
        }
    }
</style>