<template>
<div class="container">
  <header class="aui-bar aui-bar-nav aui-bar-light">
    <router-link class="aui-pull-left aui-btn" to="/index">
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
        <input type="text" name="" value="" v-model="money">
      </div>
      <div class="form-control clearfix">
        <label>借款期限</label>
        <input type="text" name="" value="" v-model="days">
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
      money:'',
      days:''
    }
  },
  mounted(){
    this.$http.get('/api/jhk/user/info').then(
      rep => {
        //console.log(rep.data);
        if(rep.data.code==0){
          //if(rep.data.)
          let data=rep.data.detail;
          console.log(data);
          this.money=data.left_quota/100;
          this.days=data.appro_init_term;
        }
      }
    )

  },
  components:{},
  methods:{
    save(){
      this.$http.get('/api/jhk/order/signing').then(
        rep => {
          console.log(rep.data);
          if(rep.data.code==8){
            this.$router.push('/addCard');
          }else if (rep.data.code==0) {
            this.$router.push('/moneyToCard')
          }
        }
      )
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
