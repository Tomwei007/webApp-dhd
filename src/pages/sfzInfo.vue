<template>
<div class="container">
  <div class="page">
    <header class="aui-bar aui-bar-nav aui-bar-light">
      <router-link class="aui-pull-left aui-btn" to="/uploadIdCard">
        <span class="aui-iconfont aui-icon-left"></span>
      </router-link>
      <div class="aui-title">身份证信息</div>
    </header>
    <form id="fileForm">
    <ul class="aui-list aui-form-list">
      <li class="aui-list-item">
        <div class="aui-list-item-inner">
          <div class="aui-list-item-label">
            姓名
          </div>
          <div class="aui-list-item-input">
            <input type="text" placeholder="请输入姓名" name="name" v-model="username">
          </div>
        </div>
      </li>
      <li class="aui-list-item">
        <div class="aui-list-item-inner">
          <div class="aui-list-item-label">
            身份证号
          </div>
          <div class="aui-list-item-input">
            <input type="number" placeholder="请输入身份证号" name="idNo" v-model="idNo">
          </div>
        </div>
      </li>
      <li class="aui-list-item">
        <div class="aui-list-item-inner">
          <div class="aui-list-item-label">
            户籍地址
          </div>
          <div class="aui-list-item-input">
            <textarea placeholder="请输入户籍地址" name="address" v-model="address"></textarea>
          </div>
        </div>
      </li>
      <li class="aui-list-item">
        <div class="aui-list-item-inner">
          <div class="aui-list-item-label">
            性别
          </div>
          <div class="aui-list-item-input">
            <label><input class="aui-radio" type="radio" name="gender" value="0" checked> 男</label>
            <label><input class="aui-radio" type="radio" name="gender" value="1">女</label>
          </div>
        </div>
      </li>
      <li class="aui-list-item">
        <div class="aui-list-item-inner">
          <div class="aui-list-item-label">
            证件有效期
          </div>
          <div class="aui-list-item-input">
            <input type="text" placeholder="请选择日期" name="expireDate" readonly="readonly" @click="setTime()" v-model="date">
          </div>
        </div>
      </li>
    </ul>
    </form>
    <p style="padding: 1rem 1rem 0;color: red;">
      请输入本人真实信息，否则将影响你的借款
    </p>
    <div class="btn-group">
      <div class="aui-btn aui-btn-block aui-btn-primary" @click="save()">提交验证</div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data(){
    return{
      date: '',
      address: '',
      idNo: '',
      username: ''
    }
  },
  mounted(){},
  components:{},
  methods:{
    save() {
      if (!this.username.trim()) {
        this.$vux.toast.show({
          text: '请输入姓名！',
          type: 'text'
        })
      } else if (!this.idNo.trim()) {
        this.$vux.toast.show({
          text: '请输入身份证号！',
          type: 'text'
        })
      } else if (!this.address.trim()) {
        this.$vux.toast.show({
          text: '请输入居住地址！',
          type: 'text'
        })
      } else if (!this.date.trim()) {
        this.$vux.toast.show({
          text: '请选择日期！',
          type: 'text'
        })
      } else {
        var data = new FormData(document.getElementById("fileForm"));
        this.$http.post('/api/auth/userid/update', data).then(
          rep => {
            //console.log(rep);
            if (rep.data.code == 0) {
              this.$vux.toast.show({
                text: '保存成功！',
                type: 'success'
              })
              this.$http.get('/api/user/auth').then(
                rep => {
                  if(rep.data.code==0){
                    if(rep.data.detail.profile==0){
                      this.$router.push('/shenhe');
                    }
                  }
                }
              )
              //
            }
          }
        )
      }

    },
    setTime() {
      let _this = this;
      this.$vux.datetime.show({
        value: '',
        cancelText: '取消',
        confirmText: '确定',
        format: 'YYYY-MM-DD',
        onConfirm(val) {
          _this.date = val;
        }
      })
    }
  }
}
</script>

<style>
</style>
