<template>
<div class="container">
  <header class="aui-bar aui-bar-nav aui-bar-light">
    <div class="aui-pull-left aui-btn" @click="goBack()">
      <span class="aui-iconfont aui-icon-left"></span>
    </div>
    <div class="aui-title">添加银行卡</div>
  </header>
  <ul class="aui-list aui-form-list">
    <li class="aui-list-item">
      <div class="aui-list-item-inner">
        <div class="aui-list-item-label">
          卡号
        </div>
        <div class="aui-list-item-input">
          <input type="number" placeholder="请输入银行卡号" v-model="formData.cardNo">
        </div>
      </div>
    </li>
    <li class="aui-list-item">
      <div class="aui-list-item-inner">
        <div class="aui-list-item-label">
          开户行
        </div>
        <div class="aui-list-item-input">
          <select name="bank" class="bank-list" v-model="formData.bankCode">
          	<option value="">--请选择--</option>
            <option :value="item.code" v-for="item in banklists">{{item.name}}</option>
          </select>
        </div>
      </div>
    </li>
    <li class="aui-list-item">
      <div class="aui-list-item-inner">
        <div class="aui-list-item-label">
          开户省
        </div>
        <div class="aui-list-item-input">
          <input type="text" placeholder="请输入开户省" v-model="formData.bankProvince">
        </div>
      </div>
    </li>
    <li class="aui-list-item">
      <div class="aui-list-item-inner">
        <div class="aui-list-item-label">
          开户市
        </div>
        <div class="aui-list-item-input">
          <input type="text" placeholder="请输入开户市" v-model="formData.bankCity">
        </div>
      </div>
    </li>
    <li class="aui-list-item">
      <div class="aui-list-item-inner">
        <div class="aui-list-item-label">
          支行名称
        </div>
        <div class="aui-list-item-input">
          <input type="text" placeholder="例如:**支行" v-model="formData.bankName">
        </div>
      </div>
    </li>
    <li class="aui-list-item">
      <div class="aui-list-item-inner">
        <div class="aui-list-item-label">
          预留手机号
        </div>
        <div class="aui-list-item-input">
          <input type="number" placeholder="请输入手机号" v-model="formData.mobile"/>
        </div>
      </div>
    </li>
    <!--
    <li class="aui-list-item">
      <div class="aui-list-item-inner">
        <div class="aui-list-item-label">
          验证码
        </div>
        <div class="aui-list-item-input" style="position: relative;">
          <input type="number" placeholder="请输入验证码" />
          <div class="aui-btn aui-btn-primary get-code" style="position: absolute;top:0.1rem;right: 0.5rem;" @click="getCode()" v-if="show">获取验证码</div>
          <div class="aui-btn count-down" style="position: absolute;top:0.1rem;
  		                		right: 0.5rem;background: #999;color: #fff;" v-else>重新获取<span>{{time}}</span>s</div>
        </div>
      </div>
    </li>
    -->
  </ul>
  <p style="padding: 1rem 1rem 0;color: red;">
    必须本人名下借记卡，暂不支持信用卡
  </p>
  <div class="btn-group">
    <div class="aui-btn aui-btn-block aui-btn-primary" @click="save()">确认提交</div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      formData:{
        bankCode:'',
        cardNo:'',
        mobile:'',
        bankName:'',
        bankProvince:'',
        bankCity:''
      },
      banklists:[],
      show:true,
      time:60
    }
  },
  mounted() {
    //获取银行列表数据
    this.$http.get('/h5/jhk/user/bank/alls',{}).then(
      rep => {
        console.log(rep.data);
        this.banklists=rep.data;
      }
    )
  },
  components: {},
  methods: {
    // getCode(){
    //   this.show=false;
    //   let _this=this;
    //   var inter = setInterval(function() {
    //     if (_this.time == 0) {
    //       clearInterval(inter);
    //       _this.time = 60;
    //       _this.show = true;
    //     } else {
    //       _this.time--;
    //     }
    //   }, 1000);
    // }
    save(){
      //console.log(this.formData);
      //let data=this.formData;
      this.$http.post('/h5/jhk/user/bank',this.formData).then(
        rep => {
          if(rep.data.code==0){
            this.$vux.toast.show({
              text:'保存成功！',
              type:'success'
            })
            this.$router.go(-1);
          }else{
            this.$vux.toast.show({
              text:rep.data.msg,
              type:'text'
            })
          }

        }
      )
    },
    goBack(){
      this.$router.go(-1);
    }
  }
}
</script>

<style>
</style>
