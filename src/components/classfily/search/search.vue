<template>
    <div class="search" :class="[{men:this.$store.state.flag === true}]">
        <div class="input-wrap">
            <input type="text" v-model="value" placeholder="请输入关键字">
        </div>
        <button value="搜索" @click="searchlist">搜索</button>
    </div>
</template>

<script type="text/ecmascript-6">
  import {searchCom} from '../../../api/search'
  import {mapMutations} from 'vuex'
  export default {
    data () {
      return {
        value: ''
      }
    },
    props: {
      values: {
        type: String
      }
    },
    created () {
      this.value = this.values
    },
    methods: {
      ...mapMutations([
        'comListFile'
      ]),
      searchlist () {
        if (this.value === '') {
          this.$router.push({
            path: '/classfily'
          })
        } else {
          searchCom(this.value).then(res => {
            if (res.msg === 'success') {
              this.$router.push({
                path: '/classfily/searchlist',
                query: {
                  value: this.value
                }
              })
              this.comListFile(res.search_result_list)
            }
          })
        }
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
    .search{
        display: flex;
        padding: .4rem .4rem 0 0.4rem;
        transition: .3s;
        &.men{
            transform: translate3d(62%, 0, 0);
        }
        .input-wrap{
            width: 81%;
            height: 1.5rem;
            padding: 0 .5em;
            background: #e5e5e5;
            box-sizing: border-box;
            border-radius: .2rem;
            font-size: .7rem;
            input{
                width: 100%;
                height: 1.5rem;
                background: 0;
                border: 0;
            }
        }
        button{
            width: 16%;
            height: 1.5rem;
            padding: 0;
            border-radius: .2em;
            font-size: .7rem;
            margin-right: .05rem;
            background: #e32f38;
            color: #fff;
            border: 0;
            margin-left: .3rem;
        }
    }
</style>