<template>
  <div class="classlist">
    <v-header :class="[{men:this.$store.state.flag === true}]"
              :state="false"
              :IconClass="icon"
              :headerBack="0"
              :backs="1"
              :iconColor="iconcolor">
    </v-header>
    <v-bs>
      <div style="padding: 0.01rem;">
        <v-search></v-search>
        <div class="main" :class="[{men:this.$store.state.flag === true}]">
          <ul>
            <li v-for="(list,index) in list" class="classli" @click="fenlei(list)">
              <img :src="list.category_cover_url">
            </li>
          </ul>
        </div>
      </div>
    </v-bs>
  </div>
</template>

<script type="text/ecmascript-6">
  import search from './search/search.vue'
  import header from '../header/header.vue'
  import bs from'../betterscroll/bscroll.vue'
  import {getClassFiy} from '../../api/classfily'
  export default {
    data () {
      return {
        list: [],
        search: [],
        imgPath: 'https://cdn.comicool.cn/',
        icon:"fa-bars",
        iconcolor:"#525252",
      }
    },
    methods: {
      fenlei (item) {
        this.$router.push({
          path: '/comlist',
          query: {
            eqid: item.category_id,
            name: item.category_title
          }
        })
      },
      _getClassFiy () {
        getClassFiy().then(res => {
          this.list = res.category_list
        })
      }
    },
    created () {
      this._getClassFiy()
    },
    components: {
      'v-bs':bs,
      'v-search': search,
      'v-header': header
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .classlist{
    background: #f2f2f2;
    header{
      position: fixed!important;
      border-bottom: 1px solid #e5e5e5;
      background: #fff;
    }
    .main{
      transition: .3s;
      transform: translate3d(0, 0, 0);
      position: relative;
      padding: .2rem;
      .classli{
        width: 30%;
        display: inline-block;
        margin: .25rem;
        img {
          display: block;
          max-width: 100%;
        }
      }
      &.men{
        transform: translate3d(62%, 0, 0);
      }
    }
    .search{
      margin-top: 2rem;
    }
  }
</style>
