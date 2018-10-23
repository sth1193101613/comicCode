<template>
  <div class="his">
    <v-header :class="[{men:this.$store.state.flag === true}]"
              :state="false"
              :IconClass="icon"
              :headerBack="0"
              :backs="1"
              :iconColor="iconcolor">1212
    </v-header>
    <div class="main-container" :class="[{men:this.$store.state.flag === true}]">
      <ul>
        <li v-for="(list,index) in eqId" class="list_s" @click="dateil(list)">
          <div class="img">
            <img :src=list.img>
          </div>
          <div class="cont">
            <h2>{{list.auth}}</h2>
            <p>阅读至：{{list.title}}</p>
            <p>{{list.time}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import bs from '../betterscroll/bscroll.vue'
  import header from '../header/header.vue'
  import {mapState} from 'vuex'
  export default {
    data(){
      return{
        icon:"fa-bars",
        iconcolor:"#525252"
      }
    },
    computed: {
      ...mapState([
        'eqId'
      ])
    },
    methods:{
      dateil(list){
        this.$router.push({
          path: '/dateil',
          query: {
            comicid: list.id,
            epid: list.eqid
          }
        })
      }
    },
    components: {
      'v-header': header,
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .his{
    header{
      position: fixed!important;
      background: #fff;
      border-bottom: 1px solid #e5e5e5;
    }
    .main-container{
      height: 100%;
      margin-top: 2rem;
      -webkit-transition: 0.3s;
      transition: 0.3s;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
      position: absolute;
      padding: 0.2rem;
      left: 0;
      background: #fff;
      right: 0;
      &.men{
        transform: translate3d(62%, 0, 0);
      }
      .list_s{
        padding: 0.5rem;
        display: flex;
        border-bottom: 1px solid #e5e5e5;
        .img{
          width: 120px;
          img{
            max-width: 100%;
            display: block;
          }
        }
        .cont{
          flex: 1;
          margin-left: 0.5rem;
          *{
            margin: 0.3rem 0;
          }
          h2{
            font-size: .8rem;
          }
        }
      }
    }
  }


</style>
