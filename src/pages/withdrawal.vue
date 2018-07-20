<template>
<div class="container">
  <header class="aui-bar aui-bar-nav aui-bar-light">
    <router-link class="aui-pull-left aui-btn" to="/borrowMoney">
      <span class="aui-iconfont aui-icon-left"></span>
    </router-link>
    <div class="aui-title">资金审核</div>
  </header>
  <div class="content content-pd">
    <img src="../assets/img/img_success.png" />
    <p>恭喜，您的资料已通过审核</p>
    <p>请及时提现</p>
    <div class="form">
      <div class="form-control clearfix bt">
        <label>授信金额</label>
        <input type="text" name="" value="">
      </div>
      <div class="form-control clearfix">
        <label>借款期限</label>
        <input type="text" name="" value="">
      </div>
    </div>
    <div class="btn-group">
      <div class="aui-btn aui-btn-block aui-btn-primary" @click="save()">去提现</div>
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
