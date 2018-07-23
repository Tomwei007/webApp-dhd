<template>
<div class="container">
  <header class="aui-bar aui-bar-nav aui-bar-light">
    <a class="aui-pull-left aui-btn" @click="goBack()">
			        <span class="aui-iconfont aui-icon-left"></span>
			    </a>
    <div class="aui-title">借款认证</div>
  </header>
  <div class="page content-pd">
    <div class="box clearfix" @click="goProfile()" v-if="profile==0">
      <img src="../assets/img/ic_personal_n.png" alt="">
      <div class="txt">
        <p>个人信息</p>
        <p>未认证</p>
      </div>
    </div>
    <div class="box clearfix" @click="goProfile()" v-else>
      <img src="../assets/img/ic_personal_s.png" alt="">
      <div class="txt">
        <p>个人信息</p>
        <p>已认证</p>
      </div>
    </div>
    <div class="btn-group">
      <div class="aui-btn aui-btn-block aui-btn-primary" @click="save()">提交审核</div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data(){
    return{
      profile:0
    }
  },
  mounted(){
    this.$http.get('/api/user/auth').then(
      rep => {
        if (rep.data.code == 0) {
          //console.log(rep.data);
          let data = rep.data.detail;
          this.profile=data.profile;
        } else {
          this.$vux.toast.show({
            text: rep.data.msg,
            type: 'text'
          })
        }
      }
    )
    // this.$http.get('/api/jhk/user/info').then(
    //   rep => {
    //     console.log(rep.data);
    //   }
    // )
  },
  components:{},
  methods:{
    save(){
      this.$http.post('/api/user/audit').then(
        rep => {
          //console.log(rep.data);
          if(rep.data.code==0){
            this.$router.push('/auditWaiting');
          }else{
            this.$vux.toast.show({
              text:rep.data.msg,
              type:'text'
            })
          }
        }
      )
    },
    goProfile(){
      this.$router.push('/myInfo');
    },
    goBack(){
      this.$router.push('/borrowMoney');
    }
  }
}
</script>

<style scoped>
.box{
  padding:0  0.5rem;
  background: #fff;
}
.box img{
  width:4.5rem;
  height: 4.5rem;
  display: block;
  float: left;
  margin-right: 0.5rem;
}
.box .txt{
  padding-top: 1rem;
}
.box .txt p:nth-child(1){
  font-size: 0.8rem;
  color: #333;
}
.box .txt p:nth-child(2){
  font-size:0.6rem;
  color: #999;
}
</style>
