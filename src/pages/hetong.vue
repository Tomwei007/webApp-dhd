<template>
<div class="container">
  <header class="aui-bar aui-bar-nav aui-bar-light">
    <router-link class="aui-pull-left aui-btn" to="/index">
      <span class="aui-iconfont aui-icon-left"></span>
    </router-link>
    <div class="aui-title">合同详情</div>
  </header>
  <div class="content content-pd">
    <div class="form">
      <div class="form-control clearfix bt">
        <label>贷款编号</label>
        <input type="text" name="" value="">
      </div>
      <div class="form-control clearfix bt">
        <label>贷款种类</label>
        <input type="text" name="" value="">
      </div>
      <div class="form-control clearfix bt">
        <label>贷款合同额度</label>
        <input type="text" name="" value="" >
      </div>
      <div class="form-control clearfix bt">
        <label>贷款合同期限</label>
        <input type="text" name="" value="">
      </div>
      <div class="form-control clearfix">
        <label>合同签订日期</label>
        <input type="text" name="" value="">
      </div>
    </div>
    <div class="form">
      <div class="form-control clearfix bt">
        <label>当前状态</label>
        <input type="text" name="" value="">
      </div>
      <div class="form-control clearfix bt">
        <label>应还本息</label>
        <input type="text" name="" value="">
      </div>
      <div class="form-control clearfix bt">
        <label>逾期滞纳金</label>
        <input type="text" name="" value="" >
      </div>
      <div class="form-control clearfix bt">
        <label>逾期罚息</label>
        <input type="text" name="" value="">
      </div>
      <div class="form-control clearfix">
        <label>应还合计</label>
        <input type="text" name="" value="">
      </div>
    </div>
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
