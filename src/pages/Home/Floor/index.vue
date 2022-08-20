<template>
  <div class="electric">
    <div class="title">
      <h3>{{list.name}}</h3>
      <div>
        <ul class="title_list">
          <li
            v-for="(item,index) in list.navList"
            :key="index"
          >&nbsp;&nbsp;<a :href="item.url">{{item.text}}</a>&nbsp;&nbsp;</li>

        </ul>
      </div>
    </div>

  </div>
  <div class="electric_img">
    <div class="electric_img_item1">
      <div>
        <ul class="electric_img_list">
          <li
            v-for="(item,index) in list.keywords"
            :key="index"
          ><a href="#">{{item}}</a></li>
        </ul>
      </div>
      <img
        :src="list.imgUrl"
        alt="!"
      >
    </div>
    <div class="electric_img_item2">
      <!-- 轮播图 -->
      <Carousel :list="list.carouselList"></Carousel>
    </div>

    <div class="electric_img_item3">
      <div class="item3_1"><img
          :src="list.recommedList[0]"
          alt="!"
        ></div>
      <div class="item3_2"><img
          :src="list.recommedList[1]"
          alt="!"
        ></div>
    </div>
    <div class="electric_img_item4"><img
        :src="list.bigImg"
        alt="!"
      ></div>
    <div class="electric_img_item5">
      <div class="item5_1"><img
          :src="list.recommedList[2]"
          alt="!"
        ></div>
      <div class="item5_2"><img
          :src="list.recommedList[3]"
          alt="!"
        ></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MyFloor',
  props: ['list']
}
</script>

<style lang='less' scoped>
.electric {
  width: 1177px;
  display: flex;
  margin-top: 15px;
  .title {
    width: 1177px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title_list {
      overflow: hidden;
      li {
        float: left;
        border-left: 1px solid #e1251b;
        a {
          font-size: 12px;
          color: #e1251b;
        }
      }
      li:nth-of-type(1) {
        border-left: 0px;
      }
    }
    h3 {
      font-size: 20px;
      color: #e1251b;
      padding: 10px 0;
    }
  }
}

.electric_img {
  width: 1177px;
  display: flex;
  border-top: 2px solid #e1251b;
  .electric_img_list li {
    width: 70px;
    height: 24px;
    float: left;
    border-bottom: 1px solid #e4e1e1;
    margin: 10px;
    text-align: center;
    a {
      font-size: 12px;
    }
  }
  .electric_img_item1 div ul {
    overflow: hidden;
    background-color: #fbfbfb;
  }
  .electric_img_item2 {
    width: 329px;
  }
  .electric_img_item3,
  .electric_img_item4 {
    border-right: 1px solid #e4e1e1;
  }
  .item3_1,
  .item3_2,
  .item5_1,
  .item5_2,
  .electric_img_item4 {
    border-bottom: 1px solid #e4e1e1;
  }
}
</style>