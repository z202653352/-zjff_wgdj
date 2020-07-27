<!-- tsx -->
<template>
  <div class="containerBox">
    <!-- 搜索框 -->
    <van-search
      v-model="value"
      placeholder="车牌号/姓名查询..."
      class="search-margin"
      left-icon=""
      right-icon="search"
      @search="onSearch(val)"
    />
    <!-- <svg-icon
      icon-class="sousuo"
      class="svgIcon"
    /> -->
    <!-- 历史记录 -->
    <p class="p_text">历史查询:</p>
    <div class="content">
      <van-tag
        closeable
        size="medium"
        type="primary"
        @close="close('primary')"
      >
        222222222
      </van-tag>
      <van-tag
        closeable
        size="medium"
        type="primary"
        @close="close('primary')"
      >
        222222222
      </van-tag>
      <van-tag
        closeable
        size="medium"
        type="primary"
        @close="close('primary')"
      >
        222222222
      </van-tag>
      <van-tag
        closeable
        size="medium"
        type="primary"
        @close="close('primary')"
      >
        222222222
      </van-tag>
      <van-tag
        closeable
        size="medium"
        type="primary"
        @close="close('primary')"
      >
        222222222
      </van-tag>
      <van-tag
        closeable
        size="medium"
        type="primary"
        @close="close('primary')"
      >
        222222222
      </van-tag>
      <van-tag
        closeable
        size="medium"
        type="primary"
        @close="close('primary')"
      >
        222222222
      </van-tag>
    </div>

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
  methods: {
    // 搜索结果
    onSearch (val) {
      console.log(val)
      this.$router.push('/particulars')
    }
  },
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
.search-margin {
  display: inline-block;
  margin: 375px 13.99px 56px 99px;
  font-size: 30px;
}
// /deep/ 深入选择器

.van-search {
  width: 550px;
  height: 100px;
  background: linear-gradient(
    90deg,
    rgba(65, 185, 254, 1) 0%,
    rgba(7, 122, 220, 1) 100%
  );
  box-shadow: 0px 3px 7px 0px rgba(6, 40, 67, 0.63);
  border-radius: 50px;
  // position: relative;
  .van-search__content {
    background: none;
  }
  /deep/.van-field__control::placeholder {
    color: rgba(219, 219, 219, 1);
  }
}
/deep/.van-cell {
  margin-left: 37px;
  font-size: 30px;
  font-family: HYQiHeiX1;
  line-height: 77px;
}
.p_text {
  font-family: "HYQiHeiX1-DEW";
  font-size: 3.6vw;
  margin: 0 0 56px 125px;

  color: #000;
}
/deep/.van-icon-search {
  font-size: 45px;
  color: #fff;
  margin-right: 23px;
}
.content {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.van-tag {
  background: rgba(255, 255, 255, 1);

  border-radius: 10px;
  font-size: 24px;
  font-family: HYQiHeiX1;
  font-weight: normal;
  color: rgba(0, 0, 0, 1);
  margin: 0 20px 20px 0;
}
.van-icon-cross::before {
  color: rgba(65, 185, 254, 1);
}
</style>
