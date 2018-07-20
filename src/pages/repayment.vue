<template>
<div class="container">
  <header class="aui-bar aui-bar-nav aui-bar-light">
    <router-link class="aui-pull-left aui-btn" to="/borrowMoney">
      <span class="aui-iconfont aui-icon-left"></span>
    </router-link>
    <div class="aui-title">待还款</div>
  </header>
  <div class="content content-pd">
    <p style="margin-top:2rem;">距离还款还剩</p>
    <p style="margin:1rem auto;width:3rem;" class="clearfix">
      <span style="font-size:2rem;color:#66B4E8;display:block;float:left;">5</span>天
    </p>
    <div class="form">
      <div class="form-control clearfix bt">
        <label>待还金额</label>
        <input type="text" name="" value="">
      </div>
      <div class="form-control clearfix">
        <label>还款日期</label>
        <input type="text" name="" value="">
      </div>
    </div>
    <div class="form">
      <div class="form-control clearfix">
        <label>合同详情</label>
        <input type="text" name="" value="">
        <div class="aui-btn aui-btn-primary" style="position:absolute;top:0.3rem;right:0.5rem;">去查看</div>
      </div>
    </div>
    <div class="btn-group">
      <div class="aui-btn aui-btn-block aui-btn-primary" @click="save()">我要还款</div>
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
</style>
