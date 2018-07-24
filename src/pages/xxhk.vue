<template>
<div class="container">
  <header class="aui-bar aui-bar-nav aui-bar-light">
    <div class="aui-pull-left aui-btn" @click="goBack()">
      <span class="aui-iconfont aui-icon-left"></span>
    </div>
    <div class="aui-title">线下还款</div>
  </header>
  <p style="margin: 1rem 1rem 0;font-size: 0.8rem;color: #333;text-align: center;">
    现在只支持线下还款:
  </p>
  <p style="margin: 0.5rem 1rem 0;font-size: 0.8rem;color: #333;text-align: center;">
    打开微信，扫面下图二维码转账
  </p>
  <p style="width: 5rem;margin: 0 auto;margin-top: 0.5rem;">
    <img src="../assets/img/code_wechat.png" @click="show()"/>
  </p>
  <p style="margin-top: 0.5rem;text-align: center;font-size: 0.7rem;color: #999;">
    转账成功后，请务必通知客服：<br/>
    <a href="tel:19933011355" style="color:blue;font-size:0.9rem;display:inline-block;padding-top:0.5rem;">19933011355</a>
  </p>
  <div class="btn-group">
    <div class="aui-btn aui-btn-block aui-btn-primary" @click="goBack()">完成</div>
  </div>
  <div v-transfer-dom>
    <previewer :list="list" ref="previewer" :options="options" @on-index-change="logIndexChange"></previewer>
  </div>
</div>
</template>

<script>
import { Previewer,TransferDom } from 'vux'
export default {
  data(){
    return{
      list:[{
        src:'static/img/code_wechat.png'
      }],
      options:{

      }
    }
  },
  directives: {
    TransferDom
  },
  methods:{
    goBack(){
      this.$router.go(-1);
    },
    show(){
      this.$refs.previewer.show(0)
    },
    logIndexChange(){

    }
  },
  components: {
    Previewer
  }

}
</script>

<style>
</style>
