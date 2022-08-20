<template>
  <div class="pager">
    <button
      class="pre"
      :disabled='pageNo==1'
      @click="$emit('currentPage',pageNo-1)"
    >《上一页</button>
    <div class='page-num'>
      <button
        v-if="startNumAndendNum.start>1"
        @click="$emit('currentPage',1)"
      >1</button>
      <button v-if="startNumAndendNum.start>2">...</button>
      <!-- Vue中不提倡v-for与v-if同时使用 -->
      <button
        v-for="(pagenum,index) in startNumAndendNum.end"
        :key="index"
        v-show="pagenum>=startNumAndendNum.start"
        @click="$emit('currentPage',pagenum)"
        :class="{active:pageNo==pagenum}"
      >{{pagenum}}</button>
      <button v-if="startNumAndendNum.end<pageTotal-1">...</button>
      <button
        v-if="startNumAndendNum.end<pageTotal"
        @click="$emit('currentPage',pageTotal)"
      >{{pageTotal}}</button>
    </div>
    <button
      class="next"
      :disabled='pageNo==pageTotal'
      @click="$emit('currentPage',pageNo+1)"
    >下一页》</button>
    <div class="page-count">
      <span>共<i>{{total}}</i>条</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Paging',
  //  每页显示多少条数据、当前页、数据的大小、连续页的长度
  props: ['pageSize', 'pageNo', 'total', 'continue'],
  data() {
    return {}
  },
  computed: {
    // 计算总页数
    pageTotal() {
      // 向上取整
      return Math.ceil(this.total / this.pageSize)
    },
    // 计算起始页和终止页
    startNumAndendNum() {
      let startNumAndendNum = {}
      //   起始页
      let start = ''
      //   终止页
      let end = ''
      //  总条数
      let pageTotal = this.pageTotal
      // 连续页的长度
      let continueLength = this.continue
      start = this.pageNo - Number.parseInt(this.continue / 2)
      end = this.pageNo + Number.parseInt(this.continue / 2)

      //但起始页为负数或者为0的时候，需重置start和end的值
      if (start < 1) {
        start = 1
        end = continueLength
      }
      // 但终止页超过页面总数的时候，也需要重置start和end的值
      if (end > pageTotal) {
        start = pageTotal - continueLength + 1
        end = pageTotal
      }
      startNumAndendNum.start = start
      startNumAndendNum.end = end
      return startNumAndendNum
    }
  }
}
</script>

<style lang="less" scoped>
.pager {
  display: flex;
  justify-content: center;
  align-content: center;
  margin-bottom: 10px;

  .page-num {
    button {
      background-color: #fbfbfb;
      border: 1px solid #eeeeee;
      text-align: center;
      width: 30px;
      height: 30px;
      line-height: 30px;
    }
  }
  .pre,
  .next {
    background-color: #fbfbfb;
    border: 1px solid #eeeeee;
    text-align: center;
    width: 100px;
  }
  .page-count {
    span {
      display: inline-block;
      height: 30px;
      width: 100px;
      text-align: center;
      line-height: 30px;
    }
  }
}
// 页码数为当前页的样式
.active {
  color: #f00;
}
</style>