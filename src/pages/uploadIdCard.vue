<template>
<div class="container">
  <header class="aui-bar aui-bar-nav aui-bar-light">
    <router-link class="aui-pull-left aui-btn" to="/borrowMoney">
      <span class="aui-iconfont aui-icon-left"></span>
    </router-link>
    <div class="aui-title">身份认证</div>
  </header>
  <div class="page content-pd">
    <div class="sfz" v-show="show">
      <div class="sfz-box" @click="chooseImg('zm')">
        <img src="../assets/img/sfzzm.png" id="zmImg" />
        <p style="padding-top:0.5rem;text-align: center;">点击上传身份证正面</p>
      </div>
      <div class="sfz-box" @click="chooseImg('fm')">
        <img src="../assets/img/sfzfm.png" id="fmImg" />
        <p style="padding-top:0.5rem;text-align: center;">点击上传身份证反面</p>
      </div>
      <div class="btn-group">
        <div class="aui-btn aui-btn-block aui-btn-primary" @click="next()">下一步</div>
      </div>
    </div>
    <div class="sfz-form" v-show="!show">
      <form id="fileForm" enctype="multipart/form-data">
        <ul class="aui-list aui-form-list">
          <li class="aui-list-item">
            <div class="aui-list-item-inner">
              <div class="aui-list-item-label">
                姓名
              </div>
              <div class="aui-list-item-input">
                <input type="text" placeholder="请输入姓名" name="username" v-model="username">
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
                <input type="text" placeholder="请选择日期" name="expiredDate" readonly="readonly" @click="setTime()" v-model="date">
              </div>
            </div>
          </li>
        </ul>
        <input type="file" name='frontImage' id="sfzzm" style="display: none;" @change="getFiles($event,'zm')" />
        <input type="file" name='backImage' id="sfzfm" style="display: none;" @change="getFiles($event,'fm')" />
      </form>
      <p style="padding: 1rem 1rem 0;color: red;">
        请输入本人真实信息，否则将影响你的借款
      </p>
      <div class="btn-group">
        <div class="aui-btn aui-btn-block aui-btn-primary" @click="save()">提交验证</div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      date: '',
      address: '',
      idNo: '',
      username: ''
    }
  },
  methods: {
    chooseImg(type) {
      if (type) {
        if (type == 'zm') {
          document.getElementById("sfzzm").click();
        } else if (type == 'fm') {
          document.getElementById("sfzfm").click();
        }
      }
    },
    next() {
      let frontImage = document.getElementById("sfzzm").files;
      let backImage = document.getElementById("sfzfm").files;
      if (frontImage.length == 0) {
        this.$vux.toast.show({
          text: '请上传身份证正面图！',
          type: 'text'
        })
      } else if (backImage.length == 0) {
        this.$vux.toast.show({
          text: '请上传身份证反面图！',
          type: 'text'
        })
      } else {
        this.show = false;
      }
      //this.show=false;
    },
    getFiles(ev, type) {
      if (ev.target.files.length > 0) {
        const url = window.URL.createObjectURL(ev.target.files.item(0));
        if (type == 'zm') {
          document.getElementById("zmImg").setAttribute('src', url);
        } else {
          document.getElementById("fmImg").setAttribute('src', url);
        }
      } else {
        if (type == 'zm') {
          document.getElementById("zmImg").setAttribute('src', '');
        } else {
          document.getElementById("fmImg").setAttribute('src', '');
        }
      }
    },
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
        this.$http.post('/api/auth/userid', data).then(
          rep => {
            //console.log(rep);
            if (rep.data.code == 0) {
              this.$vux.toast.show({
                text: '保存成功！',
                type: 'success'
              })
              this.$router.push('/myInfo');
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
        format: 'YYYY.MM.DD',
        onConfirm(val) {
          _this.date = val;
        }
      })
    }
  }

}
</script>

<style scoped>
.sfz-box {
  margin: 1rem 4rem;
  padding: 1rem 1rem 0.5rem;
  background: #fff;
  border-radius: 0.5rem;
}
</style>
