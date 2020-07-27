<!-- tsx -->
<template>
  <div class="containerBox">
    <!-- 搜索框 -->
    <van-search
      v-model="value"
      placeholder="车牌号/姓名查询..."
      left-icon=""
      right-icon="search"
      class="search-margin"
      @search="{}"
    />

  </div>
</template>

<script >
// import引入的组件需要注入到对象中才能使用

export default {
  components: {

  },
  data () {
    // 这里存放数据
    return {

    }
  },
  // 过滤器
  filters: {},
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () { },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () { },
  beforeCreate () { }, // 生命周期 - 创建之前
  beforeMount () { }, // 生命周期 - 挂载之前
  beforeUpdate () { }, // 生命周期 - 更新之前
  updated () { }, // 生命周期 - 更新之后
  beforeDestroy () { }, // 生命周期 - 销毁之前
  destroyed () { }, // 生命周期 - 销毁完成
  ctivated () { } // 如果页面有keep-alive缓存功能，这个函数会触发
}
</script>

<style lang='less' scoped>
// @import url(); 引入公共css类

.van-search {
  background: linear-gradient(to right, #41b9fe, #077adc);
  height: 10.667vw;
  width: 80vw;
  border-radius: 50px;

  position: absolute;
  top: 269px;
  left: 50%;
  transform: translate(-50%, 0);

  .van-search__content {
    background: none;
    // /deep/ .van-field__control {
    //   margin-left: 5px;
    // }
    /deep/.van-field__control::placeholder {
      color: rgba(219, 219, 219, 1);
      font-family: HYQiHeiX1;
    }
    /deep/.van-icon {
      font-size: 36px;
      margin-right: 10px;
    }
  }
  .van-cell {
    font-size: initial;
  }
  /deep/.van-icon-search::before {
    color: #fff;
  }
}
</style>
