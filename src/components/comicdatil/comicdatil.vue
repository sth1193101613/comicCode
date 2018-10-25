<template>
  <div class="datil">
    <v-header :class="[{men:this.$store.state.flag === true}]" :state="true" :IconClass="icon" :headerBack="1" :backs="0"></v-header>
    <v-cover :comicInfo="comicInfo" :first="first"></v-cover>
    <v-list :epList="epList" :comicInfo="comicInfo" :post="post"></v-list>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getdatil} from '../../api/getdatil'
  import {getPost} from '../../api/getPost'
  import header from '../header/header.vue'
  import cover from './cover/cover.vue'
  import comlist from './comlist/comlist.vue'
  export default {
    data () {
      return {
        comicInfo: {},
        epList: [],
        post: {},
        flag: false,
        icon:"fa-home",
        icon2:"fa-share-square-o",
        first:""
      }
    },
    created () {
      this._getdatil()
      this._getPost()
    },
    methods: {
      _getdatil () {
        getdatil(this.$route.query.comitid).then(res => {
          if (res.msg = 'success') {
            this.comicInfo = res.comic_info
            this.epList = res.ep_list
            this.first=this.epList[0].ep_title
          }
        })
      },
      _getPost () {
        getPost(this.$route.query.comitid).then(res => {
          this.post = res
        })
      }
    },
    components: {
      'v-header': header,
      'v-cover': cover,
      'v-list': comlist
    }
  }
</script>

<style lang="less" rel="stylesheet/less">

</style>
