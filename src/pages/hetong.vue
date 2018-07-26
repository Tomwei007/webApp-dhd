<template>
<div class="container">
  <header class="aui-bar aui-bar-nav aui-bar-light">
    <router-link class="aui-pull-left aui-btn" to="/index">
      <span class="aui-iconfont aui-icon-left"></span>
    </router-link>
    <div class="aui-title">合同详情</div>
  </header>
  <div class="content content-pd">
    <div class="form">
      <div class="form-control clearfix bt">
        <label>贷款编号</label>
        <input type="text" v-model="id" readonly>
      </div>
      <div class="form-control clearfix bt">
        <label>贷款种类</label>
        <input type="text" v-model="type" readonly>
      </div>
      <div class="form-control clearfix bt">
        <label>贷款合同额度</label>
        <input type="text" v-model="loan_amount_fee" readonly>
      </div>
      <div class="form-control clearfix bt">
        <label>贷款合同期限</label>
        <input type="text" v-model="month" readonly>
      </div>
      <div class="form-control clearfix">
        <label>合同签订日期</label>
        <input type="text" v-model="borrow_time" readonly>
      </div>
    </div>
    <div class="form">
      <div class="form-control clearfix bt">
        <label>当前状态</label>
        <input type="text" v-model="status" readonly>
      </div>
      <div class="form-control clearfix bt">
        <label>应还本息</label>
        <input type="text" v-model="sum_amount" readonly>
      </div>
      <div class="form-control clearfix bt">
        <label>逾期滞纳金</label>
        <input type="text" v-model="total_latefees" readonly>
      </div>
      <div class="form-control clearfix bt">
        <label>逾期罚息</label>
        <input type="text" v-model="total_penalty" readonly>
      </div>
      <div class="form-control clearfix">
        <label>应还合计</label>
        <input type="text" v-model="total_repayment" readonly>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data(){
    return{
      id:'',
      type:'',
      loan_amount_fee:'',
      month:'',
      borrow_time:'',
      status:'',
      sum_amount:'',
      total_latefees:'',
      total_penalty:'',
      total_repayment:''
    }
  },
  mounted(){
    let id=localStorage.order_id||JSON.parse(localStorage.userInfo).order_id;
    this.$http.get('/h5/jhk/order/contract?id='+id).then(
      rep => {
        console.log(rep.data.detail);
        if(rep.data.code===0){
          this.id=rep.data.detail.base_info.id;
          this.type=rep.data.detail.base_info.type;
          this.month=rep.data.detail.base_info.month+'天';
          this.loan_amount_fee=rep.data.detail.base_info.loan_amount_fee/100+'元';
          this.borrow_time=rep.data.detail.base_info.borrow_time;
          this.status=rep.data.detail.bill_info.status;
          this.sum_amount=rep.data.detail.bill_info.sum_amount/100+'元';
          this.total_latefees=rep.data.detail.bill_info.total_latefees;
          this.total_penalty=rep.data.detail.bill_info.total_penalty;
          this.total_repayment=rep.data.detail.bill_info.total_repayment/100+'元';
        }
      }
    )
  },
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
