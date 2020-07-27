<!-- tsx -->
<template>
  <div class="containerBox">
    <div class="content">
      <van-button
        color="linear-gradient(to right, #41B9FE, #077ADC) "
        class="btn-border-radius"
        :to="{name:'examine'}"
      >
        <i class="btn-circle"></i>
        <span class="text-align">车辆信息查看</span></van-button>
      <van-button
        color="linear-gradient(to right, #41B9FE, #077ADC) "
        class="btn-border-radius btn-border-radius2"
      >
        <i class="btn-circle"></i>
        <span class="text-align">违章登记</span></van-button>
      <van-button
        color="linear-gradient(to right, #41B9FE, #077ADC) "
        class="btn-border-radius btn-border-radius3"
      >
        <i class="btn-circle"></i>
        <span class="text-align">我处理的违章</span></van-button>
      <van-button
        color="linear-gradient(to right, #41B9FE, #077ADC) "
        class="btn-border-radius btn-border-radius4"
      >
        <i class="btn-circle"></i>
        <span class="text-align">个人违章记录</span></van-button>
      <van-button
        color="linear-gradient(to right, #41B9FE, #077ADC) "
        class="btn-border-radius btn-border-radius4"
      >
        <i class="btn-circle"></i>
        <span class="text-align">校外车辆登记记录</span></van-button>

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
.content {
  display: inline-block;
  text-align: right;
  margin-right: 55px;
  margin-top: 200px;
}
.btn-border-radius {
  border-radius: 50px 0px 0px 50px;
  box-shadow: 0px 3px 7px 0px rgba(6, 40, 67, 0.66);
  width: 500px;
  height: 100px;
  font-size: 30px;

  .van-button__content {
    justify-content: initial;
    -webkit-justify-content: initial;

    .btn-circle {
      display: inline-flex;
      width: 30px;
      height: 30px;
      background: rgba(255, 255, 255, 1);
      border-radius: 50%;
      vertical-align: sub;
      margin-left: 41px;
    }
    /deep/.text-align {
      margin-left: 38px;
    }
  }
}
.btn-border-radius2 {
  margin-top: 13.333vw;
}
.btn-border-radius3 {
  margin-top: 11.067vw;
}
.btn-border-radius4 {
  margin-top: 9.333vw;
}
</style>
