<template>
<div class="container">
  <header class="aui-bar aui-bar-nav aui-bar-light">
    <router-link class="aui-pull-left aui-btn" to="/index">
      <span class="aui-iconfont aui-icon-left"></span>
    </router-link>
    <div class="aui-title">资金审核</div>
  </header>
  <div class="content content-pd">
    <img src="../assets/img/img_done.png" alt="">
    <p>放款成功！</p>
    <div class="form">
      <div class="form-control clearfix bt">
        <label>借款金额</label>
        <input type="text" name="" value="" v-model="money">
      </div>
      <div class="form-control clearfix bt">
        <label>申请时间</label>
        <input type="text" name="" value="" v-model="date">
      </div>
      <div class="form-control clearfix bt">
        <label>还款日期</label>
        <input type="text" name="" value="" v-model="date">
      </div>
      <div class="form-control clearfix bt">
        <label>到账银行卡</label>
        <input type="text" name="" value="" v-model="bankList">
      </div>
      <div class="form-control clearfix">
        <label>到帐时间</label>
        <input type="text" name="" value="" v-model="time">
      </div>
    </div>
    <div class="btn-group">
      <div class="aui-btn aui-btn-block aui-btn-primary" @click="save()">确定</div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  mounted(){},
  components:{},
  methods:{

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
