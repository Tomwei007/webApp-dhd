<template>
<div class="container">
  <div class="content">
    <img src="../assets/img/login_img.png" class="bg-img" />
    <div class="login-form">
      <div class="form-control">
        <input type="number" placeholder="请输入手机号码" class="phoneNumber" v-model="form.mobile" />
      </div>
      <div class="form-control">
        <input type="number" placeholder="请输入6位短信验证码" class="code" v-model="form.sms_code" />
        <div class="get-code" @click="getCode()" v-if="show">获取验证码</div>
        <div class="count-down" v-else>重新获取<span>{{time}}</span>s</div>
      </div>
      <div class="aui-btn aui-btn-success btn-dv" @click="login()">登录</div>

    </div>
  </div>
</div>
</template>

<script>
import { cookie,base64 } from 'vux'
export default {
  data() {
    return {
      show: true,
      time: 60,
      form: {
        mobile: '',
        sms_code: ''
      }
    }
  },
  mounted() {
    //console.log(this.$route.params.id);
  },
  methods: {
    getCode() {
      //验证手机号码
      var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (!myreg.test(this.form.mobile)) {
        this.$vux.toast.show({
          text: '请输入正确的手机号码！',
          type: 'text'
        })
      } else {
        this.show = false;
        var _this = this;
        var inter = setInterval(function() {
          if (_this.time == 0) {
            clearInterval(inter);
            _this.time = 60;
            _this.show = true;
          } else {
            _this.time--;
          }
        }, 1000);
        //请求数据
        this.$http.post('/h5/sms', {
          mobile: this.form.mobile
        }).then(rep => {
          console.log(rep.data);
        })

      }
    },
    login() {
      //表单验证
      var phone = /^[1][3,4,5,7,8][0-9]{9}$/;
      var code = /^[0-9]{6}$/;
      if (!phone.test(this.form.mobile)) {
        this.$vux.toast.show({
          text: '请输入正确的手机号码！',
          type: 'text'
        })
      } else if (!code.test(this.form.sms_code)) {
        this.$vux.toast.show({
          text: '请输入正确的验证码！',
          type: 'text'
        })
      } else {
        this.$http.post('/h5/signin', this.form).then(
          rep => {
            console.log(rep.data);
            if(rep.data.code==0){
              //缓存设置一个星期
              let phone=base64.encode(this.form.mobile);
              cookie.set('p', phone, {
                expires: 7
              })
              this.$router.push("/index");
            }else{
              this.$vux.toast.show({
                text:rep.data.msg,
                type:'text'
              })
            }
        })
      }
    }
  }
}
</script>

<style scoped>
.login-form {
  display: block;
  margin-top: 2rem;
  text-align: center;
}

.login-form .form-control {
  position: relative;
  display: block;
  width: 80%;
  margin: 0 auto;
}

.login-form .form-control input {
  height: 2rem;
  border: 1px solid #ddd;
  border-radius: 2rem;
  padding: 0 2rem;
  font-size: 0.7rem;
  margin-bottom: 1rem;
}

</style>
