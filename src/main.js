// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import {AlertPlugin, ToastPlugin, LoadingPlugin, DatetimePlugin,ConfirmPlugin } from 'vux'

Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)
Vue.use(DatetimePlugin)
Vue.use(ConfirmPlugin)
Vue.use(VueResource);

Vue.http.options.emulateJSON = true;
Vue.http.options.headers = {
   //'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  'Content-Type': 'application/json;charset=UTF-8'
};
//请求拦截器
Vue.http.interceptors.push(function(request, next) {
  //request.method = 'post';
  this.$vux.loading.show({text: '加载中'})
  next(function(response) {
    this.$vux.loading.hide();
  })
})

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({el: '#app', router, template: '<App/>', components: {
    App
  }})

//表单非空验证
Vue.prototype.$formRequired = function() {
  var st = true;
  var text = '';
  var elmAll = document.querySelectorAll("input,select,textarea");
  //console.log(elmAll);
  for (var i = 0; i < elmAll.length; i++) {
    var val = elmAll[i].value;
    if (!val.trim()) {
      if (elmAll[i].hasAttribute('required')) {
        text = elmAll[i].getAttribute("placeholder");
        //this.$vux.toast.show({text: text, type: 'text'})
        st = false;
        this.$vux.toast.show({
          text:text,
          type:'text'
        })
        break;
      }

    }
  }
  //if(elm.getAtt)
  return st;
}
//手机号码验证
Vue.prototype.$isphoneNum=function(num){
  var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
  if(!myreg.test(num)){
    this.$vux.toast.show({
      text:'请输入有效的手机号码！',
      type:'text'
    })
  }
}
