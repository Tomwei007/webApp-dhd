<template>
<div class="container">
  <header class="aui-bar aui-bar-nav aui-bar-light">
    <router-link class="aui-pull-left aui-btn" to="/my">
      <span class="aui-iconfont aui-icon-left"></span>
    </router-link>
    <div class="aui-title">线下还款</div>
  </header>
  <p style="margin: 1rem 1rem 0;font-size: 0.8rem;color: #333;text-align: center;">
    如需线下还款，请转账至官方支付宝账号:
  </p>
  <a href="#" style="margin:0.5rem 1rem;font-size: 0.7rem;text-align: center;display:block;">
  				XXXXXXXXX.com
  			</a>
  <p style="margin: 0.5rem 1rem 0;font-size: 0.8rem;color: #333;text-align: center;">
    或打开支付宝，扫面下图二维码转账
  </p>
  <p style="width: 5rem;margin: 0 auto;margin-top: 0.5rem;">
    <img src="../assets/img/code_wechat.png" />
  </p>
  <p style="margin-top: 0.5rem;text-align: center;font-size: 0.7rem;color: #999;">
    转账成功后，请务必通知客服：<a href="tel:4000866833">4000866833</a>
  </p>
  <div class="btn-group">
    <div class="aui-btn aui-btn-block aui-btn-primary">完成</div>
  </div>
</div>
</template>

<script>
export default {}
</script>

<style>
</style>
