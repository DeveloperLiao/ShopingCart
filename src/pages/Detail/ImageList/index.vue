<template>
  <div class="thumbnail">
    <div class="swiper-container">
      <div class="swiper-wrapper ">
        <div
          class="swiper-slide"
          v-for="(item,index) in skuImageList"
          :key="item.id"
          @click="show(index)"
        ><img
            :src="item.imgUrl"
            alt=""
          ></div>
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name: 'ImageList',
  props: ['skuImageList'],
  methods: {
    // 控制边框的颜色并将点击图片的地址发送给zoom组件
    show(index) {
      let slides = document.getElementsByClassName('swiper-slide')
      // 拿到点击图片的地址
      let imgUrl = slides[index].children[0].attributes.src.value
      // 将全部图片的边框设置为初始状态，在将点击的图片的边框设置为自定义的颜色
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.border = '2px solid #ccc'
      }
      slides[index].style.border = '2px solid #ff6600'
      // 发送给zoom
      this.$bus.emit('getImgUrl', imgUrl)
    }
  },
  watch: {
    //监听skuImageList,当数据发生改变，就将swiper初始化延迟到下一个dom的更新循环之后
    skuImageList: {
      handler() {
        this.$nextTick(() => {
          var swiper = new Swiper('.swiper-container', {
            slidesPerView: 5,
            spaceBetween: 10,
            // 允许拖动
            allowTouchMove: true,
            cssMode: true,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }
          })
        })
      },
      immediate: true
    }
  }
}
</script>

<style lang='less' scoped>
.thumbnail {
  width: 400px;
  display: flex;
  .swiper-container {
    width: 400px;
    .swiper-wrapper {
      align-items: center;
      .swiper-slide {
        border: 2px solid #ccc;

        img {
          display: inline-block;
          width: 60px;
          height: 60px;
          margin: 0 6px;
        }
      }

      .swiper-slide:hover {
        border: 2px solid #ff6600;
      }
      .swiper-slide:nth-of-type(1) {
        border: 2px solid #ff6600;
      }
    }
  }
  button {
    border: 1px solid #ccc;
    color: #ccc;
  }
}
</style>