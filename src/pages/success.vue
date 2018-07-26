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
        <input type="text" name="" value="" v-model="amount" readonly>
      </div>
      <div class="form-control clearfix bt">
        <label>申请时间</label>
        <input type="text" name="" value="" v-model="borrow_time" readonly>
      </div>
      <div class="form-control clearfix bt">
        <label>还款日期</label>
        <input type="text" name="" value="" v-model="return_time" readonly>
      </div>
      <div class="form-control clearfix bt">
        <label>到账银行卡</label>
        <input type="text" name="" value="" v-model="bank_name" readonly>
      </div>
      <div class="form-control clearfix">
        <label>到帐时间</label>
        <input type="text" name="" value="" v-model="arrived_latency" readonly>
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
      amount:'',
      arrived_latency:'',
      bank_name:'',
      borrow_time:'',
      return_time:''
    }
  },
  mounted(){
    //取下order_id
    let id=localStorage.order_id||JSON.parse(localStorage.userInfo).order_id;
    if(id){
      this.$http.get('/h5/order/loan_result?id='+id).then(
        rep => {
          //console.log(rep.data.detail);
          if(rep.data.code===0){
            this.amount=rep.data.detail.amount/100;
            this.arrived_latency=rep.data.detail.arrived_latency;
            this.bank_name=rep.data.detail.bank_name;
            this.borrow_time=rep.data.detail.borrow_time;
            this.return_time=rep.data.detail.return_time;
          }
        }
      )
    }

  },
  components:{},
  methods:{
    save(){
      this.$router.replace('/repayment');
    }
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
