<template>
  <div class="containerBox">
    <div class="panel">
      <div class="xinxi">
        <van-image round width="49px" height="49px" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <div class="xinxiA">
          <ul>
            <li>{{name}}</li>
            <li> <span>车辆品牌：{{brand}}</span> <span>车辆颜色：{{color}}</span></li>
            <li> <span>车牌号：{{number}}</span></li>
          </ul>
        </div>
      </div>
      <div class="content">
        <div class="one">
          <div class="img">
            <van-image class="imgA" width="44" height="44" src="https://img.yzcdn.cn/vant/cat.jpeg" />
            <van-image class="imgA" width="44" height="44" src="https://img.yzcdn.cn/vant/cat.jpeg" />
            <van-image class="imgA" width="44" height="44" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </div>
          <div class="content_a">
            <ul>
              <li> <span>处理时间：{{time}}</span> <span>处理人：{{people}}</span></li>
              <li> <span>处理意见：{{option}}</span></li>
            </ul>
          </div>
          <van-divider />
        </div>
        <div class="two">
          <div class="img">
            <van-image class="imgA" width="44" height="44" src="https://img.yzcdn.cn/vant/cat.jpeg" />
            <van-image class="imgA" width="44" height="44" src="https://img.yzcdn.cn/vant/cat.jpeg" />
            <van-image class="imgA" width="44" height="44" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </div>
          <div class="content_a">
            <ul>
              <li> <span>处理时间：{{time}}</span> <span>处理人：{{people}}</span></li>
              <li> <span>处理意见：{{option}}</span></li>
            </ul>
          </div>
          <van-divider />
        </div>
        <div class="three">
          <div class="img">
            <van-image class="imgA" width="44" height="44" src="https://img.yzcdn.cn/vant/cat.jpeg" />
            <van-image class="imgA" width="44" height="44" src="https://img.yzcdn.cn/vant/cat.jpeg" />
            <van-image class="imgA" width="44" height="44" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </div>
          <div class="content_a">
            <ul>
              <li> <span>处理时间：{{time}}</span> <span>处理人：{{people}}</span></li>
              <li> <span>处理意见：{{option}}</span></li>
            </ul>
          </div>
          <van-divider />
        </div>

      </div>
    <div class="end">
      <svg-icon icon-class="jiantou"></svg-icon>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '陈先生',
      brand: '大众',
      color: '白色',
      number: '浙A：88888',
      time: '2020.6.21',
      people: '李某',
      option: '规范停车，安全校园。'
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
  .panel {
    width: 600px;
    height: 123vw;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 2px 8px 0px rgba(80, 80, 80, 0.35);
    border-radius: 23px;
    position: absolute;
    top: -60px;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }

  .xinxi {
    width: 90%;
    margin: 15px auto;
  }

  .xinxiA {
    margin-left: 4.0625rem;
    margin-top: -3.125rem;
  }

  .xinxiA li {
    font-size: 15px;
    font-weight: normal;
    color: rgba(0, 0, 0, 1);
    line-height: 40px;
  }

  .xinxiA span {
    margin-right: 30px;
  }

  .content {
    margin: 30px auto;
  }

  .img {
    margin: 0 0.9375rem;
  }

  .imgA {
    margin: 0 25px;
  }

  .content_a {
    margin: 25px 6.33vw;
  }

  .content_a li {
    font-size: 11px;
    font-weight: normal;
    color: rgba(0, 0, 0, 1);
    line-height: 32px;
  }

  .content_a span {
    margin-right: 60px;
  }
</style>
