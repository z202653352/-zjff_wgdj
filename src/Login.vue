<!-- tsx -->
<template>
  <div class="containerBox">
    <!-- 标题 -->
    <van-row>
      <van-col span="5"></van-col>
      <van-col
        span="14"
        class="font"
      >车辆管理系统</van-col>
      <van-col span="5"></van-col>
    </van-row>
    <!-- 输入框 -->

    <van-form
      @submit="onSubmit"
      class="flex"
    >
      <van-field
        class="name"
        name="userName"
        v-model="username"
        placeholder="姓    名:"
        :rules="[{ pattern: userName, message: '输入有误' }]"
      />
      <van-field
        class="name"
        name="passWord"
        v-model="password"
        placeholder="学工号:"
        :rules="[{ pattern: passWord, message: '输入有误' }]"
      />
      <div>
        <van-button
          round
          block
          type="info"
          native-type="submit"
          :to="{name:'andmin'}"
        >
          提交
        </van-button>
      </div>
    </van-form>

  </div>
</template>

<script >

export default {

  components: {

  },
  data () {
    // 这里存放数据
    return {

      username: '',
      password: '',
      // 正则判断
      userName: /^[\u2E80-\u9FFF]+$/,
      passWord: /\d{8}/

    }
  },
  // 过滤器
  filters: {},
  // 监听属性 类似于data概念
  computed: {

  },
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    onSubmit (values) {

    }

  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () { },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {

  },
  beforeCreate () { }, // 生命周期 - 创建之前
  beforeMount () { }, // 生命周期 - 挂载之前
  beforeUpdate () { }, // 生命周期 - 更新之前
  updated () { }, // 生命周期 - 更新之后
  beforeDestroy () { }, // 生命周期 - 销毁之前
  destroyed () { }, // 生命周期 - 销毁完成
  ctivated () { } // 如果页面有keep-alive缓存功能，这个函数会触发
}
</script>

<style lang='less'>
.flex {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
}
.containerBox {
  position: relative;
}
.name input::placeholder {
  color: #949494;
}
// @import url(); 引入公共css类
.font {
  font-size: 60px;
  font-family: "HYQiHeiX1-GEW";
  font-weight: 700;
  color: rgba(7, 122, 220, 1);
  line-height: 24px;
  margin-top: 213px;
  letter-spacing: 1.267vw;
}
.van-form {
  // margin-top: 27.6vw;
  .van-cell {
    height: 80px;
    border-radius: 38px 38px 40px 38px;
    margin: 0 auto;
    margin-bottom: 66px;
    box-shadow: 0px 3px 15px 0px rgba(80, 80, 80, 0.35);
    line-height: normal;
  }
  .van-field {
    font-size: 30px;

    padding-left: 59px;
    /deep/ .van-field__left-icon {
      margin: 0;
    }

    /deep/.van-field__control {
      font-size: 30px;
      font-family: "HYQiHeiX1-GEW";
    }
    .van-field__error-message {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translate(0, -50%);
      font-size: 4vw;
      padding-right: 10px;
    }
    .van-field__body {
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
    }
  }

  .van-button {
    margin-top: 94px;
    height: 80px;
    .van-button__text {
      font-size: 36px;
      font-family: HYQiHeiX1;
      color: rgba(255, 255, 255, 1);
      line-height: 24px;
    }
  }
}
</style>
