<template>
  <div class="searchSelect">
    <table>
      <tr>
        <td>品牌</td>
        <td class="brand">
          <div>
            <ul class="brand-list">
              <li
                v-for="(brand,index) in trademarkList"
                :key="brand.tmId"
                @click="sentTrademark(brand.tmId,brand.tmName)"
              ><em><a>{{brand.tmName}}</a> </em></li>
            </ul>
          </div>
          <div class="more">
            <i><a href="">多选</a></i>
            <i><a href="">更多</a></i>
          </div>
        </td>
      </tr>
      <tr
        v-for="item in attrsList"
        :key="item.attrId"
      >
        <td>{{item.attrName}}</td>
        <td>
          <ul class="list-item">
            <li
              v-for="(name,index) in item.attrValueList"
              :key='index'
            ><a @click="sentAttr(item,name)">{{name}}</a></li>

          </ul>
        </td>
      </tr>
    </table>
  </div>

</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'SearchSelect',
  computed: {
    ...mapGetters({
      attrsList: 'attrsList',
      trademarkList: 'trademarkList'
    })
  },
  methods: {
    // 向search父组件发送trademark的值
    sentTrademark(id, name) {
      this.$emit('trademark', `${id}:${name}`)
    },
    // 向serch父组件发送attr的信息
    sentAttr(item, name) {
      // 属性Id:属性值:属性名
      this.$emit('sentAttr', `${item.attrId}:${name}:${item.attrName}`)
    }
  }
}
</script>

<style lang='less' scoped>
.searchSelect {
  width: 1132px;
  margin: 0 auto;
  table {
    width: 1132px;
    border: 1px solid #c2c2c2;
    tr {
      border-bottom: 1px solid #c0c0c0;
      td {
        font-size: 12px;
      }

      .brand {
        display: flex;
        justify-content: space-between;
        .more {
          width: 75px;
          margin: 10px;
          i {
            margin: 0 3px;
            a {
              font-size: 12px;
            }
          }

          i:nth-of-type(1) {
            padding: 0 5px;
            border: 1px solid #c0c0c0;
          }
        }
        .brand-list {
          width: 900px;
          overflow: hidden;
          margin: 10px;
          li {
            float: left;
            width: 100px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            color: #e1251b;
            border: 1px solid #e4e4e4;
          }
        }
      }

      .list-item {
        overflow: hidden;
        li {
          float: left;
          margin: 5px 10px;
          a {
            font-size: 12px;
          }
        }
      }
      td:nth-of-type(1) {
        background-color: #e0e0e0;
        width: 150px;
        text-align: center;
      }
    }
  }
}
</style>