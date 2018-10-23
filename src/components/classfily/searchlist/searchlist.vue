<template>
    <div>
      <v-header :class="[{men:this.$store.state.flag === true}]"
                :state="false"
                :IconClass="icon"
                :headerBack="0"
                :backs="1"
                :iconColor="iconcolor">
      </v-header>
        <v-search :values="this.$route.query.value"></v-search>
        <div class="sea" :class="[{men:this.$store.state.flag === true}]">
            <ul>
                <li v-for="(item,index) in comList" class="conts" @click="pushCont(item)">

                    <div class="img">
                        <img :src="path+item.url">
                    </div>
                    <div class="cont">
                        <h3 class="content_title">{{item.title}}</h3>
                        <p class="sub">{{item.title_sub}}</p>
                        <p class="ext">{{item.title_third}}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import search from '../search/search.vue'
  import header from '../../header/header.vue'
  import {mapState} from 'vuex'
  export default {
    data () {
      return {
        path: 'https://cdn.comicool.cn/',
        icon:"fa-bars",
        iconcolor:"#525252",
      }
    },
    computed: {
      ...mapState([
        'comList'
      ])
    },
    methods: {
      pushCont (item) {
        this.$router.push({
          path: '/comicdatil',
          query: {
            comitid: item.action
          }
        })
      }
    },
    components: {
      'v-search': search,
      'v-header': header
    }
  }
</script>

<style lang="less" rel="stylesheet/less">

    .lists{
        margin: 0;
    }
    .sea{
        transition: .3s;
        &.men{
            transform: translate3d(62%, 0, 0);
        }
    }
    .conts{
        position: relative;
        display: flex;
        background: #fff;
        align-items: center;
        justify-content: center;
        padding: 0 0.5rem;
        border-bottom: .2rem #f2f2f2 solid;
        .img{
            width: 120px;
            img{
                display: block;
                max-width: 100%;
            }
        }
        .cont{
            flex: 1;
            margin-left: 0.5rem;
            *{
                margin: 0.3rem 0;
            }
            .content_title{
                font-size: 0.8rem;
            }
            .ext,.sub{
                text-overflow: ellipsis;
                overflow: hidden;
                font-size: 0.5rem;
                line-height: 0.7rem;
                height: 0.7rem;
            }
        }
    }
</style>
