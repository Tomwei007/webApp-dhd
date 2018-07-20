<template>
<div class="container">
  <header class="aui-bar aui-bar-nav aui-bar-light">
    <router-link class="aui-pull-left aui-btn" to="/borrowMoney">
      <span class="aui-iconfont aui-icon-left"></span>
    </router-link>
    <div class="aui-title">资金审核</div>
  </header>
  <div class="content content-pd">
    <img src="../assets/img/img_waitting.png" />
    <p>您的资料正在审核中，请耐心等待</p>
    <p>10分钟内告知结果</p>
    <div class="status">
      <ul>
        <li class="active"></li>
        <li class="active"></li>
        <li></li>
        <li></li>
      </ul>
      <div class="now"></div>
    </div>
    <div class="text">
      <ul>
        <li>申请</li>
        <li>审核</li>
        <li>签约</li>
        <li>放贷</li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  mounted() {},
  components: {},
  methods: {

  }
}
</script>

<style scoped>
.content img{
  display: block;
  width: 5rem;
  height: 5rem;
  margin: 2rem auto 1rem;
}
.content p{
  font-size: 0.8rem;
  color: #666;
  line-height: 1.2rem;
  text-align: center;
}
.content .status{
  position: relative;
  width: 70%;
  margin: 1rem auto;
  height: 0.5rem;
  background-color: #ddd;
}
.content .status ul li{
  position: absolute;
  top: -0.25rem;
  left: 0rem;
  margin-left: -0.25rem;
  width: 1rem;
  height: 1rem;
  background-color: #ddd;
  border-radius: 50%;
}
.content .status ul li:nth-child(2){
  left: 33.33%;
}
.content .status ul li:nth-child(3){
  left: 66.66%;
}
.content .status ul li:nth-child(4){
  left: 100%;
}
.content .status ul li.active{
  background-color: #66B4E8;
}
.content .status .now{
  position: absolute;
  top: 0;
  left: 0;
  width: 33.33%;
  background-color: #66B4E8;
  z-index: 1;
  height: 0.5rem;
}
.content .text{
  position: relative;
  width: 70%;
  margin: 0 auto;
}
.content .text ul li{
  position: absolute;
  display: inline-block;
  top: 0;
  left: 0;
  width: 2rem;
  margin-left:-0.6rem;
}
.content .text ul li:nth-child(2){
  left: 33.33%;
}
.content .text ul li:nth-child(3){
  left: 66.66%;
}
.content .text ul li:nth-child(4){
  left: 100%;
}

</style>
