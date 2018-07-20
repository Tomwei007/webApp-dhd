<template>
<div class="container">
  <header class="aui-bar aui-bar-nav aui-bar-light">
    <router-link class="aui-pull-left aui-btn" to="/my">
      <span class="aui-iconfont aui-icon-left"></span>
    </router-link>
    <div class="aui-title">个人设置</div>
  </header>
  <ul class="aui-list aui-list-in">
    <li class="aui-list-item aui-list-item-middle" @click="logOut()">
      <div class="aui-list-item-inner aui-list-item-arrow">
        <div class="aui-list-item-title">退出登录</div>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
import { cookie } from 'vux'
export default {
  data() {
    return {

    }
  },
  methods: {
    logOut() {
      //清除所有缓存
      cookie.remove('p');
      cookie.remove('hostid');
      cookie.remove('t');
      this.$router.push('/my');
    }
  }
}
</script>

<style>
</style>
