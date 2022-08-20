<template>
  <!-- 封装Carousle组件 -->
  <div class="swiper-container ">
    <div class="swiper-wrapper">
      <!-- 在webpack打包后，public下的静态资源是保持不变的，所以要将模拟数据的图片放在此目录下 -->
      <div
        class="swiper-slide"
        v-for='(item,index) in list'
        :key="item.id"
      >
        <img
          :src="item.imgUrl"
          alt="!"
        />
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name: 'Carousel',
  props: ['list'],
  watch: {
    list: {
      // 当在mounted初始化swiper出现初始化后bannerlist的数据还未返回成功，导致swiper使用失败的异步问题
      // 可以通过在created下渲染，或者在mounted使用延时器解决但都不是最好的解决方案
      // 最好是通过监听bannerlist的数据变化后，使用vue.$nextTick在下一次数据循环结束后，初始化swiper
      handler() {
        // 将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新。
        this.$nextTick(() => {
          var swiper = new Swiper('.swiper-container', {
            // 启用后，它将使用现代CSS Scroll Snap API。
            // 它不支持Swiper的很多功能，但可能会带来更好的性能。
            cssMode: false,
            // 自动切换
            autoplay: {
              // 用户操作swiper之后，是否禁止autoplay。
              disableOnInteraction: false
            },

            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            },
            pagination: {
              el: '.swiper-pagination',
              // 此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
              clickable: true
            },
            // 开启鼠标滚轮控制Swiper切换
            mousewheel: false,
            // 设置开启键盘来控制Swiper切换。
            keyboard: true,
            // 无限循环
            loop: true
          })
        })
      },
      // 不管数据变化与否，都要监听一次
      immediate: true
    }
  }
}
</script>

<style>
</style>