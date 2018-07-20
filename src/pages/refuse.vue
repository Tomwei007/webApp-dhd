<template>
  <div class="container">
    <header class="aui-bar aui-bar-nav aui-bar-light">
      <router-link class="aui-pull-left aui-btn" to="/borrowMoney">
        <span class="aui-iconfont aui-icon-left"></span>
      </router-link>
      <div class="aui-title">资金审核</div>
    </header>
    <div class="content content-pd">
      <img src="../assets/img/img_refuse.png" />
      <p>很抱歉，您的资料未能通过审核</p>
      <p>保持良好的信用，请过段时间再试</p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  mounted(){},
  components:{},
  methods:{

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
