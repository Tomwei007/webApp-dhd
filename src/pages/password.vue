<template>
<div class="container">
  <header class="aui-bar aui-bar-nav aui-bar-light">
    <router-link class="aui-pull-left aui-btn" to="/moneyToCard">
        <span class="aui-iconfont aui-icon-left"></span>
    </router-link >
    <div class="aui-title">设置支付密码</div>
  </header>
  <div class="content content-pd">
    <p style="margin:2rem 0;text-align:center;font-size:0.8rem;">
      设置6位数字支付密码
    </p>
    <input type="password" maxlength="6" v-model="pwds"  ref="pwd" style="position: absolute;z-index: -1;left:-100%;opacity: 0"/>
    <ul class="pwd-box clearfix" @click="fouce()" ref="pwdBox">
      <li v-if="pwdsLength==0" :class="{active:isActive}"></li>
      <li v-else><i v-if="pwdsLength>0"></i></li>
      <li :class="pwdsLength==1 ? 'active':'' "><i v-if="pwdsLength>1"></i></li>
      <li :class="pwdsLength==2 ? 'active':'' "><i v-if="pwdsLength>2"></i></li>
      <li :class="pwdsLength==3 ? 'active':'' "><i v-if="pwdsLength>3"></i></li>
      <li :class="pwdsLength==4 ? 'active':'' "><i v-if="pwdsLength>4"></i></li>
      <li :class="pwdsLength==5 ? 'active':'' "><i v-if="pwdsLength>5"></i></li>
    </ul>
    <div class="btn-group" v-if="qshow">
      <div class="aui-btn aui-btn-block aui-btn-primary" @click="next()">下一步</div>
    </div>
    <div class="btn-group" v-if="tshow">
      <div class="aui-btn aui-btn-block aui-btn-primary" @click="queding()">确定</div>
    </div>
    <div class="btn-group" v-if="show">
      <div class="aui-btn aui-btn-block aui-btn-primary" @click="save()">确定</div>
    </div>
  </div>

</div>
</template>

<script>
export default {
  data(){
    return{
      pwds:'',
      pwdsLength:0,
      isActive:false,
      show:true,
      qshow:false,
      tshow:false,
      fpwd:''
    }
  },
  mounted(){
    //this.$refs.pwd.focus();
    // let _this=this;
    // setTimeout(function () {
    //   _this.$refs.pwd.focus();
    // }, 2000);
    let pw=JSON.parse(localStorage.status).has_pay_pwd;
    //console.log(pw);
    if(pw){
      this.show=true;
    }else{
      this.show=false;
      this.qshow=true;
    }
  },
  components:{},
  watch:{
    pwds(curVal){
      if(/[^\d]/g.test(curVal)){
        this.pwds = this.pwds.replace(/[^\d]/g,'');
      }else{
          this.pwdsLength = curVal.length;
      }
    }
  },
  methods:{
    fouce(){
      this.$refs.pwd.focus();
      this.isActive=true;
    },
    next(){
      if(this.pwdsLength<6){
        this.$vux.toast.show({
          text:'请输入6位密码',
          type:'text'
        })
      }else {
        this.fpwd=JSON.parse(JSON.stringify(this.pwds));
        this.pwds='';
        this.qshow=false;
        this.tshow=true;
      }
    },
    queding(){
      if(this.pwdsLength<6){
        this.$vux.toast.show({
          text:'请输入6位密码',
          type:'text'
        })
      }else {
        if(this.fpwd!=this.pwds){
          this.$vux.toast.show({
            text:'密码输入不一致！',
            type:'text'
          })
        }else{
          this.$http.post('/api/user/pay_password',{
            pwd:this.pwds
          }).then(
            rep => {
              console.log(rep.data);
              if(rep.data.code==0){
                this.save();
              }
            }
          )
        }
      }
    },
    save(){
      if(this.pwdsLength<6){
        this.$vux.toast.show({
          text:'请输入6位密码',
          type:'text'
        })
      }else{
        this.$http.post('/api/jhk/order/signing',{
          days:localStorage.days,
          loan:localStorage.loan,
          bankId:localStorage.bankId,
          pwd:this.pwds
        }).then(
          rep => {
            console.log(rep.data);
            if(rep.data.code==0){
              localStorage.clear();
              this.$router.push('/success');
            }else{
              this.$router.push('/error');
            }
          }
        )
      }
    }
  }
}
</script>

<style scoped>
.pwd-box{
  width:80%;
  margin:0 auto;
  border: 1px solid #ddd;
}
.pwd-box li{
  width: 16.66%;
  float: left;
  height:2.25rem;
  border-right: 1px solid #ddd;
  text-align: center;
  line-height: 2.25rem;
}
.pwd-box li:last-child{
  border: none;
}
.pwd-box li i{
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  background-color: #000;
  border-radius: 50%;
}
.pwd-box li.active{
  box-shadow: 0px 0px 3px #007AFF;
}
</style>
