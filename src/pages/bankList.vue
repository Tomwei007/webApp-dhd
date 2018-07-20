<template>
<div class="container">
  <header class="aui-bar aui-bar-nav aui-bar-light">
    <router-link class="aui-pull-left aui-btn" to="/my">
      <span class="aui-iconfont aui-icon-left"></span>
    </router-link>
    <div class="aui-title">银行卡</div>
  </header>
  <ul class="aui-list aui-list-in">
    <li class="aui-list-item aui-list-item-middle go-href">
      <router-link class="aui-list-item-inner aui-list-item-arrow" to='/addCard'>
        <div class="aui-list-item-title">添加银行卡</div>
      </router-link>
    </li>
  </ul>
  <div class="card" v-for="item in banklists">
    <div class="card-bg" id="updateCard">
      <p class="font-px18 color-fff" id="openBankName">{{item.bank_name}}</p>
      <p class="font-px20 color-fff" id="cardNo">
        {{item.car_no}}
      </p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data(){
    return{
      banklists:[]
    }
  },
  mounted(){
    this.$http.get('/api/jhk/user/bank/all',{}).then(
      rep => {
        console.log(rep.data);
        this.banklists=rep.data.detail.bank_list;
      }
    )
  },
  methods:{

  }
}
</script>

<style>
.card {
  padding: 0.5rem;
}

.card-bg {
  width: 100%;
  height: 6rem;
  background-image: url(../assets/img/cardBg.jpg);
  background-size: 100% 100%;
}

.card-bg p {
  margin-left: 20%;
  padding-top: 30px;
  font-size: 0.8rem;
  color: #fff;
}

.card-bg p:nth-child(2) {
  padding-top: 10px;
}
</style>
