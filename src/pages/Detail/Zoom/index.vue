<template>
  <div
    class="container"
    ref="container"
  >
    <div
      class="orgin"
      ref="orgin"
      @mouseover="loupe"
      @mouseleave="hidden"
    >
      <img
        :src="imgUrl"
        alt=""
        ref="img"
      >
      <!-- 遮盖层 -->
      <div
        class="cover"
        ref="cover"
      >
      </div>
    </div>
    <!-- 被放大的图片 -->
    <div
      class="big"
      ref="big"
    >
    </div>
  </div>
</template>

<script>
import { onBeforeUpdate } from '@vue/runtime-core'
export default {
  name: 'Zoom',
  props: ['skuInfoList'],
  data() {
    return {
      // 图片的地址
      imgUrl: ''
    }
  },
  methods: {
    // 商品放大镜功能
    loupe() {
      // 要被放大的图片容器
      let big = this.$refs.big
      // 遮盖层
      let cover = this.$refs.cover
      //未被放大的图片
      let orgin = this.$refs.orgin
      //获取要被放大的图片
      let img = this.$refs.img
      //容器
      let container = this.$refs.container
      let containerWidth = container.offsetWidth
      let containerHeight = container.offsetHeight
      let coverWidth = cover.offsetWidth
      let coverHeight = cover.offsetHeight
      //鼠标一移入就将遮盖层和要被放大的图片显示出来
      big.style.display = 'block'
      cover.style.display = 'block'
      // 添加鼠标移动事件
      orgin.onmousemove = function (e) {
        e = e || window.event
        // pageY：鼠标在页面上的位置,从页面左上角开始,即是以页面为参考点,不随滑动条移动而变化；
        // clientY：鼠标在页面上可视区域的位置,从浏览器可视区域左上角开始,即是以浏览器滑动条此刻的滑动到的位置为参考点；
        // offsetY：IE特有,鼠标相比较于触发事件的元素的位置,以元素盒子模型的内容区域的左上角为参考点,如果有boder,可能出现负值。
        // 获取遮盖层需要偏移的距离
        let moveX = e.pageX - container.offsetLeft - coverWidth / 2
        let moveY = e.pageY - container.offsetTop - coverHeight / 2
        // 放大图片的偏移量
        let left = e.pageX - container.offsetLeft
        let top = e.pageY - container.offsetTop
        // 判断遮盖层的边界
        // 水平方向
        if (moveX < 0) {
          cover.style.left = 0 + 'px'
        } else if (moveX > containerWidth - coverWidth) {
          cover.style.left = containerWidth - coverWidth + 'px'
        } else {
          cover.style.left = moveX + 'px'
        }
        // 垂直方向
        if (moveY < 0) {
          cover.style.top = 0 + 'px'
        } else if (moveY > containerHeight - coverHeight) {
          cover.style.top = containerHeight - coverHeight + 'px'
        } else {
          cover.style.top = moveY + 'px'
        }
        // console.log(big.style)
        big.style.backgroundImage = 'url(' + img.src + ')'
        big.style.backgroundPositionX = -left + 'px'
        big.style.backgroundPositionY = -top + 'px'
      }
    },
    // 鼠标移出隐藏图片
    hidden() {
      this.$refs.big.style.display = 'none'
      this.$refs.cover.style.display = 'none'
    }
  },
  mounted() {
    // 接收来自ImgageList新的URL
    this.$bus.on('getImgUrl', val => {
      this.imgUrl = val
    })
  },
  watch: {
    // 监听skuInfoList的变化
    skuInfoList: {
      handler(newVal) {
        this.imgUrl = newVal.skuDefaultImg
      }
    }
  }
}
</script>

<style lang='less' scoped>
.container {
  position: relative;
  width: 400px;
  height: 400px;
  .orgin {
    width: 400px;
    height: 400px;
    border: 1px solid #cccccc;
    img {
      width: 398px;
      height: 398px;
    }
  }
  .big {
    position: absolute;
    top: 0;
    left: 400px;
    width: 400px;
    height: 400px;
    background: no-repeat;
    border: 1px solid #cccccc;
    border-left: 0;
    background-size: 200%;
    display: none;
  }
  .cover {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 200px;
    height: 200px;
    background-color: #77e8b0;
    opacity: 0.5;
    display: none;
  }
}
</style>