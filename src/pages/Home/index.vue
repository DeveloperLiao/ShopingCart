<template>
  <div class="main_body">
    <TypeBar></TypeBar>
    <div class="main_body_middle_top">
      <!-- ListContainer -->
      <ListContainer></ListContainer>
    </div>
    <div class="main_body_middle_bottom">
      <!-- Recommed -->
      <Recommed></Recommed>
    </div>
    <div class="main_body_bottom">
      <!-- Rank -->
      <Rank></Rank>
      <!-- Like -->
      <Like></Like>
      <!-- Floor -->
      <Floor
        v-for="(list,index) in FloorList"
        :key="list.id"
        :list='list'
      ></Floor>

      <!-- Band -->
      <Band></Band>
    </div>
  </div>
</template>

<script>
import ListContainer from './ListContainer/index.vue'
import Recommed from './Recommend/index.vue'
import Rank from './Rank/index.vue'
import Like from './Like/index.vue'
import Floor from './Floor/index.vue'
import Band from './Band/index.vue'
import { mapState } from 'vuex'
export default {
  name: 'MyHome',
  components: {
    ListContainer,
    Recommed,
    Rank,
    Like,
    Floor,
    Band
  },
  mounted() {
    this.$store.dispatch('getFloorList')
  },
  computed: {
    ...mapState({
      FloorList: state => state.home.FloorList
    })
  }
}
</script>

<style lang='less' scoped>
.dividing_line_2 {
  border: 0.1px solid #e4e1e1;
  margin: 10px 0;
}
.main_body_middle_top,
.main_body_bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.main_body_middle_bottom {
  min-width: 1177px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
