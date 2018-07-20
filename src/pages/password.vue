<template>
<div class="container">
  <header class="aui-bar aui-bar-nav aui-bar-light">
    <router-link class="aui-pull-left aui-btn" to="/my">
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
  </div>

</div>
</template>

<script>
export default {
  data(){
    return{
      pwds:'',
      pwdsLength:0,
      isActive:false
    }
  },
  mounted(){
    //this.$refs.pwd.focus();
    // let _this=this;
    // setTimeout(function () {
    //   _this.$refs.pwd.focus();
    // }, 2000);
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
