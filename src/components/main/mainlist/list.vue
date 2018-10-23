<template>
    <div>
        <ul class="nav">
            <li @click="pushTopList">
                <div class="img">
                    <img src="./comi_logo_left.jpg">
                </div>
                <div class="title">
                    <h2 class="color-one">排行榜</h2>
                    <p>热门大作看不停！</p>
                </div>
            </li>
            <li @click="pushClassFily">
                <div class="img">
                    <img src="./comi_logo_right.jpg">
                </div>
                <div class="title">
                    <h2 class="color-two">分类</h2>
                    <p>漫画齐全享不尽！</p>
                </div>
            </li>
        </ul>
        <ul>
            <li v-for="(list,index) in mainList" class="list">
                <h2 class="title">{{list.area_info.area_title}} <span class="som">{{list.area_info.area_subtitle}}</span><i class="fa fa-chevron-right ri" aria-hidden="true"></i></h2>
                <ul class="ext-ul" :class="[{open:index === 3 && list.area_content.length > 3},{temp:index ===mainList.length-1}]">
                    <li v-for="(item,index) in list.area_content" class="fig" @click="pushDatil(item,item.content_type)">
                        <div class="top" v-if="list.area_content.length !== 2">
                            <span>{{Number(item.content_rating).toFixed(2)}}</span>
                            <span>{{item.content_category}}</span>
                        </div>
                        <img :src="item.content_poster | imgfite">
                        <div class="tie">
                            <h2 class="ext" style="color: #000;">{{item.content_title}}</h2>
                            <p class="ext">{{item.content_subtitle}}</p>
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
        <img src="./footer-bg.jpg" class="footer">
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        imgPath: 'https://cdn.comicool.cn/'
      }
    },
    filters: {
      imgfite (value) {
        let index = value.lastIndexOf('\/')
        let name = value.substring(index + 1, value.length)
        if (name === 'tucao_post_nana_20170913.jpg' || name === 'zhoumo_post_nana_20170915.jpg') {
          return `https://ctcdn.comicool.cn/${name}`
        }
        return `https://cdn.comicool.cn/${name}`
      }
    },
    methods: {
      pushClassFily () {
        this.$router.push({
          path: '/classfily'
        })
      },
      pushDatil (item, way) {
        if (way >= 3) {
          this.$router.push({
            path: '/activity'
          })
        } else {
          this.$router.push({
            path: '/comicdatil',
            query: {
              comitid: item.content_action
            }
          })
        }
      },
      pushTopList () {
        this.$router.push({
          path: '/toplist'
        })
      }
    },
    props: {
      mainList: {
        type: Array
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
    .nav{
        margin: 0.5rem;
        display: flex;
        padding: 0.5rem 0 0 0;
        li{
            align-items: center;
            display: flex;
            background: #fff;
            width: 48%;
            &:nth-child(2){
                margin-left: 4%;
            }
            .img{
                width: 3rem;
                img{
                    width: 3rem;
                    height: 3rem;
                }
            }
            .title{
                flex:1;
                .color-one{
                    color: #eb6877;
                    font-size: .8rem;
                }
                .color-two{
                    font-size: .8rem;
                    color: #f39800;
                }
                p{
                    color: #afafaf;
                    font-size: .5rem;
                }
            }
        }
    }
    .list{
        margin: .5rem;
        padding: .2rem;
        background: #fff;
        .title{
            text-align: left;
            font-size: .8rem;
            line-height: 2;
            border-bottom: 1px solid #e5e5e5;
            overflow: hidden;
            .som{
                color: #aeaeae;
                font-size: .6rem;
            }
            .ri{
                text-align: right;
                display: block;
                width: 20%;
                float: right;
                line-height: 2;
                color: #aeaeae;
            }
        }
        .ext-ul{
            overflow: hidden;
            display: flex;
            .fig{
                overflow: hidden;
                width: 33.333333%;
                padding: .2rem;
                position: relative;
                flex: 1;
                .ext{
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    font-size: .6rem;
                    display: block;
                    color: grey;
                }
                .top{
                    position: absolute;
                    left: 1em;
                    top: 1em;
                    span{
                        float: left;
                        width: 3em;
                        height: 1.7em;
                        line-height: 1.7em;
                        text-align: center;
                        overflow: hidden;
                        &:nth-of-type(1){
                            background: #e62b32;
                            color: #fff;
                            border-top-left-radius: 99em;
                            border-bottom-left-radius: 99em;
                        }
                        &:nth-of-type(2){
                            background: #fff;
                            color: #ae74ec;
                            border-top-right-radius: 99em;
                            border-bottom-right-radius: 99em;
                        }
                    }
                }
                img{
                    max-width: 100%;
                    display: inline-block;
                }
            }
            &.open{
                display: block;
                .fig{
                    &:first-child{
                        width: 100%;
                    }
                    display: inline-block;
                    width: 30.5%;
                }
            }
            &.temp{
                display: block;
                .fig{
                    margin-bottom: .2rem;
                    border-bottom: 1px solid #e5e5e5;
                    display: flex;
                    align-items:center;
                    width: 100%;
                    img{
                        width: 4rem;
                        height: 3.5rem;
                    }
                    .tie{
                        flex: 1;
                        margin-left: 1rem;
                        h2{
                            margin-bottom: .3rem;
                        }
                    }
                }
            }
        }
    }
    .footer{
        width: 100%;
        display: block;
    }
</style>