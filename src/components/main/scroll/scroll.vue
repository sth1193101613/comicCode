<template>
    <div>
        <swiper :options="swiperOption"  ref="mySwiper">
            <swiper-slide v-for="(item,index) in scrollList.area_content">
                <img :src="item.content_poster">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      scrollList: {
        type: Object
      }
    },
    data () {
      return {
        swiperOption: {
          loop: true
        }
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
    .swiper-container{
        height: 7.7rem;
        img{
            width: 100%;
            display: block;
        }
    }
</style>