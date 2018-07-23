<template>
<div class="container">
  <div class="my-bg">
    <img src="../assets/img/personinfo_bg.jpg" />
  </div>
  <div class="my-info">
    <router-link class="no-login" to="/login" v-if="!islogin">
      <img src="../assets/img/unlogin_user_img.png" />
      <h3>未登录</h3>
    </router-link>
    <div class="is-login" v-else>
      <img src="../assets/img/login_user_img.png" />
      <h3>{{mobile}}</h3>
    </div>
  </div>
  <ul class="aui-list aui-list-in">
    <li class="aui-list-item" @click="getUrl('card')">
      <div class="aui-list-item-inner aui-list-item-arrow">
        <div class="aui-list-item-title">银行卡</div>
      </div>
    </li>
    <li class="aui-list-item" @click="link()">
      <div class="aui-list-item-inner aui-list-item-arrow" id="call">
        <div class="aui-list-item-title">联系客服</div>
      </div>
    </li>
    <li class="aui-list-item" @click="getUrl('back')">
      <div class="aui-list-item-inner aui-list-item-arrow">
        <div class="aui-list-item-title">线下还款</div>
      </div>
    </li>
    <li class="aui-list-item" @click="getUrl('myset')">
      <div class="aui-list-item-inner aui-list-item-arrow">
        <div class="aui-list-item-title">个人设置</div>
      </div>
    </li>
  </ul>
  <footer class="aui-bar aui-bar-tab" id="footer">
    <router-link class="aui-bar-tab-item" to="index">
      <i class="aui-iconfont aui-icon-home"></i>
      <div class="aui-bar-tab-label">首页</div>
    </router-link>
    <div class="aui-bar-tab-item aui-active">
      <i class="aui-iconfont aui-icon-my"></i>
      <div class="aui-bar-tab-label">我的</div>
    </div>
  </footer>
  <actionsheet v-model="show" show-cancel :menus="menus"></actionsheet>
</div>
</template>

<script>
import {
  Actionsheet,
  base64,
  cookie
} from 'vux'
export default {
  data() {
    return {
      show: false,
      islogin: false,
      menus: {
        menu1: '工作时间：早10点到晚上7点',
        menu2: '<a href="tel:4000866833">4000866833</a>'
      },
      mobile:''
    }
  },
  mounted() {
    //判断是否登录了
    let mobile = cookie.get('p');
    if (mobile) {
      this.mobile=base64.decode(mobile);
      this.islogin = true;
    } else {
      this.islogin = false;
    }
  },
  methods: {
    link() {
      //this.$vux.
      this.show = true;
    },
    getUrl(data) {
      //let mobile = localStorage.mobile;
      if (this.mobile) {
        switch (data) {
          case 'myset':
            this.$router.push('/myset');
            break;
          case 'user':
            this.$router.push('/myInfo');
            break;
          case 'card':
            this.$router.push('/bankList');
            break;
          case 'back':
            this.$router.push('/xxhk');
            break;
        }
      } else {
        this.$router.push('/login');
      }
    }
  },
  components: {
    Actionsheet
  }
}
</script>

<style>
.my-bg {
  width: 100%;
  height: 10rem;
}

.my-bg img {
  width: 100%;
  height: 100%;
}

.my-info {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 10rem;
  padding-top: 2rem;
}

.my-info img {
  width: 4rem;
  height: 4rem;
  display: block;
  margin: 0 auto;
}

.my-info h3 {
  color: #fff;
  text-align: center;
  margin-top: 0.5rem;
}
</style>
