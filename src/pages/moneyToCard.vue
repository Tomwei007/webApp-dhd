<template>
<div class="container">
  <header class="aui-bar aui-bar-nav aui-bar-light">
    <router-link class="aui-pull-left aui-btn" to="/index">
      <span class="aui-iconfont aui-icon-left"></span>
    </router-link>
    <div class="aui-title">资金提现</div>
  </header>
  <div class="content content-pd">
    <p>借款金额：</p>
    <p>
      <span>{{info.appro_amount/100}}</span>元
    </p>
    <div class="form">
      <div class="form-control clearfix bt">
        <label>借款人</label>
        <input type="text" name="" value="" v-model="info.name" readonly>
      </div>
      <div class="form-control clearfix bt">
        <label>借款期限</label>
        <input type="text" name="" value="" v-model="info.appro_init_term" readonly>
      </div>
      <div class="form-control clearfix bt">
        <label>到期应还</label>
        <input type="text" name="" value="" v-model="info.total_repayment/100" readonly>
      </div>
      <div class="form-control clearfix bt">
        <label>到账银行卡</label>
        <select v-model="info.bankId">
          <option :value="item.id" v-for="item in banklists">{{item.format_bank_name}}</option>
        </select>
      </div>
      <div class="form-control clearfix bt">
        <label>提现服务费</label>
        <input type="text" name="" value="" v-model="info.insurance_money/100" readonly>
      </div>
      <div class="form-control clearfix">
        <label>实际到账</label>
        <input type="text" name="" value="" v-model="info.actual_money/100" readonly>
      </div>
    </div>
    <div class="btn-group">
      <div class="aui-btn aui-btn-block aui-btn-primary" @click="save()">确认</div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data(){
    return{
      info:{
        bankId:''
      },

      banklists:[]
    }
  },
  mounted(){
    this.$http.get('/h5/jhk/order/signing').then(
      rep => {
        console.log(rep.data);
        if(rep.data.code==0){
          this.info=rep.data.detail;
          this.$http.get('/h5/jhk/user/bank/all',{}).then(
            rep => {
              this.banklists=rep.data.detail.bank_list;
              this.info.bankId=this.banklists[0].id;
            }
          )
        }
      }
    )

  },
  components:{},
  methods:{
    save(){
      this.$router.replace({
        name:'password',
        params:{
          days:this.info.appro_init_term,
          loan:this.info.appro_amount/100,
          bankId:this.info.bankId,
          has_pay_pwd:this.info.has_pay_pwd
        }
      });
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
.content p:nth-child(1){
  margin-top: 2rem;
}
.content p:nth-child(2){
  margin-top: 0.5rem;
}
.content p:nth-child(2) span{
  font-size:1.6rem;
}
</style>
